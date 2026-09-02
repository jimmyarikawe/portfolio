"use client";

import { motion, useScroll } from "framer-motion";

export function ReadingProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-neutral-950 dark:bg-white origin-left z-50 pointer-events-none"
    />
  );
}
