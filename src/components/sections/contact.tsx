"use client";

import { useState, type FormEvent } from "react";
import { FadeIn } from "@/components/fade-in";
import { LinkedInIcon, EmailIcon, ScholarIcon, DownloadIcon, ExternalLinkIcon } from "@/components/icons";

const CONSULTING_AREAS = [
  "Growth Product Management",
  "Experimentation",
  "Monetization strategies",
  "PLG initiatives",
  "AI transformation",
];

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-20">
      <FadeIn>
        <h2 className="font-serif text-2xl md:text-3xl mb-10">Let&apos;s Work Together</h2>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left — availability */}
        <FadeIn delay={100}>
          <div>
            <p className="text-lg leading-relaxed mb-6">
              I&apos;m available as a fractional growth and product leader. Let&apos;s talk if you need help with:
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {CONSULTING_AREAS.map((area) => (
                <span
                  key={area}
                  className="bg-card rounded-xl px-3 py-1.5 text-sm text-text-muted"
                >
                  {area}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-5">
              <a
                href="https://www.linkedin.com/in/levente-l%C3%A1szl%C3%B3-dud%C3%A1s-8261a053/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-6 h-6" />
              </a>
              <a
                href="mailto:lev.dudas@gmail.com"
                className="text-text-muted hover:text-accent transition-colors"
                aria-label="Email"
              >
                <EmailIcon className="w-6 h-6" />
              </a>
              <a
                href="https://scholar.google.com/citations?user=bhFgAKIAAAAJ&hl=en&authuser=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent transition-colors"
                aria-label="Google Scholar"
              >
                <ScholarIcon className="w-6 h-6" />
              </a>
            </div>

            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href="/resume/Resume_Levente_Dudas.pdf"
                download
                className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors"
              >
                <DownloadIcon /> Download resume
              </a>
              <a
                href="https://www.linkedin.com/in/levente-l%C3%A1szl%C3%B3-dud%C3%A1s-8261a053/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors"
              >
                <ExternalLinkIcon /> View LinkedIn
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Right — form */}
        <FadeIn delay={200}>
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-bg border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-bg border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full bg-bg border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-accent text-white rounded-xl px-6 py-3 text-sm font-medium hover:bg-accent-hover transition-colors disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send message"}
            </button>

            {status === "sent" && (
              <p className="text-sage text-sm text-center">Message sent! I&apos;ll get back to you soon.</p>
            )}
            {status === "error" && (
              <p className="text-accent text-sm text-center">Something went wrong. Try emailing me directly.</p>
            )}
          </form>
        </FadeIn>
      </div>

      {/* Testimonials placeholder */}
      <FadeIn delay={300}>
        <div className="mt-16">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">
            Testimonials
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="border-2 border-dashed border-border rounded-2xl p-6 opacity-40"
              >
                <p className="text-sm italic text-text-muted">&ldquo;Quote from colleague or manager&rdquo;</p>
                <p className="text-xs text-text-muted mt-3">&mdash; Name, Role at Company</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
