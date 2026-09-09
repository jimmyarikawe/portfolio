import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ServicesGrid } from "@/components/ServicesGrid";

export const metadata: Metadata = {
  title: "About — Jimmy Arikawe",
  description:
    "Electrical engineer turned product designer, with an MSc in Artificial Intelligence. Seven years, eight teams, and the through-line between them.",
};

/*
 * This page used to open with the same three paragraphs as the home page, so a
 * reader who clicked through from there learned nothing new in the first
 * screen. It now carries the one thing only this page can: the arc.
 */
const PRINCIPLES = [
  {
    title: "Prototype in code, not in slides",
    body: "A static artboard can't show you what four seconds of latency feels like, or what a model returning something confidently wrong does to a flow. I build the thing and find out.",
  },
  {
    title: "Design the failure state first",
    body: "Most products are pleasant when everything works. The design that matters is what happens at a declined payment, a duplicate scan, a dropped connection at the door of a venue.",
  },
  {
    title: "One record, everywhere",
    body: "Most interface confusion is really data confusion — two screens reading two sources and disagreeing. I'd rather fix the model than add a warning message.",
  },
];

export default function AboutPage() {
  return (
    <div className="site-col">
      {/* 1. INTRO */}
      <section className="mt-20 sm:mt-22">
        <h1 className="font-display text-balance text-[28px] font-medium leading-8.25 sm:text-[34px] sm:leading-9.5 wide:text-[42px] wide:leading-10.75">
          An engineer who became a designer, and never fully stopped being an
          engineer.
        </h1>

        {/*
          The source file is a 4:5 portrait in a 4:5 box, so `cover` never
          crops. Width is capped so the frame doesn't tower over the 860px
          column at full height.
        */}
        <div className="relative mt-8 aspect-4/5 w-full overflow-hidden rounded-2xl bg-frame sm:mt-10 sm:w-95 wide:mt-12.5 wide:rounded-[30px]">
          <Image
            src="/images/about/portrait.png"
            alt="Jimmy Arikawe"
            fill
            sizes="(max-width: 639px) 100vw, 380px"
            loading="eager"
            fetchPriority="high"
            className="object-cover"
          />
        </div>

        <div className="mt-8 max-w-[62ch] sm:mt-10 wide:mt-12.5 [&>p]:mb-5 [&>p]:text-[17px] [&>p]:leading-6.5 [&>p]:text-muted sm:[&>p]:mb-6 sm:[&>p]:text-[19px] sm:[&>p]:leading-7 wide:[&>p]:mb-7.5 wide:[&>p]:text-[21px] wide:[&>p]:leading-7.5">
          <p>
            I studied{" "}
            <span className="text-ink">
              electrical and electronics engineering
            </span>{" "}
            at the University of Lagos, and the first thing I designed
            professionally was a cinema booking flow. What followed has stayed
            in roughly the same territory ever since: B2B analytics tools, an
            operational data platform running across 14+ countries, and then
            cross-border payments — systems where being wrong has a cost
            somebody can measure.
          </p>
          <p>
            The{" "}
            <span className="text-ink">
              MSc in Artificial Intelligence (Distinction)
            </span>{" "}
            at{" "}
            <a
              href="https://www.strath.ac.uk"
              target="_blank"
              rel="noopener"
              className="prose-link"
            >
              Strathclyde
            </a>{" "}
            came out of that work rather than away from it. Designing for
            machine learning without understanding it produces confident,
            plausible, wrong software — so I went and learned the maths. Deep
            learning, ML for data analytics, AI for finance, and a research
            project detecting plant disease from images.
          </p>
          <p>
            Today I&apos;m a{" "}
            <span className="text-ink">Senior Product Designer</span> at{" "}
            <span className="text-ink">Radical Company</span>, having previously
            led product design at <span className="text-ink">Omits</span> and
            designed for enterprise technology clients at{" "}
            <span className="text-ink">Pentagram</span>. I still write the
            front-end.
          </p>
        </div>

        <div className="mt-7 flex flex-wrap gap-3 sm:mt-8">
          <Link href="/contact" className="btn">
            Get in touch
          </Link>
          <Link href="/resume" className="btn btn-outline">
            Résumé
          </Link>
        </div>
      </section>

      {/* 2. HOW I WORK */}
      <section className="mt-12 sm:mt-18 wide:mt-30">
        <h2 className="mb-4 text-[17px] font-medium sm:mb-5 sm:text-[18px] wide:text-[20px]">
          How I work
        </h2>

        <dl className="grid gap-7 sm:grid-cols-3 sm:gap-6">
          {PRINCIPLES.map((principle) => (
            <div key={principle.title} className="border-t border-rule pt-4">
              <dt className="text-[16px] font-medium leading-6 sm:text-[17px]">
                {principle.title}
              </dt>
              <dd className="mt-2 text-[15px] leading-6 text-soft sm:text-[16px] sm:leading-6.5">
                {principle.body}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 3. EXPERIENCE & EDUCATION */}
      <section className="mt-12 sm:mt-18 wide:mt-30">
        <ExperienceTimeline />
      </section>

      {/* 4. TECHNICAL SKILLS & DISCIPLINES */}
      <section className="mt-12 sm:mt-18 wide:mt-30">
        <h2 className="mb-3 text-[17px] font-medium sm:mb-4 sm:text-[18px] wide:text-[20px]">
          Skills &amp; Tools
        </h2>

        <ServicesGrid />
      </section>
    </div>
  );
}
