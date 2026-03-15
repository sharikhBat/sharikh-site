"use client";

import { AnimatedSection } from "./AnimatedSection";

export function Focus() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-16 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="mb-10 md:mb-16">
          <span className="text-xs font-mono text-accent tracking-widest uppercase mb-3 md:mb-4 block">
            Current Focus
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold">
            What I&apos;m
            <br />
            <span className="italic text-muted">solving now</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <AnimatedSection
            delay={0.1}
            className="rounded-2xl border border-border bg-surface p-6 md:p-10 hover:border-[#333] transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-5 md:mb-6">
              <span className="text-accent text-lg">&#9670;</span>
            </div>
            <h3 className="font-serif text-lg md:text-xl font-bold mb-3">
              AI for Non-Tech Founders
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              You know your market. You can&apos;t code. I bridge that gap — turning domain expertise into working AI products.
            </p>
          </AnimatedSection>

          <AnimatedSection
            delay={0.2}
            className="rounded-2xl border border-border bg-surface p-6 md:p-10 hover:border-[#333] transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-5 md:mb-6">
              <span className="text-accent text-lg">&#9671;</span>
            </div>
            <h3 className="font-serif text-lg md:text-xl font-bold mb-3">
              Product-Market Fit First
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              Building is easy. Building the right thing is hard. I start from demand signals, not feature lists.
            </p>
          </AnimatedSection>

          <AnimatedSection
            delay={0.3}
            className="rounded-2xl border border-border bg-surface p-6 md:p-10 hover:border-[#333] transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-5 md:mb-6">
              <span className="text-accent text-lg">&#9672;</span>
            </div>
            <h3 className="font-serif text-lg md:text-xl font-bold mb-3">
              Ship Fast, Learn Faster
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              MVPs that reach real users quickly. Iterate from real feedback. Scale what sticks.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
