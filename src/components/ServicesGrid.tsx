"use client";

import { useState, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Sparkles, Code2, Layers, Compass, ArrowUpRight, Cpu } from "lucide-react";
import { skillCategories, SkillCategory } from "@/data/services";

function getCategoryIcon(iconName: SkillCategory["iconName"]) {
  switch (iconName) {
    case "ai":
      return <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
    case "code":
      return <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
    case "design":
      return <Layers className="w-4 h-4 text-orange-600 dark:text-orange-400" />;
    case "leadership":
      return <Compass className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
    default:
      return <Cpu className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
  }
}

function ServiceCard({
  skillGroup,
  index,
}: {
  skillGroup: SkillCategory;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const spotlightBg = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, rgba(0, 0, 0, 0.035), transparent 80%)`;
  const darkSpotlightBg = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.06), transparent 80%)`;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative editorial-card p-6 sm:p-8 rounded flex flex-col justify-between overflow-hidden hover:border-black/25 dark:hover:border-white/25 transition-all duration-300"
    >
      {/* Interactive Cursor Spotlight overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:hidden"
        style={{ background: spotlightBg }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden dark:block"
        style={{ background: darkSpotlightBg }}
      />

      {/* Card Content Top */}
      <div className="relative z-10 space-y-5">
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-7 h-7 rounded bg-neutral-100 dark:bg-white/5 border border-black/5 dark:border-white/10 shrink-0">
              {getCategoryIcon(skillGroup.iconName)}
            </span>
            <span className="text-xs font-mono-accent text-neutral-400 dark:text-neutral-500 font-medium">
              {skillGroup.number}.
            </span>
          </div>

          <span className="text-[10px] font-mono-accent uppercase tracking-widest text-neutral-500 dark:text-neutral-400 px-2 py-0.5 rounded bg-neutral-100 dark:bg-white/5 border border-black/5 dark:border-white/10">
            {skillGroup.focus}
          </span>
        </div>

        {/* Title & Tagline */}
        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-950 dark:text-white flex items-center justify-between gap-2">
            <span>{skillGroup.category}</span>
            <ArrowUpRight className="w-4 h-4 text-neutral-400 dark:text-neutral-500 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 shrink-0" />
          </h3>

          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {skillGroup.tagline}
          </p>
        </div>
      </div>

      {/* Card Content Bottom: Interactive Skill Chips & Deliverable Pill */}
      <div className="relative z-10 pt-6 mt-6 border-t border-black/5 dark:border-white/10 space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {skillGroup.skills.map((skill) => {
            const isHovered = hoveredSkill === skill;
            return (
              <button
                key={skill}
                type="button"
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`px-2.5 py-1 rounded text-xs font-mono-accent transition-all duration-200 text-left flex items-center gap-1.5 ${
                  isHovered
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 scale-[1.03]"
                    : "bg-neutral-100/90 dark:bg-white/5 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-white/10 border border-black/5 dark:border-white/10"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    isHovered ? "bg-emerald-400 dark:bg-emerald-600" : "bg-neutral-400 dark:bg-neutral-600 opacity-60"
                  }`}
                />
                <span>{skill}</span>
              </button>
            );
          })}
        </div>

        {/* Deliverable/Impact Footer */}
        <div className="pt-2 flex items-center justify-between text-[11px] font-mono-accent text-neutral-500 dark:text-neutral-400">
          <span className="text-neutral-400 dark:text-neutral-500">Core Impact:</span>
          <span className="text-neutral-800 dark:text-neutral-200 font-medium truncate max-w-[260px]">
            {skillGroup.impact}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
      {skillCategories.map((skillGroup, index) => (
        <ServiceCard key={skillGroup.number} skillGroup={skillGroup} index={index} />
      ))}
    </div>
  );
}
