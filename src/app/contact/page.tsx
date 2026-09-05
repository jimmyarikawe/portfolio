"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-10 pt-12 md:pt-16 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded bg-neutral-100 dark:bg-white/10 text-xs font-mono-accent text-neutral-600 dark:text-neutral-300"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-subtle" />
          <span>Available for new projects</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-950 dark:text-white"
        >
          Get in touch
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed"
        >
          Have a project, a team to grow, or a hard problem to solve? Send a message — I reply within 24 hours.
        </motion.p>
      </div>

      {/* Interactive Contact Form Component */}
      <ContactForm />
    </div>
  );
}
