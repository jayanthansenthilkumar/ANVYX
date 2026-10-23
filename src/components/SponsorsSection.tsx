import React from "react";
import { Handshake, ExternalLink, ArrowUpRight, ShieldCheck, Mail } from "lucide-react";
import { anvyx27Config } from "../config/anvyx27Data";
import { playCyberClick, playCyberHover } from "../utils/audio";

export const SponsorsSection: React.FC = () => {
  const sponsors = anvyx27Config.sponsors;

  return (
    <section id="sponsors" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 border-t border-white/10 bg-[#020205] relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/05 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-[#6575F5] bg-indigo-500/10 border border-indigo-500/25 mb-4">
              <Handshake className="w-3.5 h-3.5 text-[#6575F5]" />
              <span>08 / SPONSORS &amp; PARTNERS NETWORK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-display uppercase leading-tight">
              SPONSORS &amp; PARTNERS{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-400 bg-clip-text text-transparent">
                DOSSIER.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
            Empowered by visionary industry leaders, corporate R&amp;D accelerators, and certified IEEE technical societies.
          </p>
        </div>

        {/* Featured Co-Partner Spotlight: MSI */}
        <div className="mb-12 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#0D0F28] via-[#060716] to-[#0A0612] border border-red-500/20 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-red-600/20 transition-all duration-700" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-black/60 border border-white/10 p-4 flex items-center justify-center shrink-0 shadow-lg group-hover:border-red-500/40 transition-colors">
                <img 
                  src="/images/Shield with MSI/2019-msi-dragon-spirit-logo-digital_h_4c_w.png" 
                  alt="MSI Co-Partner" 
                  className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(255,0,0,0.5)]" 
                />
              </div>

              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[10px] font-mono text-red-400 bg-red-500/10 border border-red-500/30 uppercase font-bold">
                  OFFICIAL CO-PARTNER
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                  MSI (Micro-Star International)
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-xl">
                  Global pioneer in high-performance hardware, creator laptops, and AI compute accelerators. Providing exclusive dev kits, tournament gaming rigs, and special hardware laureates.
                </p>
              </div>
            </div>

            <a
              href="https://msi.com"
              target="_blank"
              rel="noreferrer"
              onClick={playCyberClick}
              onMouseEnter={playCyberHover}
              className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] shrink-0"
            >
              <span>EXPLORE MSI</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Other Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {sponsors.filter(s => s.name !== "MSI").map((sponsor) => (
            <div
              key={sponsor.name}
              onMouseEnter={playCyberHover}
              className="p-6 rounded-2xl bg-[#060716] border border-white/10 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between space-y-4 shadow-lg group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-4">
                  <span className="font-mono text-[10px] text-indigo-400 font-bold uppercase tracking-wider">
                    {sponsor.tier}
                  </span>
                  <span className="font-mono text-[9px] text-slate-500">
                    {sponsor.category}
                  </span>
                </div>

                <div className="h-16 flex items-center mb-4">
                  {sponsor.logoUrl ? (
                    <img 
                      src={sponsor.logoUrl} 
                      alt={sponsor.name} 
                      className="max-h-12 max-w-[160px] object-contain filter brightness-125" 
                    />
                  ) : (
                    <div className="font-display font-black text-2xl text-white tracking-wider">
                      {sponsor.logoText}
                    </div>
                  )}
                </div>

                <div className="space-y-1.5 pt-2">
                  {sponsor.perks.map((p, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-300 font-sans">
                      <span className="text-indigo-400 font-mono">›</span>
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noreferrer"
                  onClick={playCyberClick}
                  className="font-mono text-xs text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>Visit Partner</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-indigo-400" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Become a Partner Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-[#0B0B10] to-purple-950/40 border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display font-black text-xl text-white">
              BECOME A SPONSOR OR ECOSYSTEM ALLIANCE FOR ANVYX '27
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 font-sans">
              Connect your brand, APIs, and dev tools with 500+ top software and hardware engineers.
            </p>
          </div>

          <a
            href={`mailto:${anvyx27Config.coordinators.faculty[0].name.toLowerCase().replace(/[^a-z]/g, "")}@kpriet.ac.in`}
            onClick={playCyberClick}
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 shrink-0 transition-colors cursor-pointer"
          >
            <Mail className="w-4 h-4 text-indigo-400" />
            <span>REQUEST SPONSOR DOSSIER</span>
          </a>
        </div>

      </div>
    </section>
  );
};
