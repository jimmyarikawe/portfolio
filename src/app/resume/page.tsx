import type { Metadata } from "next";
import Link from "next/link";
import { Download } from "lucide-react";
import {
  experiences,
  education,
  publications,
  skillGroups,
} from "@/data/experience";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Résumé — Jimmy Arikawe, Senior Product Designer & Design Engineer",
  description:
    "Seven years designing fintech, enterprise and AI products. Full CV: experience, selected work, skills and education. Available as a PDF download.",
};

/*
 * This page is the CV. The PDF in /public is printed from it, and both read the
 * same `experience.ts` the About timeline uses — so the downloadable document
 * and the site can no longer contradict each other, which is exactly the gap a
 * hiring manager checks for first.
 *
 * `print:` variants strip the site chrome and force an ink-on-white palette, so
 * the printed page doesn't inherit whichever theme the visitor happened to be
 * using.
 */
const SECTION_LABEL =
  "text-[13px] font-medium uppercase tracking-[0.08em] text-dim print:text-[9pt] print:text-black";

const ROLE = "text-[16px] font-medium sm:text-[17px] print:text-[10.5pt]";
const META = "text-[13px] font-medium text-dim sm:text-[14px] print:text-[9pt] print:text-black";
const BULLET =
  "text-[15px] leading-6 text-soft sm:text-[16px] sm:leading-6.5 print:text-[9.5pt] print:leading-[1.35] print:text-black";

const CONTACT = [
  { label: "hi@jimmyarikawe.com", href: "mailto:hi@jimmyarikawe.com" },
  { label: "jimmyarikawe.com", href: "https://jimmyarikawe.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/jimmyarikawe" },
  { label: "GitHub", href: "https://github.com/jimmyarikawe" },
];

export default function ResumePage() {
  return (
    <div className="site-col print:mx-0 print:w-full">
      {/* Screen-only header. The print version gets its own compact masthead. */}
      <section className="mt-20 sm:mt-22 print:hidden">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-balance text-[28px] font-medium leading-8.25 sm:text-[34px] sm:leading-9.5 wide:text-[42px] wide:leading-10.75">
              Résumé
            </h1>
            <p className="mt-3.5 text-[17px] leading-6 text-muted sm:mt-4.5 sm:text-[20px] sm:leading-7">
              Senior Product Designer &amp; Design Engineer · United Kingdom
            </p>
          </div>

          <a
            href="/Jimmy-Arikawe-CV.pdf"
            download
            className="btn shrink-0"
            data-cursor="Download PDF"
          >
            <Download aria-hidden="true" className="h-4 w-4" />
            Download PDF
          </a>
        </div>
      </section>

      {/* Print-only masthead. */}
      <div className="hidden print:block">
        <p className="text-[20pt] font-semibold leading-tight text-black">
          Jimmy Arikawe
        </p>
        <p className="mt-1 text-[10pt] text-black">
          Senior Product Designer &amp; Design Engineer · United Kingdom ·{" "}
          {CONTACT.map((c) => c.label).join(" · ")}
        </p>
      </div>

      {/* SUMMARY */}
      <section className="mt-12 sm:mt-16 print:mt-5">
        <h2 className={SECTION_LABEL}>Summary</h2>
        <p className="mt-3 text-[17px] leading-6.5 text-body sm:text-[19px] sm:leading-7 print:mt-2 print:text-[10pt] print:leading-[1.4] print:text-black">
          Senior Product Designer and design engineer with seven years across
          fintech, enterprise operations and AI. Research, interaction design
          and prototyping through to shipped software, including production
          front-end in TypeScript and React. Product Lead at Omits, owning
          strategy and design for a cross-border payments platform across web,
          iOS and Android. MSc Artificial Intelligence (Distinction), with
          hands-on experience prototyping against live models.
        </p>
      </section>

      {/* EXPERIENCE — before education, because seven years outweighs a degree. */}
      <section className="mt-12 sm:mt-16 print:mt-5">
        <h2 className={SECTION_LABEL}>Experience</h2>

        <div className="mt-4 print:mt-2">
          {experiences.map((job) => (
            <article
              key={`${job.company}-${job.period}`}
              className="mb-8 last:mb-0 print:mb-3.5 print:break-inside-avoid"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className={ROLE}>
                  {job.role}
                  <span className="text-muted print:text-black"> · </span>
                  <span className="font-medium">{job.company}</span>
                  {job.location && (
                    <span className="text-muted print:text-black">
                      , {job.location}
                    </span>
                  )}
                </p>
                <p className={`${META} shrink-0`}>
                  {job.period}
                  {job.note && <span> · {job.note}</span>}
                </p>
              </div>

              <ul className="mt-2 print:mt-1">
                {(job.highlights ?? [job.summary]).map((line) => (
                  <li
                    key={line}
                    className={`mb-1.5 flex gap-2.5 last:mb-0 print:mb-0.5 ${BULLET}`}
                  >
                    <span aria-hidden="true" className="text-faint print:text-black">
                      ·
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* SELECTED WORK — the CV's link back into the case studies. */}
      <section className="mt-12 sm:mt-16 print:mt-5 print:break-inside-avoid">
        <h2 className={SECTION_LABEL}>Selected Work</h2>
        <p className="mt-2 text-[14px] text-dim print:text-[9pt] print:text-black">
          Full case studies at jimmyarikawe.com/work
        </p>

        <div className="mt-4 print:mt-2">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="mb-3 last:mb-0 print:mb-1 print:break-inside-avoid"
            >
              <p className={`${BULLET} print:text-black`}>
                <Link
                  href={`/work/${project.slug}`}
                  className="font-medium text-ink print:text-black"
                >
                  {project.title}
                </Link>
                <span className="text-muted print:text-black">
                  {" "}
                  — {project.tagline}
                </span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="mt-12 sm:mt-16 print:mt-5 print:break-inside-avoid">
        <h2 className={SECTION_LABEL}>Skills</h2>

        <dl className="mt-4 print:mt-2">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="mb-2.5 flex flex-col gap-1 sm:flex-row sm:gap-4 print:mb-1"
            >
              <dt className="text-[14px] font-medium sm:w-24 sm:shrink-0 print:w-20 print:text-[9.5pt] print:text-black">
                {group.label}
              </dt>
              <dd className={BULLET}>{group.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* EDUCATION */}
      <section className="mt-12 sm:mt-16 print:mt-5 print:break-inside-avoid">
        <h2 className={SECTION_LABEL}>Education</h2>

        <div className="mt-4 print:mt-2">
          {education.map((edu) => (
            <article key={edu.institution} className="mb-5 last:mb-0 print:mb-2">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className={ROLE}>
                  {edu.degree}
                  <span className="text-muted print:text-black"> · </span>
                  {edu.institution}
                  {edu.location && (
                    <span className="text-muted print:text-black">
                      , {edu.location}
                    </span>
                  )}
                </p>
                <p className={`${META} shrink-0`}>{edu.period}</p>
              </div>
              <p className={`mt-1.5 print:mt-0.5 ${BULLET}`}>{edu.summary}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PUBLICATION */}
      <section className="mt-12 sm:mt-16 print:mt-5 print:break-inside-avoid">
        <h2 className={SECTION_LABEL}>Publication</h2>
        <div className="mt-4 print:mt-2">
          {publications.map((pub) => (
            <p key={pub.title} className={BULLET}>
              <span className="font-medium text-ink print:text-black">
                {pub.title}
              </span>
              <span className="text-muted print:text-black">
                {" "}
                — {pub.summary}
              </span>
            </p>
          ))}
        </div>
      </section>

      <section className="mt-12 sm:mt-16 print:hidden">
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="btn">
            Get in touch
          </Link>
          <a href="/Jimmy-Arikawe-CV.pdf" download className="btn btn-outline">
            Download PDF
          </a>
        </div>
      </section>
    </div>
  );
}
