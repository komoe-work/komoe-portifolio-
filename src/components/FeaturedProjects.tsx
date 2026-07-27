import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, FileText, CheckCircle2, X, Briefcase, Sparkles } from "lucide-react";
import { FEATURED_PROJECTS, Project } from "../data/portfolio";

export function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Esc key listener for modal
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedProject) {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  return (
    <section id="projects" className="py-14 sm:py-18 md:py-24 bg-white border-t border-border-subtle">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-accent mb-2">
            Portfolio Highlights
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary tracking-tight">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-text-light mt-3 leading-relaxed">
            Real-world enterprise systems, infrastructure deployments, and educational platforms.
          </p>
        </div>

        {/* Card Grid: 3 cols lg, 2 cols md, 1 col sm */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURED_PROJECTS.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white rounded-xl border border-border-subtle shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Visual Header / Banner */}
                <div className="bg-slate-900 p-6 text-white relative overflow-hidden flex flex-col justify-between min-h-[140px]">
                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded border border-accent/20">
                      {project.category}
                    </span>
                    <Sparkles className="w-4 h-4 text-accent/60" aria-hidden="true" />
                  </div>
                  <h3 className="relative z-10 text-lg font-bold font-display text-white mt-3 leading-snug group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-accent/10 rounded-full blur-xl group-hover:bg-accent/20 transition-all" />
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  {/* Problem statement */}
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-wider text-text-light mb-1">
                      Problem & Objective
                    </p>
                    <p className="text-xs text-text-main leading-relaxed line-clamp-3">
                      {project.problem}
                    </p>
                  </div>

                  {/* Role */}
                  <div className="flex items-center gap-2 text-xs font-semibold text-primary bg-slate-50 p-2.5 rounded-lg border border-slate-200/60">
                    <Briefcase className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                    <span>Role: {project.role}</span>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10.5px] font-semibold bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-border-subtle/50 mt-4 flex items-center gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-bold bg-accent text-white hover:bg-accent/90 transition-all shadow-sm min-h-[40px]"
                    aria-label={`Visit live site for ${project.title}`}
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                )}

                {project.caseStudyAvailable && (
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-bold bg-primary text-white hover:bg-slate-800 transition-all shadow-sm min-h-[40px] cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                    <span>Case Study</span>
                  </button>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg text-text-light hover:text-primary hover:bg-slate-100 transition-all border border-slate-200 min-h-[40px] min-w-[40px] flex items-center justify-center"
                    aria-label={`View GitHub repository for ${project.title}`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/40 backdrop-blur-sm shadow-2xl overflow-y-auto"
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden relative p-6 sm:p-8 space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 border-b border-border-subtle pb-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-extrabold text-accent">
                    {selectedProject.category}
                  </span>
                  <h3 id="case-study-title" className="text-xl font-bold font-display text-primary mt-1">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-primary transition-colors cursor-pointer"
                  aria-label="Close case study dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-sm text-text-main leading-relaxed">
                <div>
                  <h4 className="font-bold text-primary text-xs uppercase tracking-wider mb-1">
                    Key Challenge & Context
                  </h4>
                  <p>{selectedProject.problem}</p>
                </div>

                <div>
                  <h4 className="font-bold text-primary text-xs uppercase tracking-wider mb-1">
                    Leadership & Technical Role
                  </h4>
                  <p>{selectedProject.role}</p>
                </div>

                <div>
                  <h4 className="font-bold text-primary text-xs uppercase tracking-wider mb-2">
                    Key Outcomes & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 border border-slate-200 rounded-lg text-xs font-semibold text-primary"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-success" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border-subtle flex items-center justify-end gap-3">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs bg-accent text-white hover:bg-accent/90 transition-all"
                  >
                    <span>Visit Project</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2.5 rounded-xl font-bold text-xs bg-slate-100 text-primary hover:bg-slate-200 transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
