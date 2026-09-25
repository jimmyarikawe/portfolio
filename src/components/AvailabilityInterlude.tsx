"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/**
 * The closing panel: a full-bleed black block bracketed by dashed hairlines,
 * carrying the site's single loudest statement.
 *
 * That statement used to be "I'm available for select projects," which read as
 * a freelance notice to anyone hiring for a permanent role, and it sat in the
 * middle of the page, so it was the loudest thing on the site before a reader
 * had seen any work. It now names the role being sought, and closes rather than
 * interrupts.
 */
export function AvailabilityInterlude() {
  return (
    <section className="mt-20 sm:mt-24 wide:mt-30">
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

        <h2 className="font-display max-w-[22ch] text-balance text-[32px] font-bold leading-9 text-white sm:text-[48px] sm:leading-13 wide:max-w-none wide:text-[80px] wide:leading-20">
          Open to Senior Product Design and Design Engineering roles.
        </h2>

        {/*
          The supporting line under the heading is gone, so the actions carry
          more top margin than they did: at `wide` the heading is 80px, and the
          spacing that sat right under a paragraph reads as cramped under that.
        */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-9 wide:mt-11">
          <Link href="/contact" className="btn btn-invert">
            Get in touch
          </Link>
          <a
            href="/Jimmy-Arikawe-CV.pdf"
            download
            className="btn border-white/25 bg-transparent text-white"
          >
            Download CV
          </a>
        </div>
      </motion.div>

      <div className="rule-dashed" />
    </section>
  );
}
