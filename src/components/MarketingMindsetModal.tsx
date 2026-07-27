import React, { useEffect } from "react";
import { motion } from "motion/react";
import { X, BarChart3, Globe } from "lucide-react";

interface MarketingMindsetModalProps {
  onClose: () => void;
}

export function MarketingMindsetModal({ onClose }: MarketingMindsetModalProps) {
  const [activeTab, setActiveTab] = React.useState<"summary" | "insights">("summary");

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
      aria-labelledby="marketing-modal-title"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-3xl w-full max-w-4xl shadow-2xl overflow-hidden relative flex flex-col max-h-[90vh] my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-slate-50 border-b border-border-subtle p-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-accent text-white shrink-0">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <h2
                id="marketing-modal-title"
                className="text-xl lg:text-2xl font-bold text-primary tracking-tight font-display"
              >
                Marketing 7.0: Philip Kotler Insights
              </h2>
              <p className="text-[11px] uppercase tracking-widest text-accent font-bold mt-0.5">
                Strategic Mindset Evolution
              </p>
            </div>
          </div>

          <div className="flex bg-slate-200 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab("summary")}
              className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all min-h-[36px] cursor-pointer ${
                activeTab === "summary"
                  ? "bg-white text-primary shadow-sm"
                  : "text-text-light hover:text-primary"
              }`}
            >
              Summary
            </button>
            <button
              onClick={() => setActiveTab("insights")}
              className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all min-h-[36px] cursor-pointer ${
                activeTab === "insights"
                  ? "bg-white text-primary shadow-sm"
                  : "text-text-light hover:text-primary"
              }`}
            >
              10 Deep Insights
            </button>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-primary transition-colors cursor-pointer shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-10 overflow-y-auto article-content font-myanmar space-y-6">
          {activeTab === "summary" ? <Marketing7Summary /> : <Marketing7Insights10 />}
        </div>
      </motion.div>
    </div>
  );
}

function Marketing7Summary() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <h3 className="text-2xl font-bold text-primary font-display border-l-4 border-accent pl-4">
        Marketing 7.0 ၏ အဓိက အနှစ်ချုပ်များ
      </h3>

      <div className="space-y-3">
        <span className="text-accent font-bold text-sm block">စိတ်ပိုင်းဆိုင်ရာကို ဗဟိုပြုခြင်း</span>
        <p className="text-sm sm:text-base leading-relaxed text-text-main">
          AI အသုံးပြုပြီး Data တွေ၊ Performance တွေကိုချည်းပဲ အားရုံစိုက်နေမယ့်အစား လူတွေဘယ်လိုတွေးခေါ်သလဲ၊ အမှတ်တံဆိပ်တွေနဲ့ ဘယ်လိုချိတ်ဆက်သလဲ၊ ဘယ်လိုဆုံးဖြတ်ဝယ်ယူသလဲ ဆိုတဲ့ "လူ့စိတ်သဘာဝ (Human Mind)" ကို ပိုမိုနားလည်အောင် ချဉ်းကပ်တဲ့ မားကတ်တင်းဖြစ်ပါတယ်။
        </p>
      </div>

      <div className="space-y-3">
        <span className="text-accent font-bold text-sm block">နည်းပညာပေါင်းစပ်ထားသော စားသုံးသူများ</span>
        <p className="text-sm sm:text-base leading-relaxed text-text-main">
          ဒီခေတ်က စားသုံးသူတွေဟာ နေ့စဉ်ဘဝမှာ AI နဲ့ Immersive နည်းပညာတွေကို အသုံးပြုပြီး ဆုံးဖြတ်ချက်ချနေကြပါပြီ။ ဒါကြောင့် ဒီလို နည်းပညာအကူအညီတွေ ရယူထားတဲ့ စားသုံးသူအသစ်တွေ (Augmented Humans) နဲ့ ဘယ်လိုထိရောက်စွာ ထိတွေ့ဆက်ဆံမလဲဆိုတာကို လမ်းညွှန်ထားပါတယ်။
        </p>
      </div>

      <div className="space-y-3">
        <span className="text-accent font-bold text-sm block">စစ်မှန်မှုကို ဦးစားပေးခြင်း</span>
        <p className="text-sm sm:text-base leading-relaxed text-text-main">
          နည်းပညာကို အလွန်အကျွံ အားကိုးပြီး AI သက်သက်နဲ့ ပြုလုပ်ထားတဲ့ မားကတ်တင်းတွေဟာ စစ်မှန်မှု (Authenticity) နဲ့ လူသားဆန်မှုကို ပျောက်ဆုံးစေပါတယ်။ Marketing 7.0 က နည်းပညာကို ဉာဏ်ရည်ဉာဏ်သွေးရှိရှိ အသုံးချရင်း တစ်ဖက်မှာလည်း လူသားအချင်းချင်း ဖန်တီးနိုင်တဲ့ စစ်မှန်တဲ့ ယုံကြည်မှု (Trust) ကို တည်ဆောက်ဖို့ သတိပေးထားပါတယ်။
        </p>
      </div>

      <div className="bg-slate-50 border border-accent/20 p-6 rounded-2xl space-y-4">
        <span className="block text-base font-bold text-primary">ဥပမာ- ထမင်းဆိုင်တစ်ဆိုင်၏ Marketing ပြောင်းလဲပုံ</span>
        <div className="space-y-2 text-xs sm:text-sm text-text-main leading-relaxed">
          <p><strong className="text-primary">Marketing 1.0 (ထုတ်ကုန်ဗဟိုပြု):</strong> "ကျွန်တော်တို့ဆိုင်က ဟင်းတွေ အကောင်းဆုံးနဲ့ အရသာအရှိဆုံးပါ။"</p>
          <p><strong className="text-primary">Marketing 2.0 (ဖောက်သည်ဗဟိုပြု):</strong> "ဝယ်သူအကြိုက် အချို၊ အစပ် စိတ်ကြိုက် ချက်ပေးပါတယ်။"</p>
          <p><strong className="text-primary">Marketing 3.0 (တန်ဖိုးထားမှုဗဟိုပြု):</strong> "ကျန်းမာရေးအတွက် ဆီသန့်နဲ့ အော်ဂဲနစ် ဟင်းသီးဟင်းရွက်တွေကိုသာ အသုံးပြုပါတယ်။"</p>
          <p><strong className="text-primary">Marketing 4.0 (ဒစ်ဂျစ်တယ်ကူးပြောင်းမှု):</strong> "ဆိုင်မှာသာမက၊ Facebook Page ကနေ ဟင်းအမယ်တွေကြည့်ပြီး Delivery နဲ့ပါ မှာလို့ရပါပြီ။"</p>
          <p><strong className="text-primary">Marketing 5.0 (နည်းပညာအသုံးချမှု):</strong> စနစ် (POS) နှင့် Data များကိုသုံးပြီး ဖောက်သည်ဟောင်းတွေအတွက် အထူး Promotion များကို ပို့ပေးသည်။</p>
          <p><strong className="text-primary">Marketing 6.0 (ပေါင်းစပ်အတွေ့အကြုံ):</strong> ဆိုင်မှာလာစားသလို၊ အွန်လိုင်းမှာလည်း ဆိုင်ရဲ့ ဟင်းချက်ပုံကို အနီးကပ် မြင်တွေ့ခံစားရစေသည်။</p>
          <p><strong className="text-primary">Marketing 7.0 (စိတ်ပိုင်းဆိုင်ရာနှင့် စစ်မှန်မှု):</strong> AI ကိုသုံးသော်လည်း၊ ဖောက်သည်များနှင့် ဆက်ဆံရာတွင် စစ်မှန်သော နွေးထွေးမှု (Authenticity) ဖြင့် ယုံကြည်မှု တည်ဆောက်သည်။</p>
        </div>
      </div>
    </div>
  );
}

function Marketing7Insights10() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <h3 className="text-2xl font-bold text-primary font-display border-l-4 border-accent pl-4">
        Marketing 7.0 မှာ လူတွေ မသိတဲ့ အချက် ၁၀ ခု
      </h3>
      <p className="italic text-text-light text-xs sm:text-sm">
        Philip Kotler Marketing 7.0 မှ ရရှိလာသော Insight Gems များ
      </p>

      <div className="space-y-6">
        <InsightItem num="၁" title="Cognitive Outsourcing — ဖောက်သည်ရဲ့ ဦးနှောက်ကို AI ပြန်ကိုင်သွားပြီ" desc="ဒီနေ့ ဖောက်သည်က ပစ္စည်း ဝယ်မယ် ဆိုရင် သူ့ ဦးနှောက်နဲ့ ဆုံးဖြတ်တာ မဟုတ်တော့ပါဘူး။ AI ကို မေးပြီး ဆုံးဖြတ်တာ ဖြစ်ပါတယ်။" />
        <InsightItem num="၂" title="Attention Brain က 3 Second Rule ထက် ပိုတောင်းနေပြီ" desc="အရင်က 3 second rule ဆိုတာ ရှိခဲ့ပါတယ်။ အခု Attention span ပိုကျလာပြီး 1.7 second ဖြစ်လာပါတယ်။" />
        <InsightItem num="၃" title="Social Brain က Celebrity ထက် Micro-Influencer ကို ပိုယုံပြီ" desc="Nano-influencer (1K-10K follower) ရဲ့ conversion rate က Macro-influencer ထက် 7x ပိုကောင်းပါတယ်။" />
        <InsightItem num="၄" title="Reward Brain က Dopamine ကို burnout ဖြစ်နေပြီ" desc="Trend တိုင်း လိုက်လုပ်နေရတာ ဖောက်သည်လည်း မောနေပါပြီ။ Burnout ဖြစ်နေတဲ့ ဦးနှောက်ကို Lipstick Effect နဲ့ ဖြေရှင်းပါ။" />
        <InsightItem num="၅" title="AGI ရောက်ရင် Commander ဖြစ်မှာလား Orchestrator ဖြစ်မှာလား" desc="AI output ကို empathy နဲ့ ပေါင်းစပ်ပြီး ဖောက်သည်ဆီ deliver လုပ်နိုင်တဲ့ Orchestrator တွေပဲ အောင်မြင်ပါလိမ့်မယ်။" />
        <InsightItem num="၆" title="Homogenization — AI သုံးလွန်းလို့ Brand အားလုံး တူသွားပြီ" desc="AI ကို draft ရေးခိုင်းပါ။ ဒါပေမယ့် ကိုယ့် voice၊ ကိုယ့် story၊ ကိုယ့် personality တွေ ထည့်ပါ။" />
        <InsightItem num="၇" title="Brand Storytelling ရဲ့ Hidden Formula" desc="Story ရဲ့ 60% က conflict ဖြစ်ရပါမယ်။ 30% က struggle ဖြစ်ရမယ်။ 10% ပဲ resolution ဖြစ်ရပါမယ်။" />
        <InsightItem num="၈" title="Value Equation ရဲ့ Hidden Variable — Time" desc="Value = (Get × Dream Outcome × Likelihood) ÷ (Time × Effort × Price)။ Time ကို optimize လုပ်ပါ။" />
        <InsightItem num="၉" title="Selling 3.0 — ရောင်းတယ်ဆိုတာ ရှင်းပြတာ မဟုတ်တော့ဘူး" desc="ရောင်းသူ အလုပ်က Product feature ရှင်းတာ မဟုတ်ဘဲ ဖောက်သည်ရဲ့ hidden doubt များကို ဖယ်ရှားပေးတာ ဖြစ်ပါတယ်။" />
        <InsightItem num="၁၀" title="Peak-End Rule — Ending ကို Design လုပ်ပြီးပြီလား" desc="ဖောက်သည် အတွေ့အကြုံရဲ့ အမြင့်ဆုံး moment (Peak) နဲ့ နောက်ဆုံး moment (End) ကိုပဲ မှတ်မိတာ ဖြစ်ပါတယ်။" />
      </div>
    </div>
  );
}

function InsightItem({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="bg-slate-50 p-5 rounded-xl border border-border-subtle">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-lg font-bold text-accent font-display">{num}။</span>
        <h4 className="font-bold text-primary text-sm sm:text-base">{title}</h4>
      </div>
      <p className="text-xs sm:text-sm text-text-main leading-relaxed pl-6">{desc}</p>
    </div>
  );
}
