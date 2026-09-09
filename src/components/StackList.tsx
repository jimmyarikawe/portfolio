import {
  Braces,
  Component,
  Layers,
  PenTool,
  Sparkles,
  Terminal,
  Wind,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { stack, type StackItem } from "@/data/profile";

const icons: Record<StackItem["iconName"], LucideIcon> = {
  design: PenTool,
  component: Component,
  types: Braces,
  python: Terminal,
  css: Wind,
  motion: Zap,
  ai: Sparkles,
  system: Layers,
};

export function StackList() {
  return (
    <div>
      <h2 className="mb-3 text-[17px] font-medium sm:mb-4 sm:text-[18px] wide:text-[20px]">
        My stack
      </h2>

      <ul className="flex flex-wrap sm:block">
        {stack.map((item) => {
          const Icon = icons[item.iconName];

          return (
            <li
              key={item.name}
              className="mb-2.5 flex w-1/2 items-center gap-3 sm:w-full sm:gap-3.5 wide:mb-3"
            >
              <Icon
                aria-hidden="true"
                strokeWidth={1.5}
                className="h-5.5 w-5.5 shrink-0 text-muted"
              />
              <span className="text-[14px] font-medium leading-5.5 wide:text-[15px]">
                {item.name}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
