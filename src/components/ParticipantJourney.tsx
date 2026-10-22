import React, { useState } from "react";
import { anvyxConfig } from "../config/anvyxConfig";
import { UserPlus, Compass, Cpu, Send, Mic, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

interface ParticipantJourneyProps {
  onRegisterClick: () => void;
}

const STEP_ICONS = [
  <UserPlus className="w-5 h-5" />,
  <Compass className="w-5 h-5" />,
  <Cpu className="w-5 h-5" />,
  <Send className="w-5 h-5" />,
  <Mic className="w-5 h-5" />
];

const STEP_HIGHLIGHTS = [
  {
    phase: "Cohort Ingestion",
    tag: "T - 00:00",
    tips: "Solo or Squad up to 4. Discord token verified upon entry."
  },
  {
    phase: "Briefing Keynote",
    tag: "T + 00:00",
    tips: "Real-time domain challenge release with confidential API passes."
  },
  {
    phase: "High-Cadence Sprint",
    tag: "T + 01:00",
    tips: "8 hours of uninterrupted flow. On-demand mentor desks active."
  },
  {
    phase: "Repository Lock",
    tag: "T + 07:30",
    tips: "Push source commit, architectural schema, and 3-min video demo."
  },
  {
    phase: "Live Council Pitch",
    tag: "T + 08:00",
    tips: "Top finalist live presentations with instant scoring telemetry."
  }
];

export const ParticipantJourney: React.FC<ParticipantJourneyProps> = ({ onRegisterClick }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const journey = anvyxConfig.participantJourney;

  return (
    <section id="journey" className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#080A12] overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] pointer-events-none opacity-20 blur-[130px] rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(88, 230, 255, 0.4) 0%, rgba(152, 120, 255, 0.2) 60%, transparent 80%)"
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-[#58E6FF] bg-[#58E6FF]/10 border border-[#58E6FF]/25 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Section 04 // Participant Cadence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F4F6FF] font-['Space_Grotesk']">
              From Imagination <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#58E6FF] via-[#9878FF] to-white">
                To Working Reality.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-[#9BA8C7] font-['Inter'] leading-relaxed">
            The trajectory of an ANVYX creator is deliberate and frictionless. Every phase is engineered to maximize execution speed and eliminate administrative lag.
          </p>
        </div>

        {/* Stepper Node Track - Desktop */}
        <div className="relative mb-12 hidden md:block">
          {/* Luminous Connecting Track Line */}
          <div className="absolute top-8 left-12 right-12 h-[2px] bg-white/10 z-0">
            <div 
              className="h-full bg-gradient-to-r from-[#58E6FF] to-[#9878FF] transition-all duration-500 ease-out"
              style={{ width: `${(activeStepIndex / (journey.length - 1)) * 100}%` }}
            />
          </div>

          <div className="relative grid grid-cols-5 gap-4 z-10">
            {journey.map((item, idx) => {
              const isActive = activeStepIndex === idx;
              const isPassed = activeStepIndex > idx;

              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`group flex flex-col items-center text-center p-4 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? "bg-white/[0.06] border border-[#58E6FF]/40 shadow-[0_0_25px_rgba(88,230,255,0.15)]" 
                      : "hover:bg-white/[0.03] border border-transparent"
                  }`}
                >
                  {/* Step Circle with Icon */}
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center font-mono text-sm transition-all duration-300 mb-4 ${
                    isActive
                      ? "bg-gradient-to-br from-[#58E6FF] to-[#9878FF] text-[#080A12] font-bold shadow-[0_0_20px_rgba(88,230,255,0.6)] scale-110"
                      : isPassed
                      ? "bg-[#58E6FF]/20 text-[#58E6FF] border border-[#58E6FF]/40"
                      : "bg-[#10162A] text-[#9BA8C7] border border-white/10 group-hover:border-white/30"
                  }`}>
                    {STEP_ICONS[idx]}
                  </div>

                  <span className="font-mono text-xs text-[#58E6FF] tracking-wider mb-1">
                    STEP {item.step}
                  </span>
                  <h4 className="text-base font-bold text-[#F4F6FF] font-['Space_Grotesk'] tracking-wide">
                    {item.title}
                  </h4>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Stepper Bar */}
        <div className="flex md:hidden overflow-x-auto pb-4 mb-8 gap-3 no-scrollbar">
          {journey.map((item, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={item.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`flex-shrink-0 flex items-center gap-2.5 px-4 py-2.5 rounded-full border text-xs font-mono transition-all ${
                  isActive
                    ? "bg-[#58E6FF]/15 border-[#58E6FF] text-[#58E6FF] shadow-[0_0_15px_rgba(88,230,255,0.3)]"
                    : "bg-[#10162A]/60 border-white/10 text-[#9BA8C7]"
                }`}
              >
                <span>{item.step}</span>
                <span className="text-white font-sans font-medium">{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Step Focus Card */}
        <div className="relative rounded-2xl p-6 sm:p-8 md:p-10 border border-white/10 bg-gradient-to-b from-[#10162A]/90 to-[#080A12]/95 backdrop-blur-xl shadow-2xl overflow-hidden">
          {/* Subtle top indicator bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#58E6FF] via-[#9878FF] to-transparent opacity-80" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Step summary & telemetry */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-md text-xs font-mono bg-[#58E6FF]/15 border border-[#58E6FF]/30 text-[#58E6FF]">
                  PHASE {journey[activeStepIndex].step} OF 05
                </span>
                <span className="px-3 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-[#9BA8C7]">
                  CADENCE // {STEP_HIGHLIGHTS[activeStepIndex].tag}
                </span>
                <span className="px-3 py-1 rounded-md text-xs font-mono text-[#9878FF] bg-[#9878FF]/10 border border-[#9878FF]/20">
                  {STEP_HIGHLIGHTS[activeStepIndex].phase}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F4F6FF] font-['Space_Grotesk'] flex items-center gap-3">
                <span className="text-[#58E6FF]">{STEP_ICONS[activeStepIndex]}</span>
                <span>{journey[activeStepIndex].title}</span>
              </h3>

              <p className="text-base sm:text-lg text-[#F4F6FF]/90 font-['Inter'] leading-relaxed">
                {journey[activeStepIndex].detail}
              </p>

              <div className="pt-2 flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <ShieldCheck className="w-5 h-5 text-[#58E6FF] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-[#9BA8C7] font-['Inter'] leading-relaxed">
                  <span className="text-[#F4F6FF] font-medium">Pro-Tip for Builders: </span>
                  {STEP_HIGHLIGHTS[activeStepIndex].tips}
                </div>
              </div>
            </div>

            {/* Step navigation & primary action */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:border-l lg:border-white/10 lg:pl-8">
              <div className="space-y-3">
                <div className="text-xs font-mono text-[#9BA8C7] uppercase tracking-wider">
                  Trajectory Matrix
                </div>
                <div className="space-y-2">
                  {journey.map((step, idx) => (
                    <button
                      key={step.step}
                      onClick={() => setActiveStepIndex(idx)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-mono transition-all text-left ${
                        idx === activeStepIndex
                          ? "bg-[#58E6FF]/15 text-[#58E6FF] border border-[#58E6FF]/30 font-bold"
                          : "text-[#9BA8C7] hover:text-white hover:bg-white/[0.03]"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-[10px] opacity-60">{step.step}</span>
                        <span>{step.title}</span>
                      </div>
                      {idx === activeStepIndex && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#58E6FF] animate-pulse" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={onRegisterClick}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#58E6FF] to-[#9878FF] text-[#080A12] font-semibold text-sm hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(88,230,255,0.3)] cursor-pointer"
                >
                  <span>Begin at Step 01</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveStepIndex((prev) => (prev + 1) % journey.length)}
                  className="w-full sm:w-auto px-4 py-3 rounded-xl border border-white/15 text-[#9BA8C7] hover:text-white hover:border-white/30 text-xs font-mono transition-colors cursor-pointer"
                >
                  Next Phase →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
