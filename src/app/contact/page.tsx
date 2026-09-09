import { ContactForm } from "@/components/ContactForm";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Jimmy Arikawe",
  description:
    "Open to Senior Product Designer roles in the UK and remote. Send a message, or email hi@jimmyarikawe.com — I reply within 24 hours.",
};

export default function ContactPage() {
  return (
    <div className="site-col">
      <section className="mt-20 sm:mt-22">
        <h1 className="font-display text-balance text-[28px] font-medium leading-8.25 sm:text-[34px] sm:leading-9.5 wide:text-[42px] wide:leading-10.75">
          Get in touch
        </h1>

        <p className="mt-3.5 text-[17px] leading-6 text-muted sm:mt-4.5 sm:text-[20px] sm:leading-7 wide:mt-6.25 wide:text-[24px] wide:leading-8">
          I&apos;m open to Senior Product Designer roles, and to selective
          contract work. Send a message — I reply within 24 hours.
        </p>

        <p className="mt-5 flex items-center gap-2 text-[13px] font-medium text-muted sm:mt-6">
          <span
            aria-hidden="true"
            className="animate-pulse-subtle h-2 w-2 shrink-0 rounded-full bg-emerald-600"
          />
          Open to new roles
        </p>
      </section>

      <ContactForm />
    </div>
  );
}
