import React from "react";
import { 
  ArrowUp, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  ExternalLink, 
  Sparkles, 
  ShieldCheck, 
  Flame,
  Radio,
  Terminal,
  MessageSquare
} from "lucide-react";
import { anvyx27Config } from "../config/anvyx27Data";
import { playCyberClick, playCyberHover } from "../utils/audio";

interface CyberFooterProps {
  onRegisterClick: () => void;
  onNavigate?: (path: string) => void;
}

export const CyberFooter: React.FC<CyberFooterProps> = ({ 
  onRegisterClick,
  onNavigate 
}) => {
  const scrollToTop = () => {
    playCyberClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (href: string) => {
    playCyberClick();
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
    <footer id="contact" className="relative bg-[#020206] border-t border-[rgba(100,110,160,0.18)] text-white overflow-hidden pt-16 pb-12 select-none">
      {/* Background Cybernetic Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(101,117,245,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(101,117,245,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-gradient-to-b from-[#6575F5]/10 via-[#8B70E8]/5 to-transparent blur-[120px] pointer-events-none" />

      {/* CALL TO ACTION BANNER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-20">
        <div className="relative rounded-2xl p-8 sm:p-12 border border-[rgba(101,117,245,0.35)] bg-gradient-to-br from-[#0c0f20]/90 via-[#070914]/95 to-[#05060d]/90 shadow-[0_0_50px_rgba(101,117,245,0.15)] overflow-hidden">
          {/* Laser Top Trim Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#55E5D2] to-transparent shadow-[0_0_12px_#55E5D2]" />
          
          {/* Corner Cyber Brackets */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#6575F5]/60 pointer-events-none" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#FF405F]/60 pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#6575F5]/60 pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#55E5D2]/60 pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(101,117,245,0.12)] border border-[rgba(101,117,245,0.3)] text-[#55E5D2] font-mono text-xs uppercase tracking-wider mb-4">
                <Radio className="w-3.5 h-3.5 animate-pulse text-[#FF405F]" />
                REGISTRATION PORTAL OPEN // PASSES LIMITED
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white mb-4">
                READY TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6575F5] via-[#55E5D2] to-[#FF405F]">DISRUPT THE FUTURE?</span>
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Assemble your syndicate of 2–4 builders, secure your IEEE or Non-IEEE passes, and step into the 24-hour neural forge at KPRIET Campus.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <button
                onClick={() => {
                  playCyberClick();
                  onRegisterClick();
                }}
                onMouseEnter={playCyberHover}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#6575F5] to-[#8B70E8] text-white font-mono font-bold text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(101,117,245,0.5)] hover:shadow-[0_0_35px_rgba(101,117,245,0.8)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Flame className="w-4 h-4 text-[#FF405F]" />
                INITIALIZE SQUAD // REGISTER
              </button>
              
              <button
                onClick={() => handleLinkClick("#sectors")}
                onMouseEnter={playCyberHover}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#080B17] border border-[rgba(101,117,245,0.3)] text-gray-300 hover:text-white hover:border-[#55E5D2]/50 font-mono text-sm tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                EXPLORE DOMAINS
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* BRAND COLUMN (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0C0F1D] border border-[rgba(101,117,245,0.4)] flex items-center justify-center p-1.5 shadow-[0_0_15px_rgba(101,117,245,0.3)]">
                <img 
                  src="/images/logo-nobg.png" 
                  alt="ANVYX Logo" 
                  className="w-full h-full object-contain filter drop-shadow-[0_0_6px_#6575F5]" 
                />
              </div>
              <div className="flex items-baseline">
                <span className="font-display font-black text-2xl text-white tracking-tight">
                  ANVYX
                </span>
                <span className="font-mono font-bold text-sm text-[#FF405F] ml-1">
                  '27
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Flagship 24-hour national hackathon orchestrated by the Department of Information Technology, KPR Institute of Engineering and Technology, Coimbatore.
            </p>

            <div className="p-3.5 rounded-xl bg-[#060813] border border-white/5 space-y-1.5">
              <div className="flex items-center gap-2 text-[11px] font-mono text-[#55E5D2]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#55E5D2]" />
                HOST INSTITUTION
              </div>
              <div className="text-xs text-gray-300 font-medium">
                KPR Institute of Engineering and Technology
              </div>
              <div className="text-[11px] text-gray-500 font-mono">
                Avinashi Road, Arasur, Coimbatore, TN 641407
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://kpriet.ac.in"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={playCyberHover}
                className="w-9 h-9 rounded-lg bg-[#0C0F1D] border border-white/10 hover:border-[#6575F5] flex items-center justify-center text-gray-400 hover:text-[#6575F5] transition-all hover:scale-105"
                title="KPRIET Official Website"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={playCyberHover}
                className="w-9 h-9 rounded-lg bg-[#0C0F1D] border border-white/10 hover:border-[#55E5D2] flex items-center justify-center text-gray-400 hover:text-[#55E5D2] transition-all hover:scale-105"
                title="LinkedIn Network"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={playCyberHover}
                className="w-9 h-9 rounded-lg bg-[#0C0F1D] border border-white/10 hover:border-[#FF405F] flex items-center justify-center text-gray-400 hover:text-[#FF405F] transition-all hover:scale-105"
                title="Instagram Feed"
              >
                <Sparkles className="w-4 h-4" />
              </a>
              <a
                href="https://discord.gg/anvyx27"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={playCyberHover}
                className="w-9 h-9 rounded-lg bg-[#0C0F1D] border border-white/10 hover:border-[#8B70E8] flex items-center justify-center text-gray-400 hover:text-[#8B70E8] transition-all hover:scale-105"
                title="Netrunner Discord Guild"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#6575F5] font-bold flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" />
              NAVIGATION
            </h3>
            <ul className="space-y-2.5 text-xs font-mono">
              {[
                { label: "01 // OVERVIEW", href: "#hero" },
                { label: "02 // ABOUT", href: "#about" },
                { label: "03 // PROBLEMS", href: "#problem-statements" },
                { label: "04 // DOMAINS", href: "#sectors" },
                { label: "05 // TIMELINE", href: "#timeline" },
                { label: "06 // FEEDBACKS", href: "#testimonials" },
                { label: "07 // DIGITAL ID", href: "#pass" },
                { label: "08 // SPONSORS", href: "#sponsors" },
                { label: "09 // VENUE", href: "#venue" },
                { label: "10 // FAQ", href: "#faq" }
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    onMouseEnter={playCyberHover}
                    className="text-gray-400 hover:text-[#55E5D2] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[10px] text-gray-600">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* FACULTY COORDINATORS (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#8B70E8] font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              FACULTY CONVENORS
            </h3>
            <div className="space-y-3">
              {anvyx27Config.coordinators.faculty.map((f, i) => (
                <div 
                  key={i} 
                  className="p-3 rounded-xl bg-[#090C1A] border border-white/5 hover:border-[rgba(101,117,245,0.3)] transition-all group"
                >
                  <div className="text-xs font-bold text-gray-200 group-hover:text-white">
                    {f.name}
                  </div>
                  <div className="text-[10px] font-mono text-gray-400 mb-1.5">
                    {f.role}
                  </div>
                  <a
                    href={`tel:${f.phone}`}
                    onClick={() => playCyberClick()}
                    onMouseEnter={playCyberHover}
                    className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#55E5D2] hover:text-white transition-colors"
                  >
                    <Phone className="w-3 h-3 text-[#55E5D2]" />
                    +91 {f.phone.replace(/(\d{5})(\d{5})/, "$1 $2")}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* STUDENT LEADS & EMERGENCY CONTACT (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#FF405F] font-bold flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5" />
              STUDENT SECRETARIAT
            </h3>
            <div className="space-y-3">
              {anvyx27Config.coordinators.student.map((s, i) => (
                <div 
                  key={i} 
                  className="p-3 rounded-xl bg-[#090C1A] border border-white/5 hover:border-[rgba(255,64,95,0.3)] transition-all group"
                >
                  <div className="text-xs font-bold text-gray-200 group-hover:text-white">
                    {s.name}
                  </div>
                  <div className="text-[10px] font-mono text-gray-400 mb-1.5">
                    {s.role}
                  </div>
                  <a
                    href={`tel:${s.phone}`}
                    onClick={() => playCyberClick()}
                    onMouseEnter={playCyberHover}
                    className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#FF405F] hover:text-white transition-colors"
                  >
                    <Phone className="w-3 h-3 text-[#FF405F]" />
                    +91 {s.phone.replace(/(\d{5})(\d{5})/, "$1 $2")}
                  </a>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <div className="p-3 rounded-xl bg-[rgba(101,117,245,0.06)] border border-[rgba(101,117,245,0.2)]">
                <div className="text-[10px] font-mono text-gray-400 uppercase">
                  DISCORD HELPDESK
                </div>
                <div className="text-xs font-mono text-[#55E5D2] mt-0.5">
                  #anvyx27-support-desk
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM METADATA & COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div className="flex items-center gap-2">
            <span>© 2027 ANVYX HACKATHON. ALL RIGHTS RESERVED.</span>
            <span className="hidden md:inline text-gray-700">|</span>
            <span className="hidden md:inline text-gray-400">BUILD WITH DISRUPTION</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#55E5D2]">SYSTEM VER: ANV-27.4.9</span>
            <button
              onClick={scrollToTop}
              onMouseEnter={playCyberHover}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#0D1020] border border-white/10 hover:border-[#6575F5] text-gray-300 hover:text-white transition-all cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#6575F5]" />
              <span>RETURN TO APEX</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
