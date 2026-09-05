"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { articles } from "@/data/articles";
import { ProjectCard } from "@/components/ProjectCard";
import { WorkFilter } from "@/components/WorkFilter";
import { ServicesGrid } from "@/components/ServicesGrid";
import { JournalCard } from "@/components/JournalCard";
import { HeroSpotlight } from "@/components/HeroSpotlight";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Fintech",
    "Operational AI",
    "AI & Cybersecurity",
    "Voice AI",
    "Mobility",
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
    <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-10 pt-12 md:pt-16 space-y-28 md:space-y-40">
      {/* 1. HERO SECTION */}
      <section className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-3"
          >
            <div className="glass-pill inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-mono-accent text-neutral-700 dark:text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-subtle" />
              <span>Available for Select Projects & Leadership</span>
            </div>
            <span className="text-xs font-mono-accent text-neutral-400 dark:text-neutral-500 hidden sm:inline">
              UK • MSc AI (Distinction)
            </span>
          </motion.div>

          <div className="space-y-6 max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-950 dark:text-white leading-[1.12]"
            >
              Product Designer & Manager at the intersection of craft, code & AI.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                I’m <strong className="text-neutral-950 dark:text-white font-medium">Jimmy Arikawe</strong>. With 7+ years across fintech, cybersecurity, and enterprise systems — backed by an <span className="text-neutral-950 dark:text-white font-medium">MSc in Artificial Intelligence (Distinction)</span> — I lead products from zero-to-one strategy and interaction architecture to production code and human-in-the-loop AI.
              </p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono-accent text-neutral-500 dark:text-neutral-400">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                7+ Years in Fintech & Enterprise
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                MSc AI (Distinction) · Strathclyde
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                Strategy · Interaction Systems · Code
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#selected-work"
                className="inline-flex items-center gap-2 px-5 py-3 rounded bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 text-xs font-mono-accent hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
              >
                <span>Explore Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded bg-neutral-100 dark:bg-white/5 border border-black/5 dark:border-white/10 text-neutral-900 dark:text-white text-xs font-mono-accent hover:bg-neutral-200 dark:hover:bg-white/10 transition-colors"
              >
                <span>About & Career</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 text-neutral-900 dark:text-white text-xs font-mono-accent hover:bg-neutral-50 dark:hover:bg-white/10 transition-colors"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

        {/* Right: Interactive holographic badge — ~1/5 of the viewport width on desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 mx-auto lg:mx-0 shrink-0"
        >
          <HeroSpotlight />
        </motion.div>
      </section>

      {/* 2. SELECTED WORK SECTION */}
      <section id="selected-work" className="space-y-8 scroll-mt-28">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-black/5 dark:border-white/10">
          <div>
            <span className="text-xs font-mono-accent text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block mb-1">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-950 dark:text-white">
              Selected Work
            </h2>
          </div>

          <Link
            href="/work"
            className="text-xs font-mono-accent text-neutral-900 dark:text-neutral-200 hover:text-neutral-600 dark:hover:text-white inline-flex items-center gap-1 group"
          >
            <span>View all projects</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Category Filters */}
        <WorkFilter
          categories={categories}
          activeCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          layoutId="home-work-filter"
        />

        {/* Project Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-16 text-center space-y-3 rounded bg-neutral-50 dark:bg-white/[0.02] border border-black/5 dark:border-white/10">
            <p className="text-sm text-neutral-500 font-mono-accent">No projects found in this category.</p>
            <button
              onClick={() => setSelectedCategory("All")}
              className="text-xs font-mono-accent underline text-neutral-900 dark:text-white"
            >
              Reset to All Projects
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                priority={index < 2}
              />
            ))}
          </div>
        )}
      </section>

      {/* 4. TECHNICAL SKILLS & DISCIPLINES */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-black/5 dark:border-white/10">
          <div>
            <span className="text-xs font-mono-accent text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block mb-1">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-950 dark:text-white">
              What I bring
            </h2>
          </div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-sm">
            Core tools and disciplines I work across day to day.
          </p>
        </div>

        <ServicesGrid />
      </section>

      {/* 5. JOURNAL & RESEARCH PUBLICATION */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-black/5 dark:border-white/10">
          <div>
            <span className="text-xs font-mono-accent text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block mb-1">
              Journal
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-950 dark:text-white">
              Recent Writing
            </h2>
          </div>

          <Link
            href="/journal"
            className="text-xs font-mono-accent text-neutral-900 dark:text-neutral-200 hover:text-neutral-600 dark:hover:text-white inline-flex items-center gap-1 group"
          >
            <span>All Articles</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {articles.slice(0, 2).map((article, index) => (
            <JournalCard key={article.slug} article={article} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
