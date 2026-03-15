"use client";

import { AnimatedSection } from "./AnimatedSection";

export function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-12 lg:px-24 py-16 md:py-32 border-t border-border"
    >
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <span className="text-xs font-mono text-accent tracking-widest uppercase mb-4 md:mb-6 block">
            Get in Touch
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6">
            Deep market expertise?
            <br />
            <span className="italic text-muted">Let&apos;s build.</span>
          </h2>
          <p className="text-muted text-base md:text-lg max-w-lg mx-auto mb-8 md:mb-10 leading-relaxed">
            Non-technical but know your niche cold? Want to ship something real
            with AI? I want to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <a
              href="https://wa.me/917019553411?text=Hey%20Sharikh!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-background rounded-full text-sm font-medium hover:bg-accent/90 transition-colors"
            >
              Message me
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
              href="mailto:sharikhahmed30@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground rounded-full text-sm hover:border-muted transition-colors"
            >
              sharikhahmed30@gmail.com
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
