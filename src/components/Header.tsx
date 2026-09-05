"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TypewriterLogo } from "@/components/TypewriterLogo";

export function Header() {
  const pathname = usePathname();
  const [timeString, setTimeString] = useState<string>("");
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "Europe/London",
      });
      setTimeString(formatted.toUpperCase());
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Journal", href: "/journal" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-transparent py-3.5 sm:py-5 pointer-events-none">
      {/* Accessible Skip Link for keyboard/screen reader users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 rounded bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 text-xs font-mono-accent pointer-events-auto"
      >
        Skip to main content
      </a>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between gap-4 w-full">
          {/* Left: Logo */}
          <div className="pointer-events-auto shrink-0">
            <TypewriterLogo className="text-sm sm:text-base" delay={150} />
          </div>

          {/* Center: Live London Clock (hidden on small screens) */}
          <span
            suppressHydrationWarning
            className="hidden md:block text-xs font-mono-accent text-neutral-500 dark:text-neutral-400 pointer-events-auto"
          >
            {mounted && timeString ? `UK • ${timeString}` : "London, UK"}
          </span>

          {/* Right: Nav + Theme Toggle + Mobile Trigger */}
          <div className="flex items-center gap-2 pointer-events-auto shrink-0">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-5 sm:gap-6 glass-pill px-4 py-2 rounded">
              <nav className="flex items-center gap-5 sm:gap-6">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-xs font-mono-accent transition-colors ${
                        isActive
                          ? "text-neutral-950 dark:text-white font-medium"
                          : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              <div className="w-px h-3.5 bg-black/10 dark:bg-white/10" />

              <ThemeToggle className="!p-0 hover:bg-transparent" />
            </div>

            {/* Mobile hamburger button & Theme toggle */}
            <div className="flex md:hidden items-center gap-1.5 glass-pill px-2.5 py-1.5 rounded">
              <ThemeToggle className="!p-1" />
              <div className="w-px h-3 bg-black/10 dark:bg-white/10" />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                className="p-1 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white rounded transition-colors flex items-center justify-center"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="md:hidden pointer-events-auto mt-2 glass-pill rounded p-4 shadow-xl"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3.5 py-2.5 rounded text-xs font-mono-accent transition-colors ${
                      pathname.startsWith(link.href)
                        ? "bg-neutral-100 dark:bg-white/10 text-neutral-950 dark:text-white font-medium"
                        : "text-neutral-600 dark:text-neutral-400 hover:bg-black/5 dark:hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 py-3 rounded bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 text-xs font-mono-accent font-medium"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
