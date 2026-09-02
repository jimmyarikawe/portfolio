export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  domain?: string;
  summary: string;
  current?: boolean;
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
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
    period: "2026 — Now",
    role: "Product Designer, Researcher & Manager",
    company: "Radical Company",
    domain: "radicalcompany.com",
    current: true,
    summary: "Leading design and research across client engagements, from early concept to high-fidelity prototype.",
  },
  {
    period: "2025 — 2026",
    role: "Product Lead & Product Designer",
    company: "Omits Technology",
    domain: "myomits.com",
    summary: "Led end-to-end design for a cross-border payments platform, cutting repeat-transfer time to under 60 seconds.",
  },
  {
    period: "2024 — 2025",
    role: "Founding Product Designer & PM",
    company: "Persona Design",
    domain: "persona.design",
    summary: "Founding designer across multiple products — discovery, design, and the shared component library, from zero.",
  },
  {
    period: "2023 — 2024",
    role: "Product Designer",
    company: "Pentagram",
    domain: "pentagram.com",
    summary: "Designed interfaces and visual systems for enterprise technology clients within a multidisciplinary studio.",
  },
  {
    period: "2022 — 2023",
    role: "Senior Product Designer & Engineer",
    company: "Engage Messaging",
    domain: "engage.so",
    summary: "Redesigned web and mobile products, lifting user satisfaction by 50%.",
  },
  {
    period: "2020 — 2022",
    role: "Lead Product Designer",
    company: "Recyclan",
    domain: "recyclan.com",
    summary: "Led design for an operational data platform used across 14+ countries, improving adoption by 15%.",
  },
  {
    period: "2019 — 2021",
    role: "Product Designer",
    company: "Analytics Intelligence",
    domain: "analyticsintelligence.com",
    summary: "Designed B2B SaaS analytics and reporting tools, shaped by ongoing usability research.",
  },
  {
    period: "2018 — 2019",
    role: "Junior UI/UX Designer",
    company: "Filmhouse Group",
    domain: "filmhouseng.com",
    summary: "Designed an online booking flow that drove a 400% increase in bookings.",
  },
];

export const education: EducationItem[] = [
  {
    period: "2022 — 2023",
    degree: "MSc Artificial Intelligence & Applications",
    institution: "University of Strathclyde",
    domain: "strath.ac.uk",
    summary: "Distinction. Deep learning, ML for data analytics, AI for finance and autonomous systems.",
  },
  {
    period: "2013 — 2018",
    degree: "BSc Electrical & Electronics Engineering",
    institution: "University of Lagos",
    domain: "unilag.edu.ng",
    summary: "Honours.",
  },
];

export const publications: PublicationItem[] = [
  {
    period: "Publication",
    title: "Tech-driven Solutions for Africa's Waste Problem",
    summary: "Operational telemetry and circular supply chains for waste collection and recycling in emerging markets.",
  },
];
