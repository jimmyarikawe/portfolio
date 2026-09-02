"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Copy, ArrowUp } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TypewriterLogo } from "@/components/TypewriterLogo";

export function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "hi@jimmyarikawe.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-28 md:mt-40 border-t border-black/5 dark:border-white/10 bg-[#F7F7F7] dark:bg-[#0E0E10] relative">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        {/* Main CTA Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pb-16 border-b border-black/5 dark:border-white/10">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 text-xs font-mono-accent text-neutral-600 dark:text-neutral-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-subtle" />
              Open for new projects
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-neutral-950 dark:text-white leading-[1.15]">
              Have a hard product problem? Let’s talk.
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 font-medium text-sm hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all"
            >
              <span>Send Message</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 text-neutral-800 dark:text-neutral-200 font-medium text-sm hover:bg-neutral-50 dark:hover:bg-white/10 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-700 dark:text-emerald-300">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-neutral-400 dark:text-neutral-500" />
                  <span>{email}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Links & Sub-Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-12 border-b border-black/5 dark:border-white/10 text-sm">
          {/* Brand & Typewriter Logo */}
          <div className="md:col-span-5 space-y-4">
            <TypewriterLogo triggerOnView={true} className="text-base sm:text-lg" delay={150} />
            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed max-w-sm">
              Product Designer & Manager, Creative & AI Technologist with 7+ years across fintech, enterprise, and emerging AI.
            </p>
            <div className="font-mono-accent text-xs text-neutral-400 dark:text-neutral-500">
              United Kingdom · MSc AI (Distinction)
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="font-mono-accent text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors">
                  About & Track Record
                </Link>
              </li>
              <li>
                <Link href="/journal" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors">
                  Journal & Research
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Profile */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-mono-accent text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-4">
              Connect & Profile
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://linkedin.com/in/jimmyarikawe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/jimmyarikawe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:hi@jimmyarikawe.com"
                  className="inline-flex items-center gap-1 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
                >
                  <span>Direct Email</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-accent text-neutral-400 dark:text-neutral-500">
          <div className="flex items-center gap-2">
            <span>© 2026 Jimmy Arikawe. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <span>Theme:</span>
              <ThemeToggle />
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
