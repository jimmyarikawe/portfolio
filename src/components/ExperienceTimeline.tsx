import { experiences, education, publications } from "@/data/experience";
import { CompanyFavicon } from "@/components/CompanyFavicon";

/**
 * The fuller narrative history used on the about page: role, employer, dates
 * and a one-line summary per entry, then education and publications. The
 * compact dates-only version lives in `ExperienceList` on the home page.
 */
function TimelineRow({
  period,
  title,
  subtitle,
  domain,
  summary,
  badge,
}: {
  period: string;
  title: string;
  subtitle?: string;
  domain?: string;
  summary: string;
  badge?: string;
}) {
  return (
    <div className="mb-7 last:mb-0 sm:mb-8 wide:mb-10">
      <p className="text-[16px] leading-5.5 sm:text-[17px] wide:text-[20px] wide:leading-normal flex items-center gap-1.5 flex-wrap">
        <span>{title}</span>
        {subtitle && (
          <>
            <span className="text-muted">at</span>
            <span className="inline-flex items-center gap-1.5 text-ink font-medium">
              <CompanyFavicon name={subtitle} domain={domain} size={18} />
              <span>{subtitle}</span>
            </span>
          </>
        )}
      </p>

      <p className="mt-1 text-[13px] font-medium text-dim sm:mt-1.5">
        {period}
        {badge && <span className="text-ink"> · {badge}</span>}
      </p>

      <p className="mt-2 text-[16px] leading-6 text-soft sm:mt-2.5 sm:text-[17px] wide:text-[18px] wide:leading-7">
        {summary}
      </p>
    </div>
  );
}

export function ExperienceTimeline() {
  return (
    <div>
      {/* Experience */}
      <div>
        <h2 className="mb-3 text-[17px] font-medium sm:mb-4 sm:text-[18px] wide:text-[20px]">
          Experience
        </h2>

        <p className="mb-7 text-[16px] leading-6 text-soft sm:mb-8 sm:text-[17px] wide:mb-10 wide:text-[18px] wide:leading-7">
          7+ years across fintech, enterprise, and AI — the roles,
          chronologically.
        </p>

        {experiences.map((exp) => (
          <TimelineRow
            key={`${exp.company}-${exp.period}`}
            period={exp.period}
            badge={exp.current ? "Current" : undefined}
            title={exp.role}
            subtitle={exp.company}
            domain={exp.domain}
            summary={exp.summary}
          />
        ))}
      </div>

      {/* Education */}
      <div className="mt-12 sm:mt-18 wide:mt-30">
        <h2 className="mb-3 text-[17px] font-medium sm:mb-4 sm:text-[18px] wide:text-[20px]">
          Education
        </h2>

        {education.map((edu) => (
          <TimelineRow
            key={`${edu.institution}-${edu.period}`}
            period={edu.period}
            title={edu.degree}
            subtitle={edu.institution}
            domain={edu.domain}
            summary={edu.summary}
          />
        ))}

        {publications.map((pub) => (
          <TimelineRow
            key={pub.title}
            period={pub.period}
            title={pub.title}
            summary={pub.summary}
          />
        ))}
      </div>
    </div>
  );
}
