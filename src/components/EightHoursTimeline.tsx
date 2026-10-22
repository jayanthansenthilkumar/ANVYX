import React, { useState } from "react";
import { 
  Clock, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Play,
  Layers,
  ChevronRight
} from "lucide-react";
import { anvyxConfig } from "../config/anvyxConfig";

export const EightHoursTimeline: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const activeStage = anvyxConfig.timelineStages[activeStageIndex];

  return (
    <section id="timeline" className="py-24 md:py-36 relative px-4 sm:px-6 lg:px-8 border-t border-[#F4F6FF]/5 bg-[#080A12]/80">
      
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[#9878FF]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-surface text-xs font-mono text-[#9878FF]">
            <Clock className="w-3.5 h-3.5" />
            <span>THE 8-HOUR CADENCE</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-[#F4F6FF] tracking-tight leading-[1.1]">
            EIGHT HOURS.<br />
            <span className="text-gradient-aurora">ONE MISSION.</span>
          </h2>
          <p className="text-[#9BA8C7] text-base sm:text-lg">
            Every minute has purpose. Follow the calibrated eight-stage timeline transforming abstract ideas into working prototypes.
          </p>
        </div>

        {/* Desktop Horizontal Interactive Stages Stepper */}
        <div className="hidden lg:block space-y-8">
          {/* Luminous Timeline Bar */}
          <div className="relative flex items-center justify-between pb-8 border-b border-[#F4F2EB]/10">
            {/* Connecting Luminous Line */}
            <div className="absolute left-6 right-6 top-6 h-[2px] bg-[#10162A] -z-0">
              <div 
                className="h-full bg-gradient-to-r from-[#58E6FF] to-[#9878FF] transition-all duration-500"
                style={{ width: `${(activeStageIndex / (anvyxConfig.timelineStages.length - 1)) * 100}%` }}
              />
            </div>

            {anvyxConfig.timelineStages.map((stage, idx) => {
              const isSelected = activeStageIndex === idx;
              const isPassed = activeStageIndex > idx;
              return (
                <button
                  key={stage.number}
                  onClick={() => setActiveStageIndex(idx)}
                  className="z-10 flex flex-col items-center group cursor-pointer focus:outline-none"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 font-mono text-sm font-bold ${
                    isSelected
                      ? "bg-[#58E6FF] text-[#080A12] scale-110 shadow-[0_0_25px_rgba(88,230,255,0.7)]"
                      : isPassed
                      ? "bg-[#10162A] text-[#58E6FF] border border-[#58E6FF]/40"
                      : "bg-[#080A12] text-[#9BA8C7] border border-[#F4F6FF]/15 group-hover:border-[#58E6FF]/40"
                  }`}>
                    {stage.number}
                  </div>
                  <span className={`text-xs font-display font-medium mt-3 transition-colors ${
                    isSelected ? "text-[#58E6FF] font-bold" : "text-[#9BA8C7] group-hover:text-[#F4F6FF]"
                  }`}>
                    {stage.title}
                  </span>
                  <span className="text-[10px] font-mono text-[#9BA8C7]/60">
                    H0{idx + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Display Panel */}
          <div className="p-8 rounded-3xl glass-surface-glow grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[#58E6FF]/15 text-[#58E6FF] border border-[#58E6FF]/30">
                  STAGE {activeStage.number} // {activeStage.timeframe}
                </span>
                <span className="text-xs font-mono text-[#9BA8C7]">
                  CADENCE PHASE {activeStageIndex + 1} OF 8
                </span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#F4F6FF]">
                {activeStage.title} Phase
              </h3>

              <p className="text-[#9BA8C7] text-base leading-relaxed">
                {activeStage.description}
              </p>

              <div className="p-4 rounded-xl bg-[#10162A]/60 border border-[#58E6FF]/20 flex items-center gap-3 text-xs">
                <Sparkles className="w-4 h-4 text-[#58E6FF] shrink-0" />
                <span className="text-[#9BA8C7]">
                  <strong className="text-[#F4F6FF]">Milestone Output:</strong> {activeStage.deliverable}
                </span>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#080A12]/80 border border-[#F4F6FF]/10 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#58E6FF]/20 to-[#9878FF]/20 flex items-center justify-center border border-[#58E6FF]/30">
                <Clock className="w-7 h-7 text-[#58E6FF]" />
              </div>
              <span className="font-mono text-xs text-[#9BA8C7]">SPRINT TIME ALLOCATION</span>
              <p className="font-display font-bold text-2xl text-[#F4F6FF]">{activeStage.timeframe}</p>
            </div>
          </div>
        </div>

        {/* Mobile Vertical Progression Timeline */}
        <div className="lg:hidden space-y-4">
          {anvyxConfig.timelineStages.map((stage, idx) => (
            <div 
              key={stage.number}
              onClick={() => setActiveStageIndex(idx)}
              className={`p-5 rounded-2xl transition-all cursor-pointer ${
                activeStageIndex === idx 
                  ? "glass-surface-glow border-[#58E6FF]/40 bg-[#10162A]/80"
                  : "glass-surface hover:bg-[#10162A]/50"
              }`}
            >
              <div className="flex items-center justify-between pb-2 border-b border-[#F4F6FF]/10">
                <div className="flex items-center gap-2">
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${
                    activeStageIndex === idx ? "bg-[#58E6FF] text-[#080A12]" : "bg-[#10162A] text-[#58E6FF]"
                  }`}>
                    {stage.number}
                  </span>
                  <h4 className="font-display font-bold text-base text-[#F4F6FF]">{stage.title}</h4>
                </div>
                <span className="text-xs font-mono text-[#58E6FF]">{stage.timeframe}</span>
              </div>

              <p className="text-xs text-[#9BA8C7] mt-3 leading-relaxed">
                {stage.description}
              </p>

              <div className="mt-3 pt-2 text-[11px] font-mono text-[#58E6FF]/90 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{stage.deliverable}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
