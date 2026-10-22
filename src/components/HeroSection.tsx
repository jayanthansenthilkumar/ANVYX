import React from "react";
import { 
  ArrowRight, 
  Sparkles, 
  Clock, 
  MapPin, 
  Calendar,
  Layers,
  ChevronDown
} from "lucide-react";
import { anvyxConfig } from "../config/anvyxConfig";
import { ThreeDimensionalHero } from "./ThreeDimensionalHero";

interface HeroSectionProps {
  onRegisterClick: () => void;
  onDiscoverClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onRegisterClick, 
  onDiscoverClick 
}) => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#080A12] spatial-grid">
      
      {/* 3D Background Interactive Canvas */}
      <ThreeDimensionalHero />

      {/* Atmospheric Ambient Lighting Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full radial-lighting-cyan pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full radial-lighting-violet pointer-events-none -z-10" />

      {/* Hero Content Layer */}
      <div className="max-w-6xl mx-auto w-full my-auto z-10 text-center flex flex-col items-center space-y-8 select-none">
        
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-surface text-xs font-mono text-[#9BA8C7] border border-[#58E6FF]/25 shadow-[0_0_20px_-5px_rgba(88,230,255,0.2)] animate-in fade-in slide-in-from-top-4 duration-700">
          <span className="w-2 h-2 rounded-full bg-[#58E6FF] animate-pulse" />
          <span className="text-[#F4F6FF] font-medium tracking-wide">
            {anvyxConfig.durationHours}-HOUR CREATIVE SPRINT
          </span>
          <span className="text-[#9BA8C7]/40">•</span>
          <span className="text-[#58E6FF]">{anvyxConfig.dates.status}</span>
        </div>

        {/* Cinematic Headline */}
        <div className="space-y-3">
          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#F4F6FF] leading-[1.05]">
            EIGHT HOURS.<br />
            <span className="text-gradient-aurora">INFINITE POSSIBILITIES.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-[#9BA8C7] text-base sm:text-lg md:text-xl font-normal leading-relaxed pt-2">
            {anvyxConfig.supportingText}
          </p>
        </div>

        {/* Primary and Secondary Call to Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={onRegisterClick}
            className="group px-8 py-4 rounded-xl font-display font-bold text-sm sm:text-base text-[#080A12] bg-[#58E6FF] hover:bg-[#F4F6FF] transition-all duration-300 shadow-[0_0_30px_-5px_rgba(88,230,255,0.5)] hover:shadow-[0_0_40px_0px_rgba(88,230,255,0.7)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center gap-2.5"
          >
            <span>ENTER THE HACKATHON</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>

          <button
            onClick={onDiscoverClick}
            className="px-7 py-4 rounded-xl font-display font-medium text-sm sm:text-base text-[#F4F6FF] glass-surface hover:bg-[#10162A]/90 hover:border-[#58E6FF]/40 transition-all duration-300 cursor-pointer"
          >
            DISCOVER ANVYX
          </button>
        </div>

        {/* Event Quick Intel Ribbon */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-3xl pt-8">
          <div className="p-3.5 rounded-xl glass-surface flex items-center gap-3 text-left">
            <div className="w-9 h-9 rounded-lg bg-[#58E6FF]/10 text-[#58E6FF] flex items-center justify-center shrink-0 border border-[#58E6FF]/20">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-[#9BA8C7] block">TIMELINE</span>
              <span className="text-xs font-semibold text-[#F4F6FF]">{anvyxConfig.dates.display}</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl glass-surface flex items-center gap-3 text-left">
            <div className="w-9 h-9 rounded-lg bg-[#9878FF]/10 text-[#9878FF] flex items-center justify-center shrink-0 border border-[#9878FF]/20">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-[#9BA8C7] block">DURATION</span>
              <span className="text-xs font-semibold text-[#F4F6FF]">8 Continuous Hours</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl glass-surface flex items-center gap-3 text-left">
            <div className="w-9 h-9 rounded-lg bg-[#58E6FF]/10 text-[#58E6FF] flex items-center justify-center shrink-0 border border-[#58E6FF]/20">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="truncate">
              <span className="text-[10px] font-mono uppercase text-[#9BA8C7] block">FORMAT & VENUE</span>
              <span className="text-xs font-semibold text-[#F4F6FF] truncate block">{anvyxConfig.dates.format}</span>
            </div>
          </div>
        </div>

      </div>

      {/* Subtle Scroll Indicator */}
      <div className="z-10 flex flex-col items-center justify-center text-[#9BA8C7]/60 text-xs font-mono pt-4 animate-bounce">
        <span>SCROLL TO EXPLORE</span>
        <ChevronDown className="w-4 h-4 text-[#58E6FF]" />
      </div>

    </section>
  );
};
