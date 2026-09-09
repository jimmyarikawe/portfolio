"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Copy,
  Loader2,
  Sparkles,
} from "lucide-react";

const labelClass = "mb-1.5 block text-[13px] font-medium text-muted sm:text-[14px]";

const fieldClass =
  "w-full rounded-2xl border border-rule bg-surface px-4 py-3.5 text-[15px] font-medium text-ink outline-none transition-colors placeholder:text-placeholder focus:border-ink";

/*
 * The option list of a native select is drawn by the browser, so the theme
 * tokens have to be set on the options themselves — otherwise the popup keeps
 * the UA's light palette while the closed control follows the site's theme.
 */
const selectClass = `${fieldClass} appearance-none truncate pr-10 [&>option]:bg-surface [&>option]:text-ink`;

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "A full-time role",
    timeline: "Flexible",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "hi@jimmyarikawe.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e?: React.SubmitEvent<HTMLFormElement>) => {
    e?.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _replyto: formData.email,
          service: formData.service,
          timeline: formData.timeline,
          message: formData.message,
          _subject: `New Portfolio Inquiry from ${formData.name}: ${formData.service}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        try {
          confetti({
            particleCount: 70,
            spread: 70,
            origin: { y: 0.7 },
            colors: ["#22C55E", "#111111", "#FF7C47", "#E5E7EB"],
          });
        } catch {}
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      // Fallback: trigger user's native email client pre-addressed to hi@jimmyarikawe.com
      const subject = `New enquiry: ${formData.service}`;
      const body = [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Area of interest: ${formData.service}`,
        `Timeline: ${formData.timeline}`,
        "",
        formData.message,
      ].join("\n");
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-10 flex flex-col sm:mt-14 sm:flex-row sm:justify-between sm:gap-6 wide:mt-22.5">
      {/* Left: the form itself */}
      {/*
        A wider aside than the home page's 580/210 split: that ratio is sized
        for a stack of short labels, and this column carries prose plus an
        email address, which wraps every few words at 210px.
      */}
      <div className="sm:w-[58%] wide:w-130">
        {submitted ? (
          <div>
            <Sparkles
              aria-hidden="true"
              strokeWidth={1.5}
              className="h-7 w-7 text-muted"
            />

            <h2 className="mt-4 text-[17px] font-medium sm:text-[18px] wide:text-[20px]">
              Message Sent Successfully
            </h2>

            <p className="mt-2 text-[16px] leading-6 text-soft sm:text-[17px] wide:text-[18px] wide:leading-7">
              Thank you for reaching out! Your message has been sent directly to{" "}
              <span className="font-medium text-ink">{email}</span>. I reply
              within 24 hours.
            </p>

            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: "",
                  email: "",
                  service: "A full-time role",
                  timeline: "Flexible",
                  message: "",
                });
              }}
              className="btn mt-6"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid gap-5 wide:grid-cols-2 wide:gap-6">
              <div>
                <label htmlFor="contact-name" className={labelClass}>
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="contact-email" className={labelClass}>
                  Your Email *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="mt-5 grid gap-5 wide:grid-cols-2 wide:gap-6">
              <div>
                <label htmlFor="contact-service" className={labelClass}>
                  Area of Interest
                </label>
                <div className="relative">
                  <select
                    id="contact-service"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className={selectClass}
                  >
                    <option value="A full-time role">A full-time role</option>
                    <option value="A contract or freelance project">
                      A contract or freelance project
                    </option>
                    <option value="AI interaction design">
                      AI interaction design
                    </option>
                    <option value="Prototyping & front-end">
                      Prototyping &amp; front-end
                    </option>
                    <option value="Something else">Something else</option>
                  </select>
                  <ChevronDown
                    aria-hidden="true"
                    className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-muted"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-timeline" className={labelClass}>
                  Timeline
                </label>
                <div className="relative">
                  <select
                    id="contact-timeline"
                    value={formData.timeline}
                    onChange={(e) =>
                      setFormData({ ...formData, timeline: e.target.value })
                    }
                    className={selectClass}
                  >
                    <option value="Immediate">Immediate</option>
                    <option value="1–3 Months">1–3 Months</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                  <ChevronDown
                    aria-hidden="true"
                    className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-muted"
                  />
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="flex items-baseline justify-between gap-3">
                <label htmlFor="contact-message" className={labelClass}>
                  Project Details / Message *
                </label>
                <span className="mb-1.5 hidden text-[13px] font-medium text-dim sm:block">
                  ⌘ + Enter to send
                </span>
              </div>

              <textarea
                id="contact-message"
                required
                rows={4}
                placeholder="What are you building, and what would you want me to work on?"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                onKeyDown={(e) => {
                  if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
                    e.preventDefault();
                    const form = e.currentTarget.form;
                    if (form?.checkValidity()) {
                      handleSubmit();
                    } else {
                      form?.reportValidity();
                    }
                  }
                }}
                className={`${fieldClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn mt-6 w-full sm:w-auto ${isSubmitting ? "btn-disabled" : ""}`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <span>Send Message</span>
              )}
            </button>
          </form>
        )}
      </div>

      {/* Right: direct contact details */}
      <div className="mt-12 sm:mt-0 sm:w-[36%] wide:w-75">
        <h2 className="mb-3 text-[17px] font-medium sm:mb-4 sm:text-[18px] wide:text-[20px]">
          Direct Contact
        </h2>

        <h3 className="text-[16px] font-medium sm:text-[17px] wide:text-[19px]">
          Let’s start a conversation.
        </h3>

        <p className="mt-2 text-[16px] leading-6 text-soft sm:text-[17px] wide:leading-7">
          I&apos;m open to Senior Product Design and Design Engineering roles
          in the UK and remote, and to selective contract work. Happy to walk through any
          project in more detail.
        </p>

        {/*
          A plain text row rather than a filled control: at the 210px aside
          width a pill can't hold the address without clipping it.
        */}
        <button
          type="button"
          onClick={handleCopy}
          className="mt-5 flex w-full items-center gap-2 text-left text-[15px] font-medium text-ink"
        >
          <span className="break-all">{email}</span>
          {copied ? (
            <Check
              aria-hidden="true"
              className="h-4 w-4 shrink-0 text-emerald-500"
            />
          ) : (
            <Copy aria-hidden="true" className="h-4 w-4 shrink-0 text-muted" />
          )}
        </button>

        <p
          aria-live="polite"
          className="h-4.5 text-[13px] font-medium text-emerald-500"
        >
          {copied ? "Copied!" : ""}
        </p>

        <a
          href={`mailto:${email}`}
          className="btn btn-outline btn-sml mt-1 w-full"
        >
          <span>Open Mail Client</span>
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </a>

        <dl className="mt-7">
          <dt className="text-[13px] font-medium text-dim">Location</dt>
          <dd className="text-[15px] font-medium">United Kingdom</dd>

          <dt className="mt-4 text-[13px] font-medium text-dim">
            Availability
          </dt>
          <dd className="flex items-center gap-2 text-[15px] font-medium">
            <span
              aria-hidden="true"
              className="animate-pulse-subtle h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600"
            />
            Open to new roles
          </dd>

          <dt className="mt-4 text-[13px] font-medium text-dim">
            Response Time
          </dt>
          <dd className="text-[15px] font-medium">Within 24 Hours</dd>
        </dl>
      </div>
    </div>
  );
}
