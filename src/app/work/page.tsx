"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { WorkFilter } from "@/components/WorkFilter";

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = [
    "All",
    "Fintech",
    "Operational AI",
    "AI & Cybersecurity",
    "Generative AI",
    "Consumer Tech"
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter(
          (p) =>
            p.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
            p.categories.some((c) =>
              c.toLowerCase().includes(selectedCategory.toLowerCase())
            )
        );

  return (
    <div className="max-w-6xl mx-auto px-6 pt-12 md:pt-16 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded bg-neutral-100 dark:bg-white/10 text-xs font-mono-accent text-neutral-600 dark:text-neutral-300"
        >
          <span>Case Studies</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-950 dark:text-white"
        >
          Work
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed"
        >
          Product work across fintech, AI security, and enterprise systems.
        </motion.p>
      </div>

      {/* Category Filters */}
      <WorkFilter
        categories={categories}
        activeCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
