export interface SkillCategory {
  number: string;
  category: string;
  iconName: "ai" | "code" | "design" | "leadership";
  tagline: string;
  focus: string;
  impact: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    number: "01",
    category: "AI Interaction & Machine Learning",
    iconName: "ai",
    tagline: "Deep technical fluency in AI interaction design — bridging evals, non-deterministic latency, and neural models.",
    focus: "AI Interaction Architecture & Applied Intelligence",
    impact: "Agentic Workflows & Human-in-the-Loop Safeguards",
    skills: [
      "AI Interaction Design & Mental Models",
      "Model Evals & Quality Benchmarks",
      "Non-Deterministic Latency & Streaming UX",
      "Agentic Workflows & Multi-Turn State",
      "Human-in-the-Loop Control Systems",
      "LLMs, RAG & Neural Architectures",
      "Prompt Guardrails & Safety Mitigations",
      "Python & Deep Learning Foundations"
    ]
  },
  {
    number: "02",
    category: "Programming & Frontend",
    iconName: "code",
    tagline: "Translating complex design concepts into production-grade, performant software.",
    focus: "Full-Stack UI Architecture & Performance",
    impact: "Scalable Token Systems & 60fps Micro-Motion",
    skills: [
      "TypeScript & JavaScript",
      "React & Next.js App Router",
      "HTML5 & Modern CSS / Tailwind",
      "Mobile Product Engineering",
      "Design Systems & Token Architecture",
      "Responsive Web Engineering"
    ]
  },
  {
    number: "03",
    category: "Design & Prototyping",
    iconName: "design",
    tagline: "Crafting intuitive, high-fidelity interaction models and visual systems.",
    focus: "End-to-End Product Architecture & Motion",
    impact: "Multi-Platform Design Systems & Prototypes",
    skills: [
      "Figma & Component Libraries",
      "High-Fidelity Prototyping",
      "Interaction Design & Micro-motion",
      "Visual Design & Design Systems",
      "Design Tokens & Multi-Brand Themes",
      "User Flows & Information Architecture"
    ]
  },
  {
    number: "04",
    category: "Research & Product Leadership",
    iconName: "leadership",
    tagline: "Connecting user needs with technical feasibility and commercial strategy.",
    focus: "Strategic Discovery & Cross-Functional Alignment",
    impact: "Multi-Market Adoption & Agile Delivery",
    skills: [
      "User Research & Usability Testing",
      "Product Discovery & Experimentation",
      "Customer Journey Mapping",
      "Qualitative & Quantitative Evaluation",
      "Product Strategy & Agile Delivery",
      "Executive Storytelling & Roadmaps"
    ]
  }
];
