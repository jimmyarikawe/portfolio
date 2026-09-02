export interface Article {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
}

export const articles: Article[] = [
  {
    slug: "tech-driven-solutions-for-africas-waste-problem",
    title: "Tech-driven Solutions for Africa's Waste Problem",
    category: "Publication & Telemetry",
    date: "Research Publication",
    readTime: "7 min read",
    excerpt: "Exploring how operational data telemetry, circular supply chains, and IoT tracking can solve systemic waste collection and recycling challenges across emerging markets.",
    content: `
Managing waste and circular resource recovery across rapidly urbanizing African cities is one of the most critical environmental and operational challenges of this decade.

### The Fragmented Supply Chain
Informal collectors, local buyback depots, and multinational recycling conglomerates often operate in disjointed information silos. Without reliable real-time weight verification, price transparency, and immutable chain-of-custody documentation, material losses occur at every transit handoff.

### Telemetry as an Operational Lever
By deploying high-contrast, offline-first digital tools connected to weighbridges and sorting lines across 14+ countries, we demonstrated that technology can empower informal frontline workers while providing multinational buyers with verified ESG audit trails.

### Designing for Low-Bandwidth Realities
Software deployed in physical processing plants must prioritize extreme visual contrast, minimal input taps, fault-tolerant offline data synchronization, and multilingual interfaces tailored to local operational contexts.
    `
  },
  {
    slug: "generative-ai-and-human-computer-interaction",
    title: "Generative AI & Emerging Human-Computer Interaction Paradigms",
    category: "AI & HCI",
    date: "Mar 2026",
    readTime: "5 min read",
    excerpt: "Exploring how emerging AI systems can create new interaction paradigms and simplify complex workflows through conversational, multimodal, and adaptive interfaces.",
    content: `
We are transitioning from deterministic graphical user interfaces (GUIs) to probabilistic, multimodal interaction environments.

### The Shift Beyond Static Chatboxes
The chat interface was a natural entry point for Large Language Models, but it represents only a fraction of AI's potential in digital products. The real breakthrough happens when AI acts as an invisible orchestrator—generating dynamic UI components, predicting operator intent, and synthesizing complex information streams.

### Human-in-the-Loop & Trust
In mission-critical applications (such as fintech transactions and medical diagnostics), AI must never act as an impenetrable black box. Interface designers must construct clear confidence boundaries, explanation pathways, and effortless human override mechanisms.
    `
  },
  {
    slug: "ai-product-prototyping-from-research-to-code",
    title: "AI Product Prototyping: Rapidly Moving from Research to Production",
    category: "Creative Technology",
    date: "Feb 2026",
    readTime: "6 min read",
    excerpt: "How combining machine learning research with rapid TypeScript and React prototyping accelerates zero-to-one product validation.",
    content: `
Building AI products requires an integrated multidisciplinary approach where product design, prompt engineering, and frontend implementation happen simultaneously.

### Why Prototyping in Code Matters
Static Figma artboards cannot simulate non-deterministic token streaming, latency spikes, or model hallucination edge cases. Rapid high-fidelity prototypes built with Next.js, Python, and live LLM APIs allow teams to validate true user value in days rather than quarters.

### Bridging Research and Design
Holding an MSc in Artificial Intelligence allows me to evaluate model capability constraints directly—understanding what can be solved with prompt design, where RAG architectures are required, and when fine-tuning is necessary.
    `
  },
  {
    slug: "the-psychology-behind-great-interfaces",
    title: "The Psychology Behind Great Interfaces",
    category: "UX Strategy",
    date: "Jan 2026",
    readTime: "5 min read",
    excerpt: "Good interfaces are easy to use. Great interfaces feel almost invisible, guiding human attention and reducing cognitive friction.",
    content: `
The best digital tools don't force users to think about how they work. They guide attention, create intuitive pathways, and provide feedback at exactly the right moment.

### Cognitive Load & Progressive Disclosure
Every extra decision on a screen taxes working memory. By revealing advanced controls only when contextually relevant, interfaces stay approachable for novices while remaining deeply capable for power operators.
    `
  }
];
