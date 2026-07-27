# Enterprise AgentOps: Summit Booth Demo

An interactive, animated demo that walks through the journey of operationalizing AI agents on Red Hat AI, using Fed Aura Capital Bank's multi-agent banking chatbot as the use case.

## Stages

The demo progresses through 11 stages across three categories:

**The Challenge (Stages 1-2)**

1. **The Agentic AI Revolution** - Fed Aura Capital Bank's multi-agent LangChain chatbot for banking
2. **The Production Gap** - Why standard MLOps isn't enough for autonomous agents

**Platform (Stages 3-7)**

3. **Bring Your Own Agent** - Framework-agnostic agent operationalization on Red Hat AI
4. **Agent Sandboxing & Isolation** - OpenShell secure agent runtime with deny-by-default policies
5. **MCP Gateway & Tool Access** - Centralized tool connectivity for agents
6. **Models as a Service** - Centralized AI model serving with llm-d
7. **Continuous Evaluation** - EvalHub unified AI evaluation platform

**Operations (Stages 8-11)**

8. **Agent Observability & Tracing** - MLflow + OpenTelemetry deep execution traces
9. **Agent Guardrails & Safety** - TrustyAI FMS + NeMo Guardrails content safety
10. **Workload Identity** - Zero-trust flow with SPIFFE
11. **Automated Red Teaming** - Garak LLM vulnerability scanner with 120+ probes

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
