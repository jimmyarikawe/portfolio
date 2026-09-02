"use client";

import { motion } from "framer-motion";

interface WorkFilterProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  layoutId?: string;
}

export function WorkFilter({
  categories,
  activeCategory,
  onSelectCategory,
  layoutId = "active-filter-pill",
}: WorkFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-10 md:mb-14">
      {categories.map((cat) => {
        const isSelected = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`relative px-4 py-2 rounded-full text-xs font-mono-accent transition-colors duration-200 ${
              isSelected
                ? "text-white dark:text-neutral-950 font-medium"
                : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200/80 dark:hover:bg-white/10"
            }`}
          >
            {isSelected && (
              <motion.div
                layoutId={layoutId}
                className="absolute inset-0 bg-neutral-950 dark:bg-white rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative z-10">{cat}</span>
          </button>
        );
      })}
    </div>
  );
}
