import React, { useState } from "react";
import { Clock, CheckCircle2, ChevronRight, Calendar, AlertCircle } from "lucide-react";
import { anvyx27Config, TimelinePhase } from "../config/anvyx27Data";
import { playCyberClick, playCyberHover } from "../utils/audio";

export const TimelineSection: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<"DAY 1" | "DAY 2">("DAY 1");
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);

  const day1Phases = anvyx27Config.timeline.filter(p => p.date === "DAY 1");
  const day2Phases = anvyx27Config.timeline.filter(p => p.date === "DAY 2");

  const currentPhases = selectedDay === "DAY 1" ? day1Phases : day2Phases;

  return (
    <section id="timeline" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 border-t border-white/10 bg-[#020205] relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-[650px] h-[450px] bg-indigo-500/06 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/25 mb-4">
              <Clock className="w-3.5 h-3.5 text-indigo-400" />
              <span>05 / MISSION PROTOCOL TIMELINE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-display uppercase leading-tight">
              SCHEDULE &amp;{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-400 bg-clip-text text-transparent">
                MILESTONES.
              </span>
            </h2>
          </div>

          {/* Day 1 / Day 2 Tab Selector */}
          <div className="flex items-center gap-2.5 p-1.5 rounded-xl bg-[#060716] border border-white/10">
            <button
              onClick={() => { playCyberClick(); setSelectedDay("DAY 1"); setActivePhaseIndex(0); }}
              onMouseEnter={playCyberHover}
              className={`px-5 py-2 rounded-lg font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedDay === "DAY 1"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              DAY 1 (08 OCT)
            </button>
            <button
              onClick={() => { playCyberClick(); setSelectedDay("DAY 2"); setActivePhaseIndex(0); }}
              onMouseEnter={playCyberHover}
              className={`px-5 py-2 rounded-lg font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedDay === "DAY 2"
                  ? "bg-gradient-to-r from-purple-600 to-rose-600 text-white shadow-lg"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              DAY 2 (09 OCT)
            </button>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Timeline List */}
          <div className="lg:col-span-6 space-y-4">
            {currentPhases.map((phase, idx) => {
              const isSelected = activePhaseIndex === idx;

              return (
                <div
                  key={phase.id}
                  onClick={() => { playCyberClick(); setActivePhaseIndex(idx); }}
                  onMouseEnter={playCyberHover}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden ${
                    isSelected
                      ? "bg-[#0A0D24] border-[#6575F5] shadow-[0_0_30px_rgba(101,117,245,0.25)]"
                      : "bg-[#060716] border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10.5px] font-bold text-[#55E5D2] uppercase tracking-wider">
                          {phase.subtitle}
                        </span>
                      </div>
                      <h3 className="font-display font-black text-lg sm:text-xl text-white tracking-tight leading-snug">
                        {phase.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-sans leading-relaxed pt-1">
                        {phase.description}
                      </p>
                    </div>

                    <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 mt-1 transition-transform ${
                      isSelected ? "bg-[#6575F5] text-white rotate-90" : "text-slate-400"
                    }`}>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Selected Phase Telemetry & Scoring Rubric */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Phase Inspector Card */}
            {currentPhases[activePhaseIndex] && (
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#0D0F28] to-[#060716] border border-indigo-500/30 shadow-2xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase text-indigo-400 font-bold">
                    <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                    <span>PHASE DETAILS INSPECTOR</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    {currentPhases[activePhaseIndex].time}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-black text-2xl text-white">
                    {currentPhases[activePhaseIndex].title}
                  </h3>
                  <p className="text-sm text-slate-300 font-sans leading-relaxed">
                    {currentPhases[activePhaseIndex].description}
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#55E5D2] block font-bold">
                    REQUIRED DELIVERABLES &amp; ACTIONS:
                  </span>
                  <div className="space-y-2">
                    {currentPhases[activePhaseIndex].deliverables.map((d, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-slate-200 font-sans">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Common Review Tasks & Scoring Matrix (50 Marks) */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#060716] border border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="font-mono text-xs font-bold text-rose-400 uppercase tracking-wider">
                  JURY EVALUATION MATRIX // 50 MARKS TOTAL
                </span>
                <span className="font-mono text-[10px] text-slate-400">5 VECTORS × 10 PTS</span>
              </div>

              <div className="space-y-2.5 font-sans text-xs">
                {[
                  { name: "Innovation & Approach Novelty", pts: "10 Pts", color: "bg-[#6575F5]" },
                  { name: "Technical Complexity & System Architecture", pts: "10 Pts", color: "bg-[#8B70E8]" },
                  { name: "Real-World Impact & Industry Viability", pts: "10 Pts", color: "bg-[#FF405F]" },
                  { name: "Code Implementation & Working Functionality", pts: "10 Pts", color: "bg-[#55E5D2]" },
                  { name: "Demo Narrative & Jury Presentation", pts: "10 Pts", color: "bg-purple-400" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${item.color}`} />
                      <span className="text-slate-200 font-medium">{item.name}</span>
                    </div>
                    <span className="font-mono font-bold text-white">{item.pts}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
