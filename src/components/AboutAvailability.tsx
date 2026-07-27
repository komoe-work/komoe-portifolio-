import React from "react";
import { motion } from "motion/react";
import { Briefcase, Calendar, CheckCircle2, Clock } from "lucide-react";

export function AboutAvailability() {
  return (
    <section id="about" className="py-12 sm:py-16 bg-white border-b border-border-subtle">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* About Statement Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 space-y-4"
          >
            <span className="text-xs font-extrabold uppercase tracking-widest text-accent">
              Professional Brand Positioning
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary tracking-tight">
              An experienced IT professional who translates real-world technology into practical AI education.
            </h2>
            <p className="text-sm sm:text-base text-text-main leading-relaxed">
              I work in enterprise IT and systems management during the week, where I handle real-world infrastructure, security, business systems, and digital operations. On weekends, I translate that practical technology experience into project-based AI career training for college and university students. This combination allows me to teach not only how AI tools work, but how they can be applied responsibly to real workplace, business, and career challenges.
            </p>
          </motion.div>

          {/* Availability Card Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-5 bg-slate-50 border border-border-subtle rounded-2xl p-6 shadow-sm space-y-4"
          >
            <div className="flex items-center gap-2 border-b border-border-subtle pb-3">
              <Clock className="w-5 h-5 text-accent" />
              <h3 className="font-display font-bold text-primary text-base">
                Current Professional Availability
              </h3>
            </div>

            <div className="space-y-3">
              {/* IT Management Availability */}
              <div className="p-3.5 bg-white rounded-xl border border-border-subtle/80 space-y-1">
                <div className="flex items-center justify-between text-xs font-bold text-primary">
                  <span className="flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-accent" />
                    Full-time IT Management
                  </span>
                  <span className="px-2 py-0.5 rounded bg-success/10 text-success text-[10px] font-extrabold uppercase">
                    Open
                  </span>
                </div>
                <p className="text-xs text-text-light pl-5">
                  Open to full-time enterprise IT, systems security, and infrastructure roles (Myanmar / Remote / Regional).
                </p>
              </div>

              {/* AI Teaching Availability */}
              <div className="p-3.5 bg-white rounded-xl border border-border-subtle/80 space-y-1">
                <div className="flex items-center justify-between text-xs font-bold text-primary">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-accent" />
                    AI Teaching & Consulting
                  </span>
                  <span className="px-2 py-0.5 rounded bg-accent/10 text-accent text-[10px] font-extrabold uppercase">
                    Active
                  </span>
                </div>
                <p className="text-xs text-text-light pl-5">
                  Available for weekend online classes, part-time digital skills training, guest sessions, and education-sector collaboration.
                </p>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-text-muted flex items-center gap-1.5 justify-center border-t border-border-subtle/60">
              <CheckCircle2 className="w-3.5 h-3.5 text-success" />
              <span>Complementary professional paths, not competing identities.</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
