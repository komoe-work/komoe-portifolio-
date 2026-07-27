import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, User, ShieldCheck, Sparkles, Mail } from "lucide-react";
import { CONTACT_INFO } from "../data/portfolio";
import { CvButton } from "./CvButton";

export function Hero() {
  const [imgError, setImgError] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white border-b border-border-subtle">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Hero Left Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col items-start gap-6 text-left"
          >
            {/* Status pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 border border-slate-200 shadow-sm text-xs font-bold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span>Available for IT Management, Training & Consulting</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-display font-extrabold text-primary tracking-tight leading-[1.12]">
              I build reliable IT systems and teach practical AI career skills.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-text-main leading-relaxed font-normal max-w-[680px]">
              IT Manager and AI Career Instructor with 10+ years of experience in enterprise infrastructure, secure digital systems, workflow automation, and project-based AI education.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <button
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider bg-primary text-white hover:bg-slate-800 shadow-lg shadow-primary/10 hover:-translate-y-0.5 transition-all active:scale-[0.98] min-h-[48px] cursor-pointer"
              >
                <span>View Selected Work</span>
                <ArrowRight className="w-4 h-4 text-accent" aria-hidden="true" />
              </button>

              <CvButton variant="primary" showViewButton />

              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-1.5 py-3 px-4 text-xs font-bold text-text-light hover:text-accent transition-colors min-h-[48px] cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Micro details pills */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-medium text-text-light border-t border-border-subtle/60 w-full">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-accent" />
                ISO 27001 Auditor & ISMS Lead
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-accent" />
                AI Mindset Founder
              </span>
            </div>
          </motion.div>

          {/* Hero Right Image Frame Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[360px] sm:max-w-[400px]">
              {/* Decorative accent card frame */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-accent/20 via-slate-200 to-primary/10 blur-xl opacity-70 -z-10" />

              <div className="bg-white p-4 rounded-2xl border border-border-subtle shadow-xl space-y-4">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-slate-100 border border-slate-200 group flex items-center justify-center">
                  {!imgError ? (
                    <img
                      src="/komoe.svg"
                      alt={`${CONTACT_INFO.name} (${CONTACT_INFO.nickname})`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <User
                      className="w-16 h-16 text-slate-300"
                      aria-hidden="true"
                    />
                  )}
                </div>

                <div className="p-2 text-center bg-slate-50 rounded-lg border border-slate-200/60">
                  <h2 className="font-display font-bold text-primary text-base">
                    {CONTACT_INFO.name} ({CONTACT_INFO.nickname})
                  </h2>
                  <p className="text-xs text-accent font-bold uppercase tracking-wider mt-0.5">
                    {CONTACT_INFO.title}
                  </p>
                  <p className="text-[11px] text-text-light mt-1">
                    Based in {CONTACT_INFO.location}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
