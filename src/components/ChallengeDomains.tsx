import React, { useState } from "react";
import { 
  Bot, 
  Globe, 
  ShieldCheck, 
  Terminal, 
  Leaf, 
  Compass, 
  ArrowUpRight,
  Sparkles
} from "lucide-react";
import { anvyxConfig } from "../config/anvyxConfig";

interface ChallengeDomainsProps {
  onSelectTrack?: () => void;
}

export const ChallengeDomains: React.FC<ChallengeDomainsProps> = ({ onSelectTrack }) => {
  const [hoveredDomain, setHoveredDomain] = useState<string | null>(null);

  const getDomainIcon = (id: string) => {
    switch (id) {
      case "ai": return <Bot className="w-6 h-6 text-[#58E6FF]" />;
      case "web-mobile": return <Globe className="w-6 h-6 text-[#9878FF]" />;
      case "cybersecurity": return <ShieldCheck className="w-6 h-6 text-[#58E6FF]" />;
      case "dev-tools": return <Terminal className="w-6 h-6 text-[#F4F6FF]" />;
      case "sustainability": return <Leaf className="w-6 h-6 text-[#58E6FF]" />;
      case "open-innovation": return <Compass className="w-6 h-6 text-[#9878FF]" />;
      default: return <Sparkles className="w-6 h-6 text-[#58E6FF]" />;
    }
  };

  return (
    <section id="challenges" className="py-24 md:py-36 relative px-4 sm:px-6 lg:px-8 border-t border-[#F4F6FF]/5 bg-[#080A12]">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full radial-lighting-cyan pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-surface text-xs font-mono text-[#58E6FF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CHOOSE YOUR DIMENSION</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-[#F4F6FF] tracking-tight leading-[1.1]">
            SIX DOMAINS.<br />
            <span className="text-gradient-cyan">ONE ARENA.</span>
          </h2>
          <p className="text-[#9BA8C7] text-base sm:text-lg">
            Pick your technological battleground. Each track provides architectural leeway to build transformative, deployable software.
          </p>
        </div>

        {/* 6 Challenge Dimension Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {anvyxConfig.challengeDomains.map((domain) => {
            const isHovered = hoveredDomain === domain.id;
            return (
              <div
                key={domain.id}
                onClick={onSelectTrack}
                onMouseEnter={() => setHoveredDomain(domain.id)}
                onMouseLeave={() => setHoveredDomain(null)}
                className={`p-7 rounded-3xl transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden group cursor-pointer ${
                  isHovered
                    ? "glass-surface-glow scale-[1.02] border-[#58E6FF]/50 shadow-[0_15px_40px_-10px_rgba(88,230,255,0.25)]"
                    : "glass-surface hover:border-[#58E6FF]/25"
                }`}
              >
                {/* Subtle top rim light */}
                <div 
                  className="absolute top-0 left-0 right-0 h-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${domain.accentColor}, transparent)` }}
                />

                <div className="space-y-4">
                  {/* Top Glyph & Track Index */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#10162A] border border-[#F4F6FF]/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      {getDomainIcon(domain.id)}
                    </div>
                    <span className="font-mono text-xs text-[#9BA8C7]/60 uppercase">
                      DIMENSION // {domain.id.toUpperCase()}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F4F6FF] group-hover:text-[#58E6FF] transition-colors">
                      {domain.title}
                    </h3>
                    <p className="text-xs font-mono text-[#9BA8C7] mt-1">
                      {domain.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#9BA8C7] leading-relaxed">
                    {domain.description}
                  </p>

                  {/* Suggested Focus Areas */}
                  <div className="pt-2 border-t border-[#F4F6FF]/5 space-y-1.5">
                    <span className="text-[10px] font-mono uppercase text-[#58E6FF] font-semibold block">
                      SUGGESTED VECTORS:
                    </span>
                    <ul className="space-y-1 text-xs text-[#F4F6FF]/80">
                      {domain.suggestedFocus.map((f, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-[#58E6FF]" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tags Chips */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {domain.tags.map((t, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-[#10162A] text-[#9BA8C7] border border-[#F4F6FF]/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
