"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Share2,
  X,
} from "lucide-react";
import { ReadingProgressBar } from "@/components/ReadingProgressBar";
import type { Project } from "@/data/projects";
import { MEDIA_FRAME } from "@/lib/utils";

interface CaseStudySectionProps {
  project: Project;
  nextProject?: Project;
  prevProject?: Project;
}

/*
 * The type ramps are named rather than repeated: this template renders six
 * chapters plus a fact sheet, and inlining the same four class strings twenty
 * times is how the old version drifted out of the scale.
 */
const HEADING = "text-[17px] font-medium sm:text-[18px] wide:text-[20px]";
const SUBHEADING =
  "text-[16px] font-medium sm:text-[17px] wide:text-[19px]";
const PROSE =
  "text-[17px] leading-6.5 text-muted sm:text-[19px] sm:leading-7 wide:text-[21px] wide:leading-7.5";
const BODY =
  "text-[16px] leading-6 text-soft sm:text-[17px] wide:text-[18px] wide:leading-7";
const META = "text-[13px] font-medium text-dim";
const SECTION = "mt-12 sm:mt-18 wide:mt-30";

/** Media frame: the source captures run 1:1 to 2.75:1, so they letterbox. */
const FRAME =
  "relative block overflow-hidden rounded-2xl bg-frame wide:rounded-[30px]";

export function CaseStudySection({
  project,
  nextProject,
  prevProject,
}: CaseStudySectionProps) {
  const [copiedShare, setCopiedShare] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Consolidate hero + gallery images for lightbox navigation. The hero is
  // usually already inside `gallery`; when it is not it leads the sequence.
  const primaryHero = project.heroImage || project.coverImage;
  const modalImages = project.gallery.includes(primaryHero)
    ? project.gallery
    : [primaryHero, ...project.gallery];
  const heroIndex = Math.max(0, modalImages.indexOf(primaryHero));
  const galleryId = `case-study-gallery-${project.slug}`;

  /* Every field the fact sheet can show, in reading order. */
  const factSheet: { label: string; value: string; note?: string }[] = [
    { label: "Company / Client", value: project.client },
    ...(project.engagement
      ? [{ label: "Engagement", value: project.engagement }]
      : []),
    { label: "Responsibilities", value: project.role, note: project.services },
    { label: "Category", value: project.category },
    { label: "Year", value: project.year },
    ...(project.duration
      ? [{ label: "Duration", value: project.duration }]
      : []),
    { label: "Core Objective", value: project.goal || project.description },
    {
      label: "Measurable Impact",
      value:
        project.outcome ||
        project.metrics.map((m) => `${m.value} ${m.label}`).join(" • "),
    },
  ];

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
    const imageCount = modalImages.length;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === "Escape") setActiveImageIndex(null);
      if (e.key === "ArrowRight" && imageCount > 0) {
        setActiveImageIndex((prev) =>
          prev !== null && prev < imageCount - 1 ? prev + 1 : 0
        );
      }
      if (e.key === "ArrowLeft" && imageCount > 0) {
        setActiveImageIndex((prev) =>
          prev !== null && prev > 0 ? prev - 1 : imageCount - 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex, modalImages.length]);

  const openLightbox = (src: string, fallbackIndex: number) => {
    const index = modalImages.indexOf(src);
    setActiveImageIndex(index === -1 ? fallbackIndex : index);
  };

  return (
    <>
      <ReadingProgressBar />

      <div className="site-col">
        {/* Back link + share / live actions */}
        <div className="mt-20 flex flex-wrap items-center justify-between gap-4 sm:mt-22">
          <Link
            href="/work"
            className={`group inline-flex items-center gap-2 transition-colors hover:text-ink ${META}`}
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Selected Work</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2.5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sml"
              >
                <span>Live Platform</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}

            <button
              type="button"
              onClick={handleShare}
              className="btn btn-outline btn-sml"
              title="Copy case study link"
            >
              {copiedShare ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="h-3.5 w-3.5" />
                  <span>Share</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 1. TITLE + TAGLINE */}
        <header className="mt-8 sm:mt-10">
          <h1 className="font-display text-balance text-[28px] font-medium leading-8.25 sm:text-[34px] sm:leading-9.5 wide:text-[42px] wide:leading-10.75">
            {project.title}
          </h1>

          <p className="mt-3.5 text-[17px] leading-6 text-muted sm:mt-4.5 sm:text-[20px] sm:leading-7 wide:mt-6.25 wide:text-[24px] wide:leading-8">
            {project.tagline}
          </p>
        </header>

        {/*
          2. HERO VISUAL — breaks the 860px column to sit in viewport gutters.
          `max()` keeps the inset non-negative between 900px and 1000px, where
          a bare `calc(50vw - 500px)` would go negative and overflow.
        */}
        <div className="ml-[calc(50%-50vw)] mt-8 w-screen px-6.25 sm:mt-10 sm:px-6 wide:mt-12.5 wide:px-[max(24px,calc(50vw-500px))]">
          <button
            type="button"
            onClick={() => setActiveImageIndex(heroIndex)}
            data-cursor="Expand"
            className={`${FRAME} ${MEDIA_FRAME} w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink`}
          >
            <Image
              src={primaryHero}
              alt={`${project.title} — ${project.tagline}`}
              fill
              sizes="(max-width: 639px) calc(100vw - 50px), (max-width: 899px) calc(100vw - 48px), 1000px"
              /* `priority` is deprecated in Next 16 — see next/dist/docs image.md */
              loading="eager"
              fetchPriority="high"
              className="object-contain"
            />
            <span className="sr-only">
              Expand the {project.title} hero image
            </span>
          </button>
        </div>

        {/* 3. FACT SHEET */}
        <dl className="mt-10 sm:mt-12 wide:mt-15">
          {factSheet.map((row) => (
            <div
              key={row.label}
              className="flex flex-col gap-1 border-t border-rule py-4 sm:flex-row sm:gap-6 sm:py-4.5"
            >
              <dt className="text-[15px] font-medium leading-6.5 text-faint sm:w-[32%] sm:shrink-0 sm:text-[16px] wide:w-52.5">
                {row.label}
              </dt>
              <dd className={`sm:flex-1 ${BODY}`}>
                {row.value}
                {row.note && (
                  <span className="mt-1 block text-[15px] font-medium leading-6.5 text-faint sm:text-[16px]">
                    {row.note}
                  </span>
                )}
              </dd>
            </div>
          ))}
        </dl>

        {/* CHAPTER 01: CONTEXT & MARKET OPPORTUNITY */}
        <section className={SECTION}>
          <p className={`mb-2 ${META}`}>01 / Context &amp; Background</p>
          <h2 className={`mb-3 sm:mb-4 ${HEADING}`}>
            The Landscape &amp; Opportunity
          </h2>
          <p className={PROSE}>{project.overview}</p>
        </section>

        {/* CHAPTER 02: THE CORE CHALLENGE */}
        <section className={SECTION}>
          <p className={`mb-2 ${META}`}>02 / The Core Challenge</p>
          <h2 className={`mb-3 sm:mb-4 ${HEADING}`}>User Anxiety &amp; Friction</h2>
          <p className={PROSE}>{project.challenge}</p>
        </section>

        {/* CHAPTER 03: DESIGN STRATEGY & PRINCIPLES */}
        {project.principles && project.principles.length > 0 && (
          <section className={SECTION}>
            <p className={`mb-2 ${META}`}>03 / Design Principles</p>
            <h2 className={`mb-3 sm:mb-4 ${HEADING}`}>Guiding Foundations</h2>

            <div className="grid gap-7 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-8">
              {project.principles.map((principle, idx) => (
                <div key={principle.title} className="border-t border-rule pt-4">
                  <p className={META}>0{idx + 1}</p>
                  <h3 className={`mt-2 ${SUBHEADING}`}>{principle.title}</h3>
                  <p className={`mt-1.5 ${BODY}`}>{principle.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CHAPTER 04: ARTEFACTS — full width, natural aspect, captioned. */}
        {project.figures && project.figures.length > 0 && (
          <section className={SECTION}>
            <p className={`mb-2 ${META}`}>04 / Systems &amp; Flows</p>
            <h2 className={`mb-3 sm:mb-4 ${HEADING}`}>
              Artefacts &amp; Decisions
            </h2>

            <div className="mt-6 flex flex-col gap-10 sm:gap-14">
              {project.figures.map((figure) => (
                <figure key={figure.src}>
                  {/*
                    Diagrams break out to the viewport edge; annotated screen
                    sets stay in the column. Both keep their own ratio via
                    `h-auto` on an intrinsically-sized image.
                  */}
                  <button
                    type="button"
                    onClick={() => openLightbox(figure.src, 0)}
                    data-cursor="Expand"
                    className={`block w-full overflow-hidden rounded-2xl bg-frame focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink wide:rounded-[24px] ${
                      figure.wide
                        ? "ml-[calc(50%-50vw)] w-screen rounded-none wide:ml-[calc(50%-50vw)] wide:w-screen wide:rounded-none"
                        : ""
                    }`}
                  >
                    <Image
                      src={figure.src}
                      alt={`${project.title} — ${figure.title}`}
                      width={1920}
                      height={1080}
                      sizes={figure.wide ? "100vw" : "(max-width: 899px) 100vw, 860px"}
                      loading="lazy"
                      className="h-auto w-full"
                    />
                    <span className="sr-only">Expand {figure.title}</span>
                  </button>

                  <figcaption className="mt-3 sm:mt-3.5">
                    <span className="block text-[15px] font-medium sm:text-[16px]">
                      {figure.title}
                    </span>
                    <span className={`mt-1 block max-w-[68ch] ${BODY}`}>
                      {figure.caption}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* CHAPTER 04: THE EXPERIENCE & SOLUTION WALKTHROUGH */}
        <section className={SECTION}>
          <p className={`mb-2 ${META}`}>04 / Core Solutions</p>
          <h2 className={`mb-3 sm:mb-4 ${HEADING}`}>The User Experience</h2>
          <p className={`mb-5 sm:mb-6 wide:mb-7.5 ${PROSE}`}>
            {project.solution}
          </p>

          <div className="grid gap-7 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-8">
            {project.features.map((feature) => (
              <div key={feature.title} className="border-t border-rule pt-4">
                <h3 className={SUBHEADING}>{feature.title}</h3>
                <p className={`mt-1.5 ${BODY}`}>{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Visual walkthrough — full-bleed, horizontally snapping */}
          <div className="mt-10 flex flex-wrap items-baseline justify-between gap-2 sm:mt-12">
            <h3 className={SUBHEADING}>
              High-Fidelity Artifacts &amp; Flows
            </h3>
            <p className={META}>
              {project.gallery.length} Screens Documented
            </p>
          </div>

          <div
            id={galleryId}
            role="region"
            aria-label={`Screens from ${project.title}`}
            className="no-scrollbar ml-[calc(50%-50vw)] mt-5 flex w-screen snap-x snap-mandatory gap-2.5 overflow-x-auto overflow-y-hidden pl-6.25 pr-6.25 scroll-pl-6.25 sm:mt-6 sm:gap-3 sm:pl-6 sm:pr-6 sm:scroll-pl-6 wide:mt-7.5 wide:gap-10 wide:pl-[calc(50vw-430px)] wide:pr-[calc(50vw-430px)] wide:scroll-pl-[calc(50vw-430px)]"
          >
            {project.gallery.map((img, idx) => (
              <button
                key={`${img}-${idx}`}
                type="button"
                onClick={() => openLightbox(img, idx)}
                data-cursor="Expand"
                className={`${FRAME} ${MEDIA_FRAME} w-[82vw] shrink-0 snap-start focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink sm:w-[80vw] wide:w-215`}
              >
                <Image
                  src={img}
                  alt={`${project.title} screen ${idx + 1}`}
                  fill
                  sizes="(max-width: 639px) 82vw, (max-width: 899px) 80vw, 860px"
                  loading="lazy"
                  className="object-contain"
                />
                <span className="sr-only">
                  Expand screen {idx + 1} of {project.gallery.length}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* CHAPTER 05: DESIGN SYSTEM & CRAFT */}
        <section className={SECTION}>
          <p className={`mb-2 ${META}`}>05 / System &amp; Craft</p>
          <h2 className={`mb-3 sm:mb-4 ${HEADING}`}>Component Architecture</h2>
          <p className={PROSE}>{project.designSystem}</p>
        </section>

        {/* CHAPTER 06: RESULTS, IMPACT & TAKEAWAYS */}
        <section className={SECTION}>
          <p className={`mb-2 ${META}`}>06 / Outcomes &amp; Impact</p>
          <h2 className={`mb-3 sm:mb-4 ${HEADING}`}>Measurable Results</h2>

          <dl
            className={`grid grid-cols-2 gap-x-6 gap-y-7 ${
              project.metrics.length <= 2
                ? "sm:grid-cols-2"
                : project.metrics.length === 3
                  ? "sm:grid-cols-3"
                  : "sm:grid-cols-4"
            }`}
          >
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex flex-col-reverse gap-1 border-t border-rule pt-4"
              >
                <dt className={META}>{metric.label}</dt>
                <dd className="text-[24px] font-medium leading-7 text-ink sm:text-[26px] sm:leading-8 wide:text-[30px] wide:leading-9">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 sm:mt-12">
            <h3 className={SUBHEADING}>
              Key Retrospective &amp; Product Learnings
            </h3>
            <p className={`mt-2 ${BODY}`}>{project.takeaways}</p>
          </div>

          {project.roadmap && project.roadmap.length > 0 && (
            <div className="mt-9 sm:mt-10">
              <h3 className={SUBHEADING}>
                Future Roadmap &amp; Next Iterations
              </h3>
              <ul className="mt-2">
                {project.roadmap.map((item) => (
                  <li
                    key={item}
                    className={`mb-2 flex gap-2.5 last:mb-0 ${BODY}`}
                  >
                    <span aria-hidden="true" className="text-faint">
                      →
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* 4. CONTACT CTA — placed at the point of peak conviction. */}
        <section className={`${SECTION} border-t border-rule pt-10 sm:pt-12`}>
          <h2 className={HEADING}>Interested in working together?</h2>
          <p className={`mt-2 max-w-[52ch] ${BODY}`}>
            I&apos;m open to Senior Product Design and Design Engineering roles,
            and happy to walk through the decisions behind this project in more
            detail.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="btn">
              Get in touch
            </Link>
            <Link href="/resume" className="btn btn-outline">
              View résumé
            </Link>
          </div>
        </section>

        {/* 5. PREVIOUS / NEXT CASE STUDY */}
        {(prevProject || nextProject) && (
          <nav
            aria-label="More case studies"
            className={`grid gap-9 sm:grid-cols-2 sm:gap-6 ${SECTION}`}
          >
            {[
              {
                label: "Previous Case Study",
                target: prevProject,
                forward: false,
              },
              { label: "Next Case Study", target: nextProject, forward: true },
            ].map(({ label, target, forward }) =>
              target ? (
                <Link
                  key={label}
                  href={`/work/${target.slug}`}
                  data-cursor="View project ↗"
                  className="group block"
                >
                  <span className={`block ${META}`}>{label}</span>

                  <span className={`${FRAME} ${MEDIA_FRAME} mt-3 w-full`}>
                    <Image
                      src={target.coverImage}
                      alt={target.title}
                      fill
                      sizes="(max-width: 639px) calc(100vw - 50px), (max-width: 899px) 44vw, 418px"
                      loading="lazy"
                      className="object-contain"
                    />
                  </span>

                  <span className="mt-3 flex items-center gap-2 text-[16px] leading-5.5 transition-colors group-hover:text-muted sm:text-[17px] wide:text-[20px] wide:leading-normal">
                    {target.title}
                    {forward ? (
                      <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                    ) : (
                      <ArrowLeft className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-x-1" />
                    )}
                  </span>

                  <span className={`mt-1 block ${BODY}`}>{target.tagline}</span>
                </Link>
              ) : null
            )}
          </nav>
        )}
      </div>

      {/* FULLSCREEN LIGHTBOX — always dark, so it carries its own palette. */}
      <AnimatePresence>
        {activeImageIndex !== null && modalImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex select-none flex-col justify-between bg-black/95 p-4 backdrop-blur-md sm:p-8"
            onClick={() => setActiveImageIndex(null)}
          >
            {/* Top Lightbox Bar */}
            <div
              className="z-10 flex items-center justify-between gap-4 text-[13px] font-medium text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-wrap items-center gap-2.5">
                <span>{project.title}</span>
                <span className="text-white/40">•</span>
                <span className="text-white/60">
                  Artifact {activeImageIndex + 1} of {modalImages.length}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden text-white/50 sm:inline">
                  Use ← → keys to navigate • Esc to close
                </span>
                <button
                  type="button"
                  onClick={() => setActiveImageIndex(null)}
                  className="btn btn-invert btn-sml"
                  aria-label="Close modal"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Central Modal Image */}
            <div
              className="relative my-auto flex h-[75vh] w-full items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={modalImages[activeImageIndex]}
                alt={`${project.title} artifact ${activeImageIndex + 1}`}
                fill
                sizes="100vw"
                loading="eager"
                fetchPriority="high"
                className="object-contain"
              />
            </div>

            {/* Bottom Controls */}
            <div
              className="z-10 mx-auto flex w-full max-w-96 items-center justify-between text-[13px] font-medium text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() =>
                  setActiveImageIndex((prev) =>
                    prev !== null && prev > 0 ? prev - 1 : modalImages.length - 1
                  )
                }
                className="btn btn-invert btn-sml"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Prev</span>
              </button>

              <div className="no-scrollbar flex max-w-40 gap-1.5 overflow-x-auto py-1">
                {modalImages.map((src, i) => (
                  <button
                    key={`${src}-${i}`}
                    type="button"
                    onClick={() => setActiveImageIndex(i)}
                    className={`h-2 shrink-0 rounded-full transition-all ${
                      i === activeImageIndex
                        ? "w-5 bg-white"
                        : "w-2 bg-white/30 hover:bg-white/60"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() =>
                  setActiveImageIndex((prev) =>
                    prev !== null && prev < modalImages.length - 1 ? prev + 1 : 0
                  )
                }
                className="btn btn-invert btn-sml"
                aria-label="Next image"
              >
                <span>Next</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
