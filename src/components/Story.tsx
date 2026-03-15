"use client";

import { AnimatedSection, AnimatedText } from "./AnimatedSection";

const milestones = [
  { age: "16", label: "First clients. No degree, no connections. Just cold outreach and hustle." },
  { age: "17", label: "First real job. Learned more in 6 months than most learn in 4 years of college." },
  { age: "Now", label: "Building businesses, shipping products, helping founders turn market expertise into tech." },
];

export function Story() {
  return (
    <section id="story" className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="mb-20">
          <span className="text-xs font-mono text-accent tracking-widest uppercase mb-4 block">
            The Story
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            No degree.
            <br />
            <span className="italic text-muted">All market.</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-20">
          <AnimatedSection delay={0.1}>
            <p className="text-muted text-lg leading-relaxed">
              I skipped the traditional path. While others were in lecture halls, I was in the market — building, selling, learning from real customers with real problems.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-muted text-lg leading-relaxed">
              That gave me something no curriculum could: the ability to spot what actually needs building. Not what&apos;s theoretically interesting — what people will pay for.
            </p>
          </AnimatedSection>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-border" />

          {milestones.map((milestone, i) => (
            <AnimatedSection
              key={milestone.age}
              delay={i * 0.15}
              className={`relative flex flex-col md:flex-row items-start gap-8 mb-16 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"}`}>
                <AnimatedText delay={i * 0.15 + 0.1}>
                  <span className="font-serif text-5xl md:text-6xl font-bold text-accent">
                    {milestone.age}
                  </span>
                </AnimatedText>
              </div>

              {/* Dot on line */}
              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 top-4 w-3 h-3 rounded-full bg-accent border-4 border-background z-10" />

              <div className={`flex-1 ${i % 2 === 0 ? "md:pl-16" : "md:text-right md:pr-16"} pl-8 md:pl-0`}>
                <p className="text-muted text-lg leading-relaxed">
                  {milestone.label}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
