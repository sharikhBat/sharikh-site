"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SharkLogo } from "./SharkLogo";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 backdrop-blur-md bg-[#060606]/80 border-b border-border"
      >
        <a
          href="#"
          className="text-foreground hover:text-accent transition-colors"
        >
          <SharkLogo />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
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
          {/* <a
            href="#contact"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Contact
          </a>
          <a
            href="#contact"
            className="text-sm px-4 py-2 bg-accent text-background rounded-full font-medium hover:bg-accent/90 transition-colors"
          >
            Let&apos;s talk
          </a> */}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[5px] w-7 h-7 items-center justify-center"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-5 h-[1.5px] bg-foreground origin-center"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block w-5 h-[1.5px] bg-foreground"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-5 h-[1.5px] bg-foreground origin-center"
          />
        </button>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {[
              { href: "#work", label: "Work" },
              { href: "#story", label: "Story" },
            ].map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="font-serif text-3xl text-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            {/* <motion.a
              href="#contact"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 px-8 py-3 bg-accent text-background rounded-full font-medium text-sm"
            >
              Let&apos;s talk
            </motion.a> */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
