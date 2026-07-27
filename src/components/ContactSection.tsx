import React from "react";
import { Mail, Phone, MapPin, Globe, Facebook, Linkedin } from "lucide-react";
import { CONTACT_INFO } from "../data/portfolio";
import { CvButton } from "./CvButton";

export function ContactSection() {
  return (
    <section id="contact" className="py-14 sm:py-18 md:py-24 bg-white border-t border-border-subtle">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 lg:p-16 shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Column: Heading & Info */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-accent">
                Let's Connect
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
                Get In Touch with Aung Zaw Moe
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                Open for IT Management leadership roles, enterprise infrastructure consulting, ISO ISMS auditing, and AI career skill training workshops.
              </p>

              {/* Direct Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-accent transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-accent text-white group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block">
                      Email Address
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white group-hover:text-accent transition-colors">
                      {CONTACT_INFO.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/[^0-9]/g, "")}`}
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-accent transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-accent text-white group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block">
                      Phone Number
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white group-hover:text-accent transition-colors">
                      {CONTACT_INFO.phone}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <div className="p-2.5 rounded-lg bg-slate-700 text-slate-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block">
                      Location
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white">
                      {CONTACT_INFO.location}
                    </span>
                  </div>
                </div>

                <a
                  href={CONTACT_INFO.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-accent transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-slate-700 text-slate-300 group-hover:text-accent transition-colors">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block">
                      LMS Platform
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white group-hover:text-accent transition-colors">
                      {CONTACT_INFO.websiteDisplay}
                    </span>
                  </div>
                </a>
              </div>

              {/* Social profiles */}
              <div className="flex items-center gap-3 pt-2">
                <span className="text-xs font-bold text-slate-400">Profiles:</span>
                <a
                  href={CONTACT_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-accent transition-all"
                  aria-label="Aung Zaw Moe Facebook Profile"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                {CONTACT_INFO.linkedinUrl && (
                  <a
                    href={CONTACT_INFO.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-accent transition-all"
                    aria-label="Aung Zaw Moe LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                <a
                  href={CONTACT_INFO.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-accent transition-all"
                  aria-label="AI Mindset LMS Website"
                >
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: CV CTA Box */}
            <div className="lg:col-span-5 bg-slate-800/90 p-8 rounded-2xl border border-slate-700/80 space-y-6 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-accent">
                  Summary CV Document
                </span>
                <h3 className="text-xl font-bold font-display text-white">
                  Download Full Executive CV
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Get a clean, printable HTML CV summary formatted for recruitment evaluation, teaching assessments, or consulting proposals.
                </p>
              </div>

              <div className="pt-2">
                <CvButton variant="primary" showViewButton className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
