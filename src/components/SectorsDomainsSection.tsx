import React, { useState } from "react";
import { Bot, ShieldCheck, HeartPulse, Leaf, Factory, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { anvyx27Config, DomainTrack } from "../config/anvyx27Data";
import { playCyberClick, playCyberHover } from "../utils/audio";

interface SectorsDomainsSectionProps {
  onSelectTrack: (trackId: string) => void;
}

export const SectorsDomainsSection: React.FC<SectorsDomainsSectionProps> = ({ onSelectTrack }) => {
  const [selectedDomain, setSelectedDomain] = useState<DomainTrack | null>(null);

  const getDomainIcon = (id: string) => {
    switch (id) {
      case "ai-smart-solutions":
        return <Bot className="w-6 h-6 text-[#6575F5]" />;
      case "cyber-defense-security":
        return <ShieldCheck className="w-6 h-6 text-[#FF405F]" />;
      case "health-wellness-tech":
        return <HeartPulse className="w-6 h-6 text-[#55E5D2]" />;
      case "green-sustainable-tech":
        return <Leaf className="w-6 h-6 text-[#55E5D2]" />;
      case "industry-automation":
        return <Factory className="w-6 h-6 text-[#8B70E8]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#FF405F]" />;
    }
  };

  return (
    <section id="sectors" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 border-t border-white/10 bg-[#020205] relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#6575F5]/05 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/25 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <span>03 / CITY SECTORS PROTOCOL</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-display uppercase leading-tight">
              NEURAL DOMAINS &amp;{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-400 bg-clip-text text-transparent">
                PROBLEM SECTORS.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
            Choose from 6 specialized technology vectors. Bring your boldest thesis and build working code evaluated by top industry architects.
          </p>
        </div>

        {/* 6 Sector Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {anvyx27Config.domains.map((domain, index) => (
            <div
              key={domain.id}
              onMouseEnter={playCyberHover}
              className="p-6 sm:p-8 rounded-2xl bg-[#060716] border border-white/10 hover:border-[#6575F5]/50 transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden group shadow-lg"
            >
              {/* Subtle top light rim */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#6575F5] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="space-y-4">
                {/* Header: Icon & Sector Code */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#030409] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getDomainIcon(domain.id)}
                  </div>
                  <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">
                    SECTOR // 0{index + 1}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight leading-snug uppercase mb-1">
                    {domain.name}
                  </h3>
                  <p className="font-mono text-[10px] sm:text-[11px] text-[#55E5D2] uppercase tracking-wider font-semibold">
                    {domain.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed font-sans">
                  {domain.description}
                </p>

                {/* Sample problem prompts */}
                <div className="pt-2 border-t border-white/5 space-y-1.5">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500 block">
                    SAMPLE CHALLENGE VECTORS:
                  </span>
                  {domain.prompts.slice(0, 2).map((prompt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-1.5 text-[11px] text-slate-300 font-sans">
                      <span className="text-[#6575F5] font-mono">›</span>
                      <span>{prompt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Tags & Select CTA */}
              <div className="pt-4 border-t border-white/5 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {domain.tags.slice(0, 3).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[9.5px] font-mono bg-white/[0.04] text-slate-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => {
                    playCyberClick();
                    onSelectTrack(domain.id);
                  }}
                  className="w-full py-2.5 rounded-xl border border-white/10 hover:border-[#6575F5]/60 hover:bg-[#6575F5]/10 text-slate-200 hover:text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer group/btn"
                >
                  <span>SELECT THIS DOMAIN</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#6575F5] group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
