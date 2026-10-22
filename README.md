# Utsav AI — Your Celebration, Perfectly Planned

> **Google AI Hackathon MVP** — Intelligent, culturally grounded event architect with a deterministic budget engine and What-If AI Replanner for Indian weddings, birthdays, and community festivals.

---

## 🌟 Overview & Problem Statement

Planning celebrations in India (Weddings, Milestone Birthdays, Diwali Melas) involves intricate cultural traditions, high emotional stakes, and complex financial logistics. Standard planning apps either rely on generic western templates or hallucinate unreliable financial math when driven by raw LLMs.

**Utsav AI solves this with a dual-engine architecture:**
1. **Google Gemini 3.8 Flash:** Cultural celebration intelligence, narrative themes, authentic regional banquet courses, negotiation playbooks, and adaptive trade-off rationales.
2. **Deterministic Financial Math Engine:** 100% reliable, zero-hallucination arithmetic in TypeScript that guarantees all line item allocations, actual expenses, remaining balances, and per-guest costs sum exactly to the target rupee budget.

---

## 🏗️ Architecture & Google-First Tech Stack

```
┌─────────────────────────────────────────────────────────────┐
│                    Client Browser (SPA)                     │
│  React 19 + TypeScript + Tailwind CSS + Lucide Icons        │
│  - Interactive Dashboard, Itemized Budget Table             │
│  - Signature What-If AI Replanner Sliders                   │
│  - Milestone Checklist & Vendor Playbook                    │
│  - Pure CSS Print Engine (Vector Save-as-PDF)               │
└──────────────────────────────▲──────────────────────────────┘
                               │ HTTP / JSON
┌──────────────────────────────▼──────────────────────────────┐
│                    Express Full-Stack Server                │
│  - Sliding-Window In-Memory Rate Limiter (60 req/min)       │
│  - Trusted Proxy IP Resolution (Cloud Run / Load Balancer)  │
│  - Input Length & Conflicting Constraint Validator          │
│  - Sanitized Error Handling (Zero Stack Leaks in Prod)      │
└──────────────────────────────▲──────────────────────────────┘
                               │ Server-to-Server
┌──────────────────────────────▼──────────────────────────────┐
│                    Google Gemini 3.8 Flash                   │
│  @google/genai SDK with server-side User-Agent telemetry    │
│  - Strict JSON Schema Mode                                  │
│  - 20-Second Request Timeout Safety Boundary                │
│  - Defensive Parsing & Resilient Fallback Synthesis         │
└─────────────────────────────────────────────────────────────┘
```

- **Frontend:** React 19, TypeScript, Tailwind CSS v4, Motion.
- **Backend:** Express on Node.js 22 with Vite development middleware.
- **AI Model:** Google Gemini 3.8 Flash (`gemini-3.8-flash`) via `@google/genai` (server-side only; zero client API key exposure).
- **Deployment Ready:** Configured for Google Cloud Run and Firebase App Hosting (`npm run build` generates optimized static bundle; `npm start` serves full-stack runtime).

---

## 🚀 Key Features

### 1. Celebration Planning Form
- Tailored for Weddings (*Vivah*), Birthdays, Community Events, and Festivals.
- Captures City, Target Date with countdown computation, Budget in INR (`₹`), Guest Headcount, Regional Tradition, Venue Style, and **Shielded Non-Negotiable Priorities**.
- Input validation rejects negative budgets, zero guests, impossible per-head ratios (< ₹50/pax), and dates in the past.

### 2. Signature Feature: What-If AI Replanner
- Dynamic simulation sliders for Budget changes (+/- ₹50k to ₹5L) and Guest Counts (+/- 50 to 200 pax).
- Strategic focus selectors:
  - *Shield Feast & Catering (Authentic Flavors Protected)*
  - *Prioritize Candid Photography & Video Legacy*
  - *Aggressive Budget Cut (Streamline Decor, Maximize Cushion)*
  - *Luxury Experience (Live Counters & Entertainment)*
  - *Balanced Re-allocation*
- **Side-by-Side Old vs. New Comparison:** Live category diff table with variance (₹ and %) and trade-off rationales.
- **Non-Negotiable Priority Protection:** Prevents cuts to sacred rituals or authentic banquet courses while trimming modular decor.
- **"Apply to Active Event":** Single-click adoption into live dashboard state.

### 3. Financial & Operations Dashboard
- Metric cards: Total Budget, Actual Spent with progress bar, Remaining Balance, Per-Guest Cost, 5% Contingency Buffer, and Health Status (*Budget On Track*, *Approaching Limit*, *Deficit Alert*).
- Inline actual spending edits and 4-stage expense status cycling (*Planned → In Progress → Booked → Paid*).
- Milestone timeline with role assignments and phase filtering (T-90 to Day-Of).
- Vendor negotiation guide with estimated price badges (`[Estimated]`) and key questions to ask.
- Multi-course regional menu with dietary tags (*Veg*, *Vegan*, *Jain*).

### 4. Native Print & Save-as-PDF Engine
- Styled with dedicated `@media print` rules. Clicking **Print / PDF** produces a multi-page executive celebration blueprint with host and vendor signoff signature lines.

---

## 🔒 Security & Resilience Standards

- **Zero Client Secrets:** `GEMINI_API_KEY` is loaded exclusively in server environment.
- **Abuse Protection:** Sliding-window IP rate limiter (`MAX_REQUESTS_PER_WINDOW: 60/min`) with `trust proxy: 1` enabled to prevent spoofing via forged `X-Forwarded-For` headers. Expired entries purged every 5 minutes.
- **Payload Constraints:** Express JSON body parser strictly capped at `500kb` to eliminate memory exhaustion / DoS attacks.
- **Input Sanitization:** String inputs bounded by length (title ≤120, city ≤80, notes ≤1000) and stripped of control codes prior to prompt embedding.
- **Defensive Schema Validation:** AI responses validated before state mutation; incomplete or malformed JSON triggers deterministic fallback synthesis without client disruption.
- **Timeout Protection:** Server calls bounded by a 20-second timeout promise (`withTimeout`).

---

## ♿ Accessibility Compliance (WCAG AA)

- Semantic HTML landmarks (`<header>`, `<main>`, `<nav>`, `<footer>`).
- Universal `*:focus-visible` styling (`outline: 2px solid #d97706; outline-offset: 2px`).
- Category summary cards operate as accessible `<button type="button" aria-pressed={...}>`.
- Modal focus trap on `Tab` / `Shift+Tab`, initial focus autofocus, and focus restoration to trigger element upon closing.
- Modal closes on `Escape` key press.
- Icon-only controls include descriptive `aria-label` tags specifying contextual item names.
- Motion accessibility via `@media (prefers-reduced-motion: reduce)` disabling all transitions.

---

## 🧪 Verification & Testing

Run the full automated test suite:
```bash
npm test
```
Or directly via `tsx`:
```bash
npx tsx src/test/runTests.ts
```

### Verified Test Summary (78 Tests):
- **Group 1: Budget Allocation & Contingency Arithmetic (6 tests)**
- **Group 2: Negative, Zero, Extreme & Malformed Inputs (11 tests)**
- **Group 3: Impossible Budgets & Conflicting Constraints (3 tests)**
- **Group 4: Replanning While Preserving Non-Negotiable Priorities (7 tests)**
- **Group 5: Timeout Safety & Fallback Resilience (2 tests)**
- **Group 6: Event Dates, Countdowns & Timeline Boundaries (3 tests)**
- **Group 7: Expense Edits, Task Updates & State Changes (5 tests)**
- **Group 8: Sample Event Scenarios Regression Verification (17 tests)**
- **Group 9: Indian Currency (INR) Formatting Rigor (8 tests)**
- **Group 10: Event Date, Timezone & Leap Year Boundaries (3 tests)**
- **Group 11: Applying Revised Plan to State & Immutability (4 tests)**
- **Group 12: Rate Limiter IP Normalization & Security (3 tests)**
- **Group 13: Schema Validation on Malformed Model Output (6 tests)**

**Total: 78 PASSED, 0 FAILED.**

---

## 💻 Quick Start & Development

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Configure Environment:**
   ```bash
   cp .env.example .env
   # Add your GEMINI_API_KEY
   ```

3. **Start Development Server:**
   ```bash
   npm run dev
   # Runs tsx server.ts with Vite middleware on http://localhost:3000
   ```

4. **Verify Type-checking & Build:**
   ```bash
   npm run lint
   npm run build
   ```
