import React, { useState, useEffect } from "react";
import { Menu, X, User, Globe } from "lucide-react";
import { CONTACT_INFO } from "../data/portfolio";
import { CvButton } from "./CvButton";

interface NavbarProps {
  activeSection: string;
}

const NAV_LINKS = [
  { id: "hero", label: "Home" },
  { id: "choose-path", label: "Pathways" },
  { id: "what-i-do", label: "What I Do" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "ai-teaching", label: "AI Teaching" },
  { id: "skills", label: "Skills" },
  { id: "cvs", label: "CVs" },
  { id: "contact", label: "Contact" },
];

export function Navbar({ activeSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border-subtle/80 py-3"
          : "bg-white border-b border-border-subtle py-4"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand/Profile identity */}
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-3 text-left group focus:outline-none focus:ring-2 focus:ring-accent rounded-lg p-1"
          aria-label="Aung Zaw Moe Homepage"
        >
          <div className="w-10 h-10 rounded-full border-2 border-slate-200 overflow-hidden bg-slate-100 shrink-0 relative shadow-sm group-hover:border-accent transition-colors flex items-center justify-center">
            {!imgError ? (
              <img
                src="/komoe.svg"
                alt="Aung Zaw Moe"
                className="w-full h-full object-cover"
                onError={() => setImgError(true)}
              />
            ) : (
              <User
                className="w-5 h-5 text-slate-400"
                aria-hidden="true"
              />
            )}
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-bold text-primary text-base tracking-tight leading-tight group-hover:text-accent transition-colors">
                {CONTACT_INFO.name}
              </span>
              <span className="px-1.5 py-0.5 rounded bg-slate-100 text-[10px] font-extrabold text-slate-600 uppercase tracking-widest border border-slate-200">
                {CONTACT_INFO.nickname}
              </span>
            </div>
            <p className="text-[11px] text-text-light font-medium truncate max-w-[200px] sm:max-w-none">
              {CONTACT_INFO.title}
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all min-h-[40px] cursor-pointer ${
                  isActive
                    ? "bg-slate-100 text-accent font-extrabold"
                    : "text-text-main hover:text-primary hover:bg-slate-50"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* CTA Actions Desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://ai-mindset.komoe.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold text-primary hover:text-accent hover:bg-slate-50 transition-colors"
            aria-label="AI Mindset LMS"
          >
            <Globe className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
            <span>AI Mindset</span>
          </a>
          <CvButton variant="primary" />
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl text-primary hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-accent min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 z-50 bg-white/98 backdrop-blur-lg border-t border-border-subtle p-6 flex flex-col justify-between overflow-y-auto animate-fadeIn">
          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-widest font-extrabold text-text-light px-3 mb-2">
              Navigation
            </p>
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all min-h-[44px] flex items-center justify-between ${
                    isActive
                      ? "bg-accent/10 text-accent font-extrabold border border-accent/20"
                      : "text-primary hover:bg-slate-50"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-accent" />}
                </button>
              );
            })}
          </div>

          <div className="pt-6 border-t border-border-subtle space-y-3">
            <a
              href="https://ai-mindset.komoe.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider"
            >
              <Globe className="w-4 h-4 text-accent" />
              <span>Visit AI Mindset LMS</span>
            </a>
            <div className="w-full flex justify-center">
              <CvButton variant="primary" showViewButton className="w-full justify-center" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
