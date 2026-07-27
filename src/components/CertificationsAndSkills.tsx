import React from "react";
import { CheckCircle2, ShieldCheck, Cpu } from "lucide-react";
import { CERTIFICATIONS, TECH_STACK } from "../data/portfolio";

export function CertificationsAndSkills() {
  return (
    <section id="skills" className="py-14 sm:py-18 md:py-24 bg-page-bg">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-accent mb-2">
            Standards & Stack
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary tracking-tight">
            Certifications & Technical Stack
          </h2>
          <p className="text-sm sm:text-base text-text-light mt-3 leading-relaxed">
            International ISO compliance governance and modern cloud-native technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Certifications Card */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-xl border border-border-subtle shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-slate-100 text-primary">
                  <ShieldCheck className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-extrabold text-accent">
                    Governance & Standards
                  </span>
                  <h3 className="text-xl font-bold font-display text-primary">
                    ISO Compliance
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.name} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200/80">
                    <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-primary text-sm">{cert.name}</h4>
                      <p className="text-xs text-text-light mt-0.5">{cert.fullName}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border-subtle text-xs text-text-light">
              Audited & aligned with enterprise IT governance requirements.
            </div>
          </div>

          {/* Technical Stack Chips */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-border-subtle shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-slate-100 text-primary">
                  <Cpu className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-extrabold text-accent">
                    Infrastructure & AI Tools
                  </span>
                  <h3 className="text-xl font-bold font-display text-primary">
                    Tech Stack & Teaching Domains
                  </h3>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {TECH_STACK.map((tech, idx) => (
                  <span
                    key={tech}
                    className={`px-3.5 py-2 rounded-lg text-xs font-bold border transition-all ${
                      idx < 2
                        ? "bg-primary text-white border-primary shadow-sm"
                        : "bg-slate-50 text-primary border-slate-200 hover:border-accent/50"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border-subtle text-xs text-text-light">
              Spanning enterprise security, containerization, cloud IaaS, and local AI nodes.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
