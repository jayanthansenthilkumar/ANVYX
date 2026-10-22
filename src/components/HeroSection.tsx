import React from "react";
import { 
  Presentation, 
  Terminal, 
  BrainCircuit, 
  ArrowRight, 
  Calendar, 
  MapPin, 
  Award, 
  Layers, 
  Sparkles 
} from "lucide-react";
import { eventDetails } from "../data/eventData";

interface HeroSectionProps {
  onOpenKeynote: () => void;
  onOpenPoster: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenKeynote, onOpenPoster }) => {
  return (
    <section id="overview" className="relative pt-10 pb-16 md:pt-16 md:pb-24 brutal-border-b bg-[#F4F2EB] brutal-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Identification Badge Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 brutal-border-b text-xs font-mono">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-[#111111] text-[#C8FF00] px-2.5 py-0.5 font-bold uppercase">
              {eventDetails.college}
            </span>
            <span className="bg-[#FFFFFF] text-[#111111] px-2.5 py-0.5 brutal-border-thin font-bold">
              DEPT OF CSBS × AIML
            </span>
            <span className="bg-[#C8FF00] text-[#111111] px-2.5 py-0.5 brutal-border-thin font-bold hidden sm:inline">
              IBM Z EXPLORE & AAROH
            </span>
          </div>

          <div className="flex items-center gap-2 text-[#555555]">
            <span className="w-2 h-2 bg-[#FF3E00] inline-block animate-ping"></span>
            <span className="font-bold text-[#111111]">OCT 23, 2026 // KARUR</span>
          </div>
        </div>

        {/* Main Brutalist Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Big Typography & Manifestos (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block bg-[#111111] text-[#FFFFFF] text-xs font-mono font-bold px-3 py-1 uppercase tracking-wider">
              KEYNOTE & WORKSHOP PLATFORM // 1ST-YEAR ENGINEERING
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-black tracking-tighter text-[#111111] leading-[0.9]">
              ZENTRA<br />
              <span className="bg-[#C8FF00] text-[#111111] px-2 inline-block brutal-border mt-1">
                ’26
              </span>
            </h1>

            <div className="p-4 bg-[#FFFFFF] brutal-border brutal-shadow space-y-2 max-w-xl">
              <span className="text-[11px] font-mono uppercase text-[#555555] font-bold block">
                // OFFICIAL EVENT CREED
              </span>
              <p className="text-2xl sm:text-3xl font-display font-black uppercase text-[#111111] tracking-tight leading-tight">
                "{eventDetails.tagline}"
              </p>
            </div>

            <p className="text-base sm:text-lg text-[#333333] font-medium leading-relaxed max-w-2xl">
              The definitive Chief Guest masterclass for 1st-year CSBS engineers. Learn how to architect real conversational chatbots from zero, harness <strong className="text-[#111111] bg-[#C8FF00] px-1">Large Language Models (LLMs)</strong>, eradicate hallucinations with <strong className="text-[#111111] bg-[#FFFFFF] px-1 brutal-border-thin">Retrieval-Augmented Generation (RAG)</strong>, and prepare for the coming of <strong className="text-[#111111] underline decoration-[#0038FF] decoration-2">AGI</strong>.
            </p>

            {/* Brutalist Call to Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenKeynote}
                className="brutal-btn brutal-btn-primary px-6 py-4 text-sm sm:text-base flex items-center gap-3"
              >
                <Presentation className="w-5 h-5" />
                <span>LAUNCH KEYNOTE SLIDES</span>
              </button>

              <a
                href="#simulator"
                className="brutal-btn brutal-btn-white px-5 py-4 text-sm sm:text-base flex items-center gap-2.5"
              >
                <BrainCircuit className="w-5 h-5 text-[#0038FF]" />
                <span>TEST RAG SIMULATOR</span>
              </a>

              <a
                href="#how-to-build"
                className="brutal-btn brutal-btn-dark px-4 py-4 text-sm sm:text-base flex items-center gap-2"
              >
                <Terminal className="w-5 h-5 text-[#C8FF00]" />
                <span className="hidden sm:inline">STARTER CODE</span>
              </a>
            </div>
          </div>

          {/* Right Column: Event Info Poster & Resource Persons (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Poster Preview Panel */}
            <div 
              onClick={onOpenPoster}
              className="bg-[#FFFFFF] brutal-border brutal-shadow-lg p-3 group cursor-pointer hover:translate-x-[-2px] hover:translate-y-[-2px] transition"
            >
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#000000] text-xs font-mono">
                <span className="font-bold flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#FF3E00]" />
                  OFFICIAL EVENT POSTER
                </span>
                <span className="text-[#0038FF] font-bold group-hover:underline flex items-center gap-1">
                  VIEW FULL <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
              
              <div className="relative aspect-[4/3] bg-[#E8E5DC] brutal-border-thin overflow-hidden flex items-center justify-center">
                <img 
                  src="/poster.png" 
                  alt="ZENTRA '26 Poster - MKCE Dept of CSBS"
                  className="w-full h-full object-cover object-top" 
                />
                <div className="absolute inset-0 bg-[#000000]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-[#111111] text-[#C8FF00] font-mono text-xs font-bold px-3 py-1.5 brutal-border">
                    CLICK TO ENLARGE
                  </span>
                </div>
              </div>
            </div>

            {/* Resource Persons Card */}
            <div className="bg-[#FFFFFF] brutal-border brutal-shadow p-5 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-[#555555] border-b border-[#000000] pb-2">
                <span>DISTINGUISHED RESOURCE PERSONS</span>
                <span className="bg-[#C8FF00] text-[#111111] px-1.5 py-0.5">ALUMNI AIML</span>
              </div>

              <div className="space-y-3">
                <div className="p-2.5 bg-[#F4F2EB] brutal-border-thin flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-bold text-sm text-[#111111]">
                      {eventDetails.resourcePersons[0].name}
                    </h4>
                    <p className="text-xs font-mono text-[#555555]">
                      {eventDetails.resourcePersons[0].role} at {eventDetails.resourcePersons[0].company}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-[#111111] text-[#FFFFFF] px-1.5 py-0.5">
                    TCS
                  </span>
                </div>

                <div className="p-2.5 bg-[#F4F2EB] brutal-border-thin flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-bold text-sm text-[#111111]">
                      {eventDetails.resourcePersons[1].name}
                    </h4>
                    <p className="text-xs font-mono text-[#555555]">
                      {eventDetails.resourcePersons[1].role} at {eventDetails.resourcePersons[1].company}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-[#0038FF] text-[#FFFFFF] px-1.5 py-0.5">
                    CTS
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Brutalist Key Metric / Logistical Panels */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
          <div className="bg-[#FFFFFF] p-4 brutal-border brutal-shadow-sm space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#555555] uppercase">
              <Calendar className="w-3.5 h-3.5 text-[#111111]" />
              DATE
            </div>
            <p className="font-display font-bold text-base text-[#111111]">{eventDetails.date}</p>
            <p className="text-[11px] font-mono text-[#555555]">{eventDetails.time}</p>
          </div>

          <div className="bg-[#FFFFFF] p-4 brutal-border brutal-shadow-sm space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#555555] uppercase">
              <MapPin className="w-3.5 h-3.5 text-[#0038FF]" />
              VENUE
            </div>
            <p className="font-display font-bold text-base text-[#111111]">{eventDetails.venue}</p>
            <p className="text-[11px] font-mono text-[#555555]">MKCE Campus, Karur</p>
          </div>

          <div className="bg-[#FFFFFF] p-4 brutal-border brutal-shadow-sm space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#555555] uppercase">
              <Layers className="w-3.5 h-3.5 text-[#FF3E00]" />
              FORMAT
            </div>
            <p className="font-display font-bold text-base text-[#111111]">Keynote + Hackathon</p>
            <p className="text-[11px] font-mono text-[#555555]">Hands-On Build Challenge</p>
          </div>

          <div className="bg-[#C8FF00] p-4 brutal-border brutal-shadow-sm space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#111111] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#111111]" />
              COORDINATOR
            </div>
            <p className="font-display font-bold text-base text-[#111111]">
              {eventDetails.studentCoordinator.name}
            </p>
            <p className="text-[11px] font-mono text-[#111111] font-bold">
              {eventDetails.studentCoordinator.phone}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
