"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedSection } from "./AnimatedSection";

interface Project {
  title: string;
  tag: string;
  description: string;
  status: "live" | "building" | "shipped";
  link: string;
  colSpan: string;
  accent: string;
}

const projects: Project[] = [
  {
    title: "Stylenist",
    tag: "AI + Fashion",
    description:
      "Applying epistemology to personal styling. An AI app that doesn't just recommend — it understands why you wear what you wear.",
    status: "building",
    link: "#",
    colSpan: "md:col-span-7",
    accent: "#c9ff3b",
  },
  {
    title: "SMI",
    tag: "SaaS Platform",
    description:
      "Sell My Product Intelligence — marketplace analytics and review intelligence for brands scaling on e-commerce platforms.",
    status: "building",
    link: "#",
    colSpan: "md:col-span-5",
    accent: "#3b8fff",
  },
  {
    title: "Speak2",
    tag: "Senior Living",
    description:
      "Voice-first communication platform for senior living facilities. Connecting residents, families, and staff through conversational AI.",
    status: "shipped",
    link: "#",
    colSpan: "md:col-span-5",
    accent: "#ff6b3b",
  },
  {
    title: "Embers",
    tag: "Inspire",
    description:
      "A platform built to spark and sustain creative momentum. Turning fleeting inspiration into actionable creative work.",
    status: "shipped",
    link: "#",
    colSpan: "md:col-span-7",
    accent: "#ff3b8f",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.a
      ref={ref}
      href={project.link}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`${project.colSpan} group relative block`}
    >
      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-8 md:p-10 h-full min-h-[280px] flex flex-col justify-between hover:border-[#333] transition-all duration-500">
        {/* Accent glow */}
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[120px] opacity-0 group-hover:opacity-10 transition-opacity duration-700"
          style={{ background: project.accent }}
        />

        <div>
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-mono text-muted tracking-widest uppercase">
              {project.tag}
            </span>
            <span
              className={`text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full border ${
                project.status === "building"
                  ? "border-accent/30 text-accent"
                  : project.status === "live"
                    ? "border-green-500/30 text-green-400"
                    : "border-muted/30 text-muted"
              }`}
            >
              {project.status}
            </span>
          </div>

          <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4 group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-muted text-sm leading-relaxed max-w-md">
            {project.description}
          </p>
        </div>

        {/* Arrow */}
        <div className="flex justify-end mt-6">
          <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-300">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="group-hover:text-background transition-colors"
            >
              <path
                d="M1 13L13 1M13 1H3M13 1V11"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export function Work() {
  return (
    <section id="work" className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
      <AnimatedSection className="mb-16">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-xs font-mono text-accent tracking-widest uppercase mb-4 block">
              Selected Work
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold">
              Things I&apos;ve
              <br />
              <span className="italic text-muted">built</span>
            </h2>
          </div>
          <span className="hidden md:block text-6xl font-serif text-border">
            04
          </span>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
