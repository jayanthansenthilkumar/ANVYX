import React, { useState } from "react";
import { 
  Presentation, 
  FileText, 
  Image as ImageIcon, 
  Menu, 
  X
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
    { label: "INDEX", href: "#overview" },
    { label: "01. SIMULATOR", href: "#simulator" },
    { label: "02. BUILD_STACK", href: "#how-to-build" },
    { label: "03. RAG_SYSTEM", href: "#rag-concept" },
    { label: "04. LLM_ENGINE", href: "#llm-concept" },
    { label: "05. AGI_HORIZON", href: "#agi-concept" },
    { label: "06. CSBS_CASES", href: "#use-cases" },
    { label: "07. QUIZ", href: "#quiz" },
    { label: "08. ROADMAP", href: "#roadmap" }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F4F2EB] brutal-border-b">
      {/* Brutalist Marquee Ticker Tape */}
      <div className="bg-[#111111] text-[#F4F2EB] py-1.5 px-4 overflow-hidden brutal-border-b text-xs font-mono select-none">
        <div className="animate-marquee flex items-center gap-6 whitespace-nowrap">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#C8FF00]"></span>
            <strong>M. KUMARASAMY COLLEGE OF ENGINEERING</strong> [AUTONOMOUS]
          </span>
          <span>//</span>
          <span>DEPT OF COMPUTER SCIENCE & BUSINESS SYSTEMS (CSBS)</span>
          <span>//</span>
          <span className="bg-[#C8FF00] text-[#111111] px-1.5 py-0.2 font-bold">
            ZENTRA '26
          </span>
          <span>//</span>
          <span>"DON'T JUST USE AI, CREATE IT"</span>
          <span>//</span>
          <span>DATE: 23RD OCTOBER 2026</span>
          <span>//</span>
          <span>VENUE: SIR C V RAMAN HALL</span>
          <span>//</span>
          <span>PARTNERS: IBM SKILLS × IBM Z EXPLORE × AAROH</span>
          <span>//</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#C8FF00]"></span>
            <strong>M. KUMARASAMY COLLEGE OF ENGINEERING</strong> [AUTONOMOUS]
          </span>
          <span>//</span>
          <span>DEPT OF COMPUTER SCIENCE & BUSINESS SYSTEMS (CSBS)</span>
          <span>//</span>
          <span className="bg-[#C8FF00] text-[#111111] px-1.5 py-0.2 font-bold">
            ZENTRA '26
          </span>
          <span>//</span>
          <span>"DON'T JUST USE AI, CREATE IT"</span>
          <span>//</span>
          <span>DATE: 23RD OCTOBER 2026</span>
          <span>//</span>
          <span>VENUE: SIR C V RAMAN HALL</span>
        </div>
      </div>

      {/* Main Navbar Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#overview" className="flex items-center gap-3 group">
          <div className="bg-[#111111] text-[#C8FF00] px-3 py-1.5 brutal-border brutal-shadow-sm font-display font-black text-xl tracking-tighter group-hover:bg-[#C8FF00] group-hover:text-[#111111] transition-colors">
            ZENTRA ’26
          </div>
          <div className="hidden sm:block">
            <div className="text-[10px] font-mono tracking-widest uppercase text-[#555555] font-bold">
              DEPT OF CSBS × AIML
            </div>
            <div className="text-xs font-display font-extrabold uppercase text-[#111111] leading-none">
              AI CHATBOT WORKSHOP
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.label}
                href={link.href}
                className={`px-2.5 py-1 text-xs font-mono font-bold tracking-tight transition-all border ${
                  isActive
                    ? "bg-[#111111] text-[#C8FF00] border-[#111111] brutal-shadow-sm"
                    : "text-[#111111] border-transparent hover:border-[#111111] hover:bg-[#FFFFFF]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Keynote Presentation Button */}
          <button
            onClick={onOpenKeynote}
            className="brutal-btn brutal-btn-primary px-3.5 py-2 text-xs flex items-center gap-2"
            title="Launch Fullscreen Keynote Slides"
          >
            <Presentation className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">KEYNOTE SLIDES</span>
            <span className="sm:hidden">SLIDES</span>
          </button>

          {/* Speaker Notes */}
          <button
            onClick={onOpenSpeechNotes}
            className="brutal-btn brutal-btn-white px-3 py-2 text-xs flex items-center gap-1.5"
            title="Open Chief Guest Speech Draft"
          >
            <FileText className="w-3.5 h-3.5 text-[#111111]" />
            <span className="hidden md:inline">SPEECH DRAFT</span>
          </button>

          {/* Poster Button */}
          <button
            onClick={onOpenPoster}
            className="brutal-btn brutal-btn-dark p-2"
            title="View Event Poster & Schedule"
          >
            <ImageIcon className="w-4 h-4" />
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 brutal-border bg-[#FFFFFF] text-[#111111] xl:hidden ml-1"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#F4F2EB] brutal-border-t p-4 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b-2 border-[#111111]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-mono font-bold text-[#111111] bg-[#FFFFFF] brutal-border hover:bg-[#C8FF00] transition"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-1 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenKeynote();
              }}
              className="w-full py-2.5 brutal-btn brutal-btn-primary text-xs flex items-center justify-center gap-2"
            >
              <Presentation className="w-4 h-4" />
              LAUNCH KEYNOTE PRESENTATION
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSpeechNotes();
              }}
              className="w-full py-2.5 brutal-btn brutal-btn-white text-xs flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              OPEN CHIEF GUEST SPEECH DRAFT
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
