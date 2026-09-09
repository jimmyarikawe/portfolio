"use client";

import { motion, useScroll } from "framer-motion";

export function ReadingProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 z-50 h-0.5 origin-left bg-ink pointer-events-none"
    />
  );
}
