import React from "react";
import { anvyx27Config } from "../config/anvyx27Data";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-[#020205]">
      <div className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 max-w-6xl mx-auto border-t border-white/10 font-sans relative overflow-hidden w-full">
        
        {/* Giant Watermark Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.025]">
          <span className="font-display font-black text-[7rem] xs:text-[10rem] sm:text-[16rem] md:text-[22rem] tracking-[0.15em] sm:tracking-[0.2em] text-white whitespace-nowrap">
            ANVYX
          </span>
        </div>

        {/* 4 Corner Crosshairs */}
        <div className="absolute top-3 left-3 sm:top-6 sm:left-6 w-3 h-3 sm:w-4 sm:h-4 border-t border-l border-purple-500/40 pointer-events-none" />
        <div className="absolute top-3 right-3 sm:top-6 sm:right-6 w-3 h-3 sm:w-4 sm:h-4 border-t border-r border-purple-500/40 pointer-events-none" />
        <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 w-3 h-3 sm:w-4 sm:h-4 border-b border-l border-purple-500/40 pointer-events-none" />
        <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 w-3 h-3 sm:w-4 sm:h-4 border-b border-r border-purple-500/40 pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-8 lg:gap-4 items-center relative z-10">
          
          {/* Left Column: Title & Subtitles */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-center">
            <span className="text-[11px] sm:text-sm font-mono text-indigo-400 font-bold uppercase tracking-[0.18em] block mb-2 sm:mb-4">
              01 / ABOUT THE EVENT
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight leading-[1.05] uppercase text-balance">
              <span className="text-white block">ANVYX'27</span>
              <span className="text-slate-200 block text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-1">
                BUILD WHAT'S{" "}
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-400 bg-clip-text text-transparent inline">
                  NEXT.
                </span>
              </span>
            </h2>

            <div className="pt-3 sm:pt-4 mt-2 sm:mt-4 font-mono text-[10px] sm:text-[11px] text-slate-300 font-semibold tracking-wider flex flex-wrap items-center gap-2 select-none">
              <span className="text-white font-bold tracking-wider">NATIONAL LEVEL</span>
              <span className="text-slate-600 hidden xs:inline">·</span>
              <span className="text-slate-300">24 HOURS</span>
              <span className="text-slate-600 hidden xs:inline">·</span>
              <span className="text-indigo-400 font-bold">KPRIET</span>
            </div>
          </div>

          {/* Middle Decorative Column: Holographic Laser Beacon */}
          <div className="hidden lg:flex lg:col-span-2 flex-col items-center justify-center py-4 relative select-none pointer-events-none">
            <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-32 h-32 stroke-purple-400 fill-none stroke-[1.2]">
                <polygon points="50,12 85,32 85,68 50,88 15,68 15,32" />
                <circle cx="50" cy="50" r="22" strokeDasharray="3 3" />
                <line x1="50" y1="2" x2="50" y2="98" strokeDasharray="2 4" />
                <text x="50" y="24" textAnchor="middle" fill="#a855f7" fontSize="7" fontFamily="monospace" fontWeight="bold">27</text>
              </svg>
            </div>
            <div className="w-px h-24 bg-gradient-to-b from-transparent via-purple-500/30 to-purple-500/60 z-10" />
            <div className="my-3 relative flex items-center justify-center z-10">
              <div className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.9)]" />
              <div className="absolute w-5 h-5 rounded-full border border-purple-500/40 animate-ping opacity-60" />
            </div>
            <div className="w-px h-24 bg-gradient-to-b from-purple-500/60 via-purple-500/30 to-transparent z-10" />
          </div>

          {/* Right Column: Narrative & Metrics */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-center space-y-4 sm:space-y-5 md:pl-4 lg:pl-2">
            <div className="space-y-2.5 sm:space-y-3">
              <span className="font-mono text-[11px] sm:text-xs text-slate-500 uppercase tracking-widest block mb-0.5">
                EVENT OVERVIEW
              </span>
              <p className="text-sm sm:text-lg font-semibold text-slate-100 leading-snug sm:leading-relaxed tracking-tight text-pretty">
                ANVYX '27 is a national-level 24-hour hackathon where ambitious students come together to build, experiment, and solve real-world problems.
              </p>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal text-pretty">
                Organized by the Department of Information Technology, KPRIET, ANVYX brings together developers, designers, and innovators to turn breakthrough ideas into working prototypes.
              </p>
              <div className="font-mono text-[10px] sm:text-xs text-indigo-400 font-bold uppercase tracking-wider pt-1 flex items-center gap-2 flex-wrap">
                <span className="whitespace-nowrap">{anvyx27Config.eventDates}</span>
                <span className="text-slate-600">·</span>
                <span className="whitespace-nowrap">COIMBATORE</span>
              </div>
            </div>

            {/* Bottom 3 Metric Tiles */}
            <div className="pt-4 sm:pt-5 border-t border-white/10 grid grid-cols-3 gap-2 sm:gap-4 font-sans text-left">
              <div className="p-2 sm:p-0 rounded-xl bg-white/[0.03] sm:bg-transparent border border-white/5 sm:border-0 space-y-0.5">
                <div className="font-display font-black text-lg sm:text-2xl md:text-3xl text-white tracking-tight">
                  24 HRS
                </div>
                <div className="font-mono text-[8px] sm:text-[10px] text-indigo-400 uppercase tracking-widest font-semibold">
                  ON-SITE
                </div>
              </div>

              <div className="p-2 sm:p-0 rounded-xl bg-white/[0.03] sm:bg-transparent border border-white/5 sm:border-0 space-y-0.5">
                <div className="font-display font-black text-lg sm:text-2xl md:text-3xl text-white tracking-tight">
                  06
                </div>
                <div className="font-mono text-[8px] sm:text-[10px] text-purple-400 uppercase tracking-widest font-semibold">
                  DOMAINS
                </div>
              </div>

              <div className="p-2 sm:p-0 rounded-xl bg-white/[0.03] sm:bg-transparent border border-white/5 sm:border-0 space-y-0.5">
                <div className="font-display font-black text-lg sm:text-2xl md:text-3xl text-white tracking-tight">
                  02—04
                </div>
                <div className="font-mono text-[8px] sm:text-[10px] text-rose-400 uppercase tracking-widest font-semibold">
                  TEAM SIZE
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
