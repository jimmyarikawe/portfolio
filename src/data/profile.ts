/**
 * Supporting content for the home page's short-form sections. Icons are
 * referenced by name and mapped to components at render time, matching the
 * convention in `services.ts`.
 */

export interface StackItem {
  name: string;
  iconName:
    | "design"
    | "component"
    | "types"
    | "python"
    | "css"
    | "motion"
    | "ai"
    | "system";
}

/** Day-to-day tools and technologies, drawn from `skillCategories`. */
export const stack: StackItem[] = [
  { name: "Figma", iconName: "design" },
  { name: "React & Next.js", iconName: "component" },
  { name: "TypeScript", iconName: "types" },
  { name: "Python", iconName: "python" },
  { name: "Tailwind CSS", iconName: "css" },
  { name: "Framer Motion", iconName: "motion" },
  { name: "LLMs & RAG", iconName: "ai" },
  { name: "Design Systems", iconName: "system" },
];


export interface SocialLink {
  name: string;
  label: string;
  href: string;
  iconName: "linkedin" | "github" | "email";
}

export const socials: SocialLink[] = [
  {
    name: "LinkedIn",
    label: "Connect with me on LinkedIn",
    href: "https://linkedin.com/in/jimmyarikawe",
    iconName: "linkedin",
  },
  {
    name: "GitHub",
    label: "See my code on GitHub",
    href: "https://github.com/jimmyarikawe",
    iconName: "github",
  },
  {
    name: "Email",
    label: "Email me directly",
    href: "mailto:hi@jimmyarikawe.com",
    iconName: "email",
  },
];
