import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GraduationCap, Calendar, Globe, Sparkles, Lightbulb, BarChart3, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { AiMindsetModal } from "./AiMindsetModal";
import { MarketingMindsetModal } from "./MarketingMindsetModal";

export function TeachingSection() {
  const [showAiModal, setShowAiModal] = useState(false);
  const [showMarketingModal, setShowMarketingModal] = useState(false);

  const TEACHING_PULSES = [
    "Project-based AI career training",
    "Research & productivity workflows",
    "Website & web application creation",
    "Workflow automation & prompt engineering",
    "Career preparation & job-ready skills",
    "Portfolio mentorship & real-world projects"
  ];

  return (
    <section id="ai-teaching" className="py-14 sm:py-18 md:py-24 bg-white border-t border-border-subtle">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-accent mb-2">
            Education & Mentorship
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary tracking-tight">
            AI Career Instructor
          </h2>
          <p className="text-sm sm:text-base text-text-light mt-3 leading-relaxed">
            Empowering students and professionals in Myanmar with practical, job-ready AI career skills and workflow automation.
          </p>
        </div>

        {/* Main Teaching Showcase Box */}
        <div className="bg-gradient-to-br from-slate-900 via-primary to-slate-950 text-white rounded-2xl p-8 sm:p-10 lg:p-12 shadow-xl border border-slate-800 relative overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-accent/20 text-accent font-bold text-xs border border-accent/30 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Weekend Online Classes (Sat & Sun)</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-medium text-xs border border-slate-700">
                  AI Mindset Education
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-accent shrink-0" aria-hidden="true" />
                <span>AI Mindset Career Mentorship</span>
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                I lead weekend online classes helping learners leverage generative AI for research, productivity, website creation, automated business processes, and career advancement.
              </p>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {TEACHING_PULSES.map((pulse, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-200 bg-slate-800/80 p-3 rounded-lg border border-slate-700/80">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                    <span>{pulse}</span>
                  </div>
                ))}
              </div>

              {/* Primary External Link Button */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="https://ai-mindset.komoe.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5 min-h-[48px]"
                  aria-label="Visit AI Mindset LMS Website"
                >
                  <Globe className="w-4 h-4" />
                  <span>Visit AI Mindset</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <span className="text-xs text-slate-400 font-medium">
                  Official Learning Management System
                </span>
              </div>
            </div>

            {/* Right Card Illustration / Badge */}
            <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-end">
              <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 space-y-4 max-w-sm w-full text-center lg:text-left backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent mx-auto lg:mx-0">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base font-display">
                    Project-Based Learning
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Students don't just learn prompts—they build real AI applications, portfolio websites, and workflow automations.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-700/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Schedule: Sat & Sun</span>
                  <span className="text-accent font-bold">Enrollment Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preview Cards for Deep Reading Modals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: AI Mindset Strategies */}
          <div className="bg-slate-50 p-6 sm:p-8 rounded-xl border border-border-subtle flex flex-col justify-between hover:border-accent/40 transition-all">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-accent" />
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-accent">
                  Article & Mindmap
                </span>
              </div>
              <h3 className="text-xl font-bold font-display text-primary">
                5 Strategies to Supercharge Your Intelligence with AI
              </h3>
              <p className="text-xs sm:text-sm text-text-main leading-relaxed">
                Explore our cognitive enhancement roadmap, socratic reflections, and input hygiene frameworks for AI users.
              </p>
            </div>
            <div className="pt-6">
              <button
                onClick={() => setShowAiModal(true)}
                className="inline-flex items-center gap-2 py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-accent text-white hover:bg-accent/90 transition-all shadow-sm cursor-pointer"
              >
                <span>Read AI Mindset Strategies</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Marketing 7.0 Insights */}
          <div className="bg-slate-50 p-6 sm:p-8 rounded-xl border border-border-subtle flex flex-col justify-between hover:border-accent/40 transition-all">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-primary">
                  Marketing Strategy
                </span>
              </div>
              <h3 className="text-xl font-bold font-display text-primary">
                Marketing 7.0: Philip Kotler Insights
              </h3>
              <p className="text-xs sm:text-sm text-text-main leading-relaxed">
                10 deep insights on cognitive outsourcing, attention spans, micro-influencers, and human authenticity in the AI era.
              </p>
            </div>
            <div className="pt-6">
              <button
                onClick={() => setShowMarketingModal(true)}
                className="inline-flex items-center gap-2 py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-primary text-white hover:bg-slate-800 transition-all shadow-sm cursor-pointer"
              >
                <span>Read Marketing 7.0 Insights</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {showAiModal && <AiMindsetModal onClose={() => setShowAiModal(false)} />}
        {showMarketingModal && <MarketingMindsetModal onClose={() => setShowMarketingModal(false)} />}
      </AnimatePresence>
    </section>
  );
}
