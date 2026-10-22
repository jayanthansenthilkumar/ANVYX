import React from "react";
import { 
  Sparkles, 
  Presentation, 
  Terminal, 
  Database, 
  BrainCircuit, 
  ArrowRight, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Award,
  Layers
} from "lucide-react";
import { eventDetails } from "../data/eventData";

interface HeroSectionProps {
  onOpenKeynote: () => void;
  onOpenPoster: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenKeynote, onOpenPoster }) => {
  return (
    <section id="overview" className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden border-b border-white/10">
      {/* Background Cyber Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-cyan-600/20 via-indigo-600/15 to-purple-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500/10 blur-[90px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Cyber Grid Lines overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-6">
          
          {/* Institution & Partner Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-white/10 text-xs text-slate-300 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              {eventDetails.college}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs text-cyan-300 font-mono">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              IBM Z Explore & AAROH
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/40 border border-indigo-500/30 text-xs text-indigo-300">
              Dept of CSBS
            </span>
          </div>

          {/* Main Title Badge */}
          <div className="space-y-3">
            <div className="inline-block">
              <h2 className="text-sm sm:text-base font-bold uppercase tracking-widest text-cyan-400">
                AI Chatbot Workshop & Build Challenge
              </h2>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none">
              ZENTRA <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">'26</span>
            </h1>

            <div className="pt-2">
              <p className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-200">
                "{eventDetails.tagline}"
              </p>
            </div>
          </div>

          {/* Subtitle Tailored for 1st-Year Students & Chief Guest Session */}
          <p className="max-w-3xl text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed">
            The complete keynote masterclass for 1st-year engineers. Learn how to architect real conversational chatbots from scratch, harness <span className="text-cyan-300 font-semibold">LLMs</span>, solve hallucinations with <span className="text-indigo-300 font-semibold">RAG</span>, and navigate the road to <span className="text-purple-300 font-semibold">AGI</span>.
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenKeynote}
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 flex items-center gap-3 transition cursor-pointer hover:scale-105 active:scale-95"
            >
              <Presentation className="w-5 h-5" />
              <span>Launch Keynote Slide Deck</span>
            </button>

            <a
              href="#simulator"
              className="px-6 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-100 font-semibold text-sm sm:text-base border border-cyan-500/30 hover:border-cyan-400 shadow-lg flex items-center gap-2.5 transition cursor-pointer"
            >
              <BrainCircuit className="w-5 h-5 text-cyan-400" />
              <span>Test Live RAG Simulator</span>
            </a>

            <a
              href="#how-to-build"
              className="px-5 py-3.5 rounded-2xl bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-sm sm:text-base border border-white/10 flex items-center gap-2 transition cursor-pointer"
            >
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>Starter Code</span>
            </a>
          </div>

          {/* Event Quick Intel Bar */}
          <div className="w-full max-w-4xl mt-8 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="p-4 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase">
                <Calendar className="w-4 h-4" />
                <span>Date & Time</span>
              </div>
              <p className="text-sm font-bold text-white mt-1">{eventDetails.date}</p>
              <p className="text-xs text-slate-400 font-mono">{eventDetails.time}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase">
                <MapPin className="w-4 h-4" />
                <span>Venue</span>
              </div>
              <p className="text-sm font-bold text-white mt-1">{eventDetails.venue}</p>
              <p className="text-xs text-slate-400">MKCE Campus, Karur</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-purple-400 text-xs font-semibold uppercase">
                <Layers className="w-4 h-4" />
                <span>Event Format</span>
              </div>
              <p className="text-sm font-bold text-white mt-1">Workshop + Challenge</p>
              <p className="text-xs text-slate-400">Hands-on Team Hackathon</p>
            </div>

            <div 
              onClick={onOpenPoster}
              className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/20 hover:border-cyan-400/50 backdrop-blur-sm transition cursor-pointer group"
            >
              <div className="flex items-center justify-between text-cyan-300 text-xs font-semibold uppercase">
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-400" />
                  Official Poster
                </span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition text-cyan-400" />
              </div>
              <p className="text-sm font-bold text-white mt-1">View ZENTRA '26</p>
              <p className="text-xs text-cyan-400/80">Click to view full flyer</p>
            </div>
          </div>

          {/* Speakers / Resource Persons Intro */}
          <div className="w-full max-w-4xl p-5 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-slate-900/90 border border-white/10 text-left flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Distinguished Resource Persons</span>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-semibold text-white mt-0.5">
                  <span className="text-cyan-300">{eventDetails.resourcePersons[0].name} (System Engineer, TCS)</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-indigo-300">{eventDetails.resourcePersons[1].name} (Associate Engineer, CTS)</span>
                </div>
              </div>
            </div>
            <button
              onClick={onOpenPoster}
              className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 border border-white/10 transition cursor-pointer shrink-0"
            >
              View Speaker Bio & Itinerary
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
