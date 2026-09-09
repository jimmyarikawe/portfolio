import { experiences } from "@/data/experience";

/**
 * The compact role list used on the home page: role, employer, dates. The
 * fuller narrative version — with summaries, education and publications —
 * lives in `ExperienceTimeline` on the about page.
 */
export function ExperienceList() {
  return (
    <div>
      <h2 className="mb-3 text-[17px] font-medium sm:mb-4 sm:text-[18px] wide:text-[20px]">
        Experience
      </h2>

      {experiences.map((job) => (
        <div key={`${job.company}-${job.period}`} className="mb-5 wide:mb-6.25">
          <p className="text-[16px] leading-5.5 sm:text-[17px] wide:text-[20px] wide:leading-normal">
            {job.role} <span className="text-muted">at {job.company}</span>
          </p>
          <p className="mt-1 text-[13px] font-medium text-dim sm:mt-1.5">
            {job.period}
          </p>
        </div>
      ))}
    </div>
  );
}
