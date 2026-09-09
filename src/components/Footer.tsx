import Link from "next/link";
import { socials } from "@/data/profile";

/*
 * Previously this rendered a single copyright line, which meant that from any
 * page other than the home page there was no route to the CV, the email address
 * or LinkedIn without scrolling back to the header. Every page now ends with a
 * way to act.
 */
const navColumn = [
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Résumé", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

const LABEL = "text-[13px] font-medium uppercase tracking-[0.08em] text-dim";
const LINK = "text-[15px] text-muted transition-colors hover:text-ink";

export function Footer() {
  return (
    <footer className="w-full print:hidden">
      <div className="site-col mt-16 border-t border-rule pt-10 pb-12 wide:mt-24.5 wide:pt-12 wide:pb-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between sm:gap-6">
          <div className="sm:max-w-72">
            <p className="text-[16px] font-medium sm:text-[17px]">
              Jimmy Arikawe
            </p>
            <p className="mt-1.5 text-[15px] leading-6 text-muted">
              Senior Product Designer &amp; design engineer, United Kingdom.
              Open to new roles.
            </p>
            <a
              href="mailto:hi@jimmyarikawe.com"
              className="mt-3 inline-block text-[15px] font-medium text-ink underline decoration-dotted underline-offset-4"
            >
              hi@jimmyarikawe.com
            </a>
          </div>

          <div className="flex gap-12 sm:gap-16">
            <nav aria-label="Footer navigation">
              <p className={LABEL}>Navigate</p>
              <ul className="mt-3 flex flex-col gap-2">
                {navColumn.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={LINK}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className={LABEL}>Elsewhere</p>
              <ul className="mt-3 flex flex-col gap-2">
                {socials.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      className={LINK}
                      {...(social.iconName === "email"
                        ? {}
                        : { target: "_blank", rel: "noopener" })}
                    >
                      {social.name}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="/Jimmy-Arikawe-CV.pdf"
                    download
                    className={LINK}
                  >
                    CV (PDF)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-1.5 border-t border-rule pt-6 sm:flex-row sm:justify-between">
          <p className="text-[13px] font-medium text-ghost">
            © {new Date().getFullYear()} Jimmy Arikawe
          </p>
          {/*
            Quietly reinforces the designer-who-codes positioning at the one
            place a curious reader is already looking for meta-information.
          */}
          <p className="text-[13px] font-medium text-ghost">
            Designed and built in Next.js and Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
