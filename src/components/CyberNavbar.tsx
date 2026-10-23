import React, { useState, useEffect } from "react";
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from "lucide-react";
import { anvyx27Config } from "../config/anvyx27Data";
import { playCyberClick, playCyberHover, isSoundMuted, toggleSoundMute } from "../utils/audio";

interface CyberNavbarProps {
  onRegisterClick: () => void;
  onLoginClick: () => void;
  activeSection?: string;
  onNavigate?: (path: string) => void;
}

export const CyberNavbar: React.FC<CyberNavbarProps> = ({
  onRegisterClick,
  onLoginClick,
  activeSection = "hero",
  onNavigate
}) => {
  const [muted, setMuted] = useState(isSoundMuted());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const nextState = toggleSoundMute();
    setMuted(nextState);
  };

  const navLinks = [
    { label: "OVERVIEW", href: "#hero" },
    { label: "ABOUT", href: "#about" },
    { label: "PROBLEM STATEMENTS", href: "#problem-statements" },
    { label: "DOMAINS", href: "#sectors" },
    { label: "GLIMPSES", href: "#gallery" },
    { label: "SCHEDULE", href: "#timeline" },
    { label: "FEEDBACKS", href: "#testimonials" },
    { label: "DIGITAL ID", href: "#pass" },
    { label: "SPONSORS", href: "#sponsors" },
    { label: "VENUE", href: "#venue" },
    { label: "FAQ", href: "#faq" }
  ];

  const handleLinkClick = (href: string) => {
    playCyberClick();
    setMobileMenuOpen(false);
    if (onNavigate && href.startsWith("/")) {
      onNavigate(href);
      return;
    }
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top 1.5px Glowing Scroll Progress Line */}
      <div 
        className="fixed top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#6575F5] via-[#8B70E8] to-[#FF405F] opacity-90 z-[101] origin-left shadow-[0_0_8px_rgba(101,117,245,0.7)] pointer-events-none will-change-transform gpu-layer"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      {/* Main Header Container */}
      <header className="fixed top-0 left-0 right-0 h-[70px] sm:h-[74px] transition-all duration-300 z-[100] bg-[#030409]/85 backdrop-blur-md border-b border-[rgba(100,110,160,0.14)] select-none">
        <div className="w-full h-full px-4 sm:px-6 lg:px-7 2xl:px-8 flex items-center justify-between gap-3 lg:gap-4">
          
          {/* Brand Logo & Title */}
          <div className="flex items-center gap-2.5 shrink-0 z-10 pr-2">
            <a 
              href="#hero" 
              onClick={(e) => { e.preventDefault(); handleLinkClick("#hero"); }}
              className="flex items-center gap-2.5 group cursor-pointer"
              onMouseEnter={playCyberHover}
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center p-1 rounded-xl bg-[#0D0D12] border border-white/10 shadow-[0_0_10px_rgba(101,117,245,0.4)] group-hover:scale-105 group-hover:border-[#6575F5]/40 transition-all">
                <img 
                  src="/images/logo-nobg.png" 
                  alt="ANVYX '27 Logo" 
                  className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(101,117,245,0.7)]" 
                />
              </div>
              <div className="flex items-baseline">
                <span className="font-display font-black text-xl sm:text-2xl text-white tracking-tight">
                  ANVYX
                </span>
                <span className="font-mono font-bold text-xs sm:text-sm text-[#FF405F] ml-0.5">
                  '27
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav 
            className="hidden lg:flex items-center gap-3.5 xl:gap-5 2xl:gap-6 font-mono text-[11px] xl:text-[12px] 2xl:text-[12.5px] select-none mx-2 flex-1 justify-center max-w-[960px]"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  onMouseEnter={playCyberHover}
                  className={`relative py-1 px-1 tracking-wider uppercase transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive 
                      ? "text-white font-bold" 
                      : "text-slate-300 hover:text-white hover:-translate-y-px"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#6575F5] via-[#8B70E8] to-[#6575F5] rounded-full shadow-[0_0_8px_rgba(101,117,245,0.7)]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-4 xl:gap-5 font-mono text-xs shrink-0 z-10">
            {/* Audio SFX Toggle */}
            <button
              onClick={handleSoundToggle}
              onMouseEnter={playCyberHover}
              title={muted ? "Sound Off (Click to Enable)" : "Sound On (Click to Mute)"}
              aria-label="Toggle Sound"
              className="p-2 text-[#6575F5] hover:text-[#8B70E8] hover:drop-shadow-[0_0_6px_rgba(101,117,245,0.8)] transition-all cursor-pointer flex items-center justify-center rounded-lg border border-white/5 bg-white/[0.02]"
            >
              {muted ? <VolumeX className="w-4 h-4 text-slate-500" /> : <Volume2 className="w-4 h-4 text-[#6575F5]" />}
            </button>

            {/* Login & Register Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => { playCyberClick(); onLoginClick(); }}
                onMouseEnter={playCyberHover}
                className="text-slate-300 hover:text-white font-semibold transition-colors cursor-pointer tracking-wider py-1.5 px-2 font-mono text-xs"
              >
                [ LOGIN ]
              </button>

              <button
                onClick={() => { playCyberClick(); onRegisterClick(); }}
                onMouseEnter={playCyberHover}
                className="px-4 py-2 rounded-lg border border-[#6575F5]/40 hover:border-[#FF405F]/80 text-white bg-transparent hover:bg-[rgba(101,117,245,0.1)] transition-all font-mono text-xs font-bold uppercase tracking-wider shadow-[0_0_10px_rgba(101,117,245,0.2)] hover:shadow-[0_0_18px_rgba(255,64,95,0.35)] cursor-pointer flex items-center justify-center"
              >
                [ REGISTER ]
              </button>
            </div>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={handleSoundToggle}
              className="p-2 text-[#6575F5] transition-all cursor-pointer"
            >
              {muted ? <VolumeX className="w-4 h-4 text-slate-500" /> : <Volume2 className="w-4 h-4 text-[#6575F5]" />}
            </button>
            <button
              onClick={() => { playCyberClick(); setMobileMenuOpen(!mobileMenuOpen); }}
              className="flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs text-[#6575F5] font-bold border border-[#6575F5]/30 rounded-lg cursor-pointer bg-white/[0.02]"
              aria-label="Toggle Navigation Menu"
            >
              <span>[ MENU ]</span>
              {mobileMenuOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[99] bg-[#020205]/95 backdrop-blur-xl lg:hidden flex flex-col pt-24 pb-8 px-6 overflow-y-auto animate-fadeIn"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="flex flex-col space-y-3 font-mono text-sm uppercase tracking-wider text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="py-2.5 px-3 rounded-lg border border-white/5 hover:border-[#6575F5]/40 hover:text-white hover:bg-white/[0.04] transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 mt-6 flex flex-col gap-3 font-mono">
            <button
              onClick={() => { playCyberClick(); setMobileMenuOpen(false); onLoginClick(); }}
              className="w-full py-3 rounded-xl border border-white/15 text-slate-200 font-bold text-xs uppercase"
            >
              [ NETRUNNER LOGIN ]
            </button>
            <button
              onClick={() => { playCyberClick(); setMobileMenuOpen(false); onRegisterClick(); }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#6575F5] via-[#8B70E8] to-[#FF405F] text-white font-bold text-xs uppercase shadow-[0_0_20px_rgba(101,117,245,0.4)]"
            >
              REGISTER SQUAD NOW
            </button>
          </div>
        </div>
      )}
    </>
  );
};
