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
    category: "AI & Machine Learning",
    iconName: "ai",
    tagline: "Bridging neural architectures, LLMs, and human-computer interaction.",
    focus: "Applied AI Systems & Interaction Models",
    impact: "Agentic Workflows & Safety Guardrails",
    skills: [
      "Python",
      "Machine Learning & Deep Learning",
      "LLMs & RAG Architectures",
      "Generative AI & Conversational UI",
      "AI Interaction Design",
      "Prompt Design & Guardrails",
      "Human-in-the-Loop Systems"
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
