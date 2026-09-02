"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Article } from "@/data/articles";

interface JournalCardProps {
  article: Article;
  index?: number;
}

export function JournalCard({ article, index = 0 }: JournalCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group editorial-card p-6 sm:p-8 rounded flex flex-col justify-between hover:border-black/20 dark:hover:border-white/20 transition-all"
    >
      <div>
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="px-2.5 py-1 rounded bg-neutral-100 dark:bg-white/5 text-neutral-800 dark:text-neutral-200 text-xs font-mono-accent">
            {article.category}
          </span>
          <div className="flex items-center gap-2 text-xs font-mono-accent text-neutral-400 dark:text-neutral-500">
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>
        </div>

        <Link
          href={`/journal/${article.slug}`}
          data-cursor="Read Article ↗"
          className="block group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors"
        >
          <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-950 dark:text-white mb-3 group-hover:underline decoration-1 underline-offset-4">
            {article.title}
          </h3>
        </Link>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-3 mb-6">
          {article.excerpt}
        </p>
      </div>

      <div className="pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
        <Link
          href={`/journal/${article.slug}`}
          className="text-xs font-mono-accent text-neutral-950 dark:text-white font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all"
        >
          <span>Read Article</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </motion.article>
  );
}
