import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const BASE = "https://jimmyarikawe.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/work", priority: 0.9 },
    { path: "/about", priority: 0.8 },
    { path: "/resume", priority: 0.8 },
    { path: "/contact", priority: 0.5 },
  ].map(({ path, priority }) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority,
  }));

  return [
    ...staticRoutes,
    ...projects.map((project) => ({
      url: `${BASE}/work/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
