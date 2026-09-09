"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface CursorData {
  title: string;
  subtitle?: string;
}

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorData, setCursorData] = useState<CursorData | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isOverForm, setIsOverForm] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on fine pointer devices (desktop/mouse)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    document.documentElement.classList.add("custom-cursor-active");

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const isInput = !!(e.target as HTMLElement)?.closest("input, textarea, select");
      setIsOverForm(isInput);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    // Listen to custom cursor triggers
    const handleElementHover = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("[data-cursor]");
      if (target) {
        const title = target.getAttribute("data-cursor") || "";
        const subtitle = target.getAttribute("data-cursor-subtitle") || undefined;
        setCursorData({ title, subtitle });
        setIsHovered(true);
      } else {
        setCursorData(null);
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseover", handleElementHover);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", handleElementHover);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const hasArrow = cursorData ? /[↗→←]/.test(cursorData.title) : false;

  return (
    <>
      {/* 1. Precise Center Cursor Dot (Always visible at pointer tip unless over text input) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: isVisible && !isOverForm ? 1 : 0,
        }}
        transition={{
          type: "spring",
          damping: 35,
          stiffness: 800,
          mass: 0.05,
        }}
      >
        <div className="h-2 w-2 rounded-full border border-background/40 bg-ink shadow-xs" />
      </motion.div>

      {/* 2. Floating Context Tooltip / Pill on Hover */}
      <AnimatePresence>
        {isHovered && cursorData && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 8 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: mousePosition.x + 14,
              y: mousePosition.y + 14,
            }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 450,
              mass: 0.1,
            }}
            className="fixed top-0 left-0 z-50 flex max-w-xs flex-col gap-0.5 rounded-full bg-ink px-4 py-2.5 text-background pointer-events-none"
          >
            <div className="flex items-center gap-1.5 text-[14.5px] font-medium">
              <span>{cursorData.title}</span>
              {!hasArrow && (
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-70" />
              )}
            </div>
            {cursorData.subtitle && (
              <span className="line-clamp-1 max-w-55 text-[11px] opacity-60">
                {cursorData.subtitle}
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
