import React, { useEffect, useState } from "react";
import { anvyx27Config } from "../config/anvyx27Data";

interface CyberBootLoaderProps {
  onComplete?: () => void;
}

export const CyberBootLoader: React.FC<CyberBootLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Progress counter animation from 0 to 100
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsFading(true), 300);
          setTimeout(() => {
            setIsDone(true);
            onComplete?.();
          }, 950);
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 3;
        return Math.min(prev + increment, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (isDone) return null;

  return (
    <div
      role="status"
      aria-label="System Initialization"
      className={`fixed inset-0 z-[99999] bg-[#020205] text-white select-none flex flex-col justify-between items-center p-6 sm:p-8 transition-opacity duration-700 ease-out overflow-hidden ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Ambient background bloom */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[420px] rounded-full pointer-events-none filter blur-[140px] opacity-25"
        style={{ background: "radial-gradient(circle, rgba(101, 117, 245, 0.4) 0%, rgba(139, 112, 232, 0.2) 50%, transparent 80%)" }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-[520px] h-[320px] rounded-full pointer-events-none filter blur-[130px] opacity-20"
        style={{ background: "radial-gradient(circle, rgba(255, 64, 95, 0.3) 0%, transparent 75%)" }}
      />

      {/* Cyber grid & vignette */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "64px 64px"
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(circle, transparent 35%, rgba(2, 2, 5, 0.9) 100%)" }}
      />

      {/* Luminous signal sweep line */}
      <div 
        className="absolute top-[43%] left-[-20%] w-[45vw] h-[1px] pointer-events-none opacity-70"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(101,117,245,0.8), rgba(255,64,95,0.8), transparent)",
          animation: "signalSweep 6s cubic-bezier(0.4, 0, 0.2, 1) infinite"
        }}
      />

      {/* Network Constellation SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
        <g stroke="rgba(101, 117, 245, 0.2)" strokeWidth="0.75" fill="none">
          <line x1="8%" y1="22%" x2="28%" y2="38%" />
          <line x1="28%" y1="38%" x2="55%" y2="24%" />
          <line x1="55%" y1="24%" x2="88%" y2="18%" />
          <line x1="14%" y1="74%" x2="38%" y2="82%" />
          <line x1="38%" y1="82%" x2="72%" y2="70%" />
          <line x1="72%" y1="70%" x2="92%" y2="60%" />
        </g>
        <circle cx="28%" cy="38%" r="2.5" fill="#6575F5" style={{ animation: "nodePulse 2.5s ease-in-out infinite" }} />
        <circle cx="55%" cy="24%" r="2" fill="#8B70E8" style={{ animation: "nodePulse 2.5s ease-in-out 0.8s infinite" }} />
        <circle cx="38%" cy="82%" r="2.5" fill="#FF405F" style={{ animation: "nodePulse 2.5s ease-in-out 1.5s infinite" }} />
        <circle cx="72%" cy="70%" r="2" fill="#6575F5" style={{ animation: "nodePulse 2.5s ease-in-out infinite" }} />
      </svg>

      {/* Top Header Tag */}
      <header className="relative z-10 w-full max-w-[900px] flex items-center justify-between font-mono text-[10px] tracking-[0.26em] uppercase text-white/50 pt-2">
        <span>ANV27 // SYSTEM BOOT</span>
        <div className="w-2 h-2 rounded-full bg-[#6575F5] shadow-[0_0_10px_#6575F5] animate-pulse" />
      </header>

      {/* Center Lockup */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center my-auto w-full max-w-4xl py-6">
        {/* System sub-tag */}
        <div className="flex items-center gap-2.5 font-mono text-[9px] font-semibold text-slate-400 uppercase tracking-[0.34em] mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6575F5] shadow-[0_0_8px_#6575F5]" />
          <span>SYSTEM</span>
          <span className="text-[#6575F5]">//</span>
          <span>ANVYX</span>
          <span className="text-[#FF405F]">{anvyx27Config.edition}</span>
        </div>

        {/* Big Wordmark */}
        <div className="flex items-baseline justify-center font-display font-black leading-none tracking-tight mb-4 select-none">
          <span className="text-4xl sm:text-7xl md:text-8xl text-white tracking-tighter">
            ANVYX
          </span>
          <span className="text-4xl sm:text-7xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-[#6575F5] via-[#8B70E8] to-[#FF405F] tracking-tighter filter drop-shadow-[0_4px_20px_rgba(101,117,245,0.4)]">
            '27
          </span>
        </div>

        {/* Tagline */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-base md:text-lg font-bold tracking-[0.16em] uppercase text-slate-200 mb-8 font-sans">
          <span>THINK</span>
          <span className="text-[#6575F5]">·</span>
          <span>BUILD</span>
          <span className="text-[#8B70E8]">·</span>
          <span className="bg-gradient-to-r from-[#8B70E8] to-[#FF405F] bg-clip-text text-transparent font-black">
            DISRUPT
          </span>
        </div>

        {/* Command link */}
        <div className="flex flex-col items-center text-center w-full max-w-md mb-6">
          <div className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.34em] text-white/30 mb-2">
            <span className="text-[#7771ff] font-bold">ANV27</span>
            <span>//</span>
            <span>CORE LINK</span>
          </div>
          <div className="font-mono text-[11px] sm:text-xs tracking-[0.16em] text-slate-300">
            CONNECTING TO ANVYX CORE
            <span className="inline-block w-1.5 h-3 ml-1.5 bg-[#FF405F] shadow-[0_0_8px_#FF405F] animate-pulse align-middle" />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-md flex flex-col">
          <div className="flex justify-between items-center font-mono text-[9px] uppercase tracking-[0.25em] text-white/40 mb-2">
            <span>STREAM INITIALIZATION</span>
            <span className="text-white font-bold">{progress.toString().padStart(3, "0")}%</span>
          </div>
          <div className="w-full h-[2px] bg-white/10 relative overflow-hidden rounded-full">
            <div 
              className="h-full bg-gradient-to-r from-[#6575F5] via-[#8B70E8] to-[#FF405F] transition-all duration-75 shadow-[0_0_12px_#6575F5]"
              style={{ width: `${progress}%` }}
            />
            <div 
              className="absolute top-[-1px] w-2 h-1 bg-[#FF405F] filter blur-[1px] shadow-[0_0_8px_#FF405F]"
              style={{ left: `${progress}%`, transform: "translateX(-50%)" }}
            />
          </div>
        </div>

        {/* Telemetry metadata */}
        <div className="grid grid-cols-3 w-full max-w-md border-t border-white/10 mt-6 pt-3 font-mono text-[8px] tracking-[0.22em] text-white/30 uppercase">
          <span className="text-left">NODE: ANV27-01</span>
          <span className="text-center">EXECUTION STREAM // 992</span>
          <span className="text-right text-[#55E5D2]">ACTIVE</span>
        </div>
      </main>

      {/* Bottom protocol tag */}
      <footer className="relative z-10 font-mono text-[9px] tracking-[0.22em] uppercase text-white/40 pb-2">
        <span>EXECUTION PROTOCOL // 2027</span>
      </footer>
    </div>
  );
};
