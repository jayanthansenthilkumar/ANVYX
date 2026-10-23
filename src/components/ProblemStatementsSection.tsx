import React from "react";
import { Compass, UserCheck, Wrench, Presentation, ArrowRight } from "lucide-react";
import { anvyx27Config } from "../config/anvyx27Data";
import { playCyberClick, playCyberHover } from "../utils/audio";

interface ProblemStatementsSectionProps {
  onRegisterClick: () => void;
}

export const ProblemStatementsSection: React.FC<ProblemStatementsSectionProps> = ({ onRegisterClick }) => {
  const protocolPhases = [
    {
      code: "01 // DEFINE PROBLEM",
      title: "Choose Problem Statement",
      desc: "Select or formulate a genuine real-world problem you want to solve.",
      icon: <Compass className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />,
      accent: "text-indigo-400"
    },
    {
      code: "02 // DOMAIN REGISTRATION",
      title: "Register in Related Domain",
      desc: "Map your challenge to one of the 6 industry domain tracks.",
      icon: <UserCheck className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />,
      accent: "text-purple-400"
    },
    {
      code: "03 // SPRINT & BUILD",
      title: "Engineer Prototype",
      desc: "Build and deploy a functional working prototype during the 24h sprint.",
      icon: <Wrench className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />,
      accent: "text-indigo-400"
    },
    {
      code: "04 // JURY EVALUATION",
      title: "Pitch Live Jury",
      desc: "Present live working code and architecture to industry tech architects.",
      icon: <Presentation className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />,
      accent: "text-purple-400"
    }
  ];

  return (
    <section 
      id="problem-statements" 
      className="pt-20 sm:pt-28 md:pt-32 pb-14 sm:pb-20 md:pb-24 px-4 sm:px-8 md:px-12 lg:px-16 w-full max-w-7xl xl:max-w-[1360px] mx-auto border-t border-white/10 font-sans relative overflow-hidden"
    >
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.025]">
        <span className="font-display font-black text-[7rem] xs:text-[10rem] sm:text-[16rem] md:text-[22rem] lg:text-[28rem] tracking-[0.15em] sm:tracking-[0.2em] text-white whitespace-nowrap">
          SOLVE
        </span>
      </div>

      {/* 4 Corner Crosshairs */}
      <div className="absolute top-3 left-3 sm:top-6 sm:left-6 w-3 h-3 sm:w-4 sm:h-4 border-t border-l border-indigo-500/40 pointer-events-none" />
      <div className="absolute top-3 right-3 sm:top-6 sm:right-6 w-3 h-3 sm:w-4 sm:h-4 border-t border-r border-indigo-500/40 pointer-events-none" />
      <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 w-3 h-3 sm:w-4 sm:h-4 border-b border-l border-indigo-500/40 pointer-events-none" />
      <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 w-3 h-3 sm:w-4 sm:h-4 border-b border-r border-indigo-500/40 pointer-events-none" />

      {/* Top Grid Lockup */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-8 lg:gap-6 xl:gap-10 items-center relative z-10 mb-10 sm:mb-14 lg:mb-16">
        
        {/* Left Column */}
        <div className="md:col-span-5 lg:col-span-4 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
            <span className="w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_8px_#818cf8] animate-pulse" />
            <span className="font-mono text-[11px] sm:text-xs font-bold text-indigo-400 tracking-[0.2em] uppercase">
              02 / PROBLEM STATEMENTS
            </span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-[34px] xl:text-[40px] text-white tracking-tight leading-[1.02] uppercase mb-1">
            PROBLEM STATEMENT
          </h2>
          <h3 className="font-display font-black text-xl sm:text-3xl lg:text-[26px] xl:text-[32px] tracking-tight leading-[1.08] uppercase mb-3 sm:mb-4">
            OPEN THEME.{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
              DEFINE &amp; BUILD.
            </span>
          </h3>

          <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-3.5 gap-y-2 font-sans text-xs font-bold tracking-wider select-none pt-0.5">
            <div className="flex items-center gap-2 text-slate-200">
              <span className="w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_8px_#818cf8]" />
              <span>OPEN FORMAT</span>
            </div>
            <span className="text-white/20 select-none">/</span>
            <div className="flex items-center gap-2 text-slate-200">
              <span className="w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_8px_#818cf8]" />
              <span>6 DOMAINS</span>
            </div>
            <span className="text-white/20 select-none">/</span>
            <div className="flex items-center gap-2 text-indigo-300 font-extrabold">
              <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_#c084fc]" />
              <span>BUILDER FREEDOM</span>
            </div>
          </div>
        </div>

        {/* Middle Laser Column */}
        <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center py-4 relative pointer-events-none w-full">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-indigo-500/30 to-indigo-500/60" />
          <div className="my-2.5 w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_12px_rgba(129,140,248,0.9)]" />
          <div className="w-px h-24 bg-gradient-to-b from-indigo-500/60 via-indigo-500/30 to-transparent" />
        </div>

        {/* Right Column */}
        <div className="md:col-span-7 lg:col-span-7 flex flex-col justify-center space-y-3.5 sm:space-y-4 md:pl-2 lg:pl-6 xl:pl-8">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_6px_#818cf8] animate-pulse" />
              <span className="font-mono text-xs text-slate-300 uppercase tracking-[0.2em] font-semibold">
                CHALLENGE ARCHITECTURE
              </span>
            </div>
            <span className="font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 uppercase tracking-wider">
              NO FIXED PROMPTS
            </span>
          </div>

          <div className="space-y-2">
            <p className="text-base sm:text-lg lg:text-xl font-bold text-white leading-snug tracking-tight">
              Bring your own challenge or friction point — engineer a working technology prototype in 24 hours.
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              Formulate any problem statement, align with 1 of 6 specialized domain tracks, and deploy your solution. Evaluated live by tech architects on code depth, architecture, and real-world viability.
            </p>
          </div>

          <div className="pt-3 sm:pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 font-sans text-left">
            <div className="space-y-0.5">
              <div className="font-display font-black text-xl lg:text-2xl text-white">OPEN</div>
              <div className="font-mono text-[9px] text-indigo-400 uppercase font-bold">CHALLENGE THEME</div>
            </div>
            <div className="space-y-0.5">
              <div className="font-display font-black text-xl lg:text-2xl text-white">6 TRACKS</div>
              <div className="font-mono text-[9px] text-purple-400 uppercase font-bold">DOMAIN SELECTION</div>
            </div>
            <div className="space-y-0.5">
              <div className="font-display font-black text-xl lg:text-2xl text-white">24H</div>
              <div className="font-mono text-[9px] text-indigo-400 uppercase font-bold">SPRINT &amp; BUILD</div>
            </div>
            <div className="space-y-0.5">
              <div className="font-display font-black text-xl lg:text-2xl text-white">LIVE</div>
              <div className="font-mono text-[9px] text-purple-400 uppercase font-bold">JURY EVALUATION</div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <p className="font-display font-bold text-xs sm:text-sm text-slate-300 tracking-tight">
              “Define your challenge.{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-200 bg-clip-text text-transparent font-extrabold">
                Own your domain.
              </span>”
            </p>
            <button
              onClick={() => { playCyberClick(); onRegisterClick(); }}
              onMouseEnter={playCyberHover}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(99,102,241,0.35)] hover:shadow-[0_0_25px_rgba(168,85,247,0.45)] transition-all cursor-pointer w-fit shrink-0 active:scale-95"
            >
              <span>REGISTER SQUAD</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* 4-Phase Protocol Cards */}
      <div className="pt-8 sm:pt-10 border-t border-white/10">
        <div className="flex items-center justify-between gap-2 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_8px_#818cf8]" />
            <span className="font-mono text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-[0.2em]">
              EXECUTION PROTOCOL // 4 PHASES
            </span>
          </div>
          <span className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">
            PHASE 01—04
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 font-sans text-left">
          {protocolPhases.map((phase) => (
            <div key={phase.code} className="space-y-1.5 relative group p-4 sm:p-0 rounded-xl bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-none">
              <div className="flex items-center justify-between pb-0.5">
                <span className={`font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase ${phase.accent}`}>
                  {phase.code}
                </span>
                {phase.icon}
              </div>
              <div className="font-display font-black text-base sm:text-lg text-white tracking-tight pt-0.5">
                {phase.title}
              </div>
              <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed font-normal pt-0.5">
                {phase.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
