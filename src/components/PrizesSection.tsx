import React from "react";
import { anvyxConfig } from "../config/anvyxConfig";
import { Trophy, Award, Medal, Sparkles, CheckCircle2, ShieldAlert, Cpu, Layers } from "lucide-react";

interface PrizesSectionProps {
  onRegisterClick: () => void;
}

const TIER_ICONS = [
  <Trophy className="w-8 h-8 text-[#58E6FF]" />,
  <Award className="w-8 h-8 text-[#9878FF]" />,
  <Medal className="w-8 h-8 text-[#F4F6FF]" />
];

export const PrizesSection: React.FC<PrizesSectionProps> = ({ onRegisterClick }) => {
  const prizes = anvyxConfig.prizes;

  return (
    <section id="prizes" className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#080A12] overflow-hidden">
      {/* Background ambient light */}
      <div 
        className="absolute top-1/4 -right-20 w-[550px] h-[550px] pointer-events-none opacity-20 blur-[140px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(152, 120, 255, 0.4) 0%, rgba(88, 230, 255, 0.1) 70%, transparent 100%)"
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-[#58E6FF] bg-[#58E6FF]/10 border border-[#58E6FF]/25 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Section 05 // Honors & Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F4F6FF] font-['Space_Grotesk'] mb-6">
            Sculpted for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#58E6FF] via-[#9878FF] to-white">
              Exceptional Engineering.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#9BA8C7] font-['Inter'] leading-relaxed">
            ANVYX recognizes prototypes that transcend the ordinary. Beyond trophies, builders gain venture incubation, enterprise compute allocations, and direct partner access.
          </p>
        </div>

        {/* 3 Main Tier Cards (Podium Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-stretch">
          {prizes.map((prize, idx) => {
            const isGrand = idx === 0;

            return (
              <div
                key={prize.rank}
                className={`group relative rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isGrand
                    ? "bg-gradient-to-b from-[#10162A] to-[#080A12] border-2 border-[#58E6FF]/50 shadow-[0_0_40px_rgba(88,230,255,0.18)] md:-translate-y-4"
                    : "bg-gradient-to-b from-[#10162A]/60 to-[#080A12]/80 border border-white/10 hover:border-white/20 hover:shadow-[0_0_30px_rgba(152,120,255,0.1)]"
                }`}
              >
                {/* Luminous Top Accent Glow */}
                <div 
                  className="absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${prize.accent}, transparent)`,
                    opacity: isGrand ? 1 : 0.6
                  }}
                />

                <div>
                  {/* Top Badge & Rank */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider"
                      style={{
                        backgroundColor: `${prize.accent}15`,
                        color: prize.accent,
                        border: `1px solid ${prize.accent}40`
                      }}
                    >
                      {prize.tier}
                    </span>
                    <span className="font-mono text-3xl font-bold opacity-30 text-white">
                      #{prize.rank}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                      {TIER_ICONS[idx]}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#F4F6FF] font-['Space_Grotesk'] mb-2">
                      {prize.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#9BA8C7] font-['Inter'] leading-relaxed">
                      {prize.highlight}
                    </p>
                  </div>

                  {/* Perks List */}
                  <div className="space-y-3 pt-4 border-t border-white/10 mb-8">
                    <div className="text-[11px] font-mono text-[#58E6FF] uppercase tracking-wider">
                      Included Distinctions
                    </div>
                    {prize.perks.map((perk, perkIdx) => (
                      <div key={perkIdx} className="flex items-start gap-2.5 text-xs text-[#F4F6FF]/85 font-['Inter']">
                        <CheckCircle2 className="w-4 h-4 text-[#58E6FF] shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Status / Configurable Badge */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#9BA8C7] flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-[#58E6FF]" />
                    Official Laureate
                  </span>
                  <span className="text-white/60">Edition ’27</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Configurable Distinctions: Special Recognition & Certificates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Special Track Honors */}
          <div className="rounded-xl p-6 border border-white/10 bg-[#10162A]/40 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#9878FF]/10 border border-[#9878FF]/30 flex items-center justify-center shrink-0">
                <Layers className="w-6 h-6 text-[#9878FF]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-bold text-[#F4F6FF] font-['Space_Grotesk']">
                    Special Category Citations
                  </h4>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-white/80">
                    Provisional
                  </span>
                </div>
                <p className="text-xs text-[#9BA8C7] font-['Inter'] mt-1">
                  Targeted awards for Best AI Synthesis, Cleanest Architecture, and Audience Choice.
                </p>
              </div>
            </div>
            <div className="shrink-0 text-right">
              <span className="inline-block px-3 py-1 rounded-md text-xs font-mono text-[#9878FF] bg-[#9878FF]/15 border border-[#9878FF]/30">
                To Be Revealed
              </span>
            </div>
          </div>

          {/* Builder Proof & Participation Certificates */}
          <div className="rounded-xl p-6 border border-white/10 bg-[#10162A]/40 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#58E6FF]/10 border border-[#58E6FF]/30 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-[#58E6FF]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-bold text-[#F4F6FF] font-['Space_Grotesk']">
                    Cryptographic Proof of Participation
                  </h4>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#58E6FF]/10 text-[#58E6FF]">
                    All Verified Submissions
                  </span>
                </div>
                <p className="text-xs text-[#9BA8C7] font-['Inter'] mt-1">
                  Every squad that successfully commits and presents receives a verified ANVYX digital credential.
                </p>
              </div>
            </div>
            <div className="shrink-0 text-right">
              <button
                onClick={onRegisterClick}
                className="px-4 py-2 rounded-lg text-xs font-mono font-medium text-[#58E6FF] border border-[#58E6FF]/40 hover:bg-[#58E6FF]/10 transition-colors cursor-pointer"
              >
                Claim Builder Pass →
              </button>
            </div>
          </div>
        </div>

        {/* Responsible Disclosure Note */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs font-mono text-[#9BA8C7]/70 text-center">
          <ShieldAlert className="w-3.5 h-3.5 text-[#9BA8C7]" />
          <span>Notice: Specific monetary allocations and partner grants will be officially certified at opening ceremonies.</span>
        </div>
      </div>
    </section>
  );
};
