/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion, AnimatePresence } from "motion/react";
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
  Settings,
  Lightbulb,
  X,
  ArrowDown,
  Download,
  User,
  BarChart3,
  Linkedin,
  Facebook
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 }
};

export default function App() {
  const [showAiMindset, setShowAiMindset] = React.useState(false);
  const [showMarketingMindset, setShowMarketingMindset] = React.useState(false);

  return (
    <div className="min-h-screen lg:h-screen flex flex-col lg:flex-row bg-page-bg font-sans overflow-hidden">
      {/* SIDEBAR */}
      <aside className="w-full lg:w-80 h-full bg-sidebar-bg border-r border-border-subtle p-8 overflow-y-auto flex flex-col gap-8 shrink-0 focus-visible:outline-none">
        <div>
          <div className="flex flex-col items-center mb-6">
            <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-full border-4 border-white shadow-xl mb-6 overflow-hidden group bg-slate-50 relative ring-1 ring-slate-100 mx-auto">
              <img 
                src="/komoe.svg" 
                alt="Aung Zaw Moe (Ko Moe) Professional Profile" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  // Fallback if image fails to load
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center');
                }}
              />
              <User className="w-12 h-12 text-slate-300 absolute inset-0 m-auto hidden group-[.flex]:block" aria-hidden="true" />
            </div>
            <header className="border-b-2 border-accent pb-4 w-full text-center">
              <h1 className="text-3xl font-display font-bold text-primary tracking-tighter leading-tight">Aung Zaw Moe</h1>
              <div className="mt-2.5 mb-2 flex items-center justify-center">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-50 text-[10px] font-extrabold text-stone-500 uppercase tracking-[0.25em] italic border border-slate-200 shadow-sm transition-transform hover:scale-105 cursor-default">
                  Ko Moe
                </span>
              </div>
              <div className="text-[13px] uppercase tracking-widest font-extrabold text-accent">IT Manager</div>
            </header>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <ContactItem icon={<Globe className="w-3.5 h-3.5" aria-hidden="true" />} text="ai.mindset-it.online" link="https://ai.mindset-it.online/" />
              <ContactItem icon={<Mail className="w-3.5 h-3.5" aria-hidden="true" />} text="komoe@mindset-it.online" link="mailto:komoe@mindset-it.online" />
              <ContactItem icon={<Phone className="w-3.5 h-3.5" aria-hidden="true" />} text="09-454235411" />
              <ContactItem icon={<MapPin className="w-3.5 h-3.5" aria-hidden="true" />} text="Yangon, Myanmar" />
            </div>

            <a 
              href="https://ai.mindset-it.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 bg-primary text-white py-3.5 rounded-xl text-[11px] font-bold uppercase tracking-[0.2em] shadow-lg shadow-primary/20 hover:bg-slate-800 hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-[0.98] group"
              aria-label="Visit AI Mindset Website and LMS"
            >
              <Globe className="w-4 h-4 group-hover:animate-pulse" aria-hidden="true" />
              AI Mindset Website
            </a>

            <div className="flex items-center justify-center gap-4 pt-2 border-t border-border-subtle/50">
              <a href="#" className="p-2 rounded-full text-text-light hover:text-primary hover:bg-slate-50 transition-all" aria-label="LinkedIn Profile">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61570808135698" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full text-text-light hover:text-primary hover:bg-slate-50 transition-all" aria-label="Facebook Profile">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://ai.mindset-it.online/" className="p-2 rounded-full text-text-light hover:text-primary hover:bg-slate-50 transition-all" aria-label="AI Mindset LMS">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Sidebar Sections */}
        <div className="space-y-4">
          <section>
            <button 
              onClick={() => setShowAiMindset(true)}
              className="w-full flex items-center justify-between gap-3 bg-accent text-white p-4 rounded-xl font-bold shadow-lg hover:bg-accent/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="flex items-center gap-3">
                <Lightbulb className="w-5 h-5" aria-hidden="true" />
                <span className="text-xs uppercase tracking-wider">AI Mindset Ideas</span>
              </div>
              <Zap className="w-4 h-4 text-white/70" aria-hidden="true" />
            </button>
          </section>

          <section>
            <button 
              onClick={() => setShowMarketingMindset(true)}
              className="w-full flex items-center justify-between gap-3 bg-primary text-white p-4 rounded-xl font-bold shadow-lg hover:bg-slate-800 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="flex items-center gap-3">
                <BarChart3 className="w-5 h-5" aria-hidden="true" />
                <span className="text-xs uppercase tracking-wider">Marketing Strategy</span>
              </div>
              <Globe className="w-4 h-4 text-white/70" aria-hidden="true" />
            </button>
          </section>
        </div>

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
              {["AWS Cloud", "Docker", "Google Cloud Platform (GCP)", "Cloudflare IaaS", "Proxmox Virtual Environment (PVE)", "Ollama AI", "MS EDR", "NAS Solution", "Nessus", "Software as a Service (SaaS)"].map((skill, i) => (
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

      <AnimatePresence>
        {showAiMindset && (
          <AiMindsetModal onClose={() => setShowAiMindset(false)} />
        )}
        {showMarketingMindset && (
          <MarketingMindsetModal onClose={() => setShowMarketingMindset(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

function ContactItem({ icon, text, link }: { icon: React.ReactNode, text: string, link?: string }) {
  const content = (
    <div className="flex items-center gap-2 text-[13px] text-text-light hover:text-accent transition-colors group cursor-default">
      <span className="group-hover:scale-110 transition-transform" aria-hidden="true">{icon}</span>
      <span>{text}</span>
    </div>
  );
  return link ? <a href={link}>{content}</a> : content;
}

function CertItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-2 text-[12px] text-text-main font-medium">
      <CheckCircle2 className="w-3.5 h-3.5 text-success" aria-hidden="true" />
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

function AiMindsetModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/40 backdrop-blur-sm shadow-2xl overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-3xl w-full max-w-4xl shadow-2xl overflow-hidden relative"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-primary transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        <div className="p-8 md:p-12 overflow-y-auto max-h-[85vh]">
          {/* Section A: Executive Summary */}
          <div className="mb-16">
            <h1 id="modal-title" className="text-3xl md:text-4xl font-extrabold text-primary mb-6 text-center tracking-tight font-display">
              5 Strategies to Supercharge Your Intelligence with AI
            </h1>
            
            <div className="bg-accent/10 p-6 rounded-2xl border border-accent/20 mb-8">
              <h2 className="text-[10px] font-bold text-accent uppercase tracking-widest mb-2">Core Theme</h2>
              <p className="text-lg text-text-main leading-relaxed font-medium">
                Moving beyond AI as a "productivity tool" to using AI as a "cognitive enhancer"—a system to upgrade your inputs, your learning process, and your decision-making.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <StrategyMiniCard title="Mindset Shift" desc="Focus on upgrading your brain, not just completing tasks faster." />
              <StrategyMiniCard title="Quality Inputs" desc="Reset algorithms and use AI briefings to filter out junk information." />
              <StrategyMiniCard title="Just-in-Time" desc="Switch from knowledge storage to instant, relevant deep-dives." />
              <StrategyMiniCard title="Role Evolution" desc="Automate the 92% to focus on the 8%: Taste, Vision, and Care." />
            </div>
          </div>

          {/* Section B: Hierarchical Roadmap */}
          <div className="flex flex-col items-center mb-20">
            <h2 className="text-sm font-extrabold text-text-light mb-10 text-center uppercase tracking-widest">Evolution of a New Intelligence</h2>
            
            <MindmapNode phase="PHASE 1" title="Information Hygiene" desc="Filtered Social Feeds & Daily Briefings" active />
            <ArrowIcon />
            <MindmapNode phase="PHASE 2" title="Dynamic Mastery" desc="Just-in-Time Learning via AI Notebooks" active />
            <ArrowIcon />
            <MindmapNode phase="PHASE 3" title="Strategic Stress-Testing" desc="Red-Teaming Ideas & Blindspot Analysis" active />
            <ArrowIcon />
            <div className="bg-primary text-white p-6 rounded-xl shadow-xl border-2 border-primary text-center scale-110 min-w-[240px]">
              <span className="block text-[10px] font-bold opacity-70 mb-1">FINAL GOAL</span>
              <p className="font-bold text-lg">Identity Shift: The Director</p>
              <p className="text-xs mt-1 italic opacity-80">Visionary Control + Human Care</p>
            </div>
          </div>

          {/* Section C: Socratic Flashcards */}
          <div className="pb-8">
            <h2 className="text-2xl font-bold text-primary mb-2 text-center font-display">Socratic Reflections</h2>
            <p className="text-center text-text-light mb-10 text-sm italic">Hover or click to confront the questions that force evolution.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <FlipCard front="The Calculator Trap" back='"Are you using AI to finish your work faster, or are you using it to change the way you think entirely?"' />
              <FlipCard front="Input Hygiene" back='"If your thoughts are only as good as the data they consume, what is your current social media feed making of you?"' />
              <FlipCard front="Just-in-Time" back='"Is gathering knowledge "just in case" really learning, or is it just hoarding information?"' />
              <FlipCard front="Red Teaming" back='"If you were your most ruthless competitor, where would you strike to destroy your own plan?"' />
              <FlipCard front="The 8% Identity" back='"When a machine does the work of a thousand hands, what is the value of the heart behind it?"' />
              <FlipCard front="Taste & Vision" back='"Can you define a "good" outcome without looking at what the crowd thinks is good?"' />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function StrategyMiniCard({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-border-subtle hover:border-accent/40 transition-colors">
      <div className="bg-accent text-white rounded-lg p-2 shrink-0">
        <Zap className="w-4 h-4" aria-hidden="true" />
      </div>
      <div>
        <h3 className="font-bold text-primary text-sm tracking-tight">{title}</h3>
        <p className="text-text-main text-[11px] leading-relaxed mt-0.5">{desc}</p>
      </div>
    </div>
  );
}

function MindmapNode({ phase, title, desc, active }: { phase: string, title: string, desc: string, active?: boolean }) {
  return (
    <div className={`mindmap-node ${active ? 'border-accent/30' : ''}`}>
      <span className="block text-[10px] font-bold text-accent mb-1 tracking-widest">{phase}</span>
      <p className="text-primary font-bold">{title}</p>
      <p className="text-[11px] text-text-light mt-1 italic leading-tight">{desc}</p>
    </div>
  );
}

function ArrowIcon() {
  return <div className="p-2 text-slate-300"><ArrowDown className="w-5 h-5" strokeWidth={3} aria-hidden="true" /></div>;
}

function FlipCard({ front, back }: { front: string, back: string }) {
  const [flipped, setFlipped] = React.useState(false);

  const handleToggle = () => setFlipped(!flipped);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <div 
      className="flip-card h-[200px]" 
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onClick={handleToggle}
      role="button"
      aria-label={`Insight card: ${front}. Press to see details.`}
    >
      <div className={`flip-card-inner h-full w-full ${flipped ? '[transform:rotateY(180deg)]' : ''}`}>
        <div className="flip-card-front font-display h-full w-full">{front}</div>
        <div className="flip-card-back h-full w-full">{back}</div>
      </div>
    </div>
  );
}

function MarketingMindsetModal({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = React.useState<'summary' | 'insights'>('summary');

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/40 backdrop-blur-sm shadow-2xl overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="marketing-modal-title"
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-3xl w-full max-w-4xl shadow-2xl overflow-hidden relative flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        <div className="bg-slate-50 border-b border-border-subtle p-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col">
            <h1 id="marketing-modal-title" className="text-xl lg:text-2xl font-bold text-primary tracking-tight font-display">
              Marketing 7.0: Philip Kotler Insights
            </h1>
            <p className="text-[11px] uppercase tracking-widest text-accent font-bold mt-1">Strategic Mindset Evolution</p>
          </div>
          
          <div className="flex bg-slate-200 p-1 rounded-lg">
            <button 
              onClick={() => setActiveTab('summary')}
              className={`px-4 py-1.5 rounded-md text-[11px] font-bold transition-all ${activeTab === 'summary' ? 'bg-white text-primary shadow-sm' : 'text-text-light hover:text-primary'}`}
            >
              Summary
            </button>
            <button 
              onClick={() => setActiveTab('insights')}
              className={`px-4 py-1.5 rounded-md text-[11px] font-bold transition-all ${activeTab === 'insights' ? 'bg-white text-primary shadow-sm' : 'text-text-light hover:text-primary'}`}
            >
              10 Deep Insights
            </button>
          </div>

          <button 
            onClick={onClose}
            className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-primary transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="p-8 md:p-12 overflow-y-auto article-content font-myanmar">
          {activeTab === 'summary' ? <Marketing7Summary /> : <Marketing7Insights10 />}
        </div>
      </motion.div>
    </motion.div>
  );
}

function Marketing7Summary() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-center border-none pl-0 mb-12 text-2xl lg:text-3xl text-primary">Marketing 7.0 ၏ အဓိက အနှစ်ချုပ်များ</h2>

      <section>
        <span className="text-accent font-bold text-sm block mb-2">စိတ်ပိုင်းဆိုင်ရာကို ဗဟိုပြုခြင်း</span>
        <p>
          AI အသုံးပြုပြီး Data တွေ၊ Performance တွေကိုချည်းပဲ အားရုံစိုက်နေမယ့်အစား လူတွေဘယ်လိုတွေးခေါ်သလဲ၊ အမှတ်တံဆိပ်တွေနဲ့ ဘယ်လိုချိတ်ဆက်သလဲ၊ ဘယ်လိုဆုံးဖြတ်ဝယ်ယူသလဲ ဆိုတဲ့ "လူ့စိတ်သဘာဝ (Human Mind)" ကို ပိုမိုနားလည်အောင် ချဉ်းကပ်တဲ့ မားကတ်တင်းဖြစ်ပါတယ်။
        </p>
      </section>

      <section className="mt-8">
        <span className="text-accent font-bold text-sm block mb-2">နည်းပညာပေါင်းစပ်ထားသော စားသုံးသူများ</span>
        <p>
          ဒီခေတ်က စားသုံးသူတွေဟာ နေ့စဉ်ဘဝမှာ AI နဲ့ Immersive နည်းပညာတွေကို အသုံးပြုပြီး ဆုံးဖြတ်ချက်ချနေကြပါပြီ။ ဒါကြောင့် ဒီလို နည်းပညာအကူအညီတွေ ရယူထားတဲ့ စားသုံးသူအသစ်တွေ (Augmented Humans) နဲ့ ဘယ်လိုထိရောက်စွာ ထိတွေ့ဆက်ဆံမလဲဆိုတာကို လမ်းညွှန်ထားပါတယ်။
        </p>
      </section>

      <section className="mt-8">
        <span className="text-accent font-bold text-sm block mb-2">စစ်မှန်မှုကို ဦးစားပေးခြင်း</span>
        <p>
          နည်းပညာကို အလွန်အကျွံ အားကိုးပြီး AI သက်သက်နဲ့ ပြုလုပ်ထားတဲ့ မားကတ်တင်းတွေဟာ စစ်မှန်မှု (Authenticity) နဲ့ လူသားဆန်မှုကို ပျောက်ဆုံးစေပါတယ်။ Marketing 7.0 က နည်းပညာကို ဉာဏ်ရည်ဉာဏ်သွေးရှိရှိ အသုံးချရင်း တစ်ဖက်မှာလည်း လူသားအချင်းချင်း ဖန်တီးနိုင်တဲ့ စစ်မှန်တဲ့ ယုံကြည်မှု (Trust) ကို တည်ဆောက်ဖို့ သတိပေးထားပါတယ်။
        </p>
      </section>

      <div className="highlight-box mt-12 bg-slate-50 border-accent/20">
        <span className="block text-lg text-primary mb-6 not-italic font-bold">ဥပမာ- ထမင်းဆိုင်တစ်ဆိုင်၏ Marketing ပြောင်းလဲပုံ</span>
        
        <div className="space-y-4 text-sm lg:text-base not-italic">
          <p><span className="step-label">Marketing 1.0 (ထုတ်ကုန်ဗဟိုပြု):</span> "ကျွန်တော်တို့ဆိုင်က ဟင်းတွေ အကောင်းဆုံးနဲ့ အရသာအရှိဆုံးပါ။"</p>
          <p><span className="step-label">Marketing 2.0 (ဖောက်သည်ဗဟိုပြု):</span> "ဝယ်သူအကြိုက် အချို၊ အစပ် စိတ်ကြိုက် ချက်ပေးပါတယ်။"</p>
          <p><span className="step-label">Marketing 3.0 (တန်ဖိုးထားမှုဗဟိုပြု):</span> "ကျန်းမာရေးအတွက် ဆီသန့်နဲ့ အော်ဂဲနစ် ဟင်းသီးဟင်းရွက်တွေကိုသာ အသုံးပြုပါတယ်။"</p>
          <p><span className="step-label">Marketing 4.0 (ဒစ်ဂျစ်တယ်ကူးပြောင်းမှု):</span> "ဆိုင်မှာသာမက၊ Facebook Page ကနေ ဟင်းအမယ်တွေကြည့်ပြီး Delivery နဲ့ပါ မှာလို့ရပါပြီ။"</p>
          <p><span className="step-label">Marketing 5.0 (နည်းပညာအသုံးချမှု):</span> စနစ် (POS) နှင့် Data များကိုသုံးပြီး ဖောက်သည်ဟောင်းတွေအတွက် အထူး Promotion များကို ပို့ပေးသည်။</p>
          <p><span className="step-label">Marketing 6.0 (ပေါင်းစပ်အတွေ့အကြုံ):</span> ဆိုင်မှာလာစားသလို၊ အွန်လိုင်းမှာလည်း ဆိုင်ရဲ့ ဟင်းချက်ပုံကို အနီးကပ် မြင်တွေ့ခံစားရစေသည်။</p>
          <p><span className="step-label">Marketing 7.0 (စိတ်ပိုင်းဆိုင်ရာနှင့် စစ်မှန်မှု):</span> AI ကိုသုံးသော်လည်း၊ ဖောက်သည်များနှင့် ဆက်ဆံရာတွင် စစ်မှန်သော နွေးထွေးမှု (Authenticity) ဖြင့် ယုံကြည်မှု တည်ဆောက်သည်။</p>
        </div>
      </div>
    </div>
  );
}

function Marketing7Insights10() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-center border-none pl-0 mb-12 text-2xl lg:text-3xl text-primary">Marketing 7.0 မှာ လူတွေ မသိတဲ့ အချက် ၁၀ ခု</h2>

      <p className="text-center italic text-text-light mb-12">ကျွန်တော် Marketing 7.0 စာအုပ်ကို ၃ ခေါက်ပြန်ဖတ်ပြီး ရရှိလာတဲ့ Insight Gems များ</p>

      <InsightItem 
        num="၁" 
        title="Cognitive Outsourcing — ဖောက်သည်ရဲ့ ဦးနှောက်ကို AI ပြန်ကိုင်သွားပြီ" 
        desc="ဒီနေ့ ဖောက်သည်က ပစ္စည်း ဝယ်မယ် ဆိုရင် သူ့ ဦးနှောက်နဲ့ ဆုံးဖြတ်တာ မဟုတ်တော့ပါဘူး။ AI ကို မေးပြီး ဆုံးဖြတ်တာ ဖြစ်ပါတယ်။"
        highlight="ဒီနေ့ ဖောက်သည် ဆုံးဖြတ်ချက်ရဲ့ 70% က AI/digital tool က predict လုပ်ပေးထားပြီးသား ဖြစ်တယ်။"
      />

      <InsightItem 
        num="၂" 
        title="Attention Brain က 3 Second Rule ထက် ပိုတောင်းနေပြီ" 
        desc="အရင်က 3 second rule ဆိုတာ ရှိခဲ့ပါတယ်။ အခု Attention span ပိုကျလာပြီး 1.7 second ဖြစ်လာပါတယ်။"
      />

      <InsightItem 
        num="၃" 
        title="Social Brain က Celebrity ထက် Micro-Influencer ကို ပိုယုံပြီ" 
        desc="Nano-influencer (1K-10K follower) ရဲ့ conversion rate က Macro-influencer ထက် 7x ပိုကောင်းပါတယ်။"
      />

      <InsightItem 
        num="၄" 
        title="Reward Brain က Dopamine ကို burnout ဖြစ်နေပြီ" 
        desc="Trend တိုင်း လိုက်လုပ်နေရတာ ဖောက်သည်လည်း မောနေပါပြီ။ Burnout ဖြစ်နေတဲ့ ဦးနှောက်ကို Lipstick Effect နဲ့ ဖြေရှင်းပါ။"
      />

      <InsightItem 
        num="၅" 
        title="AGI ရောက်ရင် Commander ဖြစ်မှာလား Orchestrator ဖြစ်မှာလား" 
        desc="AI output ကို empathy နဲ့ ပေါင်းစပ်ပြီး ဖောက်သည်ဆီ deliver လုပ်နိုင်တဲ့ Orchestrator တွေပဲ အောင်မြင်ပါလိမ့်မယ်။"
      />

      <InsightItem 
        num="၆" 
        title="Homogenization — AI သုံးလွန်းလို့ Brand အားလုံး တူသွားပြီ" 
        desc="AI ကို draft ရေးခိုင်းပါ။ ဒါပေမယ့် ကိုယ့် voice၊ ကိုယ့် story၊ ကိုယ့် personality တွေ ထည့်ပါ။"
      />

      <InsightItem 
        num="၇" 
        title="Brand Storytelling ရဲ့ Hidden Formula" 
        desc="Story ရဲ့ 60% က conflict ဖြစ်ရပါမယ်။ 30% က struggle ဖြစ်ရမယ်။ 10% ပဲ resolution ဖြစ်ရပါမယ်။"
      />

      <InsightItem 
        num="၈" 
        title="Value Equation ရဲ့ Hidden Variable — Time" 
        desc="Value = (Get × Dream Outcome × Likelihood) ÷ (Time × Effort × Price)။ Time ကို optimize လုပ်ပါ။"
      />

      <InsightItem 
        num="၉" 
        title="Selling 3.0 — ရောင်းတယ်ဆိုတာ ရှင်းပြတာ မဟုတ်တော့ဘူး" 
        desc="ရောင်းသူ အလုပ်က Product feature ရှင်းတာ မဟုတ်ဘဲ ဖောက်သည်ရဲ့ hidden doubt များကို ဖယ်ရှားပေးတာ ဖြစ်ပါတယ်။"
      />

      <InsightItem 
        num="၁၀" 
        title="Peak-End Rule — Ending ကို Design လုပ်ပြီးပြီလား" 
        desc="ဖောက်သည် အတွေ့အကြုံရဲ့ အမြင့်ဆုံး moment (Peak) နဲ့ နောက်ဆုံး moment (End) ကိုပဲ မှတ်မိတာ ဖြစ်ပါတယ်။"
      />
    </div>
  );
}

function InsightItem({ num, title, desc, highlight }: { num: string, title: string, desc: string, highlight?: string }) {
  return (
    <section className="mb-12">
      <div className="flex gap-4 items-start mb-4">
        <span className="text-3xl font-bold text-accent/30 shrink-0 select-none leading-none">{num}။</span>
        <h3 className="text-xl font-bold text-primary leading-tight">{title}</h3>
      </div>
      <p className="pl-0 lg:pl-12">{desc}</p>
      {highlight && (
        <div className="highlight-box ml-0 lg:ml-12 mt-4 bg-primary/5 border-primary/20 text-primary not-italic">
          {highlight}
        </div>
      )}
    </section>
  );
}


