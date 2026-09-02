"use client";

import { motion } from "framer-motion";
import { articles } from "@/data/articles";
import { JournalCard } from "@/components/JournalCard";

export default function JournalPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-12 md:pt-16 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded bg-neutral-100 dark:bg-white/10 text-xs font-mono-accent text-neutral-600 dark:text-neutral-300"
        >
          <span>Writing</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-950 dark:text-white"
        >
          Journal
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed"
        >
          Notes on AI interaction design, research, and product craft.
        </motion.p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {articles.map((article, index) => (
          <JournalCard key={article.slug} article={article} index={index} />
        ))}
      </div>
    </div>
  );
}
