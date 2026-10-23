import React from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { anvyx27Config } from "../config/anvyx27Data";
import { playCyberClick, playCyberHover } from "../utils/audio";

interface PrizesStackCardsProps {
  onRegisterClick: () => void;
}

export const PrizesStackCards: React.FC<PrizesStackCardsProps> = ({ onRegisterClick }) => {
  const tickerItems = [
    "₹20,000 CASH PRIZE POOL",
    "OFFLINE CORPORATE INTERNSHIPS WITH WYNTRIX",
    "IEEE STUDENT PASS: ₹500",
    "NON-IEEE DELEGATE PASS: ₹600",
    "6 PROBLEM DOMAINS",
    "15–30 DAYS INTERNSHIP DURATION",
    "VERIFIED IEEE CERTIFICATES",
    "24-HOUR NON-STOP HACKATHON"
  ];

  return (
    <section id="prizes" aria-label="Prize Pool, Offline Internships and Registration Passes" className="w-full relative select-none border-t border-white/[0.08] font-sans bg-transparent">
      
      {/* Background glow burst */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[700px] lg:w-[1050px] h-[320px] sm:h-[500px] rounded-full blur-[130px] sm:blur-[190px] opacity-20 bg-gradient-to-r from-purple-500/25 via-indigo-500/30 to-rose-500/25" />

      {/* Header section with pulsating beacons */}
      <div className="flex flex-col items-center text-center relative z-10 max-w-5xl mx-auto px-4 pt-20 pb-10">
        <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
          <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_#c084fc] animate-pulse" />
          <span className="font-mono text-[11px] sm:text-xs font-semibold text-purple-400 tracking-[0.28em] uppercase">
            ANVYX'27 // REWARDS &amp; REGISTRATION PROTOCOL
          </span>
          <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_#c084fc] animate-pulse" />
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight leading-[1.08] uppercase text-balance">
          <span className="inline-block">NATIONAL LEVEL</span>{" "}
          <span className="inline-block bg-gradient-to-r from-purple-300 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
            HACKATHON
          </span>
        </h2>
      </div>

      {/* Infinite Horizontal Running Marquee Ticker */}
      <div className="relative z-10 w-full overflow-hidden my-4 py-3 border-y border-white/[0.06] bg-white/[0.01]">
        <div className="animate-sliding-rtl flex whitespace-nowrap gap-8 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.22em] text-slate-400">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_6px_#818cf8]" />
              <span className="hover:text-white transition-colors">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* The 3 Stacked Cards */}
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 py-10 space-y-10 sm:space-y-14 relative z-10">
        
        {/* CARD 01: Tracks & Cash Prizes */}
        <div className="relative w-full rounded-2xl bg-[#020204] border border-white/10 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.98)] p-6 sm:p-10 md:p-14 overflow-hidden group">
          {/* Watermark text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.03]">
            <span className="font-display font-black text-[6rem] sm:text-[11rem] md:text-[14rem] text-white">
              ₹20K
            </span>
          </div>

          {/* 4 Corner Crosshairs */}
          <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t border-l border-purple-400/40" />
          <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t border-r border-purple-400/40" />
          <div className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b border-l border-purple-400/40" />
          <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b border-r border-purple-400/40" />

          <div className="grid grid-cols-1 md:grid-cols-[300px_32px_1fr] xl:grid-cols-[340px_40px_1fr] gap-6 md:gap-4 items-center relative z-10">
            {/* Left */}
            <div>
              <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
                <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_#c084fc] animate-pulse" />
                <span className="font-mono text-[11px] sm:text-xs font-bold text-purple-400 tracking-[0.2em] uppercase">
                  02 / TRACKS &amp; PRIZES
                </span>
              </div>
              <h3 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight uppercase mb-1">
                ANVYX'27
              </h3>
              <h4 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight uppercase mb-3">
                WIN BIG.{" "}
                <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-300 bg-clip-text text-transparent">
                  ₹20,000.
                </span>
              </h4>
              <div className="flex flex-wrap items-center gap-2.5 font-sans text-xs font-bold text-slate-300">
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-purple-400" /> 6 PROBLEM TRACKS</span>
                <span>/</span>
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> CASH REWARDS</span>
                <span>/</span>
                <span className="text-purple-300 font-extrabold flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-purple-400" /> LIVE JURY</span>
              </div>
            </div>

            {/* Middle Laser Line */}
            <div className="hidden md:flex flex-col items-center justify-center py-4 relative pointer-events-none w-full">
              <div className="w-px h-24 bg-gradient-to-b from-transparent via-purple-500/30 to-purple-500/60" />
              <div className="my-2.5 w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(192,132,252,0.9)]" />
              <div className="w-px h-24 bg-gradient-to-b from-purple-500/60 via-purple-500/30 to-transparent" />
            </div>

            {/* Right */}
            <div className="space-y-4 md:pl-2">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs text-slate-400 uppercase tracking-[0.2em] font-semibold">
                  PROBLEM TRACKS &amp; CASH AWARDS
                </span>
                <span className="font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 uppercase">
                  6 DOMAINS
                </span>
              </div>
              <p className="text-base sm:text-lg lg:text-xl font-bold text-white leading-snug tracking-tight">
                Compete across 6 specialized industry problem tracks for a total cash prize pool of ₹20,000.
              </p>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                Engineer transformative prototypes in AI, Cyber Safety, HealthTech, GreenTech, Smart Industry, or Open Innovation, evaluated live by an independent jury of tech architects.
              </p>
              
              <div className="pt-3 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 font-sans text-left">
                <div className="space-y-0.5">
                  <div className="font-display font-black text-xl lg:text-2xl text-white">₹20,000</div>
                  <div className="font-mono text-[9px] text-purple-400 uppercase font-bold">CASH POOL</div>
                </div>
                <div className="space-y-0.5">
                  <div className="font-display font-black text-xl lg:text-2xl text-white">6 TRACKS</div>
                  <div className="font-mono text-[9px] text-indigo-400 uppercase font-bold">TECH DOMAINS</div>
                </div>
                <div className="space-y-0.5">
                  <div className="font-display font-black text-xl lg:text-2xl text-white">TOP 3</div>
                  <div className="font-mono text-[9px] text-purple-400 uppercase font-bold">PODIUM TEAMS</div>
                </div>
                <div className="space-y-0.5">
                  <div className="font-display font-black text-xl lg:text-2xl text-white">LIVE JURY</div>
                  <div className="font-mono text-[9px] text-indigo-400 uppercase font-bold">EXPERT ARCHITECTS</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 02: Career Launchpad & Wyntrix Internships */}
        <div className="relative w-full rounded-2xl bg-[#020204] border border-white/10 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.98)] p-6 sm:p-10 md:p-14 overflow-hidden group">
          {/* Watermark text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.03]">
            <span className="font-display font-black text-[5rem] sm:text-[9rem] md:text-[12rem] text-white">
              WYNTRIX
            </span>
          </div>

          {/* 4 Corner Crosshairs */}
          <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t border-l border-rose-400/40" />
          <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t border-r border-rose-400/40" />
          <div className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b border-l border-rose-400/40" />
          <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b border-r border-rose-400/40" />

          <div className="grid grid-cols-1 md:grid-cols-[300px_32px_1fr] xl:grid-cols-[340px_40px_1fr] gap-6 md:gap-4 items-center relative z-10">
            {/* Left */}
            <div>
              <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
                <span className="w-2 h-2 rounded-full bg-rose-400 shadow-[0_0_8px_#fb7185] animate-pulse" />
                <span className="font-mono text-[11px] sm:text-xs font-bold text-rose-400 tracking-[0.2em] uppercase">
                  03 / CAREER LAUNCHPAD
                </span>
              </div>
              <h3 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight uppercase mb-1">
                ANVYX'27
              </h3>
              <h4 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight uppercase mb-3">
                ACCELERATE.{" "}
                <span className="bg-gradient-to-r from-[#F43F5E] via-[#FB7185] to-[#FDA4AF] bg-clip-text text-transparent">
                  WYNTRIX.
                </span>
              </h4>
              <div className="flex flex-wrap items-center gap-2.5 font-sans text-xs font-bold text-slate-300">
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-rose-400" /> 15–30 DAYS</span>
                <span>/</span>
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-pink-400" /> OFFLINE LABS</span>
                <span>/</span>
                <span className="text-rose-300 font-extrabold flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" /> PPI OFFERS</span>
              </div>
            </div>

            {/* Middle Laser Line */}
            <div className="hidden md:flex flex-col items-center justify-center py-4 relative pointer-events-none w-full">
              <div className="w-px h-24 bg-gradient-to-b from-transparent via-rose-500/30 to-rose-500/60" />
              <div className="my-2.5 w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_12px_rgba(251,113,133,0.9)]" />
              <div className="w-px h-24 bg-gradient-to-b from-rose-500/60 via-rose-500/30 to-transparent" />
            </div>

            {/* Right */}
            <div className="space-y-4 md:pl-2">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs text-slate-400 uppercase tracking-[0.2em] font-semibold">
                  CAREER ACCELERATOR · INDUSTRY PARTNER
                </span>
                <span className="font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 uppercase">
                  WYNTRIX ALLIANCE
                </span>
              </div>
              <p className="text-base sm:text-lg lg:text-xl font-bold text-white leading-snug tracking-tight">
                Top-performing teams earn direct offline corporate internships and technical mentorship from Wyntrix.
              </p>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                Work inside corporate R&amp;D labs on production codebases, collaborate 1-on-1 with senior engineering leads, and secure fast-track Pre-Placement Interview (PPI) passes.
              </p>
              
              <div className="pt-3 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 font-sans text-left">
                <div className="space-y-0.5">
                  <div className="font-display font-black text-xl lg:text-2xl text-white">15–30 D</div>
                  <div className="font-mono text-[9px] text-rose-400 uppercase font-bold">INTERNSHIP</div>
                </div>
                <div className="space-y-0.5">
                  <div className="font-display font-black text-xl lg:text-2xl text-white">WYNTRIX</div>
                  <div className="font-mono text-[9px] text-pink-400 uppercase font-bold">R&amp;D LABS</div>
                </div>
                <div className="space-y-0.5">
                  <div className="font-display font-black text-xl lg:text-2xl text-white">PPI PASS</div>
                  <div className="font-mono text-[9px] text-rose-300 uppercase font-bold">DIRECT INTERVIEW</div>
                </div>
                <div className="space-y-0.5">
                  <div className="font-display font-black text-xl lg:text-2xl text-white">1-ON-1</div>
                  <div className="font-mono text-[9px] text-pink-400 uppercase font-bold">TECH MENTORS</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 03: Hospitality & Admission Pass */}
        <div className="relative w-full rounded-2xl bg-[#020204] border border-white/10 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.98)] p-6 sm:p-10 md:p-14 overflow-hidden group">
          {/* Watermark text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.03]">
            <span className="font-display font-black text-[5rem] sm:text-[9rem] md:text-[13rem] text-white">
              PASSES
            </span>
          </div>

          {/* 4 Corner Crosshairs */}
          <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t border-l border-cyan-400/40" />
          <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t border-r border-cyan-400/40" />
          <div className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b border-l border-cyan-400/40" />
          <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b border-r border-cyan-400/40" />

          <div className="grid grid-cols-1 md:grid-cols-[300px_32px_1fr] xl:grid-cols-[340px_40px_1fr] gap-6 md:gap-4 items-center relative z-10">
            {/* Left */}
            <div>
              <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse" />
                <span className="font-mono text-[11px] sm:text-xs font-bold text-cyan-400 tracking-[0.2em] uppercase">
                  04 / HOSPITALITY &amp; ADMISSION
                </span>
              </div>
              <h3 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight uppercase mb-1">
                ANVYX'27
              </h3>
              <h4 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight uppercase mb-3">
                ALL-INCLUSIVE{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                  PASS.
                </span>
              </h4>
              <div className="flex flex-wrap items-center gap-2.5 font-sans text-xs font-bold text-slate-300">
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> ₹500 / ₹600 PASS</span>
                <span>/</span>
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> MEALS + STAY</span>
                <span>/</span>
                <span className="text-cyan-300 font-extrabold flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" /> CLOSES: 24 SEPT</span>
              </div>
            </div>

            {/* Middle Laser Line */}
            <div className="hidden md:flex flex-col items-center justify-center py-4 relative pointer-events-none w-full">
              <div className="w-px h-24 bg-gradient-to-b from-transparent via-cyan-500/30 to-cyan-500/60" />
              <div className="my-2.5 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
              <div className="w-px h-24 bg-gradient-to-b from-cyan-500/60 via-cyan-500/30 to-transparent" />
            </div>

            {/* Right */}
            <div className="space-y-4 md:pl-2">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs text-cyan-400 uppercase tracking-[0.2em] font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]" />
                  DELEGATE HOSPITALITY &amp; ADMISSION PASS
                </span>
                <span className="font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 uppercase">
                  PER PERSON PASS
                </span>
              </div>
              
              <h4 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight leading-tight uppercase">
                ₹600 GETS YOU THE FULL ANVYX EXPERIENCE
              </h4>

              {/* 4 Feature Checks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-[13px] text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>3 Full Meals &amp; Midnight Snacks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Accommodation &amp; 24h Lab Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Delegate Kit, Swag &amp; Verified Certificate</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Industry Mentorship &amp; Internship Opportunities</span>
                </div>
              </div>

              {/* Pricing Cards */}
              <div className="grid grid-cols-2 gap-3 sm:gap-6 pt-3 border-t border-white/10 font-sans">
                {/* IEEE Member */}
                <div className="space-y-1 pr-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_6px_#818cf8]" />
                    <span className="font-mono text-[10px] sm:text-xs font-bold text-indigo-300 uppercase tracking-wider">
                      IEEE MEMBER
                    </span>
                    <span className="font-mono text-[8px] font-bold px-1.5 py-0.2 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 uppercase">
                      DISCOUNTED
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1 pt-0.5">
                    <span className="font-display font-black text-2xl sm:text-3xl text-white">₹500</span>
                    <span className="font-mono text-xs text-slate-400">/ person</span>
                  </div>
                  <p className="font-mono text-[10px] text-slate-400">With valid IEEE Student ID</p>
                </div>

                {/* Non-IEEE Member */}
                <div className="space-y-1 pl-3 sm:pl-6 border-l border-white/10">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    <span className="font-mono text-[10px] sm:text-xs font-bold text-slate-200 uppercase tracking-wider">
                      NON-IEEE
                    </span>
                    <span className="font-mono text-[8px] font-bold px-1.5 py-0.2 rounded-full bg-white/[0.08] border border-white/15 text-slate-300 uppercase">
                      ALL COLLEGES
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1 pt-0.5">
                    <span className="font-display font-black text-2xl sm:text-3xl text-white">₹600</span>
                    <span className="font-mono text-xs text-slate-400">/ person</span>
                  </div>
                  <p className="font-mono text-[10px] text-slate-400">Open to all student builders</p>
                </div>
              </div>

              {/* Squad note & Register CTA */}
              <div className="flex items-center gap-2 font-mono text-[10px] text-slate-400 pt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                <span>Fee is per person · Squad total calculated at checkout (2–4 members)</span>
              </div>

              <button
                onClick={() => { playCyberClick(); onRegisterClick(); }}
                onMouseEnter={playCyberHover}
                className="w-full mt-2 relative overflow-hidden min-h-[46px] px-6 py-3 rounded-full bg-gradient-to-r from-[#6575F5] via-[#8B70E8] to-[#FF405F] text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(101,117,245,0.35)] hover:shadow-[0_0_30px_rgba(255,64,95,0.5)] transition-all cursor-pointer flex items-center justify-center gap-2 group hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>REGISTER YOUR SQUAD (CLOSES: 24 SEPT)</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
