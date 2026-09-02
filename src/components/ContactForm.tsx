"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { ArrowUpRight, Check, Copy, Send, Sparkles, Loader2 } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Product Design & Architecture",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
      {/* Left: Direct Contact Information */}
      <div className="lg:col-span-5 space-y-6">
        <div className="editorial-card p-6 sm:p-8 rounded space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono-accent text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block">
              Direct Contact
            </span>
            <h3 className="text-2xl font-medium tracking-tight text-neutral-950 dark:text-white">
              Let’s start a conversation.
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Whether you are looking to design complex platforms, lead product teams, explore emerging AI interfaces, or collaborate on rapid prototyping, let’s talk.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <button
              onClick={handleCopy}
              className="w-full flex items-center justify-between p-3.5 rounded bg-neutral-50 dark:bg-white/5 hover:bg-neutral-100/80 dark:hover:bg-white/10 border border-black/5 dark:border-white/10 text-sm font-mono-accent text-neutral-900 dark:text-white transition-colors"
            >
              <span>{email}</span>
              {copied ? (
                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
                  <Check className="w-3.5 h-3.5" /> Copied!
                </span>
              ) : (
                <Copy className="w-4 h-4 text-neutral-400 dark:text-neutral-500" />
              )}
            </button>

            <a
              href={`mailto:${email}`}
              className="w-full flex items-center justify-center gap-2 p-3.5 rounded bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-200 text-sm font-medium transition-colors"
            >
              <span>Open Mail Client</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="pt-6 border-t border-black/5 dark:border-white/10 space-y-3 text-xs font-mono-accent text-neutral-500 dark:text-neutral-400">
            <div className="flex items-center justify-between">
              <span>Location</span>
              <span className="text-neutral-900 dark:text-white font-medium">United Kingdom</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Availability</span>
              <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-subtle" />
                Open for Engagements
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Response Time</span>
              <span className="text-neutral-900 dark:text-white font-medium">Within 24 Hours</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Contact Form */}
      <div className="lg:col-span-7">
        <div className="editorial-card p-6 sm:p-10 rounded">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                <Sparkles className="w-7 h-7" />
              </div>
              <h4 className="text-2xl font-medium text-neutral-950 dark:text-white">
                Message Sent Successfully
              </h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
                Thank you for reaching out! Your message has been sent directly to{" "}
                <span className="font-mono-accent text-neutral-950 dark:text-white font-medium">{email}</span>. I reply within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", service: "Product Design & Architecture", timeline: "Flexible", message: "" });
                }}
                className="mt-4 px-6 py-2.5 rounded bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-mono-accent hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-mono-accent text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-neutral-50 dark:bg-white/5 border border-black/10 dark:border-white/10 text-neutral-950 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-neutral-950 dark:focus:ring-white focus:bg-white dark:focus:bg-neutral-900 transition-all placeholder:text-neutral-400 dark:placeholder:text-neutral-600"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono-accent text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-neutral-50 dark:bg-white/5 border border-black/10 dark:border-white/10 text-neutral-950 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-neutral-950 dark:focus:ring-white focus:bg-white dark:focus:bg-neutral-900 transition-all placeholder:text-neutral-400 dark:placeholder:text-neutral-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-mono-accent text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">
                    Area of Interest
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-neutral-50 dark:bg-white/5 border border-black/10 dark:border-white/10 text-neutral-950 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-neutral-950 dark:focus:ring-white focus:bg-white dark:focus:bg-neutral-900 transition-all"
                  >
                    <option value="Product Design & Architecture" className="dark:bg-neutral-900">Product Design & Architecture</option>
                    <option value="AI / Generative AI Interaction Design" className="dark:bg-neutral-900">AI / Generative AI Interaction Design</option>
                    <option value="Rapid Prototyping & Engineering" className="dark:bg-neutral-900">Rapid Prototyping & Engineering</option>
                    <option value="Product Leadership & Management" className="dark:bg-neutral-900">Product Leadership & Management</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono-accent text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">
                    Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-neutral-50 dark:bg-white/5 border border-black/10 dark:border-white/10 text-neutral-950 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-neutral-950 dark:focus:ring-white focus:bg-white dark:focus:bg-neutral-900 transition-all"
                  >
                    <option value="Immediate" className="dark:bg-neutral-900">Immediate</option>
                    <option value="1–3 Months" className="dark:bg-neutral-900">1–3 Months</option>
                    <option value="Flexible" className="dark:bg-neutral-900">Flexible</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-mono-accent text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">
                    Project Details / Message *
                  </label>
                  <span className="text-[10px] font-mono-accent text-neutral-400 dark:text-neutral-500 hidden sm:inline-block">
                    ⌘ + Enter to send
                  </span>
                </div>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your product challenges, objectives, and what you are building..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onKeyDown={(e) => {
                    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
                      e.preventDefault();
                      const form = e.currentTarget.form;
                      if (form?.checkValidity()) {
                        handleSubmit(e as unknown as React.FormEvent);
                      } else {
                        form?.reportValidity();
                      }
                    }
                  }}
                  className="w-full px-4 py-3 rounded bg-neutral-50 dark:bg-white/5 border border-black/10 dark:border-white/10 text-neutral-950 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-neutral-950 dark:focus:ring-white focus:bg-white dark:focus:bg-neutral-900 transition-all resize-none placeholder:text-neutral-400 dark:placeholder:text-neutral-600"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-4 rounded bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 font-medium text-sm hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
