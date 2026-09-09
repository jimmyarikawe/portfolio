"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/**
 * The full-bleed interlude that separates the project reel from the about
 * copy: a black panel bracketed by dashed hairlines, carrying the site's
 * single loudest statement. The reference pins and zooms this on scroll with
 * GSAP; here a scroll-triggered scale-in reads the same without the extra
 * dependency, and collapses to a plain fade under reduced motion.
 */
export function AvailabilityInterlude() {
  return (
    <section className="my-30 wide:my-50">
      <div className="rule-dashed" />

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="ml-[calc(50%-50vw)] flex w-screen flex-col items-center justify-center bg-black px-6 py-24 text-center wide:py-40"
      >
        <span
          aria-hidden="true"
          className="animate-spin-slow mb-5 block sm:mb-7 wide:mb-10.75"
        >
          <svg
            viewBox="0 0 32.1542 30.5"
            className="h-10 w-10 sm:h-11 sm:w-11 wide:h-13 wide:w-13"
          >
            <path
              d="M7.41684 5C11.2658 -1.66667 20.8883 -1.66667 24.7374 5L30.7995 15.5C34.6485 22.1667 29.8373 30.5 22.1393 30.5H10.0149C2.31691 30.5 -2.49434 22.1667 1.35466 15.5L7.41684 5Z"
              fill="white"
            />
          </svg>
        </span>

        <h2 className="font-display max-w-[16ch] text-balance text-[32px] font-bold leading-9 text-white sm:text-[48px] sm:leading-13 wide:max-w-none wide:text-[80px] wide:leading-20">
          I’m available for select projects.
        </h2>

        <p className="mt-3 max-w-[46ch] text-[16px] font-medium leading-5.75 text-[#7E7E7E] sm:mt-4 sm:text-[18px] sm:leading-6.5 wide:mt-5 wide:text-[28px] wide:leading-9.5">
          Open to product design and leadership work across fintech, enterprise
          and AI — from zero-to-one strategy through to production code.
        </p>

        <Link href="/contact" className="btn btn-invert mt-5 sm:mt-6">
          Get in touch
        </Link>
      </motion.div>

      <div className="rule-dashed" />
    </section>
  );
}
