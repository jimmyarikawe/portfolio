import { socials, type SocialLink } from "@/data/profile";

/**
 * lucide-react v1 dropped its brand glyphs, so LinkedIn and GitHub are inlined
 * here. All three share a 24x24 viewBox and inherit `currentColor`.
 */
const paths: Record<SocialLink["iconName"], string> = {
  linkedin:
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z",
  github:
    "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  email:
    "M22 5H2v14h20V5zM2 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H2zm.4 3.8L12 13l9.6-6.2 1.1 1.7L12 15.4 1.3 8.5l1.1-1.7z",
};

export function SocialLinks() {
  return (
    <section className="mt-12 sm:mt-16 wide:mt-26.5">
      <h2 className="mb-4 text-[17px] font-medium sm:text-[18px] wide:mb-5.75 wide:text-[20px]">
        Socials
      </h2>

      <div className="flex items-center gap-3 sm:gap-3.5">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            aria-label={social.label}
            {...(social.iconName === "email"
              ? {}
              : { target: "_blank", rel: "noopener" })}
            className="text-muted transition-colors hover:text-ink"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-7.5 w-7.5 sm:h-8 sm:w-8"
            >
              <path d={paths[social.iconName]} fill="currentColor" />
            </svg>
          </a>
        ))}
      </div>
    </section>
  );
}
