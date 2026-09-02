"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { experiences, education, publications } from "@/data/experience";

function CompanyFavicon({ name, domain }: { name: string; domain?: string }) {
  const [hasError, setHasError] = useState(false);

  // Clean and sanitize domain in case full URL with protocol or trailing slash was passed
  const cleanDomain = domain
    ? domain.replace(/^https?:\/\//i, "").replace(/^www\./i, "").split("/")[0]
    : null;

  // High-res favicon via Google's global CDN
  const faviconUrl = cleanDomain
    ? `https://www.google.com/s2/favicons?domain=${cleanDomain}&sz=64`
    : null;

  return (
    <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-neutral-100 dark:bg-white/10 overflow-hidden shrink-0 border border-black/5 dark:border-white/10 align-middle">
      {faviconUrl && !hasError ? (
        <img
          src={faviconUrl}
          alt={`${name} logo`}
          width={14}
          height={14}
          className="w-3.5 h-3.5 object-contain"
          onError={() => setHasError(true)}
          loading="lazy"
        />
      ) : (
        <span className="text-neutral-700 dark:text-neutral-300 text-[10px] font-mono-accent font-semibold">
          {name.charAt(0)}
        </span>
      )}
    </span>
  );
}

function TimelineRow({
  period,
  title,
  subtitle,
  summary,
  index,
  badge,
}: {
  period: string;
  title: React.ReactNode;
  subtitle?: string;
  summary: string;
  index: number;
  badge?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
      className="grid grid-cols-1 sm:grid-cols-[130px_1fr] gap-1.5 sm:gap-8"
    >
      <div className="flex items-center gap-2 text-xs font-mono-accent text-neutral-400 dark:text-neutral-500">
        <span>{period}</span>
        {badge && (
          <span className="px-1.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-[10px]">
            {badge}
          </span>
        )}
      </div>
      <div>
        <h3 className="text-base font-medium text-neutral-950 dark:text-white flex items-center gap-2 flex-wrap">
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs font-mono-accent text-neutral-500 dark:text-neutral-400 mt-0.5">{subtitle}</p>
        )}
        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mt-1.5">{summary}</p>
      </div>
    </motion.div>
  );
}

export function ExperienceTimeline() {
  return (
    <div className="space-y-16">
      {/* Experience */}
      <div className="space-y-8">
        <div>
          <span className="text-xs font-mono-accent text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block mb-2">
            Experience
          </span>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-lg">
            7+ years across fintech, enterprise, and AI — the roles, chronologically.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <TimelineRow
              key={i}
              index={i}
              period={exp.period}
              badge={exp.current ? "Current" : undefined}
              title={
                <>
                  {exp.role} at <CompanyFavicon name={exp.company} domain={exp.domain} /> {exp.company}
                </>
              }
              summary={exp.summary}
            />
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="space-y-8">
        <span className="text-xs font-mono-accent text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block">
          Education
        </span>

        <div className="space-y-8">
          {education.map((edu, i) => (
            <TimelineRow
              key={i}
              index={i}
              period={edu.period}
              title={
                <>
                  {edu.degree} at <CompanyFavicon name={edu.institution} domain={edu.domain} /> {edu.institution}
                </>
              }
              summary={edu.summary}
            />
          ))}
          {publications.map((pub, i) => (
            <TimelineRow
              key={`pub-${i}`}
              index={education.length + i}
              period={pub.period}
              title={pub.title}
              summary={pub.summary}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
