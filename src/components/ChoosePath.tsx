import React from "react";
import { motion } from "motion/react";
import { Server, GraduationCap, ArrowRight, Download, CheckCircle2 } from "lucide-react";

export function ChoosePath() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const handleDownload = async (url: string, filename: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch CV file");
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(blobUrl);
    } catch {
      window.open(url, "_blank");
    }
  };

  return (
    <section id="choose-path" className="py-12 sm:py-16 bg-slate-900 text-white border-y border-slate-800">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-accent mb-2 block">
            Tailored Pathways
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
            Choose What You’re Here For
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
            I lead enterprise IT systems during weekdays and teach practical AI career skills during weekends. Select a pathway to explore relevant experience.
          </p>
        </div>

        {/* 2 Path Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Path 1: Enterprise IT */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-accent/50 transition-all shadow-lg"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-accent/20 text-accent">
                  <Server className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-extrabold text-accent">
                    Pathway 1 • Full-time
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                    Enterprise IT & Digital Operations
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Looking for an experienced IT Manager or Systems Leader to oversee enterprise infrastructure, systems security, endpoint protection, and digital operations?
              </p>

              <div className="border-t border-slate-700/80 pt-5 mb-6">
                <p className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">
                  Key Qualifications & Systems
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span>Enterprise Server Operations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span>ISO 27001 / 9001 / 14000</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span>MS EDR Endpoint Defense</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span>Smart City YBS Telematics</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => scrollTo("what-i-do")}
                className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-xs uppercase tracking-wider bg-accent text-white hover:bg-accent/90 transition-all min-h-[44px] cursor-pointer"
              >
                <span>Explore Enterprise IT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleDownload("/Aung-Zaw-Moe-IT-Manager-CV.html", "Aung-Zaw-Moe-IT-Manager-CV.html")}
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-slate-700 text-slate-200 hover:bg-slate-600 transition-all min-h-[44px] cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>IT Manager CV</span>
              </button>
            </div>
          </motion.div>

          {/* Path 2: AI Teaching */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-accent/50 transition-all shadow-lg"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-accent/20 text-accent">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-extrabold text-accent">
                    Pathway 2 • Weekend & Training
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                    AI Career Education & Mentorship
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Seeking an AI Career Instructor, digital skills trainer, or educational partner for project-based training, prompt engineering, and career preparation?
              </p>

              <div className="border-t border-slate-700/80 pt-5 mb-6">
                <p className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">
                  Teaching Focus & Programs
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span>Weekend Online Classes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span>AI Mindset LMS Portal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span>Prompt & Research Systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span>Project & Web Creation</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => scrollTo("ai-teaching")}
                className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-xs uppercase tracking-wider bg-accent text-white hover:bg-accent/90 transition-all min-h-[44px] cursor-pointer"
              >
                <span>Explore AI Teaching</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleDownload("/Aung-Zaw-Moe-AI-Career-Instructor-CV.html", "Aung-Zaw-Moe-AI-Career-Instructor-CV.html")}
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-slate-700 text-slate-200 hover:bg-slate-600 transition-all min-h-[44px] cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>AI Instructor CV</span>
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
