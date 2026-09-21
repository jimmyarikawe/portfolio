import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { AvailabilityInterlude } from "@/components/AvailabilityInterlude";
import { ExperienceList } from "@/components/ExperienceList";
import { StackList } from "@/components/StackList";
import { MEDIA_FRAME } from "@/lib/utils";

/*
 * Ordered for a reader who is deciding, in under a minute, whether to keep
 * going: one claim, then borrowed credibility, then the work, with the three
 * strongest projects at full size and the rest as a compact grid, so nothing is
 * hidden but everything is not equally loud.
 *
 * The bio used to appear three times (here, in an "About me" section further
 * down, and again on /about). It now appears once.
 */
const featured = projects.filter((p) => p.featured);
const rest = projects.filter((p) => !p.featured);

export default function HomePage() {
  return (
    <div className="site-col">
      {/* 1. INTRO */}
      <section className="mt-20 sm:mt-22">
        <h1 className="font-display text-balance text-[28px] font-medium leading-8.25 sm:text-[34px] sm:leading-9.5 wide:text-[42px] wide:leading-10.75">
          I design and build products where being wrong is expensive.
        </h1>

        {/*
          58ch rather than 54: at the display size the narrower measure pushed
          the closing word onto a line of its own. `text-pretty` alone did not
          resolve it.
        */}
        <p className="mt-3.5 max-w-[58ch] text-pretty text-[17px] leading-6 text-muted sm:mt-4.5 sm:text-[20px] sm:leading-7 wide:mt-6.25 wide:text-[24px] wide:leading-8">
          I&apos;m <span className="text-ink">Jimmy Arikawe</span>, a Senior
          Product Designer and design engineer. Seven years across cross-border
          payments, operations and AI. I map the system before the screen, and
          still write the front-end that ships.
        </p>

        <div className="mt-7 flex flex-wrap gap-3 sm:mt-8">
          <Link href="/work" className="btn">
            View selected work
          </Link>
          <Link href="/resume" className="btn btn-outline">
            Résumé
          </Link>
        </div>
      </section>

      {/* 2. FEATURED WORK */}
      <section className="mt-20 sm:mt-24 wide:mt-30">
        <div className="mb-3.5 flex items-baseline justify-between gap-4 sm:mb-4.5 wide:mb-6.5">
          <h2 className="text-[17px] font-medium sm:text-[18px] wide:text-[20px]">
            Selected Work
          </h2>
          <Link
            href="/work"
            className="text-[15px] text-muted transition-colors hover:text-ink sm:text-[16px]"
          >
            All six projects →
          </Link>
        </div>

        {featured.map((project, index) => (
          <ProjectShowcase
            key={project.id}
            project={project}
            eager={index === 0}
          />
        ))}
      </section>

      {/* 3. THE REST, present, indexed, but not competing for the same weight. */}
      <section className="mt-4 sm:mt-6">
        <h2 className="mb-4 text-[17px] font-medium sm:mb-5 sm:text-[18px] wide:text-[20px]">
          More work
        </h2>

        <div className="grid gap-x-6 gap-y-9 sm:grid-cols-2">
          {rest.map((project) => (
            <Link
              key={project.id}
              href={`/work/${project.slug}`}
              data-cursor="View case study ↗"
              className="group block"
            >
              <span
                className={`relative block ${MEDIA_FRAME} w-full overflow-hidden rounded-2xl bg-frame`}
              >
                <Image
                  src={project.coverImage}
                  alt={`${project.title}: ${project.tagline}`}
                  fill
                  sizes="(max-width: 639px) calc(100vw - 50px), (max-width: 899px) calc(50vw - 32px), 418px"
                  loading="lazy"
                  className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
              </span>

              <span className="mt-3 flex items-baseline justify-between gap-4">
                <span className="text-[16px] font-medium leading-6 transition-colors group-hover:text-muted sm:text-[17px]">
                  {project.title}
                </span>
                <span className="badge shrink-0">{project.category}</span>
              </span>

              <span className="mt-1 block text-[15px] leading-6 text-soft">
                {project.tagline}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. DESIGNER WHO CODES, grounded in the projects above. */}
      <section className="mt-20 border-t border-rule pt-10 sm:mt-24 sm:pt-12 wide:mt-30">
        <h2 className="text-[17px] font-medium sm:text-[18px] wide:text-[20px]">
          I ship the front-end too
        </h2>

        <div className="mt-3 max-w-[62ch] [&>p]:mb-4 [&>p]:text-[17px] [&>p]:leading-6.5 [&>p]:text-muted sm:[&>p]:text-[19px] sm:[&>p]:leading-7">
          <p>
            Design that stops at handoff loses the argument at implementation. I
            write TypeScript and React, so an interaction gets tested against a
            real API before anyone commits to building it.
          </p>
          <p>
            That matters most when the interface depends on something you
            can&apos;t mock. A transfer that has to show the exact rate before
            the PIN screen, and never move it after. A door scanner that keeps
            working when the venue&apos;s Wi-Fi drops. A model that takes four
            seconds to return its first token, or returns something confidently
            wrong. I build against the real thing and design the failure states
            from what actually comes back.
          </p>
        </div>
      </section>

      {/* 5. EXPERIENCE + STACK */}
      <div className="mt-16 flex flex-col sm:mt-20 sm:flex-row sm:justify-between sm:gap-6 wide:mt-24">
        <div className="sm:w-[62%] wide:w-145">
          <ExperienceList />
        </div>

        <div className="mt-9 sm:mt-0 sm:w-[32%] wide:w-52.5">
          <StackList />
        </div>
      </div>

      {/* 6. CLOSING CTA */}
      <AvailabilityInterlude />
    </div>
  );
}
