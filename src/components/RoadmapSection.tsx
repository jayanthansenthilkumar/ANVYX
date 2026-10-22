import React, { useState } from "react";
import { 
  GraduationCap, 
  CheckCircle2, 
  Wrench, 
  Briefcase, 
  ArrowRight, 
  Star,
  ChevronRight
} from "lucide-react";
import { fourYearRoadmap } from "../data/roadmapData";

export const RoadmapSection: React.FC = () => {
  const [selectedYearIndex, setSelectedYearIndex] = useState(0);

  const activePlan = fourYearRoadmap[selectedYearIndex];

  return (
    <section id="roadmap" className="py-20 md:py-28 relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            CSBS Career Trajectory
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            The 4-Year <span className="text-cyan-400">AI Engineer Roadmap</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            What should you do starting tonight in your 1st year to graduate in 2030 as a top-tier AI architect or tech founder?
          </p>
        </div>

        {/* 4-Year Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mb-12">
          {fourYearRoadmap.map((item, idx) => (
            <button
              key={item.year}
              onClick={() => setSelectedYearIndex(idx)}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                selectedYearIndex === idx
                  ? "bg-slate-900 border-cyan-400 shadow-xl shadow-cyan-500/20 scale-102"
                  : "bg-slate-950/70 border-white/10 hover:border-white/20 hover:bg-slate-900/60"
              }`}
            >
              <span className={`text-[11px] font-mono font-bold block ${
                selectedYearIndex === idx ? "text-cyan-400" : "text-slate-400"
              }`}>
                {item.semester}
              </span>
              <h4 className="text-sm font-bold text-white mt-1 leading-tight">{item.year.split(" ")[0]} Year</h4>
              <span className="text-[10px] text-slate-400 block mt-0.5 truncate">{item.title.split("&")[0]}</span>
            </button>
          ))}
        </div>

        {/* Detailed Active Year Showcase Card */}
        <div className="max-w-4xl mx-auto rounded-3xl border border-white/15 bg-slate-900/90 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl space-y-8">
          {/* Header of Year Card */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-bold">
                  {activePlan.year}
                </span>
                <span className="text-xs text-slate-400 font-mono">{activePlan.semester}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-2">
                {activePlan.title}
              </h3>
            </div>
            <div className="p-3 rounded-2xl bg-slate-950 border border-white/10 text-xs font-mono text-cyan-300">
              Target: <span className="text-white font-bold">{activePlan.careerOutcome.split(",")[0]}</span>
            </div>
          </div>

          {/* Strategic Focus Statement */}
          <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 text-xs sm:text-sm text-cyan-200">
            <span className="text-cyan-400 font-bold uppercase tracking-wider block text-[11px] mb-1">
              Core Strategic Focus:
            </span>
            <p className="text-slate-200 leading-relaxed font-medium">"{activePlan.focus}"</p>
          </div>

          {/* Milestones Checklist */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
              Key Milestones & Practical Projects:
            </span>
            <div className="space-y-2.5">
              {activePlan.milestones.map((m, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950/60 border border-white/5 flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{m}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Tools & Stack */}
          <div className="pt-4 border-t border-white/10 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5 text-indigo-400" />
              Recommended Tech Stack to Master:
            </span>
            <div className="flex flex-wrap gap-2">
              {activePlan.recommendedTools.map((t, idx) => (
                <span key={idx} className="px-3 py-1 rounded-lg bg-slate-800 text-cyan-300 font-mono text-xs border border-white/5">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Career Outcome */}
          <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 flex items-start gap-3">
            <Briefcase className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                End-of-Year Career Outcome:
              </span>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                {activePlan.careerOutcome}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
