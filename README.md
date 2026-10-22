# 🎉 Utsav AI — Your Celebration, Perfectly Planned

### An AI-powered event planning assistant for smarter, personalized, and budget-conscious celebrations.

<p align="center">
  <strong>Plan smarter. Celebrate better. Stress less.</strong>
</p>

<p align="center">
  <a href="https://utsav-ai-your-celebration-perfectly-planned.ai.studio">🚀 Live Demo</a> •
  <a href="https://github.com/CriAnalystMahesh16/utsav-ai">💻 GitHub Repository</a>
</p>

---
<img width="1057" height="870" alt="image" src="https://github.com/user-attachments/assets/e7b340b6-b7e9-4c22-a73c-e4248933aa6f" />


## 📌 Overview

Planning a wedding, birthday party, or community celebration can be complicated. Organizers must manage budgets, coordinate vendors, plan timelines, accommodate cultural preferences, and make countless decisions.

**Utsav AI** is a Generative AI-powered celebration planning assistant that helps users turn event ideas into actionable plans.

By combining AI-generated recommendations with structured planning workflows and deterministic budget calculations, Utsav AI helps users organize their celebrations with greater clarity and flexibility.

From creating a personalized wedding plan to adjusting a birthday budget or organizing a community festival, Utsav AI brings essential planning activities together in one application.

**Project:** Utsav AI — Your Celebration, Perfectly Planned  
**Developer:** Mahesh  
**Category:** Generative AI / Event Planning  
**Live Application:** [Try Utsav AI](https://utsav-ai-your-celebration-perfectly-planned.ai.studio)  
**Source Code:** [View on GitHub](https://github.com/CriAnalystMahesh16/utsav-ai)

## 🎯 Problem Statement

Create a GenAI-powered planning assistant that helps users organize weddings, birthdays, and community events with budgets, timelines, vendor checklists, and personalized ideas.

## 💡 Our Solution

Utsav AI transforms a user's event requirements into a structured planning experience.

Users can provide details such as:

- Event type and location
- Event date
- Total budget
- Expected number of guests
- Regional and cultural preferences
- Venue style
- Personal priorities and non-negotiable requirements

The application uses these inputs to create personalized recommendations, organize budget allocations, outline event milestones, and provide vendor-planning guidance.

Its **What-If AI Replanner** also helps users explore alternative scenarios when budgets, guest counts, or priorities change.

## ✨ Key Features

### 1. 🤖 AI-Powered Event Planning

Generate personalized plans for different types of celebrations:

- 💍 Weddings
- 🎂 Birthday celebrations
- 🪔 Community festivals and melas

Depending on the event requirements, the generated plan can include:

- Celebration themes and concepts
- Budget allocation recommendations
- Event timelines and milestones
- Vendor checklists and negotiation questions
- Regional menu and cultural suggestions
- Guest activities and entertainment ideas
- Potential risks and mitigation recommendations

### 2. 💰 Intelligent Budget Management

Keep event finances organized with a structured budget dashboard.

Features include:

- Overall event budget tracking
- Category-wise budget allocations
- Planned versus actual spending
- Remaining budget calculations
- Estimated cost per guest
- Contingency budget tracking
- Budget health indicators

**Key design principle:** A deterministic budget engine manages financial allocation calculations instead of relying exclusively on AI-generated arithmetic.

This helps maintain consistent allocation totals and makes financial results easier to validate.

### 3. 🔄 What-If AI Replanner

Event plans frequently change. Utsav AI helps users explore possible changes before applying them.

Example scenarios:

- What if the budget decreases?
- What if the guest count increases?
- What if food quality becomes a higher priority?
- What if event requirements change?

The replanning experience supports:

- Revised budget recommendations
- Side-by-side allocation comparisons
- Budget variance analysis
- Priority-aware planning
- Reviewing changes before applying a revised plan

**Priority Shielding** is designed to help preserve user-defined non-negotiables while adjusting other planning decisions.

### 4. 📅 Event Timeline and Milestones

Organize preparation activities around important milestones.

- View event-planning tasks.
- Track milestone progress.
- Identify upcoming activities.
- Monitor completed and pending tasks.
- Keep preparations aligned with the event date.

### 5. 🤝 Vendor Planning and Negotiation

Prepare for vendor discussions with structured planning guidance.

- Identify relevant vendor categories.
- Prepare negotiation questions.
- Organize vendor-related requirements.
- Review estimated expenses.
- Evaluate vendor options against the event budget.

**Important:** Vendor prices shown as estimates are illustrative planning figures, not verified quotations or guaranteed market prices.

### 6. 🍽️ Regional Menus and Cultural Preferences

Create celebration ideas that reflect the user's event requirements and cultural preferences.

Recommendations may include:

- Regional food and menu concepts
- Traditional ceremonies
- Cultural activities
- Decoration ideas
- Venue styles
- Guest experience suggestions

### 7. 📊 Event Planning Dashboard

Access important planning information in one place.

Depending on the active event, the dashboard can display:

- Total allocated budget
- Actual spending
- Remaining balance
- Estimated cost per guest
- Contingency allocation
- Milestone completion
- Vendor booking progress
- Budget health status

### 8. 🧪 Ready-to-Use Sample Events

Explore sample scenarios to understand how Utsav AI adapts to different event requirements.

| Sample event | Location | Guests | Budget |
|---|---|---:|---:|
| Maharashtrian Vivah | Pune | 300 | ₹8,00,000 |
| First Birthday Safari | Bengaluru | 80 | ₹1,50,000 |
| Diwali Community Mela | Delhi | 500 | ₹3,50,000 |

These sample scenarios provide different combinations of celebration types, budgets, guest counts, and planning preferences.

### 9. 🖨️ Print-Friendly Planning

Use the application's print functionality and browser print options to prepare a readable copy of the event plan for offline reference or sharing.

## 🏗️ Application Architecture

Utsav AI combines a web-based user interface, a backend API, Generative AI, and a deterministic budget calculation engine.

```text
                       ┌──────────────────────┐
                       │         User         │
                       │ Event details & goals│
                       └──────────┬───────────┘
                                  │
                                  ▼
                       ┌──────────────────────┐
                       │ React + TypeScript   │
                       │    Frontend (Vite)   │
                       └──────────┬───────────┘
                                  │
                                  ▼
                       ┌──────────────────────┐
                       │   Express Backend    │
                       │ API & Input Handling │
                       └──────────┬───────────┘
                                  │
                    ┌─────────────┴─────────────┐
                    │                           │
                    ▼                           ▼
          ┌──────────────────┐       ┌──────────────────┐
          │ Google Gemini API│       │ Deterministic    │
          │ AI Recommendations│      │ Budget Engine    │
          └─────────┬────────┘       └─────────┬────────┘
                    │                          │
                    └────────────┬─────────────┘
                                 ▼
                       ┌──────────────────────┐
                       │ Structured Event Plan│
                       │ Budgets, tasks & ideas│
                       └──────────────────────┘
```

*This is a conceptual overview of the application architecture.*

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| React 19 | User interface |
| TypeScript | Type-safe development |
| Vite 8 | Frontend development and build tooling |
| Node.js 22 | Server-side JavaScript runtime |
| Express 4 | Backend API |
| Google Gemini API | Generative AI capabilities |
| `@google/genai` | Google GenAI SDK integration |
| CSS | Application styling |
| Automated tests | Validation of business logic and application behavior |

## 🚀 Getting Started

Follow the steps below to run the application locally.

### Prerequisites

Install the following tools:

- [Node.js](https://nodejs.org/) — Node.js 22 recommended
- npm
- [Git](https://git-scm.com/)
- A Google Gemini API key from [Google AI Studio](https://aistudio.google.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/CriAnalystMahesh16/utsav-ai.git
cd utsav-ai
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root, using the variable expected by the backend.

```env
GEMINI_API_KEY=your_actual_gemini_api_key
```

Replace the placeholder with your own API key.

**Security best practices:**

- Never commit your `.env` file.
- Never expose your Gemini API key in frontend code.
- Keep the API key on the server.
- Use your hosting platform's secret manager for production deployment.
- If additional environment variables are required, follow the project's server configuration.

### 4. Start the Development Server

The reported project configuration uses npm scripts. Check `package.json` for the exact command supported by your current checkout.

```bash
npm run dev
```

If the frontend and backend run as separate processes, follow the scripts and instructions defined in the repository.

### 5. Open the Application

Open the local URL displayed in your terminal.

A common Vite development URL is:

```text
http://localhost:5173
```

The actual URL depends on the project's configuration.

## 🔌 API Endpoints

The backend includes the following reported Express routes.

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/health` | Check backend health and AI configuration |
| POST | `/api/plan` | Generate an event plan |
| POST | `/api/replan` | Generate a revised event plan |
| GET | `/api/sample/:key` | Retrieve a predefined sample event |

### Health Check Example

If the backend runs on port `3000`, use:

```bash
curl http://localhost:3000/api/health
```

A successful response indicates that the backend is responding. Confirm actual AI functionality separately by generating a plan through the application.

*For integrations with other systems, consult the current route handlers to confirm request schemas and response formats.*

## 🧪 Testing and Quality Assurance

The project audit reported **78 automated tests passing with zero failures** at the time of the audit.

The reported test coverage included areas such as:

- Budget allocation calculations
- Input validation
- Impossible or constrained budgets
- Priority shielding
- Timeout handling
- Date and timezone boundaries
- State immutability
- Rate-limiter behavior
- Malformed AI responses
- Sample event scenarios

These results reflect the reported audit and should be reconfirmed against the current repository before submission.

### Run Automated Tests

```bash
npx tsx src/test/runTests.ts
```

### Type Checking

```bash
npm run lint
```

The reported configuration uses this command for TypeScript checking. Confirm the current script in `package.json`.

### Production Build

```bash
npm run build
```

A successful build confirms that the configured build process completes; it does not replace testing the deployed application.

### Recommended Manual Tests

Before submitting the project:

- Generate an event plan.
- Verify that budget allocations match the intended total.
- Change the budget using What-If AI Replanning.
- Increase or decrease the guest count.
- Check that important priorities are preserved when applicable.
- Test invalid inputs and past event dates.
- Switch between sample event presets.
- Test keyboard navigation and modal interactions.
- Verify the layout on mobile and desktop.
- Test print or PDF output.
- Confirm that AI requests work with the configured API key.

## 🔐 Security and Reliability

The project audit reported several safeguards designed to improve reliability:

- Server-side Gemini API integration
- Input validation and prompt-input sanitization
- Request body size limits
- API rate limiting
- Model-response validation
- Fallback handling for malformed model responses
- Request timeouts
- Generic production error responses

These features should be reviewed and tested in the current codebase and deployment environment before being treated as independently verified security guarantees.

### Production Security Checklist

- [ ] Store API keys using secure environment variables or a secret manager.
- [ ] Ensure no API keys are exposed in client-side bundles.
- [ ] Verify that secrets are excluded from Git.
- [ ] Review rate limits and request-size limits.
- [ ] Configure trusted proxy settings for the actual hosting environment.
- [ ] Test error handling and malformed inputs.
- [ ] Verify HTTPS and deployment access controls.
- [ ] Review privacy requirements for event information.

## 🎬 Hackathon Demo Walkthrough

A suggested demonstration flow:

1. Open the [Utsav AI live application](https://utsav-ai-your-celebration-perfectly-planned.ai.studio).
2. Select the Maharashtrian Vivah sample.
3. Generate a personalized event plan.
4. Explore the budget breakdown, timeline, and vendor guidance.
5. Use What-If AI Replanning to reduce the budget.
6. Compare the revised allocations with the original plan.
7. Apply the revised plan and review the updated dashboard.
8. Demonstrate another event type, such as a birthday or community mela.
9. Show the print-friendly planning output.

This walkthrough demonstrates the user journey from initial event requirements to budget-aware planning and scenario adjustments.

## 🌍 Future Enhancements

Potential future improvements include:

- **Persistent storage:** Save and retrieve event plans across sessions.
- **Multi-user collaboration:** Allow families and organizers to collaborate.
- **Vendor marketplace integration:** Compare real quotations from verified vendors.
- **Calendar integration:** Sync milestones with calendar applications.
- **Maps and venue discovery:** Explore venues and event locations.
- **Notifications:** Remind users about important planning tasks.
- **Multilingual support:** Add more Indian languages.
- **Advanced exports:** Provide downloadable documents and spreadsheets.
- **Expense analytics:** Compare estimated and actual spending over time.

These are proposed enhancements and are not claims that the current version already implements them.

## 🏆 What Makes Utsav AI Different?

### Personalized Planning
Uses Generative AI to tailor celebration ideas to event details, cultural preferences, and user priorities.

### Budget-Aware Recommendations
Combines AI planning with deterministic financial calculations to help keep allocations consistent.

### Flexible Scenario Planning
Enables users to explore alternative budgets and guest counts before applying revised plans.

### Practical Event Management
Brings budgets, milestones, vendor guidance, and personalized ideas into one planning experience.

## 👨‍💻 Project Information

| Field | Details |
|---|---|
| Project name | Utsav AI — Your Celebration, Perfectly Planned |
| Developer | Mahesh |
| Project category | Generative AI / Event Planning |
| Repository | [CriAnalystMahesh16/utsav-ai](https://github.com/CriAnalystMahesh16/utsav-ai) |
| Live application | [Launch Utsav AI](https://utsav-ai-your-celebration-perfectly-planned.ai.studio) |
| Primary language | TypeScript |
| Frontend | React + Vite |
| Backend | Node.js + Express |
| AI integration | Google Gemini API |

## 🤝 Contributing

Suggestions and contributions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Run the relevant tests and production build.
5. Submit a pull request with a clear description.

Please do not submit API keys, private event information, or unverified vendor data.

## 📄 License

A license has not been specified in this README. Before adding one, choose the terms under which you want others to use, modify, and distribute the project.

If you choose the MIT License, add a complete MIT license text in a `LICENSE` file and confirm that you have the rights to license all included code and assets.

## 🙌 Acknowledgements

- [Google AI Studio](https://aistudio.google.com/) for AI development workflows
- [Google Gemini](https://ai.google.dev/) for Generative AI capabilities
- [React](https://react.dev/) for the UI framework
- [TypeScript](https://www.typescriptlang.org/) for type safety
- [Vite](https://vite.dev/) for development and build tooling
- [Express](https://expressjs.com/) for backend API development

---

<p align="center">
  <strong>Utsav AI — Celebrate more. Stress less. Plan smarter. 🎉</strong>
</p>

<p align="center">
  Built with ❤️ by Mahesh
</p>
