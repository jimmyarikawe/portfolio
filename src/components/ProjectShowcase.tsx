"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { MEDIA_FRAME } from "@/lib/utils";

interface ProjectShowcaseProps {
  project: Project;
  /** Marks the first showcase on the page, whose cover is the likely LCP element. */
  eager?: boolean;
}

/**
 * A full-width project entry: an image gallery above, then the title,
 * description and CTAs on the left with a right-aligned column of tags.
 *
 * The gallery has two states. Closed (wide screens only) it shows just the
 * cover at column width. Opened — or on any screen below 900px, where a lone
 * cover would waste the space — it breaks out to the full viewport width and
 * becomes a horizontally snapping scroller of every image.
 *
 * Breakpoints track the 860px column rather than Tailwind's `md`: the
 * `calc(50vw - 430px)` inset that aligns the first image with the column only
 * has a non-negative value once the viewport clears 860px.
 */
export function ProjectShowcase({ project, eager = false }: ProjectShowcaseProps) {
  const [open, setOpen] = useState(false);

  // coverImage is usually gallery[0], but not on every project — dedupe so the
  // cover always leads and never appears twice.
  const images = [...new Set([project.coverImage, ...project.gallery])];
  const galleryId = `project-gallery-${project.slug}`;
  const tags = project.categories.slice(0, 4);

  return (
    <article className="mb-30 last:mb-0 wide:mb-50">
      <div
        id={galleryId}
        role="region"
        aria-label={`Images of ${project.title}`}
        className={`no-scrollbar mb-5 ml-[calc(50%-50vw)] flex w-screen snap-x snap-mandatory gap-2.5 overflow-x-auto overflow-y-hidden pl-6.25 pr-6.25 scroll-pl-6.25 sm:gap-3 sm:pl-6 sm:pr-6 sm:scroll-pl-6 wide:mb-10 wide:gap-10 ${
          open
            ? "wide:pl-[calc(50vw-430px)] wide:pr-[calc(50vw-430px)] wide:scroll-pl-[calc(50vw-430px)]"
            : "wide:ml-0 wide:w-full wide:overflow-hidden wide:px-0"
        }`}
      >
        {images.map((src, index) => {
          const isCover = index === 0;

          return (
            <figure
              key={src}
              className={`relative ${MEDIA_FRAME} w-[82vw] shrink-0 snap-start overflow-hidden rounded-2xl bg-frame sm:w-[80vw] sm:rounded-[20px] wide:w-215 wide:rounded-[30px] ${
                isCover || open ? "" : "wide:hidden"
              }`}
            >
              <Image
                src={src}
                alt={
                  isCover
                    ? `${project.title} — ${project.tagline}`
                    : `${project.title}, image ${index + 1}`
                }
                fill
                sizes="(max-width: 639px) 82vw, (max-width: 899px) 80vw, 860px"
                loading={eager && isCover ? "eager" : "lazy"}
                fetchPriority={eager && isCover ? "high" : "auto"}
                /*
                 * Source captures range from 1:1 to 2.75:1, so `cover` would
                 * crop the taller ones past the point of being readable.
                 * `contain` letterboxes them onto the frame ground instead —
                 * which is what that background colour is there for.
                 */
                className="object-contain"
              />

              {/*
                Only the cover expands the gallery, and only from 900px up —
                below that every image is already on screen.
              */}
              {isCover && (
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  aria-expanded={open}
                  aria-controls={galleryId}
                  data-cursor="See more"
                  className={`absolute inset-0 h-full w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink ${
                    open
                      ? "pointer-events-none"
                      : "pointer-events-none wide:pointer-events-auto"
                  }`}
                >
                  <span className="sr-only">
                    Show more images of {project.title}
                  </span>
                </button>
              )}
            </figure>
          );
        })}
      </div>

      <div className="flex flex-col gap-7 sm:flex-row sm:justify-between sm:gap-10">
        <div className="sm:max-w-110">
          <h3 className="text-[16px] font-medium sm:text-[17px] wide:text-[19px]">
            {project.title}
          </h3>

          <p className="mt-1 text-[16px] leading-6 text-soft sm:text-[17px] wide:text-[18px] wide:leading-7">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={`/work/${project.slug}`} className="btn">
              View case study
            </Link>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener"
                className="btn btn-outline"
              >
                Visit {project.title}
              </a>
            )}

            {images.length > 1 && (
              <button
                type="button"
                onClick={() => setOpen((wasOpen) => !wasOpen)}
                aria-expanded={open}
                aria-controls={galleryId}
                className="btn btn-outline hidden wide:inline-flex"
              >
                {open ? "Show less" : "See more"}
              </button>
            )}
          </div>
        </div>

        <div className="sm:w-40 sm:shrink-0 sm:text-right">
          {tags.map((tag) => (
            <p
              key={tag}
              className="text-[15px] font-medium leading-6.5 text-faint sm:text-[16px]"
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}
