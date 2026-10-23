import React, { useState } from "react";
import { 
  ArrowRight, 
  Maximize2, 
  Bot, 
  ShieldCheck, 
  HeartPulse, 
  Leaf, 
  Factory, 
  Sparkles,
  ExternalLink,
  Radio,
  CheckCircle2,
  Terminal
} from "lucide-react";
import { anvyx27Config, DomainTrack } from "../config/anvyx27Data";
import { playCyberClick, playCyberHover } from "../utils/audio";
import { CyberDomain3DMap } from "./CyberDomain3DMap";

interface SectorsDomainsSectionProps {
  onSelectTrack: (trackId: string) => void;
  onOpenFullscreenMap?: () => void;
}

export const SectorsDomainsSection: React.FC<SectorsDomainsSectionProps> = ({ 
  onSelectTrack,
  onOpenFullscreenMap 
}) => {
  const [selectedDomain, setSelectedDomain] = useState<DomainTrack | null>(null);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);

  const handleSectorClick = (sector: DomainTrack) => {
    setSelectedDomain(sector);
  };

  const handleResetSector = () => {
    setSelectedDomain(null);
  };

  const handleOpenFullscreen = () => {
    if (onOpenFullscreenMap) {
      onOpenFullscreenMap();
    } else {
      setIsFullscreenOpen(true);
    }
  };

  return (
    <section id="sectors" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-[#020205] relative overflow-hidden select-none">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-[#6575F5]/05 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-8">
        
        {/* DOMAINS HEADER BAR (EXACT MATCH WITH HACKITON / MAP SCREENSHOT) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#050610] border border-white/10 relative overflow-hidden">
          {/* Subtle top laser glow */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#6575F5] to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Title & Subtitle */}
            <div className="lg:col-span-5 space-y-3">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#6575F5] tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6575F5] animate-pulse" />
                <span>02 / DOMAINS</span>
              </div>
              
              <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase leading-[1.05]">
                ANVYX <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6575F5] via-[#8B70E8] to-[#FF405F]">
                  DOMAINS &amp; TRACKS
                </span>
              </h2>

              <p className="text-gray-400 text-xs sm:text-sm font-sans">
                Six challenge sectors. One world to explore.
              </p>
            </div>

            {/* Middle/Right Column: 6 Track Matrix Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8 font-mono text-xs sm:text-[13px]">
              {anvyx27Config.domains.map((track, idx) => {
                const isSelected = selectedDomain?.id === track.id;
                return (
                  <button
                    key={track.id}
                    onClick={() => {
                      playCyberClick();
                      setSelectedDomain(track);
                    }}
                    onMouseEnter={playCyberHover}
                    className={`flex items-center gap-3 text-left py-1.5 px-2 rounded-lg transition-all cursor-pointer group ${
                      isSelected 
                        ? "bg-[#6575F5]/20 text-white font-bold border border-[#6575F5]/50 shadow-[0_0_15px_rgba(101,117,245,0.3)]" 
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span className="text-[11px] font-bold text-gray-500 group-hover:text-[#55E5D2] transition-colors">
                      0{idx + 1}
                    </span>
                    <span className="font-bold tracking-wide uppercase truncate">
                      {track.name}
                    </span>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Bottom Controls Bar */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-2 text-gray-400">
              <span className="w-2 h-2 rounded-full bg-[#55E5D2] animate-ping" />
              <span className="font-bold text-gray-300 uppercase tracking-wider">06 SECTORS</span>
              <span>•</span>
              <span className="text-[#55E5D2] font-bold tracking-wider">LIVE SIMULATION</span>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  playCyberClick();
                  handleOpenFullscreen();
                }}
                onMouseEnter={playCyberHover}
                className="px-4 py-2 rounded-xl bg-[#090C1F] hover:bg-[#6575F5]/20 border border-[rgba(101,117,245,0.4)] hover:border-[#6575F5] text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(101,117,245,0.2)] cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#55E5D2]" />
                <span>FULLSCREEN MAP</span>
              </button>

              <button
                onClick={() => {
                  playCyberClick();
                  if (selectedDomain) {
                    onSelectTrack(selectedDomain.id);
                  } else {
                    onSelectTrack(anvyx27Config.domains[0].id);
                  }
                }}
                onMouseEnter={playCyberHover}
                className="text-[#FF405F] hover:text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer group"
              >
                <span>ENTER THE GRID</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3D INTERACTIVE DOMAIN MAP (EXACT THREE.JS GLTF CAMPUS MODEL) */}
        <div className="relative w-full h-[540px] sm:h-[640px] rounded-2xl overflow-hidden border border-[rgba(100,110,160,0.25)] shadow-[0_0_50px_rgba(0,0,0,0.9)]">
          <CyberDomain3DMap
            selectedSector={selectedDomain}
            onSelectSector={handleSectorClick}
            onResetView={handleResetSector}
            isFullScreen={false}
            onToggleFullScreen={handleOpenFullscreen}
            onRegisterClick={(id) => onSelectTrack(id)}
          />
        </div>

        {/* 6 SECTOR DETAILS CARDS ACCORDION/GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {anvyx27Config.domains.map((domain) => {
            const isSelected = selectedDomain?.id === domain.id;
            return (
              <div
                key={domain.id}
                onClick={() => {
                  playCyberClick();
                  setSelectedDomain(domain);
                }}
                onMouseEnter={playCyberHover}
                className={`p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between space-y-5 cursor-pointer relative overflow-hidden group shadow-lg ${
                  isSelected 
                    ? "bg-[#0A0D22] border-2 border-[#55E5D2] shadow-[0_0_30px_rgba(85,229,210,0.2)]" 
                    : "bg-[#060716] border border-white/10 hover:border-[#6575F5]/50"
                }`}
              >
                {/* Header: Icon & Sector Code */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[11px] font-bold text-[#55E5D2] px-2.5 py-0.5 rounded bg-[#55E5D2]/10 border border-[#55E5D2]/30">
                      {domain.sectorCode} • {domain.cityCode}
                    </span>
                    <span className="font-mono text-[10px] text-gray-500 uppercase">
                      24H CAPACITY: 25 TEAMS
                    </span>
                  </div>

                  <h3 className="font-display font-black text-xl text-white uppercase tracking-tight mb-1 group-hover:text-[#55E5D2] transition-colors">
                    {domain.name}
                  </h3>

                  <p className="font-mono text-[10px] text-gray-400 uppercase tracking-wider mb-3">
                    {domain.tagline}
                  </p>

                  <p className="text-xs text-gray-300 leading-relaxed font-sans line-clamp-3">
                    {domain.description}
                  </p>
                </div>

                {/* Bottom: Tags & Register CTA */}
                <div className="pt-3 border-t border-white/5 space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {domain.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[9.5px] font-mono bg-white/[0.04] text-gray-400 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      playCyberClick();
                      onSelectTrack(domain.id);
                    }}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#6575F5]/20 to-[#8B70E8]/20 hover:from-[#6575F5] hover:to-[#8B70E8] border border-[#6575F5]/40 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>INITIALIZE IN {domain.cityCode}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* MODAL FULLSCREEN 3D MAP */}
      {isFullscreenOpen && (
        <CyberDomain3DMap
          selectedSector={selectedDomain}
          onSelectSector={handleSectorClick}
          onResetView={handleResetSector}
          isFullScreen={true}
          onCloseFullScreen={() => setIsFullscreenOpen(false)}
          onRegisterClick={(id) => {
            setIsFullscreenOpen(false);
            onSelectTrack(id);
          }}
        />
      )}
    </section>
  );
};
