"use client";

export function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-8 border-t border-border">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-serif text-sm text-muted">
          &copy; {new Date().getFullYear()} Sharikh Ahmed
        </span>

        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Twitter / X
          </a>
          <a
            href="#"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
