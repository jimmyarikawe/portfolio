import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { MEDIA_FRAME } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Work — Jimmy Arikawe",
  description:
    "Case studies in cross-border payments, enterprise operations, AI security and event software — the problem, the decisions, and what shipped.",
};

/*
 * This is the first nav item and the most likely first click, so it leads with
 * covers rather than the text list it used to be: a recruiter arriving here was
 * previously shown seven grey rows and no evidence of design ability at all.
 *
 * Every project stays on this page — the home page features three, this is the
 * complete index.
 */
export default function WorkPage() {
  return (
    <div className="site-col">
      <section className="mt-20 sm:mt-22">
        <h1 className="font-display text-balance text-[28px] font-medium leading-8.25 sm:text-[34px] sm:leading-9.5 wide:text-[42px] wide:leading-10.75">
          Work
        </h1>

        <p className="mt-3.5 max-w-[46ch] text-[17px] leading-6 text-muted sm:mt-4.5 sm:text-[20px] sm:leading-7 wide:mt-6.25 wide:text-[24px] wide:leading-8">
          Six products across payments, enterprise operations, AI and events.
          Each case study covers the problem, the decisions, and what shipped.
        </p>
      </section>

      <section className="mt-12 grid gap-x-6 gap-y-12 sm:mt-16 sm:grid-cols-2 wide:mt-20 wide:gap-y-16">
        {projects.map((project, index) => (
          <Link
            key={project.id}
            href={`/work/${project.slug}`}
            data-cursor="View case study ↗"
            className="group block"
          >
            <span
              className={`relative block ${MEDIA_FRAME} w-full overflow-hidden rounded-2xl bg-frame wide:rounded-3xl`}
            >
              <Image
                src={project.coverImage}
                alt={`${project.title} — ${project.tagline}`}
                fill
                sizes="(max-width: 639px) calc(100vw - 50px), (max-width: 899px) calc(50vw - 32px), 418px"
                loading={index < 2 ? "eager" : "lazy"}
                className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              />
            </span>

            <span className="mt-4 flex items-baseline justify-between gap-4">
              <span className="text-[17px] font-medium leading-6 transition-colors group-hover:text-muted sm:text-[18px] wide:text-[20px]">
                {project.title}
              </span>
              <span className="badge shrink-0">{project.category}</span>
            </span>

            <span className="mt-1.5 block text-[15px] leading-6 text-soft sm:text-[16px]">
              {project.tagline}
            </span>

            {/*
              One number per card. The full set lives in the case study; here it
              is doing the job of a reason to click.
            */}
            {project.metrics[0] && (
              <span className="mt-3 flex items-baseline gap-2">
                <span className="text-[16px] font-medium text-ink">
                  {project.metrics[0].value}
                </span>
                <span className="text-[13px] font-medium text-dim">
                  {project.metrics[0].label}
                </span>
              </span>
            )}
          </Link>
        ))}
      </section>

      <section className="mt-16 border-t border-rule pt-10 sm:mt-20 sm:pt-12">
        <h2 className="text-[17px] font-medium sm:text-[18px] wide:text-[20px]">
          Want the detail behind any of these?
        </h2>
        <p className="mt-2 max-w-[52ch] text-[16px] leading-6 text-soft sm:text-[17px] wide:text-[18px] wide:leading-7">
          I&apos;m open to Senior Product Design and Design Engineering roles,
          and happy to walk
          through the research, the trade-offs and the things that didn&apos;t
          work.
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
    </div>
  );
}
