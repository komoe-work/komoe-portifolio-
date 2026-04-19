/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Target, 
  Cpu, 
  Server, 
  Database, 
  ShieldCheck, 
  Cloud, 
  Globe, 
  Monitor, 
  Briefcase, 
  Calendar,
  Layers,
  Zap,
  CheckCircle2,
  History,
  Settings
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 }
};

export default function App() {
  return (
    <div className="min-h-screen lg:h-screen flex flex-col lg:flex-row bg-page-bg font-sans overflow-hidden">
      {/* SIDEBAR */}
      <aside className="w-full lg:w-80 h-full bg-sidebar-bg border-r border-border-subtle p-8 overflow-y-auto flex flex-col gap-8 shrink-0">
        <div>
          <header className="border-b-2 border-accent pb-3 mb-6">
            <h1 className="text-2xl font-bold text-primary tracking-tight">Aung Zaw Moe</h1>
            <div className="text-[13px] uppercase tracking-wider font-extrabold text-accent mt-1">IT Manager</div>
          </header>

          <div className="space-y-2">
            <ContactItem icon={<Mail className="w-3.5 h-3.5" />} text="komoe@mindset-it.online" link="mailto:komoe@mindset-it.online" />
            <ContactItem icon={<Phone className="w-3.5 h-3.5" />} text="09-454235411" />
            <ContactItem icon={<MapPin className="w-3.5 h-3.5" />} text="Yangon, Myanmar" />
          </div>
        </div>

        {/* Sidebar Sections */}
        <div className="space-y-8">
          <section>
            <span className="text-[10px] uppercase tracking-[0.15em] font-extrabold text-text-light mb-3 block">Executive Profile</span>
            <p className="text-[12.5px] text-text-main leading-relaxed">
              Results-driven IT Manager with 10+ years of expertise in enterprise infrastructure, intelligent transit systems, and large-scale property management. Proven track record aligning IT operations with business goals.
            </p>
          </section>

          <section>
            <span className="text-[10px] uppercase tracking-[0.15em] font-extrabold text-text-light mb-3 block">Tech Stack</span>
            <div className="flex flex-wrap gap-1.5">
              {["AWS Cloud", "Docker", "Cisco ASA", "MikroTik", "Odoo ERP", "Ollama AI", "MS EDR", "Synology", "Python", "Nessus"].map((skill, i) => (
                <span key={skill} className={`px-2.5 py-1 border border-border-subtle rounded text-[10.5px] font-semibold ${i < 2 ? 'bg-primary text-white border-transparent' : 'bg-slate-50 text-primary'}`}>
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section>
            <span className="text-[10px] uppercase tracking-[0.15em] font-extrabold text-text-light mb-3 block">Certifications</span>
            <ul className="space-y-2">
              <CertItem text="ISO 27001:2022 (ISMS)" />
              <CertItem text="ISO 9001:2015 (QMS)" />
              <CertItem text="ISO 14000 (EMS)" />
            </ul>
          </section>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 h-full p-6 lg:p-10 overflow-y-auto flex flex-col gap-6">
        {/* Consultancy Highlight Card */}
        <motion.div 
          {...fadeIn}
          className="bg-primary text-white p-6 lg:p-8 rounded-xl flex justify-between items-center shadow-lg relative overflow-hidden group"
        >
          <div className="relative z-10 flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-[0.15em] font-extrabold text-white/60">Independent Consulting</span>
            <h3 className="text-xl font-bold tracking-tight">Mindset IT Solutions</h3>
            <p className="text-[13px] opacity-80 font-medium">Strategic CTO services & Secure Infrastructure Delivery</p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-[10px] px-2 py-0.5 border border-white/30 rounded bg-white/10 font-medium">Cloud Architecture</span>
              <span className="text-[10px] px-2 py-0.5 border border-white/30 rounded bg-white/10 font-medium">AI Security</span>
              <span className="text-[10px] px-2 py-0.5 border border-white/30 rounded bg-white/10 font-medium">Global Remote Support</span>
            </div>
          </div>
          <Settings className="w-16 h-16 opacity-10 rotate-12 absolute right-6 group-hover:rotate-45 transition-transform duration-700" />
        </motion.div>

        {/* Professional History */}
        <section className="flex flex-col gap-4">
          <span className="text-[10px] uppercase tracking-[0.15em] font-extrabold text-text-light">Professional History</span>
          <div className="grid grid-cols-1 gap-4">
            <ExperienceCard 
              role="IT Specialist (Dept Head)"
              company="IIDA Electronic (Myanmar) Co.,Ltd"
              date="2018 – Present"
              desc="Managing enterprise MRP and procurement CRM systems. Enforcing strict ISO 27001 policies for cross-border production security."
              highlight
            />
            <ExperienceCard 
              role="IT Manager"
              company="Asia Starmar Transport Intelligent (ASTI)"
              date="2017 – 2018"
              desc="Spearheaded Yangon Bus System (YBS) Intelligent framework. Integrated GPS, passenger flow, and payment systems (YPS)."
            />
            <ExperienceCard 
              role="Property Management IT Lead"
              company="Golden Land Real Estate (Golden City)"
              date="2014 – 2017"
              desc="Led complete IT service delivery for a premium 300+ employee real estate complex. Deployed full-scale BMS and ELV systems."
            />
          </div>
        </section>
      </main>
    </div>
  );
}

function ContactItem({ icon, text, link }: { icon: React.ReactNode, text: string, link?: string }) {
  const content = (
    <div className="flex items-center gap-2 text-[13px] text-text-light hover:text-accent transition-colors group cursor-default">
      <span className="group-hover:scale-110 transition-transform">{icon}</span>
      <span>{text}</span>
    </div>
  );
  return link ? <a href={link}>{content}</a> : content;
}

function CertItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-2 text-[12px] text-text-main font-medium">
      <CheckCircle2 className="w-3.5 h-3.5 text-success" />
      {text}
    </li>
  );
}

function ExperienceCard({ role, company, date, desc, highlight = false }: { role: string, company: string, date: string, desc: string, highlight?: boolean }) {
  return (
    <motion.div 
      {...fadeIn}
      whileHover={{ y: -2 }}
      className={`bg-white p-5 rounded-lg border-l-4 shadow-sm ${highlight ? 'border-accent' : 'border-border-subtle'}`}
    >
      <div className="flex justify-between items-start mb-2">
        <span className="font-bold text-primary flex items-center gap-2">
          {highlight && <div className="w-2 h-2 rounded-full bg-success" />}
          {role}
        </span>
        <span className="text-[12px] font-semibold text-text-light font-mono">{date}</span>
      </div>
      <div className="text-[13px] font-bold text-accent mb-2 uppercase tracking-tight">{company}</div>
      <p className="text-[12.5px] text-text-main leading-relaxed opacity-90">{desc}</p>
    </motion.div>
  );
}


