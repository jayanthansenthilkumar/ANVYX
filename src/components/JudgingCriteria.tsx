import React, { useState } from "react";
import { anvyxConfig } from "../config/anvyxConfig";
import { Scale, Check, AlertCircle, ChevronDown, Sparkles, SlidersHorizontal } from "lucide-react";

export const JudgingCriteria: React.FC = () => {
  const criteria = anvyxConfig.judgingCriteria;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="judging" className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#080A12] overflow-hidden">
      {/* Background ambient radial aura */}
      <div 
        className="absolute bottom-10 left-10 w-[500px] h-[500px] pointer-events-none opacity-15 blur-[120px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(88, 230, 255, 0.3) 0%, rgba(16, 22, 42, 0) 70%)"
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-[#58E6FF] bg-[#58E6FF]/10 border border-[#58E6FF]/25 mb-4">
              <Scale className="w-3.5 h-3.5" />
              <span>Section 06 // Evaluation Council</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F4F6FF] font-['Space_Grotesk']">
              The Architecture <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#58E6FF] via-[#9878FF] to-white">
                Of Evaluation.
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-yellow-400/20 bg-yellow-400/5 text-yellow-300 text-xs font-mono">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>Provisional Criteria Matrix // Subject to Council Ratification</span>
            </div>
          </div>
        </div>

        {/* Criteria Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left summary column: Distribution chart visualization */}
          <div className="lg:col-span-5 rounded-2xl p-6 sm:p-8 bg-[#10162A]/60 border border-white/10 backdrop-blur-xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#58E6FF]">
                <SlidersHorizontal className="w-4 h-4" />
                <span>Weight Allocation Matrix</span>
              </div>
              <span className="text-xs font-mono text-[#9BA8C7]">100% Aggregated</span>
            </div>

            {/* Percentage Bar Visualization */}
            <div className="space-y-4">
              {criteria.map((item, idx) => {
                const weightNum = parseInt(item.weight.replace("%", ""), 10);
                const isSelected = expandedIndex === idx;

                return (
                  <div 
                    key={item.title}
                    onClick={() => setExpandedIndex(idx)}
                    className={`cursor-pointer p-3 rounded-xl transition-all duration-200 ${
                      isSelected ? "bg-white/[0.06] border border-[#58E6FF]/30" : "hover:bg-white/[0.02]"
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                      <span className={`font-medium ${isSelected ? "text-[#58E6FF]" : "text-[#F4F6FF]"}`}>
                        {item.title}
                      </span>
                      <span className="text-white font-bold">{item.weight}</span>
                    </div>

                    {/* Progress track */}
                    <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          isSelected
                            ? "bg-gradient-to-r from-[#58E6FF] to-[#9878FF] shadow-[0_0_10px_rgba(88,230,255,0.8)]"
                            : "bg-white/40"
                        }`}
                        style={{ width: `${(weightNum / 25) * 100}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 border-t border-white/10 text-xs font-['Inter'] text-[#9BA8C7] leading-relaxed flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#9878FF] shrink-0" />
              <span>Each vector is independently scored by 3 industry judges, normalized algorithmically to eliminate cognitive bias.</span>
            </div>
          </div>

          {/* Right column: Interactive deep dive into selected criteria */}
          <div className="lg:col-span-7 space-y-4">
            {criteria.map((item, idx) => {
              const isExpanded = expandedIndex === idx;

              return (
                <div
                  key={item.title}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? "bg-gradient-to-b from-[#10162A]/90 to-[#080A12]/95 border-[#58E6FF]/40 shadow-[0_0_30px_rgba(88,230,255,0.12)]"
                      : "bg-[#10162A]/30 border-white/10 hover:border-white/20"
                  }`}
                >
                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono text-xs font-bold transition-colors ${
                        isExpanded
                          ? "bg-[#58E6FF] text-[#080A12]"
                          : "bg-white/5 text-[#58E6FF] border border-[#58E6FF]/20"
                      }`}>
                        {item.weight}
                      </div>
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#58E6FF]">
                          Vector 0{idx + 1}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-[#F4F6FF] font-['Space_Grotesk']">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#9BA8C7] transition-transform duration-300 ${
                      isExpanded ? "rotate-180 text-white bg-white/10" : ""
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Expandable details */}
                  {isExpanded && (
                    <div className="px-6 pb-6 pt-2 border-t border-white/5 space-y-4">
                      <p className="text-sm text-[#F4F6FF]/90 font-['Inter'] leading-relaxed">
                        {item.description}
                      </p>

                      <div className="space-y-2 pt-2">
                        <div className="text-xs font-mono uppercase tracking-wider text-[#9878FF]">
                          Core Evaluated Aspects:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                          {item.coreAspects.map((aspect, aIdx) => (
                            <div 
                              key={aIdx} 
                              className="flex items-center gap-2 p-2.5 rounded-lg bg-white/[0.03] border border-white/5 text-xs text-[#9BA8C7] font-['Inter']"
                            >
                              <Check className="w-3.5 h-3.5 text-[#58E6FF] shrink-0" />
                              <span>{aspect}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
