"use client";

import { AnimatedSection } from "./AnimatedSection";

const items = [
  "Product Engineering",
  "AI Applications",
  "Full-Stack Development",
  "Market-First Building",
  "Startup Architecture",
  "Senior Living Tech",
  "E-Commerce",
  "Voice Interfaces",
];

export function Marquee() {
  return (
    <AnimatedSection>
      <div className="py-8 border-y border-border overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className="mx-8 text-sm font-mono text-muted tracking-widest uppercase flex items-center gap-8"
            >
              {item}
              <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
            </span>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
