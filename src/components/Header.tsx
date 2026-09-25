"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Atom } from "loading-dev";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full pt-4 sm:pt-5 print:hidden">
      {/* Accessible Skip Link for keyboard/screen reader users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 rounded-full bg-ink text-background text-sm"
      >
        Skip to main content
      </a>

      <div className="site-col">
        <div className="flex min-h-10 items-center justify-between gap-4">
          {/*
            The wordmark. Geist Mono in caps, with tracking pulled in rather
            than opened out: `.badge` adds positive tracking because mono caps
            at small sizes read as a block, but at wordmark size the opposite
            is true and the letters drift apart.

            The mark inherits `currentColor`, so it follows the theme and the
            hover state without being told to, and the reduced-motion rule in
            globals.css already clamps its animation.
          */}
          <Link
            href="/"
            aria-label="Jimmy Arikawe, home"
            className="group inline-flex select-none items-center gap-2 leading-10 text-muted transition-colors hover:text-ink"
          >
            <span className="font-mono text-[13.5px] font-medium uppercase tracking-[-0.04em] sm:text-[14px] wide:text-[15px]">
              Jimmy Arikawe
            </span>
            <Atom size={24} aria-hidden="true" />
          </Link>

          <div className="flex items-center gap-3 wide:gap-5">
            <nav className="hidden items-center gap-5 wide:flex">
              {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-[15px] transition-colors hover:text-ink ${
                      isActive ? "text-ink font-medium" : "text-muted"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/*
              The toggle moves into the disclosure below 900px. Four controls on
              a 390px bar left the hamburger pinned to the viewport edge and the
              CTA squeezed; the CTA is the one that has to stay.
            */}
            <ThemeToggle className="hidden p-0! text-muted hover:bg-transparent hover:text-ink wide:inline-flex" />

            <Link href="/contact" className="btn btn-sml">
              Get in touch
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              className="flex items-center justify-center p-1 text-muted transition-colors hover:text-ink wide:hidden"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              id="mobile-navigation"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="mt-4 flex flex-col gap-1 border-t border-rule pt-4 wide:hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 text-[17px] transition-colors ${
                    pathname.startsWith(link.href) ? "font-medium text-ink" : "text-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="mt-2 flex items-center gap-2 border-t border-rule pt-3">
                <ThemeToggle className="p-0! text-muted hover:bg-transparent hover:text-ink" />
                <span className="text-[15px] text-muted">Switch theme</span>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
