import { stack } from "@/data/profile";
import { stackLogoMap } from "@/components/StackLogos";

export function StackList() {
  return (
    <div>
      <h2 className="mb-3 text-[17px] font-medium sm:mb-4 sm:text-[18px] wide:text-[20px]">
        My stack
      </h2>

      <ul className="flex flex-wrap sm:block">
        {stack.map((item) => {
          const LogoComponent = stackLogoMap[item.name];

          return (
            <li
              key={item.name}
              className="mb-2.5 flex w-1/2 items-center gap-3 sm:w-full sm:gap-3.5 wide:mb-3"
            >
              <span className="flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-[5px] bg-neutral-100 dark:bg-white/10 p-1 border border-black/8 dark:border-white/12">
                {LogoComponent ? (
                  <LogoComponent className="h-3.5 w-3.5 object-contain" />
                ) : (
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                )}
              </span>
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
