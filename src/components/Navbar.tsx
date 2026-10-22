import React, { useState } from "react";
import { 
  Bot, 
  Presentation, 
  FileText, 
  Image as ImageIcon, 
  Sparkles, 
  Menu, 
  X, 
  GraduationCap
} from "lucide-react";

interface NavbarProps {
  onOpenKeynote: () => void;
  onOpenSpeechNotes: () => void;
  onOpenPoster: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenKeynote,
  onOpenSpeechNotes,
  onOpenPoster,
  activeSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "How to Build", href: "#how-to-build" },
    { label: "RAG Pipeline", href: "#rag-concept" },
    { label: "LLM Demystified", href: "#llm-concept" },
    { label: "AGI Horizon", href: "#agi-concept" },
    { label: "CSBS Use Cases", href: "#use-cases" },
    { label: "Simulator", href: "#simulator" },
    { label: "Quiz", href: "#quiz" },
    { label: "4-Yr Roadmap", href: "#roadmap" }
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      {/* College & Department Top Ribbon */}
      <div className="bg-gradient-to-r from-cyan-950/80 via-slate-900 to-indigo-950/80 border-b border-white/5 px-4 py-1.5 text-xs text-slate-300 flex items-center justify-between">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />
          <span className="font-medium text-white">M. Kumarasamy College of Engineering</span>
          <span className="hidden md:inline text-slate-500">•</span>
          <span className="hidden md:inline text-cyan-300">Dept of CSBS & AIML</span>
        </div>
        <div className="flex items-center gap-3 text-[11px] shrink-0">
          <span className="bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full border border-cyan-500/30 font-mono">
            Oct 23, 2026
          </span>
          <span className="hidden sm:inline text-slate-400">Sir C V Raman Hall</span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#overview" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Bot className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold tracking-tight text-white">
                ZENTRA <span className="text-cyan-400">'26</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Keynote Hub
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono hidden sm:block">AI Chatbot Workshop & Build Challenge</p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeSection === link.href.slice(1)
                  ? "text-cyan-400 bg-cyan-500/10 border border-cyan-500/20"
                  : "hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls: Keynote Presenter Mode & Speaker Notes */}
        <div className="flex items-center gap-2">
          {/* Keynote Presentation Button */}
          <button
            onClick={onOpenKeynote}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-cyan-500/25 transition cursor-pointer hover:scale-105 active:scale-95"
            title="Launch Fullscreen Keynote Slides for Sir C V Raman Hall Projector"
          >
            <Presentation className="w-4 h-4" />
            <span className="hidden sm:inline">Keynote Slides</span>
            <span className="sm:hidden">Keynote</span>
          </button>

          {/* Speaker Notes */}
          <button
            onClick={onOpenSpeechNotes}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-white/10 text-xs sm:text-sm font-medium transition cursor-pointer hover:border-cyan-500/40"
            title="Open Chief Guest Speech Script & Talking Points"
          >
            <FileText className="w-4 h-4 text-amber-400" />
            <span className="hidden md:inline">Speech Notes</span>
          </button>

          {/* Poster Modal */}
          <button
            onClick={onOpenPoster}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-white/10 transition cursor-pointer hover:text-white"
            title="View Event Poster & Schedule"
          >
            <ImageIcon className="w-4 h-4" />
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white xl:hidden border border-white/10"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-950/95 border-b border-white/10 px-4 py-4 space-y-2 backdrop-blur-2xl">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-white/5 hover:text-cyan-400 transition"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenKeynote();
              }}
              className="w-full py-2.5 rounded-xl bg-cyan-600 text-white font-medium text-sm flex items-center justify-center gap-2"
            >
              <Presentation className="w-4 h-4" />
              Launch Keynote Presentation Mode
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSpeechNotes();
              }}
              className="w-full py-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-200 font-medium text-sm flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              Open Speaker Speech Script
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
