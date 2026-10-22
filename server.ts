import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { generateEventPlan, handleWhatIfReplanning } from './src/server/geminiService';
import { ALL_SAMPLE_EVENTS } from './src/data/sampleEvents';
import { validateEventInput } from './src/utils/budgetEngine';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const isProduction = process.env.NODE_ENV === 'production';

// Security: Enable trusted proxy resolution for Cloud Run / GCP load balancer
// Prevents spoofing of X-Forwarded-For headers
app.set('trust proxy', 1);

// Security: Constrain request body size to 500kb to prevent payload bloat / DoS
app.use(express.json({ limit: '500kb' }));

// In-Memory sliding-window rate limiter for API endpoints (prevents abuse/DoS)
interface RateLimitEntry {
  count: number;
  resetTime: number;
}
const rateLimitMap = new Map<string, RateLimitEntry>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 60; // 60 requests/min per IP

// Efficiency & Memory hygiene: Purge expired entries every 5 minutes
const cleanupTimer = setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap.entries()) {
    if (now > entry.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}, 5 * 60 * 1000);
if (cleanupTimer.unref) cleanupTimer.unref();

function getSecureClientIp(req: Request): string {
  // Use Express's trust-proxy parsed req.ip to prevent header spoofing
  const ip = req.ip || req.socket.remoteAddress || 'unknown-client';
  return ip.replace(/^::ffff:/, ''); // Normalize IPv4-mapped IPv6
}

function apiRateLimiter(req: Request, res: Response, next: () => void) {
  const clientIp = getSecureClientIp(req);
  const now = Date.now();
  const entry = rateLimitMap.get(clientIp);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(clientIp, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return next();
  }

  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    const retryAfterSeconds = Math.ceil((entry.resetTime - now) / 1000);
    res.setHeader('Retry-After', retryAfterSeconds);
    return res.status(429).json({
      success: false,
      error: 'Too many requests. Please slow down and try again shortly.',
      retryAfterSeconds,
    });
  }

  entry.count++;
  next();
}

app.use('/api', apiRateLimiter);

// Health check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    service: 'Utsav AI Celebration Engine',
    geminiEnabled: Boolean(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'MY_GEMINI_API_KEY'),
    timestamp: new Date().toISOString(),
  });
});

// Sample event retrieval endpoint
app.get('/api/sample/:key', (req: Request, res: Response) => {
  const key = req.params.key as string;
  const sample = ALL_SAMPLE_EVENTS[key] || ALL_SAMPLE_EVENTS['wedding'];
  res.json({ success: true, plan: sample });
});

// Generate comprehensive event plan
app.post('/api/plan', async (req: Request, res: Response) => {
  try {
    const input = req.body;
    
    // Validate input deterministically
    const validation = validateEventInput(input);
    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: validation.errors,
      });
    }

    const plan = await generateEventPlan(input);
    return res.json({ success: true, plan });
  } catch (error: any) {
    console.error('[API /api/plan error]', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to generate event plan. Please check inputs and retry.',
      message: isProduction ? 'An unexpected error occurred during synthesis.' : (error?.message || 'Internal error'),
    });
  }
});

// What-If Replanner simulation
app.post('/api/replan', async (req: Request, res: Response) => {
  try {
    const scenario = req.body;
    if (!scenario || !scenario.currentPlan || !scenario.newBudget || !scenario.newGuestCount) {
      return res.status(400).json({
        success: false,
        error: 'Invalid replanning parameters. Current plan, new budget, and new guest count are required.',
      });
    }

    if (scenario.newBudget < 10000) {
      return res.status(400).json({
        success: false,
        error: 'New budget must be at least ₹10,000.',
      });
    }

    if (scenario.newGuestCount < 1) {
      return res.status(400).json({
        success: false,
        error: 'New guest count must be at least 1.',
      });
    }

    const result = await handleWhatIfReplanning(scenario);
    return res.json({ success: true, result });
  } catch (error: any) {
    console.error('[API /api/replan error]', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to simulate replanning scenario.',
      message: isProduction ? 'An unexpected error occurred during simulation.' : (error?.message || 'Internal error'),
    });
  }
});

// Setup Vite middleware in dev or static serving in prod
async function startServer() {
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        port: PORT,
        host: '0.0.0.0',
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
    console.log('[Utsav AI] Vite dev middlewares attached');
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Utsav AI] Server actively listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('[Server startup failed]', err);
  process.exit(1);
});
