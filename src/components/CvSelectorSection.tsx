import React, { useState } from "react";
import { motion } from "motion/react";
import { Download, ExternalLink, ShieldCheck, GraduationCap, UserCheck, CheckCircle2 } from "lucide-react";

export interface CvOption {
  id: string;
  title: string;
  badge: string;
  targetAudience: string;
  focusArea: string;
  url: string;
  filename: string;
  icon: React.ElementType;
  highlights: string[];
}

export const CV_OPTIONS: CvOption[] = [
  {
    id: "it-manager",
    title: "IT Manager CV",
    badge: "Enterprise IT & Security Focus",
    targetAudience: "Recruiters, Hiring Managers, Enterprise IT Directors",
    focusArea: "Infrastructure, Systems Security, MS EDR, ISO Compliance & Digital Operations",
    url: "/Aung-Zaw-Moe-IT-Manager-CV.html",
    filename: "Aung-Zaw-Moe-IT-Manager-CV.html",
    icon: ShieldCheck,
    highlights: [
      "Enterprise Server & Infrastructure Management",
      "ISO 27001 (ISMS), 9001 (QMS) & 14000 (EMS)",
      "Smart City Public Transit Telematics (YBS)",
      "Commercial Real Estate BMS & ELV Networks"
    ]
  },
  {
    id: "ai-instructor",
    title: "AI Career Instructor CV",
    badge: "Teaching & Mentorship Focus",
    targetAudience: "Training Centers, Universities, EdTech Organizations",
    focusArea: "Practical AI Education, Prompt Engineering, AI Research & Study Systems",
    url: "/Aung-Zaw-Moe-AI-Career-Instructor-CV.html",
    filename: "Aung-Zaw-Moe-AI-Career-Instructor-CV.html",
    icon: GraduationCap,
    highlights: [
      "Project-Based AI Career Training (Sat & Sun)",
      "AI Mindset LMS Portal & Curriculum Authoring",
      "Workflow Automation & Web Application Building",
      "Student Career Mentorship & Portfolio Development"
    ]
  },
  {
    id: "complete-profile",
    title: "Complete Professional Profile",
    badge: "Unified IT + AI Background",
    targetAudience: "Executive Search, Clients, Comprehensive Reviewers",
    focusArea: "Combined 10+ Year Career History in Enterprise IT & AI Education",
    url: "/Aung-Zaw-Moe-Professional-Profile.html",
    filename: "Aung-Zaw-Moe-Professional-Profile.html",
    icon: UserCheck,
    highlights: [
      "Translates real technology into practical education",
      "Full 10+ Year Leadership & Operational Timeline",
      "Complete Skill Matrix across Infrastructure & AI",
      "All Selected Enterprise & Educational Projects"
    ]
  }
];

export function CvSelectorSection() {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const handleDownload = async (option: CvOption) => {
    setDownloadingId(option.id);
    try {
      const response = await fetch(option.url);
      if (!response.ok) throw new Error("Failed to fetch CV file");
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = option.filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error("Download fallback active:", err);
      const a = document.createElement("a");
      a.href = option.url;
      a.download = option.filename;
      a.target = "_blank";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } finally {
      setTimeout(() => setDownloadingId(null), 600);
    }
  };

  return (
    <section id="cvs" className="py-14 sm:py-18 md:py-24 bg-page-bg border-t border-border-subtle">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-accent mb-2">
            Professional CV Downloads
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary tracking-tight">
            Select Your Preferred Profile
          </h2>
          <p className="text-sm sm:text-base text-text-light mt-3 leading-relaxed">
            Download or view targeted A4 PDF-ready CVs tailored to your specific recruitment, consulting, or training needs.
          </p>
        </div>

        {/* 3 CV Option Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CV_OPTIONS.map((option, idx) => {
            const Icon = option.icon;
            const isDownloading = downloadingId === option.id;

            return (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-border-subtle shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200 text-[11px] font-bold tracking-wide mb-4">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span>{option.badge}</span>
                  </div>

                  {/* Title & Icon */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-3 rounded-xl bg-slate-100 text-primary shrink-0">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-display text-primary tracking-tight">
                        {option.title}
                      </h3>
                      <p className="text-xs text-text-light mt-0.5 font-medium">
                        For: {option.targetAudience}
                      </p>
                    </div>
                  </div>

                  {/* Focus Area */}
                  <p className="text-xs text-text-main leading-relaxed mb-5 font-normal">
                    {option.focusArea}
                  </p>

                  {/* Highlights List */}
                  <div className="border-t border-border-subtle/80 pt-4 mb-6">
                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-text-light mb-2.5">
                      Included Focus Areas
                    </p>
                    <ul className="space-y-2">
                      {option.highlights.map((hl) => (
                        <li key={hl} className="flex items-start gap-2 text-xs font-medium text-primary">
                          <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Download and View Buttons */}
                <div className="flex flex-col gap-2.5 pt-2">
                  <button
                    onClick={() => handleDownload(option)}
                    disabled={isDownloading}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-accent text-white hover:bg-accent/90 shadow-sm transition-all active:scale-[0.98] cursor-pointer min-h-[44px]"
                  >
                    <Download className="w-4 h-4" />
                    <span>{isDownloading ? "Downloading..." : "Download PDF/HTML"}</span>
                  </button>

                  <a
                    href={option.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-slate-100 text-primary hover:bg-slate-200 border border-slate-200 transition-all min-h-[40px]"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>View in Browser</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
