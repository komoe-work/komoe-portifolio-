import React from "react";
import { TRUST_INDICATORS } from "../data/portfolio";

export function TrustIndicators() {
  return (
    <section className="py-8 bg-slate-900 text-white border-y border-slate-800">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
          {TRUST_INDICATORS.map((indicator, idx) => (
            <div key={idx} className={`pt-4 md:pt-0 ${idx !== 0 ? "md:pl-6" : ""}`}>
              <div className="text-2xl sm:text-3xl font-display font-bold text-accent tracking-tight">
                {indicator.metric}
              </div>
              <div className="text-xs text-slate-300 font-medium mt-1 max-w-[200px] mx-auto leading-normal">
                {indicator.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
