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
          Product design, backed by research and applied AI.
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
            I’m <span className="text-ink">Jimmy Arikawe</span>, a product
            designer and manager with 7+ years building digital products across
            fintech, enterprise, and emerging AI. I work across the full
            lifecycle — research, interaction design, prototyping, and shipping
            — usually close to engineering.
          </p>
          <p>
            I hold an{" "}
            <span className="text-ink">
              MSc in Artificial Intelligence (Distinction)
            </span>{" "}
            and bring hands-on ML/LLM experience to design work — particularly
            AI interaction patterns, human-in-the-loop systems, and
            conversational interfaces.
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
