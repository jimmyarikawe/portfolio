"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

function subscribeNoop() {
  return () => {};
}

// True once React has hydrated on the client, false during SSR. Using
// useSyncExternalStore (rather than an effect that calls setState) is the
// standard hydration-safe way to get this: it has no external source to
// subscribe to, it just needs server and client to disagree on purpose.
function useHasMounted() {
  return useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false
  );
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const mounted = useHasMounted();

  // The server always renders "light" (it doesn't know the visitor's actual
  // preference), while the client's real theme is known immediately from the
  // DOM (see ThemeProvider). That's fine for CSS — the colour tokens resolve
  // from a `data-theme` attribute on an ancestor, so the markup is identical
  // either way and only the computed values differ. But this icon and its
  // label DO branch in React, so showing the real value pre-mount would mismatch
  // what the server sent and throw a hydration error. Deferring to "light"
  // until mounted keeps this one icon in sync with SSR; the rest of the page
  // is unaffected since nothing else branches on theme in React.
  const displayTheme = mounted ? theme : "light";

  return (
    <button
      onClick={toggleTheme}
      aria-label={mounted ? `Switch to ${theme === "light" ? "dark" : "light"} mode` : "Toggle theme"}
      className={`relative rounded-full p-2 text-muted transition-colors hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-background ${className}`}
    >
      <motion.div
        key={displayTheme}
        initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {displayTheme === "light" ? (
          <Moon className="w-4 h-4" />
        ) : (
          <Sun className="w-4 h-4 text-amber-300" />
        )}
      </motion.div>
    </button>
  );
}
