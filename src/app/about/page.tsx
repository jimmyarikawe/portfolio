"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ServicesGrid } from "@/components/ServicesGrid";

export default function AboutPage() {
  return (
    <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-10 pt-12 md:pt-16 space-y-28 md:space-y-40">
      {/* 1. HERO & CV SUMMARY */}
      <section className="space-y-12">
        <div className="space-y-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded bg-neutral-100 dark:bg-white/10 text-xs font-mono-accent text-neutral-600 dark:text-neutral-300"
          >
            <span>Product Designer & Manager · Creative & AI Technologist</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-950 dark:text-white leading-[1.1]"
          >
            Product design, backed by research and applied AI.
          </motion.h1>
        </div>

        {/* 2-Column Grid: Portrait / Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Portrait & Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[4/5] rounded overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-black/5 dark:border-white/10">
              <Image
                src="/images/about/portrait.png"
                alt="Jimmy Arikawe"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded glass-pill flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono-accent text-neutral-500 dark:text-neutral-400 block">
                    Location
                  </span>
                  <span className="text-sm font-medium text-neutral-900 dark:text-white">
                    United Kingdom
                  </span>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-subtle" />
              </div>
            </div>

            {/* Academic Credential Card */}
            <div className="editorial-card p-6 rounded space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono-accent text-emerald-700 dark:text-emerald-400">
                <Sparkles className="w-4 h-4" />
                <span>Postgraduate Degree with Distinction</span>
              </div>
              <h3 className="text-base font-medium text-neutral-950 dark:text-white">
                MSc in Artificial Intelligence & Applications
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                University of Strathclyde (Glasgow, Scotland).
              </p>
            </div>
          </div>

          {/* Right Column: Narrative from CV */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            <p>
              I’m <strong className="text-neutral-950 dark:text-white font-semibold">Jimmy Arikawe</strong>, a product designer and manager with 7+ years building digital products across fintech, enterprise, and emerging AI. I work across the full lifecycle — research, interaction design, prototyping, and shipping — usually close to engineering.
            </p>
            <p>
              I hold an <span className="text-neutral-950 dark:text-white font-medium">MSc in Artificial Intelligence (Distinction)</span> and bring hands-on ML/LLM experience to design work — particularly AI interaction patterns, human-in-the-loop systems, and conversational interfaces.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 text-xs font-mono-accent hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href="mailto:hi@jimmyarikawe.com?subject=Inquiry"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 text-neutral-900 dark:text-white text-xs font-mono-accent hover:bg-neutral-50 dark:hover:bg-white/10 transition-colors"
              >
                <span>Direct Email</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EXPERIENCE & EDUCATION */}
      <section>
        <ExperienceTimeline />
      </section>

      {/* 3. TECHNICAL SKILLS & DISCIPLINES */}
      <section className="space-y-8">
        <div className="pb-4 border-b border-black/5 dark:border-white/10">
          <span className="text-xs font-mono-accent text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block mb-1">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-neutral-950 dark:text-white">
            Skills & Tools
          </h2>
        </div>

        <ServicesGrid />
      </section>
    </div>
  );
}
