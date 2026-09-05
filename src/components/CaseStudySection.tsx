"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Target,
  Compass,
  Share2,
  Check,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Palette,
  Lightbulb,
} from "lucide-react";
import { Project } from "@/data/projects";

interface CaseStudySectionProps {
  project: Project;
  nextProject?: Project;
  prevProject?: Project;
}

export function CaseStudySection({
  project,
  nextProject,
  prevProject,
}: CaseStudySectionProps) {
  const { scrollYProgress } = useScroll();
  const [copiedShare, setCopiedShare] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Consolidate hero + gallery images for lightbox navigation
  const primaryHero = project.heroImage || project.coverImage;
  const modalImages = primaryHero && !project.gallery.includes(primaryHero)
    ? [primaryHero, ...project.gallery]
    : project.gallery;

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  // Lock background scroll when lightbox is open
  useEffect(() => {
    if (activeImageIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeImageIndex]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === "Escape") setActiveImageIndex(null);
      if (e.key === "ArrowRight" && modalImages.length > 0) {
        setActiveImageIndex((prev) =>
          prev !== null && prev < modalImages.length - 1 ? prev + 1 : 0
        );
      }
      if (e.key === "ArrowLeft" && modalImages.length > 0) {
        setActiveImageIndex((prev) =>
          prev !== null && prev > 0 ? prev - 1 : modalImages.length - 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex, modalImages]);

  return (
    <>
      {/* Top Reading Progress Bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-neutral-950 dark:bg-white origin-left z-50 pointer-events-none"
      />

      <article className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-10 pt-8 sm:pt-12 md:pt-16 pb-24">
        {/* Navigation & Action Header */}
        <div className="flex items-center justify-between gap-4 mb-8 sm:mb-12">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono-accent text-neutral-500 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Selected Work</span>
          </Link>

          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono-accent bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/50 dark:border-emerald-800/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-colors"
              >
                <span>Live Platform</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono-accent text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 border border-black/5 dark:border-white/10 transition-colors"
              title="Copy case study link"
            >
              {copiedShare ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 1. EDITORIAL HEADER & METADATA TABLE */}
        <header className="space-y-6 mb-12 sm:mb-16">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 text-xs font-mono-accent font-medium">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded bg-neutral-100 dark:bg-white/10 text-neutral-800 dark:text-neutral-200 text-xs font-mono-accent">
              {project.year}
            </span>
            {project.duration && (
              <span className="px-3 py-1 rounded bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-neutral-400 text-xs font-mono-accent">
                {project.duration}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-950 dark:text-white leading-[1.08] max-w-4xl">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 max-w-3xl leading-relaxed font-normal">
            {project.tagline}
          </p>

          {/* Structured Metadata Deck (Inma Varandela Style) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-8 rounded bg-neutral-50 dark:bg-white/[0.02] border border-black/5 dark:border-white/10 text-xs font-mono-accent">
            <div className="space-y-1.5">
              <span className="text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block text-[10px]">
                Company / Client
              </span>
              <span className="text-neutral-900 dark:text-white font-medium text-sm block">
                {project.client}
              </span>
            </div>

            <div className="space-y-1.5">
              <span className="text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block text-[10px]">
                Responsibilities
              </span>
              <span className="text-neutral-900 dark:text-white font-medium text-sm block">
                {project.role}
              </span>
              <span className="text-neutral-500 dark:text-neutral-400 text-xs block leading-relaxed">
                {project.services}
              </span>
            </div>

            <div className="space-y-1.5">
              <span className="text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block text-[10px]">
                Core Objective
              </span>
              <span className="text-neutral-800 dark:text-neutral-200 text-xs block leading-relaxed">
                {project.goal || project.description}
              </span>
            </div>

            <div className="space-y-1.5">
              <span className="text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block text-[10px]">
                Measurable Impact
              </span>
              <span className="text-neutral-950 dark:text-white font-medium text-xs block leading-relaxed">
                {project.outcome || project.metrics.map((m) => `${m.value} ${m.label}`).join(" • ")}
              </span>
            </div>
          </div>
        </header>

        {/* 2. FULL-BLEED HERO VISUAL */}
        <section className="mb-20 sm:mb-28">
          <div
            onClick={() => setActiveImageIndex(0)}
            className="group relative w-full aspect-[16/10] sm:aspect-[16/9] rounded overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-black/5 dark:border-white/10 cursor-zoom-in transition-all duration-500 hover:border-black/20 dark:hover:border-white/20"
          >
            <Image
              src={project.heroImage || project.coverImage}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
              <span className="text-xs font-mono-accent text-white/90 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded">
                Hero Showcase • Click to expand
              </span>
              <div className="w-8 h-8 rounded bg-white/90 text-neutral-950 flex items-center justify-center shadow-lg">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          </div>
        </section>

        {/* 3. STRUCTURED EDITORIAL CHAPTERS */}
        <div className="space-y-20 sm:space-y-28">

          {/* CHAPTER 01: CONTEXT & MARKET OPPORTUNITY */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 pt-12 border-t border-black/5 dark:border-white/10">
            <div className="md:col-span-4 space-y-2 md:sticky md:top-24 md:self-start">
              <span className="text-xs font-mono-accent text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block">
                01 / Context & Background
              </span>
              <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-950 dark:text-white">
                The Landscape & Opportunity
              </h2>
            </div>

            <div className="md:col-span-8 space-y-6 text-neutral-600 dark:text-neutral-300 leading-relaxed text-base sm:text-lg">
              <p>{project.overview}</p>
              
              <div className="p-5 sm:p-6 rounded bg-neutral-100/70 dark:bg-white/[0.03] border border-black/5 dark:border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono-accent text-neutral-900 dark:text-white font-medium">
                  <Compass className="w-4 h-4 text-neutral-500" />
                  <span>Cross-Functional Leadership</span>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                  Collaborated across Product, Engineering, Compliance, and Customer Experience teams to ensure technical feasibility, risk mitigation, and seamless global scalability from Day 1.
                </p>
              </div>
            </div>
          </section>

          {/* CHAPTER 02: THE CORE CHALLENGE */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 pt-12 border-t border-black/5 dark:border-white/10">
            <div className="md:col-span-4 space-y-2 md:sticky md:top-24 md:self-start">
              <span className="text-xs font-mono-accent text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block">
                02 / The Core Challenge
              </span>
              <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-950 dark:text-white">
                User Anxiety & Friction
              </h2>
            </div>

            <div className="md:col-span-8 space-y-6">
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-base sm:text-lg">
                {project.challenge}
              </p>

              {/* Comparative Challenge vs Goal Bento */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded bg-red-500/[0.03] dark:bg-red-500/[0.05] border border-red-500/15 dark:border-red-500/20 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono-accent text-red-700 dark:text-red-400 font-medium">
                    <Target className="w-3.5 h-3.5" />
                    <span>The User Problem</span>
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Unpredictable delays, opaque transaction fees, and complex verification create cognitive fatigue and drop-off.
                  </p>
                </div>

                <div className="p-5 rounded bg-emerald-500/[0.03] dark:bg-emerald-500/[0.05] border border-emerald-500/15 dark:border-emerald-500/20 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono-accent text-emerald-700 dark:text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>The Design Mandate</span>
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Deliver instant clarity, real-time fee locks, and seamless biometric authorization to establish trust.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CHAPTER 03: DESIGN STRATEGY & PRINCIPLES */}
          {project.principles && project.principles.length > 0 && (
            <section className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 pt-12 border-t border-black/5 dark:border-white/10">
              <div className="md:col-span-4 space-y-2 md:sticky md:top-24 md:self-start">
                <span className="text-xs font-mono-accent text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block">
                  03 / Design Principles
                </span>
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-950 dark:text-white">
                  Guiding Foundations
                </h2>
              </div>

              <div className="md:col-span-8 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.principles.map((principle, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded bg-neutral-50 dark:bg-white/[0.02] border border-black/5 dark:border-white/10 space-y-2 flex flex-col justify-between"
                    >
                      <span className="text-xs font-mono-accent text-neutral-400 dark:text-neutral-500">
                        0{idx + 1}
                      </span>
                      <div>
                        <h3 className="text-sm font-medium text-neutral-950 dark:text-white mb-1">
                          {principle.title}
                        </h3>
                        <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* CHAPTER 04: THE EXPERIENCE & SOLUTION WALKTHROUGH */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 pt-12 border-t border-black/5 dark:border-white/10">
            <div className="md:col-span-4 space-y-2 md:sticky md:top-24 md:self-start">
              <span className="text-xs font-mono-accent text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block">
                04 / Core Solutions
              </span>
              <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-950 dark:text-white">
                The User Experience
              </h2>
            </div>

            <div className="md:col-span-8 space-y-8">
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-base sm:text-lg">
                {project.solution}
              </p>

              {/* Core Feature Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded bg-neutral-50 dark:bg-white/[0.02] border border-black/5 dark:border-white/10 space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-neutral-400" />
                      <h3 className="text-sm font-medium text-neutral-950 dark:text-white">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Curated Visual Artifact Walkthrough */}
              <div className="space-y-6 pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono-accent text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                    High-Fidelity Artifacts & Flows
                  </span>
                  <span className="text-xs font-mono-accent text-neutral-500">
                    {project.gallery.length} Screens Documented
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {project.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        const targetIdx = modalImages.indexOf(img);
                        setActiveImageIndex(targetIdx !== -1 ? targetIdx : idx);
                      }}
                      className={`group relative rounded overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-black/5 dark:border-white/10 cursor-zoom-in transition-all duration-300 hover:border-black/20 dark:hover:border-white/20 ${
                        idx === 0 ? "sm:col-span-2 aspect-[16/10]" : "aspect-[4/3] sm:aspect-[16/11]"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${project.title} screen ${idx + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 800px"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end justify-between p-4 opacity-0 group-hover:opacity-100">
                        <span className="text-[11px] font-mono-accent text-white bg-black/70 backdrop-blur-md px-2.5 py-1 rounded">
                          Artifact 0{idx + 1} • Expand
                        </span>
                        <div className="w-7 h-7 rounded bg-white text-neutral-950 flex items-center justify-center">
                          <Maximize2 className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CHAPTER 05: DESIGN SYSTEM & CRAFT */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 pt-12 border-t border-black/5 dark:border-white/10">
            <div className="md:col-span-4 space-y-2 md:sticky md:top-24 md:self-start">
              <span className="text-xs font-mono-accent text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block">
                05 / System & Craft
              </span>
              <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-950 dark:text-white">
                Component Architecture
              </h2>
            </div>

            <div className="md:col-span-8 space-y-6">
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-base sm:text-lg">
                {project.designSystem}
              </p>

              {/* Design System Craft Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded bg-neutral-50 dark:bg-white/[0.02] border border-black/5 dark:border-white/10 space-y-1.5">
                  <span className="text-neutral-400 dark:text-neutral-500 text-[10px] font-mono-accent uppercase tracking-wider block">
                    Typography & Scale
                  </span>
                  <span className="text-xs font-medium text-neutral-900 dark:text-white block">
                    Inter & JetBrains Mono
                  </span>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                    High legibility for numeric data, micro-amounts, and tabular currency rates.
                  </p>
                </div>

                <div className="p-4 rounded bg-neutral-50 dark:bg-white/[0.02] border border-black/5 dark:border-white/10 space-y-1.5">
                  <span className="text-neutral-400 dark:text-neutral-500 text-[10px] font-mono-accent uppercase tracking-wider block">
                    Color Semantics
                  </span>
                  <span className="text-xs font-medium text-neutral-900 dark:text-white block">
                    State-Driven Tokens
                  </span>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                    Color reserved strictly for operational states, success verification, and critical alerts.
                  </p>
                </div>

                <div className="p-4 rounded bg-neutral-50 dark:bg-white/[0.02] border border-black/5 dark:border-white/10 space-y-1.5">
                  <span className="text-neutral-400 dark:text-neutral-500 text-[10px] font-mono-accent uppercase tracking-wider block">
                    Accessibility
                  </span>
                  <span className="text-xs font-medium text-neutral-900 dark:text-white block">
                    WCAG AAA / AA
                  </span>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                    4.5:1 minimum contrast across light & dark modes with full keyboard navigability.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CHAPTER 06: RESULTS, IMPACT & TAKEAWAYS */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 pt-12 border-t border-black/5 dark:border-white/10">
            <div className="md:col-span-4 space-y-2 md:sticky md:top-24 md:self-start">
              <span className="text-xs font-mono-accent text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block">
                06 / Outcomes & Impact
              </span>
              <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-950 dark:text-white">
                Measurable Results
              </h2>
            </div>

            <div className="md:col-span-8 space-y-8">
              {/* Quantified Impact Deck */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {project.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 space-y-1"
                  >
                    <span className="text-2xl sm:text-3xl font-medium tracking-tight block">
                      {metric.value}
                    </span>
                    <span className="text-xs font-mono-accent opacity-80 block leading-tight">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Retrospective Takeaway Card */}
              <div className="p-6 sm:p-8 rounded bg-neutral-50 dark:bg-white/[0.02] border border-black/5 dark:border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono-accent text-neutral-900 dark:text-white font-medium">
                  <Lightbulb className="w-4 h-4 text-amber-500" />
                  <span>Key Retrospective & Product Learnings</span>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
                  {project.takeaways}
                </p>
              </div>

              {/* Roadmap if present */}
              {project.roadmap && project.roadmap.length > 0 && (
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono-accent text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block">
                    Future Roadmap & Next Iterations
                  </span>
                  <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-400 font-mono-accent">
                    {project.roadmap.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-neutral-400 mt-0.5">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>

        </div>

        {/* 4. NEXT PROJECT TRANSITION CARD */}
        {nextProject && (
          <div className="mt-24 sm:mt-32 pt-12 border-t border-black/5 dark:border-white/10">
            <Link
              href={`/work/${nextProject.slug}`}
              className="group block p-6 sm:p-10 rounded bg-neutral-50 dark:bg-white/[0.02] border border-black/5 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="space-y-2 max-w-xl">
                  <span className="text-xs font-mono-accent text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                    Next Case Study
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-950 dark:text-white group-hover:underline decoration-1 underline-offset-4">
                    {nextProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2">
                    {nextProject.tagline}
                  </p>
                </div>

                <div className="flex items-center gap-4 self-start sm:self-center">
                  <div className="relative w-20 h-14 sm:w-28 sm:h-18 rounded overflow-hidden bg-neutral-200 dark:bg-neutral-800 border border-black/5 dark:border-white/10 shrink-0">
                    <Image
                      src={nextProject.coverImage}
                      alt={nextProject.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 rounded bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}
      </article>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeImageIndex !== null && modalImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 select-none"
            onClick={() => setActiveImageIndex(null)}
          >
            {/* Top Lightbox Bar */}
            <div
              className="flex items-center justify-between text-white text-xs font-mono-accent z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="font-medium text-white">{project.title}</span>
                <span className="text-neutral-500">•</span>
                <span className="text-neutral-400">
                  Artifact {activeImageIndex + 1} of {modalImages.length}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden sm:inline text-[11px] text-neutral-500">
                  Use ← → keys to navigate • Esc to close
                </span>
                <button
                  onClick={() => setActiveImageIndex(null)}
                  className="p-2 rounded bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Central Modal Image */}
            <div
              className="relative w-full h-[75vh] flex items-center justify-center my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={modalImages[activeImageIndex]}
                alt={`${project.title} artifact ${activeImageIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Bottom Controls */}
            <div
              className="flex items-center justify-between text-white z-10 max-w-sm mx-auto w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() =>
                  setActiveImageIndex((prev) =>
                    prev !== null && prev > 0 ? prev - 1 : modalImages.length - 1
                  )
                }
                className="inline-flex items-center gap-2 px-4 py-2 rounded bg-white/10 hover:bg-white/20 text-xs font-mono-accent transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev</span>
              </button>

              <div className="flex gap-1.5 overflow-x-auto py-1 max-w-[160px] no-scrollbar">
                {modalImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all shrink-0 ${
                      i === activeImageIndex
                        ? "bg-white w-5"
                        : "bg-white/30 hover:bg-white/60"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() =>
                  setActiveImageIndex((prev) =>
                    prev !== null && prev < modalImages.length - 1 ? prev + 1 : 0
                  )
                }
                className="inline-flex items-center gap-2 px-4 py-2 rounded bg-white/10 hover:bg-white/20 text-xs font-mono-accent transition-colors"
                aria-label="Next image"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
