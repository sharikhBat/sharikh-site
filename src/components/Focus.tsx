"use client";

import { AnimatedSection } from "./AnimatedSection";

export function Focus() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="mb-16">
          <span className="text-xs font-mono text-accent tracking-widest uppercase mb-4 block">
            Current Focus
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold">
            What I&apos;m
            <br />
            <span className="italic text-muted">solving now</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatedSection
            delay={0.1}
            className="rounded-2xl border border-border bg-surface p-8 md:p-10 hover:border-[#333] transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-6">
              <span className="text-accent text-lg">&#9670;</span>
            </div>
            <h3 className="font-serif text-xl font-bold mb-3">
              AI for Non-Tech Founders
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              You know your market cold. You just can&apos;t code. I bridge that gap — turning deep domain expertise into working AI products.
            </p>
          </AnimatedSection>

          <AnimatedSection
            delay={0.2}
            className="rounded-2xl border border-border bg-surface p-8 md:p-10 hover:border-[#333] transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-6">
              <span className="text-accent text-lg">&#9671;</span>
            </div>
            <h3 className="font-serif text-xl font-bold mb-3">
              Product-Market Fit Engineering
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              Building isn&apos;t the hard part. Building the right thing is. I work backwards from demand signals, not forward from features.
            </p>
          </AnimatedSection>

          <AnimatedSection
            delay={0.3}
            className="rounded-2xl border border-border bg-surface p-8 md:p-10 hover:border-[#333] transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-6">
              <span className="text-accent text-lg">&#9672;</span>
            </div>
            <h3 className="font-serif text-xl font-bold mb-3">
              Shipping &gt; Perfection
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              Speed wins. I build MVPs that talk to real users fast, iterate from real feedback, and scale what sticks.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
