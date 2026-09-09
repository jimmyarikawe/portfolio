import Link from "next/link";
import Image from "next/image";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ServicesGrid } from "@/components/ServicesGrid";

export default function AboutPage() {
  return (
    <div className="site-col">
      {/* 1. INTRO */}
      <section className="mt-20 sm:mt-22">
        <h1 className="font-display text-balance text-[28px] font-medium leading-8.25 sm:text-[34px] sm:leading-9.5 wide:text-[42px] wide:leading-10.75">
          Designing mission-critical software where business complexity, deep interaction architecture, and emerging AI intersect.
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

        <div className="mt-8 sm:mt-10 wide:mt-12.5 [&>p]:mb-5 [&>p]:text-[17px] [&>p]:leading-6.5 [&>p]:text-muted sm:[&>p]:mb-6 sm:[&>p]:text-[19px] sm:[&>p]:leading-7 wide:[&>p]:mb-7.5 wide:[&>p]:text-[21px] wide:[&>p]:leading-7.5">
          <p>
            I’m <span className="text-ink">Jimmy Arikawe</span> — a Lead / Staff Product Designer with strategic domain authority across enterprise fintech, cybersecurity, and intelligent systems.
          </p>
          <p>
            With pedigree spanning <span className="text-ink">Pentagram</span>, <span className="text-ink">Radical Company</span>, and <span className="text-ink">Omits</span>, I lead product design across the complete lifecycle — from zero-to-one product framing and deep interaction architecture to high-fidelity prototypes and production implementation.
          </p>
          <p>
            I bring deep technical fluency to AI interaction design — mastering model evals, non-deterministic latency, agentic workflows, and human-in-the-loop systems. Backed by an{" "}
            <span className="text-ink">
              MSc in Artificial Intelligence (Distinction)
            </span>{" "}
            from the University of Strathclyde, I translate complex neural capabilities into rigorous, intuitive software.
          </p>
        </div>

        <div>
          <p className="text-[16px] leading-5.5 sm:text-[17px] wide:text-[20px] wide:leading-normal">
            MSc in Artificial Intelligence &amp; Applications
          </p>
          <p className="mt-1 text-[13px] font-medium text-dim sm:mt-1.5">
            Postgraduate Degree with Distinction · University of Strathclyde
            (Glasgow, Scotland).
          </p>
        </div>

        <div className="mt-7 flex flex-wrap gap-3 sm:mt-8">
          <Link href="/contact" className="btn">
            Get in Touch
          </Link>

          <a
            href="mailto:hi@jimmyarikawe.com?subject=Inquiry"
            className="btn btn-outline"
          >
            Direct Email
          </a>
        </div>
      </section>

      {/* 2. EXPERIENCE & EDUCATION */}
      <section className="mt-12 sm:mt-18 wide:mt-30">
        <ExperienceTimeline />
      </section>

      {/* 3. TECHNICAL SKILLS & DISCIPLINES */}
      <section className="mt-12 sm:mt-18 wide:mt-30">
        <h2 className="mb-3 text-[17px] font-medium sm:mb-4 sm:text-[18px] wide:text-[20px]">
          Skills &amp; Tools
        </h2>

        <ServicesGrid />
      </section>
    </div>
  );
}
