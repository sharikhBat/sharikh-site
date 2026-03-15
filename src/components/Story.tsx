"use client";

import { AnimatedSection, AnimatedText } from "./AnimatedSection";

const milestones = [
  { age: "16", label: "Landed my first clients. No degree, no connections. Cold outreach and grit." },
  { age: "17", label: "First real job. Learned more in 6 months than most learn in 4 years of school." },
  { age: "Now", label: "Building startups. Shipping products. Turning market expertise into tech." },
];

export function Story() {
  return (
    <section id="story" className="px-6 md:px-12 lg:px-24 py-16 md:py-32">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="mb-12 md:mb-20">
          <span className="text-xs font-mono text-accent tracking-widest uppercase mb-3 md:mb-4 block">
            The Story
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            No degree.
            <br />
            <span className="italic text-muted">All market.</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 mb-16 md:mb-20">
          <AnimatedSection delay={0.1}>
            <p className="text-muted text-base md:text-lg leading-relaxed">
              While others sat in lecture halls, I was in the market. Building. Selling. Learning from real customers with real problems.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-muted text-base md:text-lg leading-relaxed">
              That taught me something no curriculum could: how to spot what actually needs building. Not what&apos;s theoretically interesting — what people pay for.
            </p>
          </AnimatedSection>
        </div>

        {/* Timeline - mobile: simple stacked, desktop: alternating */}
        <div className="relative">
          {/* Center line - desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-border" />

          {/* Left line - mobile only */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-[1px] bg-border" />

          {milestones.map((milestone, i) => (
            <AnimatedSection
              key={milestone.age}
              delay={i * 0.15}
              className="relative mb-12 last:mb-0"
            >
              {/* Mobile layout */}
              <div className="md:hidden flex items-start gap-6 pl-10">
                {/* Dot on line */}
                <div className="absolute left-4 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent border-4 border-background z-10" />
                <div>
                  <AnimatedText delay={i * 0.15 + 0.1}>
                    <span className="font-serif text-3xl font-bold text-accent block mb-2">
                      {milestone.age}
                    </span>
                  </AnimatedText>
                  <p className="text-muted text-base leading-relaxed">
                    {milestone.label}
                  </p>
                </div>
              </div>

              {/* Desktop layout - alternating */}
              <div
                className={`hidden md:flex items-start gap-8 ${
                  i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "text-right pr-16" : "pl-16"}`}>
                  <AnimatedText delay={i * 0.15 + 0.1}>
                    <span className="font-serif text-5xl md:text-6xl font-bold text-accent">
                      {milestone.age}
                    </span>
                  </AnimatedText>
                </div>

                {/* Dot on center line */}
                <div className="absolute left-1/2 -translate-x-1/2 top-4 w-3 h-3 rounded-full bg-accent border-4 border-background z-10" />

                <div className={`flex-1 ${i % 2 === 0 ? "pl-16" : "text-right pr-16"}`}>
                  <p className="text-muted text-lg leading-relaxed">
                    {milestone.label}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
