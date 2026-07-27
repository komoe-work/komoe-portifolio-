import React from "react";
import { CONTACT_INFO } from "../data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-white border-t border-border-subtle text-text-light text-xs">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-primary">
            © {currentYear} {CONTACT_INFO.name} ({CONTACT_INFO.nickname}). All rights reserved.
          </p>
          <p className="text-[11px] text-text-light mt-0.5">
            IT Manager & AI Career Instructor • Yangon, Myanmar
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={CONTACT_INFO.canonicalUrl}
            className="hover:text-accent font-medium transition-colors"
          >
            {CONTACT_INFO.canonicalUrl.replace("https://", "").replace("/", "")}
          </a>
          <a
            href={CONTACT_INFO.website}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent font-medium transition-colors"
          >
            AI Mindset LMS
          </a>
          <a
            href="/ko-moe-summary-cv.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent font-medium transition-colors"
          >
            HTML CV Summary
          </a>
        </div>
      </div>
    </footer>
  );
}
