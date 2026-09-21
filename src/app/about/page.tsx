import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ServicesGrid } from "@/components/ServicesGrid";

export const metadata: Metadata = {
  title: "About · Jimmy Arikawe",
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
    body: "Most interface confusion is really data confusion, two screens reading two sources and disagreeing. I'd rather fix the model than add a warning message.",
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

        {/*
          Short paragraphs, one idea each, with the companies marked inline and
          a real number beside each one. Every figure here comes from the CV or
          the project decks, nothing is placeholder.
        */}
        <div className="mt-8 max-w-[62ch] sm:mt-10 wide:mt-12.5 [&>p]:mb-5 [&>p]:text-[17px] [&>p]:leading-7 [&>p]:text-muted sm:[&>p]:mb-6 sm:[&>p]:text-[19px] sm:[&>p]:leading-8 wide:[&>p]:mb-7 wide:[&>p]:text-[21px] wide:[&>p]:leading-9">
          <p>
            I&apos;m <span className="text-ink">Jimmy Arikawe</span>. A designer
            who writes the code too, because a design that can&apos;t survive
            implementation was never really a design.
          </p>
          <p>
            Seven years between product and engineering, mostly on systems where
            being wrong costs money. Long enough to know that most interface
            problems are really data problems. The rest of the job is proving
            that to the room, usually more than once.
          </p>
          <p>
            My work has lived in the messy middle: between design and
            engineering, between what the brief says and what the system will
            actually allow. <span className="mark">Omits</span>, 500+ beta
            users across four corridors.{" "}
            <span className="mark">Recyclan</span>, operations across 14+
            countries. <span className="mark">Engage</span>, 50% lift in
            satisfaction. <span className="mark">Filmhouse</span>, 400% more
            online bookings.
          </p>
          <p>
            Currently Senior Product Designer at{" "}
            <span className="mark">Radical Company</span>. Before that, Product
            Lead at Omits, and enterprise interfaces at{" "}
            <span className="mark">Pentagram</span>.
          </p>
          <p>
            I studied electrical engineering first, then went back for an{" "}
            <span className="text-ink">MSc in Artificial Intelligence</span> at{" "}
            <a
              href="https://www.strath.ac.uk"
              target="_blank"
              rel="noopener"
              className="prose-link"
            >
              Strathclyde
            </a>
            . Designing for models I didn&apos;t understand felt like guessing.
          </p>
          <p>
            These days I&apos;m drawn to the parts that aren&apos;t figured out
            yet: AI, payments, operational tooling. Places where design still
            has something real to say.
          </p>
          <p className="text-ink!">
            If you&apos;re building something where being wrong is expensive, I
            want to be part of it.
          </p>
        </div>

        <div className="mt-7 flex flex-wrap gap-3 sm:mt-8">
          <a href="mailto:hi@jimmyarikawe.com" className="btn">
            hi@jimmyarikawe.com
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
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
