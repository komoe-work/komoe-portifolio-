import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { X, Lightbulb, Zap, ArrowDown } from "lucide-react";

interface AiMindsetModalProps {
  onClose: () => void;
}

export function AiMindsetModal({ onClose }: AiMindsetModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/40 backdrop-blur-sm shadow-2xl overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="ai-modal-title"
    >
      <motion.div
        ref={modalRef}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-3xl w-full max-w-4xl shadow-2xl overflow-hidden relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-primary transition-colors z-10 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-10 md:p-12 overflow-y-auto max-h-[85vh]">
          {/* Executive Summary */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-6 h-6 text-accent" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-accent">
                AI Mindset Framework
              </span>
            </div>
            <h2
              id="ai-modal-title"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary mb-6 font-display tracking-tight"
            >
              5 Strategies to Supercharge Your Intelligence with AI
            </h2>

            <div className="bg-accent/10 p-6 rounded-2xl border border-accent/20 mb-8">
              <h3 className="text-[10px] font-extrabold text-accent uppercase tracking-widest mb-2">
                Core Theme
              </h3>
              <p className="text-base sm:text-lg text-text-main leading-relaxed font-medium">
                Moving beyond AI as a "productivity tool" to using AI as a "cognitive enhancer"—a system to upgrade your inputs, your learning process, and your decision-making.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <StrategyMiniCard title="Mindset Shift" desc="Focus on upgrading your brain, not just completing tasks faster." />
              <StrategyMiniCard title="Quality Inputs" desc="Reset algorithms and use AI briefings to filter out junk information." />
              <StrategyMiniCard title="Just-in-Time" desc="Switch from knowledge storage to instant, relevant deep-dives." />
              <StrategyMiniCard title="Role Evolution" desc="Automate the 92% to focus on the 8%: Taste, Vision, and Care." />
            </div>
          </div>

          {/* Evolution Roadmap */}
          <div className="flex flex-col items-center mb-16">
            <h3 className="text-xs font-extrabold text-text-light mb-8 text-center uppercase tracking-widest">
              Evolution of a New Intelligence
            </h3>

            <MindmapNode phase="PHASE 1" title="Information Hygiene" desc="Filtered Social Feeds & Daily Briefings" />
            <ArrowIcon />
            <MindmapNode phase="PHASE 2" title="Dynamic Mastery" desc="Just-in-Time Learning via AI Notebooks" />
            <ArrowIcon />
            <MindmapNode phase="PHASE 3" title="Strategic Stress-Testing" desc="Red-Teaming Ideas & Blindspot Analysis" />
            <ArrowIcon />
            <div className="bg-primary text-white p-6 rounded-xl shadow-xl border-2 border-primary text-center scale-105 min-w-[240px]">
              <span className="block text-[10px] font-bold opacity-70 mb-1">FINAL GOAL</span>
              <p className="font-bold text-lg">Identity Shift: The Director</p>
              <p className="text-xs mt-1 italic opacity-80">Visionary Control + Human Care</p>
            </div>
          </div>

          {/* Socratic Flashcards */}
          <div className="pb-4">
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2 text-center font-display">
              Socratic Reflections
            </h3>
            <p className="text-center text-text-light mb-8 text-xs sm:text-sm italic">
              Hover or click to confront the questions that force evolution.
            </p>

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
    </div>
  );
}

function StrategyMiniCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-border-subtle hover:border-accent/40 transition-colors">
      <div className="bg-accent text-white rounded-lg p-2 shrink-0">
        <Zap className="w-4 h-4" aria-hidden="true" />
      </div>
      <div>
        <h4 className="font-bold text-primary text-sm tracking-tight">{title}</h4>
        <p className="text-text-main text-xs leading-relaxed mt-0.5">{desc}</p>
      </div>
    </div>
  );
}

function MindmapNode({ phase, title, desc }: { phase: string; title: string; desc: string }) {
  return (
    <div className="bg-white p-4 rounded-xl border-2 border-border-subtle relative min-w-[220px] text-center shadow-sm">
      <span className="block text-[10px] font-extrabold text-accent mb-1 tracking-widest">{phase}</span>
      <p className="text-primary font-bold text-sm">{title}</p>
      <p className="text-xs text-text-light mt-1 italic leading-tight">{desc}</p>
    </div>
  );
}

function ArrowIcon() {
  return <div className="p-2 text-slate-300"><ArrowDown className="w-5 h-5" strokeWidth={3} /></div>;
}

function FlipCard({ front, back }: { front: string; back: string }) {
  const [flipped, setFlipped] = React.useState(false);

  return (
    <div
      className="flip-card h-[180px]"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped(!flipped);
        }
      }}
      onClick={() => setFlipped(!flipped)}
      role="button"
      aria-label={`Reflection card: ${front}. Press to toggle details.`}
    >
      <div className={`flip-card-inner h-full w-full ${flipped ? "[transform:rotateY(180deg)]" : ""}`}>
        <div className="flip-card-front font-display h-full w-full p-4 flex items-center justify-center text-center font-bold text-base text-white bg-primary rounded-xl shadow-md">
          {front}
        </div>
        <div className="flip-card-back h-full w-full p-4 flex items-center justify-center text-center text-xs italic font-medium leading-relaxed bg-white text-text-main border-2 border-accent rounded-xl shadow-md">
          {back}
        </div>
      </div>
    </div>
  );
}
