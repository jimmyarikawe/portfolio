"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
  priority?: boolean;
}

export function ProjectCard({ project, index = 0, priority = false }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col"
    >
      <Link
        href={`/work/${project.slug}`}
        data-cursor="View Project ↗"
        className="block relative overflow-hidden rounded bg-neutral-100 dark:bg-neutral-900 border border-black/5 dark:border-white/10 aspect-[4/3] sm:aspect-[16/11] mb-4 group-hover:border-black/20 dark:group-hover:border-white/20 transition-all duration-500"
      >
        {/* Project Thumbnail Image */}
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
        </div>

        {/* Floating Category Pill */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-1.5 z-10 pointer-events-none">
          <span className="px-2.5 py-1 rounded bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md text-[11px] font-mono-accent text-neutral-900 dark:text-white border border-black/5 dark:border-white/10">
            {project.category}
          </span>
          <span className="px-2.5 py-1 rounded bg-black/70 dark:bg-white/20 backdrop-blur-md text-[11px] font-mono-accent text-white">
            {project.year}
          </span>
        </div>

        {/* Hover Arrow Icon */}
        <div className="absolute bottom-4 right-4 w-9 h-9 rounded bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md text-neutral-900 dark:text-white flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </Link>

      {/* Project Meta Details */}
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono-accent text-neutral-400 dark:text-neutral-500">
              {project.id}.
            </span>
            <Link
              href={`/work/${project.slug}`}
              className="text-lg md:text-xl font-medium tracking-tight text-neutral-950 dark:text-white hover:underline decoration-1 underline-offset-4"
            >
              {project.title}
            </Link>
          </div>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 line-clamp-1">
            {project.services}
          </p>
        </div>

        <Link
          href={`/work/${project.slug}`}
          className="p-1 text-neutral-400 dark:text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors shrink-0 mt-0.5"
          aria-label={`View ${project.title}`}
        >
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}
