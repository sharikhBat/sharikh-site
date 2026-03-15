"use client";

import { AnimatedSection } from "./AnimatedSection";

export function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t border-border"
    >
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <span className="text-xs font-mono text-accent tracking-widest uppercase mb-6 block">
            Get in Touch
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
            Got deep market
            <br />
            expertise?{" "}
            <span className="italic text-muted">Let&apos;s build.</span>
          </h2>
          <p className="text-muted text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            If you&apos;re non-technical but know your niche inside out — and
            want to ship something real with AI — I want to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-background rounded-full text-sm font-medium hover:bg-accent/90 transition-colors"
            >
              Book a call
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="mt-[1px]"
              >
                <path
                  d="M1 13L13 1M13 1H3M13 1V11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </a>
            <a
              href="mailto:hello@sharikh.com"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground rounded-full text-sm hover:border-muted transition-colors"
            >
              hello@sharikh.com
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
