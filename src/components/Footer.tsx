"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-warm/20">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Aman Singh
          </span>
          <span className="text-warm">·</span>
          <span className="text-xs text-muted/50 font-mono">
            Built with Next.js &amp; Tailwind
          </span>
        </div>

        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: "https://github.com/amansingh812" },
            { icon: Linkedin, href: "https://linkedin.com/in/amansingh" },
            { icon: Mail, href: "mailto:amansinghofficial9776@gmail.com" },
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted/40 hover:text-accent transition-colors duration-300"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
