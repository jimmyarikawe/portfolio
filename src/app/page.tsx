import Link from "next/link";
import { projects } from "@/data/projects";
import { articles } from "@/data/articles";
import { achievements } from "@/data/profile";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { AvailabilityInterlude } from "@/components/AvailabilityInterlude";
import { ExperienceList } from "@/components/ExperienceList";
import { StackList } from "@/components/StackList";
import { SocialLinks } from "@/components/SocialLinks";

export default function HomePage() {
  return (
    <div className="site-col">
      {/* 1. INTRO */}
      <section className="mt-20 sm:mt-22">
        <h1 className="font-display text-balance text-[28px] font-medium leading-8.25 sm:text-[34px] sm:leading-9.5 wide:text-[42px] wide:leading-10.75">
          Product Designer &amp; Manager at the intersection of craft, code
          &amp; AI.
        </h1>

        <p className="mt-3.5 text-[17px] leading-6 text-muted sm:mt-4.5 sm:text-[20px] sm:leading-7 wide:mt-6.25 wide:text-[24px] wide:leading-8">
          I’m <span className="text-ink">Jimmy Arikawe</span>. With 7+ years
          across fintech, cybersecurity and enterprise systems — backed by an
          MSc in Artificial Intelligence (Distinction) — I lead products from
          zero-to-one strategy and interaction architecture to production code
          and human-in-the-loop AI.
        </p>
      </section>

      {/* 2. PROJECTS */}
      <section className="mt-25 sm:mt-30">
        <h2 className="mb-3.5 text-[17px] font-medium sm:mb-4.5 sm:text-[18px] wide:mb-6.5 wide:text-[20px]">
          Selected Work
        </h2>

        {projects.map((project, index) => (
          <ProjectShowcase
            key={project.id}
            project={project}
            eager={index === 0}
          />
        ))}
      </section>

      {/* 3. AVAILABILITY INTERLUDE */}
      <AvailabilityInterlude />

      {/* 4. ABOUT */}
      <section>
        <h2 className="mb-3 text-[17px] font-medium sm:mb-4 sm:text-[18px] wide:text-[20px]">
          About me
        </h2>

        <div className="[&>p]:mb-5 [&>p]:text-[17px] [&>p]:leading-6.5 [&>p]:text-muted sm:[&>p]:mb-6 sm:[&>p]:text-[19px] sm:[&>p]:leading-7 wide:[&>p]:mb-7.5 wide:[&>p]:text-[21px] wide:[&>p]:leading-7.5">
          <p>
            I’m a product designer and manager with 7+ years building digital
            products across fintech, enterprise and emerging AI. I work across
            the full lifecycle — research, interaction design, prototyping and
            shipping — usually close to engineering.
          </p>
          <p>
            I hold an MSc in Artificial Intelligence &amp; Applications, passed
            with Distinction, from the{" "}
            <a
              href="https://www.strath.ac.uk"
              target="_blank"
              rel="noopener"
              className="prose-link"
            >
              University of Strathclyde
            </a>
            , and bring hands-on ML and LLM experience to design work —
            particularly AI interaction patterns, human-in-the-loop systems and
            conversational interfaces.
          </p>
          <p>
            I’m currently a Product Designer, Researcher &amp; Manager at
            Radical Company, leading design and research across client
            engagements from early concept through to high-fidelity prototype.
          </p>
          <p>
            Before that I led product design at Omits Technology on a
            cross-border payments platform, and at Recyclan on an operational
            data platform used across 14+ countries. I’ve also published{" "}
            <Link
              href="/journal/tech-driven-solutions-for-africas-waste-problem"
              className="prose-link"
            >
              research on tech-driven solutions for Africa’s waste problem
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 5. EXPERIENCE + STACK */}
      <div className="mt-10 flex flex-col sm:mt-14 sm:flex-row sm:justify-between sm:gap-6 wide:mt-22.5">
        <div className="sm:w-[62%] wide:w-145">
          <ExperienceList />
        </div>

        <div className="mt-9 sm:mt-0 sm:w-[32%] wide:w-52.5">
          <StackList />
        </div>
      </div>

      {/* 6. WRITING */}
      <section className="mt-12 sm:mt-18 wide:mt-30">
        <h2 className="mb-3 text-[17px] font-medium sm:mb-4 sm:text-[18px] wide:text-[20px]">
          Writing
        </h2>

        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/journal/${article.slug}`}
            data-cursor="Read article ↗"
            className="group mb-5 block wide:mb-6.25"
          >
            <p className="text-[16px] leading-5.5 transition-colors group-hover:text-muted sm:text-[17px] wide:text-[20px] wide:leading-normal">
              {article.title}
            </p>
            <p className="mt-1 text-[13px] font-medium text-dim sm:mt-1.5">
              {article.category} · {article.date} · {article.readTime}
            </p>
          </Link>
        ))}
      </section>

      {/* 7. ACHIEVEMENTS */}
      <section className="mt-12 sm:mt-18 wide:mt-30">
        <h2 className="mb-3 text-[17px] font-medium sm:mb-4 sm:text-[18px] wide:text-[20px]">
          Achievements
        </h2>

        <ul>
          {achievements.map((achievement) => (
            <li
              key={achievement}
              className="mb-2.5 text-[16px] leading-5.5 text-muted sm:mb-3 sm:text-[17px] wide:mb-3.5 wide:text-[20px] wide:leading-6"
            >
              {achievement}
            </li>
          ))}
        </ul>
      </section>

      {/* 8. SOCIALS */}
      <SocialLinks />
    </div>
  );
}
