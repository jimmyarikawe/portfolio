import Link from "next/link";
import { projects } from "@/data/projects";

/**
 * A compact index of every case study. The home page already renders each
 * project in full as an expandable gallery, so this page deliberately stays a
 * plain list of rows — title and tagline on the left, the project's first few
 * categories in a right-aligned tag column, matching ProjectShowcase.
 */
export default function WorkPage() {
  return (
    <div className="site-col">
      <section className="mt-20 sm:mt-22">
        <h1 className="font-display text-balance text-[28px] font-medium leading-8.25 sm:text-[34px] sm:leading-9.5 wide:text-[42px] wide:leading-10.75">
          Work
        </h1>

        <p className="mt-3.5 text-[17px] leading-6 text-muted sm:mt-4.5 sm:text-[20px] sm:leading-7 wide:mt-6.25 wide:text-[24px] wide:leading-8">
          Mission-critical product design across complex systems, fintech, and AI-native software.
        </p>
      </section>

      <section className="mt-12 sm:mt-18 wide:mt-30">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/work/${project.slug}`}
            data-cursor="View project ↗"
            className="group mb-7 flex flex-col gap-2 wide:mb-9 sm:flex-row sm:justify-between sm:gap-6"
          >
            <div>
              <p className="text-[16px] leading-5.5 transition-colors group-hover:text-muted sm:text-[17px] wide:text-[20px] wide:leading-normal">
                {project.title}
              </p>
              <p className="mt-1 text-[13px] font-medium text-dim sm:mt-1.5">
                {project.tagline}
              </p>
            </div>

            {/*
              Only the primary category here. A full four-deep tag stack, as on
              the home page's showcases, would make every row taller than its
              own content and leave the title stranded in whitespace.
            */}
            <div className="sm:w-40 sm:shrink-0 sm:text-right">
              <p className="text-[15px] font-medium leading-6.5 text-faint sm:text-[16px]">
                {project.category}
              </p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
