import {
  Code2,
  Compass,
  Layers,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { skillCategories, type SkillCategory } from "@/data/services";

const icons: Record<SkillCategory["iconName"], LucideIcon> = {
  ai: Sparkles,
  code: Code2,
  design: Layers,
  leadership: Compass,
};

/**
 * The capability list on the about page: category, its focus, the tagline and
 * the individual skills — two entries across from 640px up. Plain rows rather
 * than cards, so it reads at the same volume as the experience list above it.
 */
export function ServicesGrid() {
  return (
    <div className="grid gap-9 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 wide:gap-x-10 wide:gap-y-14">
      {skillCategories.map((skillGroup) => {
        const Icon = icons[skillGroup.iconName];

        return (
          <div key={skillGroup.number}>
            <div className="flex items-center gap-2.5">
              <Icon
                aria-hidden="true"
                strokeWidth={1.5}
                className="h-4.5 w-4.5 shrink-0 text-muted"
              />
              <h3 className="text-[16px] font-medium sm:text-[17px] wide:text-[19px]">
                {skillGroup.category}
              </h3>
            </div>

            <p className="mt-1.5 text-[13px] font-medium text-dim">
              {skillGroup.focus}
            </p>

            <p className="mt-2.5 text-[16px] leading-6 text-soft sm:text-[17px] wide:text-[18px] wide:leading-7">
              {skillGroup.tagline}
            </p>

            <ul className="mt-4 sm:mt-5">
              {skillGroup.skills.map((skill) => (
                <li
                  key={skill}
                  className="text-[15px] font-medium leading-6.5 text-faint sm:text-[16px]"
                >
                  {skill}
                </li>
              ))}
            </ul>

            <p className="mt-4 text-[13px] font-medium text-dim sm:mt-5">
              Core Impact:{" "}
              <span className="text-muted">{skillGroup.impact}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}
