/**
 * Single source of truth for the CV. The /resume page renders this, the PDF is
 * printed from that page, and the About timeline reads the same array — so the
 * site and the downloadable CV can no longer disagree with each other.
 *
 * Titles and dates here are the CV's, verbatim. Where two roles overlap in
 * time, `note` says why, because an unexplained overlap reads as inflation.
 */
export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location?: string;
  domain?: string;
  summary: string;
  /** Outcome-led bullets for the CV. The timeline shows `summary` only. */
  highlights?: string[];
  /** Shown beside the dates to explain a concurrent or part-time period. */
  note?: string;
  current?: boolean;
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  location?: string;
  domain?: string;
  summary: string;
}

export interface PublicationItem {
  period: string;
  title: string;
  summary: string;
}

export const experiences: ExperienceItem[] = [
  {
    period: "Mar 2026 — Present",
    role: "Product Designer, Researcher & Manager",
    company: "Radical Company",
    location: "United Kingdom",
    domain: "radicalcompany.com",
    current: true,
    summary:
      "Design and research lead across client engagements, turning ambiguous problems into tested product concepts.",
    highlights: [
      "Lead design and research on client engagements, taking ambiguous business and technology problems to tested interaction models and high-fidelity prototypes.",
      "Build working prototypes against live LLM APIs to validate AI product concepts before engineering commits, surfacing latency and failure-state problems early.",
      "Established reusable patterns and research frameworks now used as the starting point on new engagements.",
      "Partner with engineers from exploration through implementation, owning handoff and final interaction quality.",
    ],
  },
  {
    period: "Jan 2025 — Jan 2026",
    role: "Product Lead & Product Designer",
    company: "Omits Technology",
    location: "United Kingdom",
    domain: "myomits.com",
    summary:
      "Owned end-to-end design for a cross-border payments platform across web, iOS and Android.",
    highlights: [
      "Owned product strategy and design for a cross-border payments platform across web, iOS and Android, from discovery to delivery.",
      "Cut repeat transfer time to under 60 seconds by redesigning beneficiary management and rate confirmation.",
      "Redesigned tiered KYC with Compliance and Risk into a progressive flow; 94% of users completed it unassisted on first attempt.",
      "Defined the product metrics and cross-platform design standards used by the team, and supported engineering through implementation.",
    ],
  },
  {
    period: "2024 — 2025",
    role: "Founding Product Designer & Product Manager",
    company: "Persona Design",
    location: "United Kingdom",
    domain: "persona.design",
    summary:
      "First designer across multiple client products — discovery, design, and the shared component library, from zero.",
    highlights: [
      "First designer at the studio, covering discovery, research, interaction and UI design across multiple client products.",
      "Built and maintained the shared component library that every subsequent product was assembled from.",
      "Translated client briefs into journeys, prototypes and production-ready design, testing flows iteratively.",
    ],
  },
  {
    period: "2023 — 2024",
    role: "Product Designer / Creative & Visual Designer",
    company: "Pentagram",
    location: "London",
    domain: "pentagram.com",
    summary:
      "Designed interfaces and visual systems for enterprise technology clients inside a multidisciplinary studio.",
    highlights: [
      "Designed interfaces and visual systems for enterprise and B2B technology clients within a multidisciplinary studio.",
      "Simplified complex user flows through research and usability exploration, producing implementation-ready design in Figma.",
      "Worked with writers, brand designers and strategists to build coherent visual narratives around technical products.",
    ],
  },
  {
    period: "2022 — 2023",
    role: "Senior Product Designer & Product Engineer",
    company: "Engage Messaging",
    domain: "engage.so",
    note: "Concurrent with MSc study",
    summary:
      "Redesigned web and mobile products, lifting user satisfaction by 50%.",
    highlights: [
      "Redesigned the web and mobile products, contributing to a 50% improvement in measured user satisfaction.",
      "Wrote production front-end alongside design, prototyping in code to validate interaction concepts.",
      "Grew the design system from ad-hoc components into reusable, documented patterns.",
    ],
  },
  {
    period: "2020 — 2022",
    role: "Lead Product Designer / Data & Technology Analyst",
    company: "Recyclan",
    domain: "recyclan.com",
    summary:
      "Led design for an operational data platform deployed across 14+ countries, improving adoption by 15%.",
    highlights: [
      "Led UX and product design for an operational data platform deployed across 14+ countries.",
      "Designed dashboards and workflows serving three audiences: plant operators, compliance officers and business users.",
      "Raised product adoption 15% through research and usability testing that identified where operators abandoned the tool.",
    ],
  },
  {
    period: "2019 — 2021",
    role: "Product Designer",
    company: "Analytics Intelligence",
    domain: "analyticsintelligence.com",
    note: "Overlaps Recyclan — part-time",
    summary:
      "Designed B2B SaaS analytics and reporting tools, shaped by ongoing usability research.",
    highlights: [
      "Designed B2B SaaS analytics, reporting and operational tooling.",
      "Ran usability research and iterated on behavioural data.",
      "Built dashboard and data-visualisation patterns for dense information environments.",
    ],
  },
  {
    period: "2018 — 2019",
    role: "Junior UI/UX Designer",
    company: "Filmhouse Group",
    domain: "filmhouseng.com",
    summary:
      "Designed an online booking flow that drove a 400% increase in bookings.",
    highlights: [
      "Redesigned the online cinema booking experience, contributing to a 400% increase in online bookings.",
      "Built responsive web and mobile interfaces with a focus on accessibility and conversion.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    period: "2022 — 2023",
    degree: "MSc Artificial Intelligence & Applications",
    institution: "University of Strathclyde",
    location: "Glasgow, Scotland",
    domain: "strath.ac.uk",
    summary:
      "Distinction. Deep learning and neural networks, machine learning for data analytics, AI for finance and autonomous systems. Research project: detecting plant disease with deep learning.",
  },
  {
    period: "2013 — 2018",
    degree: "BSc Electrical & Electronics Engineering",
    institution: "University of Lagos",
    location: "Nigeria",
    domain: "unilag.edu.ng",
    summary: "Honours.",
  },
];

export const publications: PublicationItem[] = [
  {
    period: "Publication",
    title: "Tech-driven Solutions for Africa's Waste Problem",
    summary:
      "Operational telemetry and circular supply chains for waste collection and recycling in emerging markets.",
  },
];

/** Grouped for the CV's skills block. Kept short — a list of 40 tools reads as none. */
export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Design",
    items: [
      "Product design",
      "Interaction design",
      "Design systems",
      "High-fidelity prototyping",
      "Figma",
    ],
  },
  {
    label: "Research",
    items: [
      "Product discovery",
      "Usability testing",
      "Journey mapping",
      "Experimentation",
    ],
  },
  {
    label: "Build",
    items: ["TypeScript", "React", "Next.js", "Tailwind", "Python"],
  },
  {
    label: "AI",
    items: [
      "LLM-based systems",
      "RAG",
      "Conversational UX",
      "Human-in-the-loop workflows",
      "Model evaluation",
    ],
  },
];
