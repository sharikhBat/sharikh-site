"use client";

import { motion } from "framer-motion";

export function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 backdrop-blur-md bg-[#060606]/80 border-b border-border"
    >
      <a
        href="#"
        className="font-serif text-lg tracking-tight text-foreground hover:text-accent transition-colors"
      >
        SA.
      </a>

      <div className="flex items-center gap-8">
        <a
          href="#work"
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          Work
        </a>
        <a
          href="#story"
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          Story
        </a>
        <a
          href="#contact"
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          Contact
        </a>
        <a
          href="#"
          className="text-sm px-4 py-2 bg-accent text-background rounded-full font-medium hover:bg-accent/90 transition-colors"
        >
          Let&apos;s talk
        </a>
      </div>
    </motion.nav>
  );
}
