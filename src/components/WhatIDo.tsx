import React from "react";
import { motion } from "motion/react";
import { Server, Cpu, CheckCircle2 } from "lucide-react";
import { WHAT_I_DO } from "../data/portfolio";

export function WhatIDo() {
  return (
    <section id="what-i-do" className="py-14 sm:py-18 md:py-24 bg-page-bg">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-accent mb-2">
            Core Expertise
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary tracking-tight">
            What I Do
          </h2>
          <p className="text-sm sm:text-base text-text-light mt-3 leading-relaxed">
            Bridging robust enterprise infrastructure with modern, career-focused AI innovation.
          </p>
        </div>

        {/* Expertise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {WHAT_I_DO.map((item, index) => {
            const isEnterprise = item.id === "enterprise-it";
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl border border-border-subtle shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-slate-100 text-primary">
                      {isEnterprise ? (
                        <Server className="w-6 h-6 text-accent" aria-hidden="true" />
                      ) : (
                        <Cpu className="w-6 h-6 text-accent" aria-hidden="true" />
                      )}
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest font-extrabold text-accent">
                        {isEnterprise ? "Infrastructure & Security" : "Teaching & Automation"}
                      </span>
                      <h3 className="text-xl font-bold font-display text-primary tracking-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-text-main leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="border-t border-border-subtle/80 pt-6">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-text-light mb-3">
                      Core Competencies
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {item.skills.map((skill) => (
                        <li key={skill} className="flex items-center gap-2 text-xs font-semibold text-primary">
                          <CheckCircle2 className="w-4 h-4 text-success shrink-0" aria-hidden="true" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
