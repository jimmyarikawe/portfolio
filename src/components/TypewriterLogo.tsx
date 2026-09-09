"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { useInView } from "framer-motion";

interface TypewriterLogoProps {
  text?: string;
  className?: string;
  speed?: number;
  delay?: number;
  triggerOnView?: boolean;
  /** Replay the reveal automatically at an interval, not just once. */
  loop?: boolean;
  loopInterval?: number;
}

export function TypewriterLogo({
  text = "Jimmy Arikawe",
  className = "",
  speed = 65,
  delay = 150,
  triggerOnView = false,
  loop = true,
  loopInterval = 6000,
}: TypewriterLogoProps) {
  const containerRef = useRef<HTMLAnchorElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-40px" });
  const [displayText, setDisplayText] = useState(text);
  const [isTyping, setIsTyping] = useState(false);

  // Clears the text and reveals it character by character. Returns a
  // cleanup so callers (the initial run, the loop, hover) can cancel a
  // reveal that's still in progress before starting another.
  const type = useCallback(() => {
    setIsTyping(true);
    setDisplayText("");
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex++;
      setDisplayText(text.slice(0, currentIndex));
      if (currentIndex >= text.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  useEffect(() => {
    // If triggerOnView is true, wait until element enters viewport
    if (triggerOnView && !isInView) return;

    let cancelCurrent: (() => void) | undefined;
    let loopId: ReturnType<typeof setInterval> | undefined;

    const startTimeout = setTimeout(() => {
      cancelCurrent = type();
      if (loop) {
        loopId = setInterval(() => {
          cancelCurrent?.();
          cancelCurrent = type();
        }, loopInterval);
      }
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      cancelCurrent?.();
      if (loopId) clearInterval(loopId);
    };
  }, [isInView, triggerOnView, delay, loop, loopInterval, type]);

  const handleMouseEnter = () => {
    if (isTyping) return;
    type();
  };

  return (
    <Link
      ref={containerRef}
      href="/"
      onMouseEnter={handleMouseEnter}
      className={`group inline-flex select-none items-center transition-colors hover:text-ink ${className}`}
      aria-label={text}
    >
      <span>{displayText}</span>
      <span
        className={`ml-0.5 inline-block h-[1.1em] w-[1.5px] bg-current align-middle transition-opacity duration-200 ${
          isTyping
            ? "animate-pulse opacity-100"
            : "opacity-0 group-hover:opacity-100"
        }`}
        aria-hidden="true"
      />
    </Link>
  );
}
