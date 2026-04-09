import type { StageDefinition } from '../types';

export const stages: StageDefinition[] = [
  {
    id: 1,
    slug: 'agentic-revolution',
    title: 'The Agentic AI Revolution',
    subtitle: 'Multi-Agent Banking with LangChain',
    story: 'Acme Bank builds a multi-agent chatbot for credit cards, loans, investments, and savings',
    category: 'challenge',
    description:
      'Acme Bank develops a multi-agent banking chatbot using LangChain. Multiple specialized agents handle different banking domains \u2014 credit cards, loans, investments, and savings \u2014 coordinating through an orchestrator agent to deliver a unified customer experience.',
    bullets: [
      'Agents reason, decide, and take action toward customer goals',
      'Specialized sub-agents for each banking domain (credit cards, loans, investments, savings)',
      'LangChain orchestrates agent coordination and tool usage',
      'Works great on a developer\'s laptop \u2014 the "inner loop"',
    ],
    image: 'bank-demo-2.png',
  },
  {
    id: 2,
    slug: 'production-gap',
    title: 'The Production Gap',
    subtitle: 'From Developer Laptop to Enterprise',
    story: 'Moving from the inner loop to the outer loop reveals critical gaps in security, governance, and observability',
    category: 'challenge',
    description:
      'The agent works on a developer\'s laptop, but production demands an entirely different set of capabilities. How do you control what the agent can access? How do you know what it\'s doing? How do you audit it? How do you run hundreds of agents \u2014 not just one?',
    bullets: [
      'Security gap: No identity, no access control, shared credentials',
      'Governance gap: No lifecycle management, no policy enforcement',
      'Observability gap: No tracing, no audit trail, no reasoning visibility',
      'Scalability gap: Can\'t run many agents reliably on shared infrastructure',
    ],
    image: 'bank-demo-1.gif',
  },
  {
    id: 3,
    slug: 'kagenti-byoa',
    title: 'Bring Your Own Agent \u2014 Kagenti',
    subtitle: 'Framework-Agnostic Agent Lifecycle',
    story: 'Red Hat\'s approach: you bring the agent, we make it production-ready',
    category: 'platform',
    description:
      'Kagenti provides enterprise lifecycle management for any agent regardless of framework. Import, deploy, discover, and govern agents without changing agent code. LangChain, LlamaIndex, CrewAI, AutoGen \u2014 Kagenti manages them all the same way.',
    bullets: [
      'Import any agent: framework-agnostic lifecycle management',
      'Deploy agents with A2A protocol support and multi-framework compatibility',
      'Discover and register agents across the enterprise',
      'Inject identity and apply governance \u2014 without modifying agent code',
    ],
    image: 'bank-demo-4.png',
  },
  {
    id: 4,
    slug: 'agent-identity',
    title: 'Agent Deployment & Identity',
    subtitle: 'Zero-Trust with SPIFFE/SPIRE + AuthBridge',
    story: 'Every agent gets a cryptographic identity with short-lived credentials and least-privilege access',
    category: 'platform',
    description:
      'Agents deployed through Kagenti are assigned cryptographic identities via SPIFFE/SPIRE. The AuthBridge sidecar manages authentication and authorization transparently, ensuring every agent interaction is authenticated with short-lived credentials.',
    bullets: [
      'A2A protocol for standardized agent-to-agent communication',
      'LangGraph framework integration for agent orchestration',
      'AuthBridge sidecar injects SPIFFE identity automatically',
      'SPIRE provides short-lived X.509 certificates \u2014 no static secrets',
    ],
    image: 'bank-demo-5.png',
  },
  {
    id: 5,
    slug: 'agent-sandboxing',
    title: 'Agent Registration & Sandboxing',
    subtitle: 'Isolated, Governed, Least-Privilege',
    story: 'Agents are sandboxed with cryptographic identity, ensuring they can only access what they\'re authorized for',
    category: 'platform',
    description:
      'Once registered with Kagenti, agents run in isolated sandboxes with enforced least-privilege access. The platform ensures each agent can only reach the tools, APIs, and data it has been explicitly authorized to use \u2014 verified by cryptographic identity.',
    bullets: [
      'Agent secured with SPIFFE/SPIRE cryptographic identity',
      'Sandbox isolation prevents lateral movement between agents',
      'Kagenti enforces governance policies at the platform level',
      'AuthBridge validates every outbound request against identity-based policies',
    ],
    image: 'bank-demo-7.png',
  },
  {
    id: 6,
    slug: 'models-as-a-service',
    title: 'Models as a Service',
    subtitle: 'Centralized AI Model Serving with llm-d',
    story: 'The locally hosted model is now powered by Models as a Service \u2014 shared across developers and production apps',
    category: 'platform',
    description:
      'Red Hat OpenShift AI provides Models as a Service (MaaS), offering centrally served AI models to developers and applications across the enterprise. Instead of each team hosting their own model, a shared pool of hardware serves common models through an API Gateway \u2014 powered by llm-d for high-performance inference at scale.',
    bullets: [
      'IT serves common models centrally \u2014 platform engineering for AI',
      'Developers consume models via API Gateway to build AI applications',
      'llm-d powers high-performance, scalable inference serving',
      'Shared resources model: centralized hardware pool keeps costs down',
      'AI model management: versioning, regression testing, lifecycle governance',
    ],
    image: 'bank-demo-3.png',
  },
  {
    id: 7,
    slug: 'agent-observability',
    title: 'Agent Observability & Tracing',
    subtitle: 'MLflow + OpenTelemetry Deep Traces',
    story: 'You can\'t debug stochastic systems without seeing every reasoning step, tool call, and model response',
    category: 'operations',
    description:
      'MLflow with OpenTelemetry integration captures comprehensive agent traces \u2014 every prompt, reasoning step, tool call, model response, and token usage. SPIFFE identity attributes appear directly in traces, connecting behavior to identity for full auditability.',
    bullets: [
      'Every reasoning step and tool call captured in trace spans',
      'SPIFFE identity attributes embedded in OpenTelemetry traces',
      'End-to-end visibility from user request through agent chain',
      'Full audit trail: who the agent is, what it did, and why',
    ],
    image: 'bank-demo-10.png',
  },
  {
    id: 8,
    slug: 'agent-guardrails',
    title: 'Agent Guardrails & Safety',
    subtitle: 'TrustyAI FMS + NeMo Guardrails',
    story: 'Runtime content safety ensures agents never produce harmful, biased, or inappropriate responses',
    category: 'operations',
    description:
      'TrustyAI FMS and NeMo Guardrails enforce content safety policies at runtime. HAP (Hate, Abuse, Profanity) detection, jailbreak prevention, and topic guardrails ensure agents operate within safe boundaries \u2014 detecting and blocking unsuitable content before it reaches users.',
    bullets: [
      'NeMo Guardrails integration for runtime policy enforcement',
      'HAP detection blocks hate, abuse, and profanity in real time',
      'Jailbreak prevention stops prompt injection attacks',
      'Configurable safety levels: from baseline monitoring to full enforcement',
    ],
    image: 'bank-demo-11.png',
  },
];
