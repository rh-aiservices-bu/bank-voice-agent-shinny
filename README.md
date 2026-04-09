# Enterprise AgentOps: Summit Booth Demo

An interactive, animated demo that walks through the journey of operationalizing AI agents on Red Hat AI, using Acme Bank's multi-agent banking chatbot as the use case.

## Stages

The demo progresses through 7 stages across three categories:

**The Challenge (Stages 1-2)**

1. **The Agentic AI Revolution** - Acme Bank's multi-agent LangChain chatbot for banking
2. **The Production Gap** - Why standard MLOps isn't enough for autonomous agents

**Platform (Stages 3-5)**

3. **Bring Your Own Agent -- Kagenti** - Framework-agnostic agent lifecycle management
4. **Agent Deployment & Identity** - Zero-trust with SPIFFE/SPIRE + AuthBridge
5. **Agent Registration & Sandboxing** - Isolated, governed, least-privilege agents

**Operations (Stages 6-7)**

6. **Agent Observability & Tracing** - MLflow + OpenTelemetry deep execution traces
7. **Agent Guardrails & Safety** - TrustyAI FMS + NeMo Guardrails content safety

## Running

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Navigation

- **Arrow keys** or **spacebar** to move between stages
- **Click** the timeline nodes or Previous/Next buttons
- **Autoplay** toggles automatic cycling with configurable intervals

## Tech Stack

- React + TypeScript + Vite
- Framer Motion (animations)
- Tailwind CSS v4
