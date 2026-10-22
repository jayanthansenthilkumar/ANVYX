import React, { useState, useEffect } from "react";
import { 
  Sparkles, 
  Menu, 
  X, 
  ArrowUpRight,
  Terminal,
  Layers
} from "lucide-react";
import { anvyxConfig } from "../config/anvyxConfig";

interface NavbarProps {
  onRegisterClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRegisterClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 py-4 pointer-events-none transition-all duration-300">
        <div 
          className={`w-full max-w-6xl pointer-events-auto rounded-2xl transition-all duration-300 flex items-center justify-between px-5 py-3 ${
            isScrolled 
              ? "bg-[#080A12]/80 backdrop-blur-xl border border-[#58E6FF]/20 shadow-[0_10px_30px_-10px_rgba(8,10,18,0.8)]"
              : "bg-[#10162A]/40 backdrop-blur-md border border-[#F4F6FF]/10"
          }`}
        >
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#58E6FF] to-[#9878FF] p-[1px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#080A12] rounded-[7px] flex items-center justify-center">
                <span className="font-display font-black text-sm text-[#58E6FF]">X</span>
              </div>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-display font-bold text-lg tracking-tight text-[#F4F6FF]">
                {anvyxConfig.name}
              </span>
              <span className="font-mono text-xs text-[#58E6FF] font-semibold">
                {anvyxConfig.edition}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-[#9BA8C7]">
            {anvyxConfig.navigation.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#58E6FF] transition-colors py-1 relative group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#58E6FF] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onRegisterClick}
              className="relative group px-4 py-2 rounded-xl text-xs font-semibold text-[#080A12] bg-[#58E6FF] hover:bg-[#F4F6FF] transition-all duration-200 shadow-[0_0_20px_-3px_rgba(88,230,255,0.4)] hover:shadow-[0_0_25px_0px_rgba(88,230,255,0.6)] cursor-pointer flex items-center gap-1.5"
            >
              <span>Register</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-lg text-[#9BA8C7] hover:text-[#F4F6FF] hover:bg-[#10162A]/60 transition"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#080A12]/95 backdrop-blur-2xl flex flex-col justify-between p-6 md:hidden animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-4 border-b border-[#F4F6FF]/10">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-xl text-[#F4F6FF]">
                {anvyxConfig.name} <span className="text-[#58E6FF]">{anvyxConfig.edition}</span>
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg text-[#9BA8C7] hover:text-[#F4F6FF]"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-4 py-8">
            {anvyxConfig.navigation.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display font-medium text-2xl text-[#9BA8C7] hover:text-[#58E6FF] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-[#F4F6FF]/10 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRegisterClick();
              }}
              className="w-full py-3.5 rounded-xl font-semibold text-sm text-[#080A12] bg-[#58E6FF] flex items-center justify-center gap-2"
            >
              <span>Enter the Hackathon</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <p className="text-center font-mono text-[11px] text-[#9BA8C7]/60">
              8 Hours. Infinite Possibilities.
            </p>
          </div>
        </div>
      )}
    </>
  );
};
