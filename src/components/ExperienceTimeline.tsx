import React from "react";
import { motion } from "motion/react";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import { EXPERIENCE_ITEMS } from "../data/portfolio";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-14 sm:py-18 md:py-24 bg-page-bg">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-accent mb-2">
            Career Track Record
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary tracking-tight">
            Professional Experience
          </h2>
          <p className="text-sm sm:text-base text-text-light mt-3 leading-relaxed">
            10+ years driving enterprise infrastructure, compliance governance, and AI skill development.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-300 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-8 space-y-10 max-w-4xl mx-auto">
          {EXPERIENCE_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline Marker Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full border-4 border-page-bg flex items-center justify-center shadow-sm ${
                  item.highlight ? "bg-accent text-white" : "bg-primary text-white"
                }`}
                aria-hidden="true"
              >
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>

              {/* Card Container */}
              <div
                className={`bg-white p-6 sm:p-8 rounded-xl border shadow-sm transition-all hover:shadow-md ${
                  item.highlight ? "border-accent/40 ring-1 ring-accent/10" : "border-border-subtle"
                }`}
              >
                {/* Role Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="text-lg sm:text-xl font-bold font-display text-primary flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
                    <span>{item.role}</span>
                  </h3>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold font-mono w-fit border border-slate-200">
                    <Calendar className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                    <span>{item.date}</span>
                  </span>
                </div>

                {/* Company Name */}
                <div className="text-xs font-extrabold uppercase tracking-wider text-accent mb-3">
                  {item.company}
                </div>

                {/* Summary Description */}
                <p className="text-sm text-text-main leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Bullets */}
                {item.bullets && item.bullets.length > 0 && (
                  <ul className="space-y-2 border-t border-border-subtle/70 pt-4">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-main leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
