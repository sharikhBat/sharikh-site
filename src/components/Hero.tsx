"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-[85vh] md:min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Desktop: image absolute right, full height */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="hidden md:block absolute top-0 right-0 w-[45%] lg:w-[40%] h-full"
      >
        <Image
          src="/sharikh.jpg"
          alt="Sharikh Ahmed at a whiteboard"
          fill
          sizes="45vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/30" />
      </motion.div>

      <div className="relative z-10 px-6 md:px-12 lg:px-24 pt-24">
        <div className="max-w-xl lg:max-w-2xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex items-center gap-3 mb-6 md:mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs md:text-sm font-mono text-muted tracking-widest uppercase">
              Learner &middot; Builder &middot; Explorer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.95] tracking-tight mb-6 md:mb-8"
          >
            Sharikh
            <br />
            <span className="italic text-muted">Ahmed</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-base md:text-xl text-muted max-w-xl leading-relaxed mb-4 md:mb-6"
          >
            Started building at 16. Skipped college. Went straight to market.
            Passionate about solving real problems with tech.
          </motion.p>

          {/* Upwork badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex items-center gap-3 mb-8 md:mb-10"
          >
            <a
              href="https://www.upwork.com/freelancers/~01bb556a1c4505523e?viewMode=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface hover:border-[#333] transition-colors text-xs font-mono"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                className="text-[#14a800]"
              >
                <path
                  d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.004 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-[#14a800] font-medium">
                Top Rated Plus
              </span>
              <span className="text-muted">&middot;</span>
              <span className="text-muted">100% Job Success</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              See my work
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
              href="https://calendly.com/sharikhahmed"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground rounded-full text-sm hover:border-muted transition-colors"
            >
              Book a call
            </a>
          </motion.div>
        </div>
      </div>

      {/* Mobile: image below content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="md:hidden px-6 mt-8"
      >
        <div className="relative aspect-[3/2] rounded-2xl overflow-hidden border border-border">
          <Image
            src="/sharikh.jpg"
            alt="Sharikh Ahmed at a whiteboard"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </div>
      </motion.div>

      {/* Scroll indicator — desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="hidden md:flex absolute bottom-12 left-6 md:left-12 items-center gap-3 z-10"
      >
        <div className="w-[1px] h-12 bg-border overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-full h-1/2 bg-muted"
          />
        </div>
        <span className="text-xs text-muted font-mono tracking-widest uppercase">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
