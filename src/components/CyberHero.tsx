import React, { useState, useEffect } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { anvyx27Config } from "../config/anvyx27Data";
import { playCyberClick, playCyberHover } from "../utils/audio";

interface CyberHeroProps {
  onRegisterClick: () => void;
  onExploreClick: () => void;
}

export const CyberHero: React.FC<CyberHeroProps> = ({
  onRegisterClick,
  onExploreClick
}) => {
  // Real-time countdown timer to event date
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00"
  });

  useEffect(() => {
    const target = new Date("2027-10-08T10:30:00+05:30").getTime();

    const updateTimer = () => {
      const now = Date.now();
      const diff = Math.max(0, target - now);

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        days: d.toString().padStart(2, "0"),
        hours: h.toString().padStart(2, "0"),
        minutes: m.toString().padStart(2, "0"),
        seconds: s.toString().padStart(2, "0")
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full flex flex-col justify-between px-4 sm:px-6 lg:px-12 pt-24 sm:pt-28 lg:pt-28 pb-6 overflow-hidden bg-[#030409] font-sans select-none"
    >
      {/* Ambient background glow blooms */}
      <div className="absolute top-1/4 left-1/4 w-[380px] sm:w-[540px] h-[300px] sm:h-[360px] bg-[#6575F5]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[320px] sm:w-[480px] h-[240px] sm:h-[300px] bg-[#FF405F]/08 rounded-full blur-[100px] pointer-events-none" />

      {/* Cyberpunk Grid Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.07] z-0" 
        style={{
          backgroundImage: "linear-gradient(to right, rgba(101,117,245,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(101,117,245,0.15) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }}
      />

      {/* Right Side: Cyber Samurai Holo Visual Artwork */}
      <div className="flex absolute top-0 right-0 bottom-0 w-[92vw] sm:w-[62vw] md:w-[52vw] lg:w-[50vw] max-w-[920px] h-full pointer-events-none z-0 overflow-hidden items-start justify-end pt-20 sm:pt-24 lg:pt-24 opacity-60 md:opacity-75 lg:opacity-90">
        
        {/* Radial backing gradient behind samurai */}
        <div 
          className="absolute right-0 top-20 w-[340px] sm:w-[600px] lg:w-[750px] h-[340px] sm:h-[600px] lg:h-[750px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 70% at 85% 40%, rgba(101, 117, 245, 0.25) 0%, rgba(139, 112, 232, 0.15) 40%, rgba(255, 46, 99, 0.08) 70%, transparent 100%)"
          }}
        />

        {/* Outer Spinning Reticle Rings */}
        <div className="hidden md:flex absolute right-12 top-36 w-[480px] h-[480px] rounded-full border border-[#6575F5]/15 pointer-events-none items-center justify-center">
          <div 
            className="w-full h-full rounded-full border border-dashed border-[#6575F5]/20" 
            style={{ animation: "reticleSpinSlow 45s linear infinite" }} 
          />
          <div 
            className="absolute w-[360px] h-[360px] rounded-full border border-[#8B70E8]/15" 
            style={{ animation: "reticleSpinSlowReverse 65s linear infinite" }} 
          />
        </div>

        {/* Main Samurai Artwork Container with layered holographic glitch effects */}
        <div className="relative w-full h-[65vh] sm:h-[75vh] lg:h-[82vh] max-h-[880px] translate-x-[45%] lg:translate-x-0 select-none will-change-transform">
          
          {/* Subtle colored aura bloom behind character */}
          <div 
            className="absolute inset-8 rounded-full pointer-events-none filter blur-[40px] z-0"
            style={{
              background: "radial-gradient(circle, rgba(103, 90, 255, 0.16) 0%, rgba(220, 70, 150, 0.08) 40%, transparent 70%)",
              animation: "samuraiAura 6s ease-in-out infinite"
            }}
          />

          {/* Base Samurai Artwork Image */}
          <img 
            src="/images/samurai.webp" 
            alt="ANVYX Cyberpunk Samurai" 
            width={800} 
            height={900} 
            className="absolute inset-0 w-full h-full object-contain object-right-top select-none pointer-events-none z-0 opacity-85 will-change-transform"
            style={{ animation: "samuraiMainJitter 9s ease-in-out infinite" }}
          />

          {/* Glitch Shadow Channels (Screen Blend) */}
          <div className="hidden md:block pointer-events-none">
            {/* Cyan Glitch Channel */}
            <div 
              className="absolute inset-0 pointer-events-none z-10 will-change-transform mix-blend-screen"
              style={{
                backgroundImage: "url(/images/samurai.webp)",
                backgroundSize: "contain",
                backgroundPosition: "right top",
                backgroundRepeat: "no-repeat",
                filter: "drop-shadow(-4px 0 rgba(0, 220, 255, 0.85))",
                animation: "samuraiCyanGlitch 9s steps(1) infinite"
              }}
            />
            {/* Red Glitch Channel */}
            <div 
              className="absolute inset-0 pointer-events-none z-10 will-change-transform mix-blend-screen"
              style={{
                backgroundImage: "url(/images/samurai.webp)",
                backgroundSize: "contain",
                backgroundPosition: "right top",
                backgroundRepeat: "no-repeat",
                filter: "drop-shadow(4px 0 rgba(255, 45, 95, 0.85))",
                animation: "samuraiRedGlitch 9s steps(1) infinite"
              }}
            />
          </div>

          {/* Holographic Gradient Wave Mask */}
          <div 
            className="w-full h-full relative opacity-95 transition-opacity z-10"
            style={{
              background: "linear-gradient(135deg, #6575F5 0%, #8B70E8 45%, #FF405F 90%)",
              WebkitMaskImage: "url(/images/samurai.webp)",
              maskImage: "url(/images/samurai.webp)",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskPosition: "right top",
              maskPosition: "right top",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              animation: "samuraiHoloWave 6s ease-in-out infinite"
            }}
          />

          {/* Japanese Kanji Character Badge */}
          <div className="hidden lg:flex flex-col items-center absolute right-8 bottom-32 text-[#6575F5]/80 font-mono text-xs tracking-[0.25em] uppercase pointer-events-none z-30">
            <span className="text-2xl mb-1 font-bold text-white drop-shadow-[0_0_10px_rgba(101,117,245,0.8)]">
              侍
            </span>
            <div className="w-px h-12 bg-[#6575F5]/30 mt-2" />
          </div>
        </div>
      </div>

      {/* Left Side: Editorial Hero Content & Interactive Countdown */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-center my-auto flex-1 py-4 sm:py-6">
        <div className="flex flex-col justify-center w-full max-w-4xl">
          
          {/* Tag badge with pulsing cyan beacon */}
          <div className="flex items-center gap-2 sm:gap-2.5 mb-2 sm:mb-3 flex-wrap">
            <span className="w-2 h-2 rounded-full bg-[#55E5D2] animate-pulse shadow-[0_0_8px_#55E5D2]" />
            <span className="font-display font-black text-xs sm:text-sm tracking-[0.22em] uppercase bg-gradient-to-r from-[#55E5D2] via-[#6575F5] to-[#FF405F] bg-clip-text text-transparent">
              24-HOUR NATIONAL-LEVEL HACKATHON
            </span>
            <span className="text-slate-500 font-mono text-xs hidden sm:inline">·</span>
            <span className="font-mono text-[11px] sm:text-xs font-bold text-slate-300 tracking-[0.18em] uppercase">
              KPRIET, COIMBATORE
            </span>
          </div>

          {/* Main Massive Title */}
          <h1 className="font-black leading-[0.92] tracking-tight mb-2 sm:mb-3 font-display text-white text-5xl sm:text-6xl md:text-7xl lg:text-[84px] xl:text-[96px] whitespace-nowrap">
            <span className="inline-block">
              ANV<span className="bg-gradient-to-r from-[#6575F5] via-[#8B70E8] to-[#FF405F] bg-clip-text text-transparent">YX</span>
              <span className="text-[#FF405F] font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl align-top ml-1 font-bold">
                {anvyx27Config.edition}
              </span>
            </span>
          </h1>

          {/* Tagline & Date */}
          <div className="mb-5 sm:mb-7 flex flex-col gap-2">
            <p className="font-display font-bold text-xs sm:text-base md:text-lg tracking-[0.16em] sm:tracking-[0.18em] text-slate-200 uppercase whitespace-nowrap">
              THINK <span className="text-[#6575F5]">·</span> BUILD <span className="text-[#8B70E8]">·</span>{" "}
              <span className="bg-gradient-to-r from-[#8B70E8] via-[#C084FC] to-[#FF405F] bg-clip-text text-transparent font-black">
                DISRUPT
              </span>
            </p>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B70E8] animate-pulse shadow-[0_0_8px_#8B70E8]" />
              <span className="text-slate-400 font-semibold tracking-wider uppercase text-[11px] sm:text-xs">
                EVENT DATE:
              </span>
              <span className="font-black tracking-widest uppercase bg-gradient-to-r from-[#6575F5] via-[#8B70E8] to-[#FF405F] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(101,117,245,0.3)]">
                {anvyx27Config.eventDates}
              </span>
            </div>
          </div>

          {/* Interactive CTAs */}
          <div className="w-full max-w-[580px] flex flex-col">
            <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6 flex-wrap">
              <button
                onClick={() => { playCyberClick(); onRegisterClick(); }}
                onMouseEnter={playCyberHover}
                className="relative overflow-hidden min-h-[44px] px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-gradient-to-r from-[#6575F5] via-[#8B70E8] to-[#FF405F] text-white font-mono text-xs sm:text-[13px] font-bold uppercase tracking-wider shadow-[0_0_16px_rgba(101,117,245,0.25)] hover:shadow-[0_0_22px_rgba(255,64,95,0.35)] transition-all cursor-pointer flex items-center gap-2 group"
              >
                <span>REGISTER NOW</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#sectors"
                onClick={(e) => {
                  e.preventDefault();
                  playCyberClick();
                  document.getElementById("sectors")?.scrollIntoView({ behavior: "smooth" });
                }}
                onMouseEnter={playCyberHover}
                className="min-h-[44px] px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg border border-white/12 hover:border-[#6575F5]/40 bg-white/[0.02] hover:bg-white/[0.05] text-slate-300 hover:text-white font-mono text-xs sm:text-[13px] font-medium uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer group shadow-sm"
              >
                <span>VIEW 6 DOMAINS</span>
                <span className="text-[#6575F5] group-hover:translate-x-1 transition-transform font-mono text-sm">→</span>
              </a>
            </div>

            {/* Live 3D Flip Card Countdown Container */}
            <div className="flex flex-col mb-5 w-full">
              <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between text-xs font-mono tracking-wider mb-2.5 gap-1.5 xs:gap-0">
                <div className="flex items-center gap-2 font-bold text-rose-400 uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse shadow-[0_0_8px_#f43f5e]" />
                  <span>EVENT STARTS IN</span>
                </div>
                <div className="text-slate-300 font-mono text-xs font-semibold">
                  08 OCT 2027 · 10:30 IST
                </div>
              </div>

              {/* 4 Flip Timer Blocks */}
              <div className="grid grid-cols-4 gap-2 sm:gap-3.5 w-full my-1">
                {[
                  { label: "DAYS", value: timeLeft.days, border: "border-rose-500/25 group-hover:border-rose-500/60", gradient: "from-rose-300 via-pink-200 to-white" },
                  { label: "HOURS", value: timeLeft.hours, border: "border-purple-500/25 group-hover:border-purple-500/60", gradient: "from-purple-300 via-purple-200 to-white" },
                  { label: "MINUTES", value: timeLeft.minutes, border: "border-indigo-500/25 group-hover:border-indigo-500/60", gradient: "from-indigo-300 via-purple-200 to-rose-200" },
                  { label: "SECONDS", value: timeLeft.seconds, border: "border-rose-500/35 group-hover:border-rose-500/70", gradient: "from-rose-400 via-rose-300 to-pink-200" }
                ].map((item) => (
                  <div key={item.label} className="relative flex flex-col items-center w-full select-none font-mono group">
                    <div 
                      className={`relative w-full h-16 xs:h-20 sm:h-[105px] rounded-xl sm:rounded-[18px] bg-[#060716]/98 border ${item.border} shadow-[0_4px_20px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300`}
                      style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
                    >
                      {/* Top Corner Bolt Screws */}
                      <div className="hidden sm:block absolute top-2 left-2.5 w-1.5 h-1.5 rounded-full bg-[#6575F5]/70 border border-white/20 z-30 shadow-sm" />
                      <div className="hidden sm:block absolute top-2 right-2.5 w-1.5 h-1.5 rounded-full bg-[#6575F5]/70 border border-white/20 z-30 shadow-sm" />
                      
                      {/* Flip Split Horizontal Line */}
                      <div className="absolute top-1/2 left-0 right-0 h-[1px] -translate-y-1/2 bg-black/80 shadow-[0_1px_0_rgba(255,255,255,0.08)] z-30 pointer-events-none" />

                      {/* Top Half */}
                      <div className="absolute inset-x-0 top-0 h-1/2 overflow-hidden bg-gradient-to-b from-[#0D0F28] to-[#060817]">
                        <div className="absolute inset-x-0 top-0 h-[200%] flex items-center justify-center">
                          <span className={`font-black text-2xl xs:text-3xl sm:text-[44px] md:text-[50px] leading-none bg-gradient-to-b ${item.gradient} bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(101,117,245,0.35)]`}>
                            {item.value}
                          </span>
                        </div>
                      </div>

                      {/* Bottom Half */}
                      <div className="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden bg-gradient-to-b from-[#060817] to-[#040510]">
                        <div className="absolute inset-x-0 bottom-0 h-[200%] flex items-center justify-center">
                          <span className={`font-black text-2xl xs:text-3xl sm:text-[44px] md:text-[50px] leading-none bg-gradient-to-b ${item.gradient} bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(101,117,245,0.35)]`}>
                            {item.value}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full text-center mt-2 sm:mt-2.5">
                      <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.18em] uppercase text-slate-300 group-hover:text-indigo-300 transition-colors">
                        {item.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats Ticker */}
            <div className="pt-3 sm:pt-4 border-t border-white/10 grid grid-cols-3 gap-3 sm:gap-6 font-sans text-left select-none">
              <div className="space-y-0.5 sm:space-y-1 min-w-0">
                <div className="font-display font-black text-xl sm:text-2xl lg:text-3xl text-white tracking-tight whitespace-nowrap">
                  24 HOURS
                </div>
                <div className="font-mono text-[8.5px] sm:text-[9.5px] text-[#55E5D2] uppercase tracking-widest font-bold whitespace-nowrap">
                  NON-STOP HACK
                </div>
              </div>

              <div className="space-y-0.5 sm:space-y-1 min-w-0">
                <div className="font-display font-black text-xl sm:text-2xl lg:text-3xl text-white tracking-tight whitespace-nowrap">
                  6 TRACKS
                </div>
                <div className="font-mono text-[8.5px] sm:text-[9.5px] text-purple-400 uppercase tracking-widest font-bold whitespace-nowrap">
                  TECH DOMAINS
                </div>
              </div>

              <div className="space-y-0.5 sm:space-y-1 min-w-0">
                <div className="font-display font-black text-xl sm:text-2xl lg:text-3xl text-white tracking-tight whitespace-nowrap">
                  ₹20,000
                </div>
                <div className="font-mono text-[8.5px] sm:text-[9.5px] text-rose-400 uppercase tracking-widest font-bold whitespace-nowrap">
                  PRIZES + INTERNSHIPS
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Sub-bar */}
      <div className="max-w-7xl mx-auto w-full flex flex-col xs:flex-row justify-between items-center text-xs font-mono text-slate-400 pt-4 pb-2 border-t border-white/[0.08] relative z-10 gap-2 xs:gap-0">
        <a 
          href="#about" 
          onClick={(e) => {
            e.preventDefault();
            playCyberClick();
            onExploreClick();
          }}
          className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors cursor-pointer"
        >
          <span className="tracking-[0.18em] font-semibold">EXPLORE THE HACKATHON</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#6575F5] animate-bounce" />
        </a>
        <div className="text-[10px] sm:text-xs text-[#6575F5] font-semibold tracking-widest uppercase text-center xs:text-right whitespace-nowrap">
          ANVYX '27 // OFFICIAL PORTAL
        </div>
      </div>
    </section>
  );
};
