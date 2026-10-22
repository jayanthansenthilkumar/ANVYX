import React from "react";
import { anvyxConfig } from "../config/anvyxConfig";
import { ArrowUpRight, Mail, ShieldCheck, Sparkles, Terminal } from "lucide-react";

interface FooterExperienceProps {
  onRegisterClick: () => void;
}

export const FooterExperience: React.FC<FooterExperienceProps> = ({ onRegisterClick }) => {
  return (
    <footer className="relative bg-[#080A12] border-t border-white/10 pt-28 pb-14 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background cinematic radial burst */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] pointer-events-none opacity-20 blur-[150px] rounded-full"
        style={{
          background: "radial-gradient(ellipse at bottom, rgba(88, 230, 255, 0.4) 0%, rgba(152, 120, 255, 0.25) 50%, transparent 80%)"
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section 9 — Final Call to Action Hero Box */}
        <div className="relative rounded-3xl p-8 sm:p-12 md:p-16 border border-white/15 bg-gradient-to-b from-[#10162A]/90 to-[#080A12]/95 backdrop-blur-2xl shadow-[0_0_80px_rgba(88,230,255,0.1)] mb-24 overflow-hidden text-center">
          {/* Top subtle light accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#58E6FF] to-transparent" />

          {/* Central Rotating Dimensional Glyph */}
          <div className="relative w-20 h-20 mx-auto mb-8 flex items-center justify-center">
            {/* Outer rotating ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-[#58E6FF]/40 animate-spin" style={{ animationDuration: "14s" }} />
            {/* Inner rotating diamond */}
            <div className="absolute inset-2 rounded-xl border border-[#9878FF]/50 rotate-45 animate-pulse" />
            {/* Center core */}
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#58E6FF] to-[#9878FF] flex items-center justify-center font-['Space_Grotesk'] font-black text-xs text-[#080A12] shadow-[0_0_20px_rgba(88,230,255,0.7)]">
              X
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-[#58E6FF] bg-[#58E6FF]/10 border border-[#58E6FF]/25 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Section 09 // The Final Call</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#F4F6FF] font-['Space_Grotesk'] max-w-4xl mx-auto leading-tight mb-6">
            DON’T JUST IMAGINE WHAT’S NEXT.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#58E6FF] via-[#9878FF] to-white">
              BUILD IT.
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#9BA8C7] font-['Inter'] mb-10 leading-relaxed">
            Eight hours to challenge boundaries, form high-conviction partnerships, and bring a breakthrough concept into physical existence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onRegisterClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#58E6FF] to-[#9878FF] text-[#080A12] font-bold text-sm tracking-wide hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_0_30px_rgba(88,230,255,0.35)] cursor-pointer"
            >
              <span>ENTER THE HACKATHON</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href="#timeline"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 hover:border-white/40 text-[#F4F6FF] font-medium text-sm transition-all hover:bg-white/[0.04]"
            >
              Review 8-Hour Roadmap
            </a>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#58E6FF] to-[#9878FF] flex items-center justify-center font-bold font-['Space_Grotesk'] text-[#080A12] shadow-[0_0_20px_rgba(88,230,255,0.4)]">
                X
              </div>
              <span className="text-2xl font-bold tracking-tight text-[#F4F6FF] font-['Space_Grotesk']">
                {anvyxConfig.name} <span className="text-[#58E6FF]">{anvyxConfig.edition}</span>
              </span>
            </div>

            <p className="text-sm text-[#9BA8C7] font-['Inter'] max-w-sm leading-relaxed">
              {anvyxConfig.tagline}. A premier high-intensity hackathon uniting world-class engineers, designers, and systems architects.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={anvyxConfig.links.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Repository"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-[#58E6FF]/50 flex items-center justify-center text-[#9BA8C7] hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href={anvyxConfig.links.discordUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Discord Community"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-[#9878FF]/50 flex items-center justify-center text-[#9BA8C7] hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
              <a
                href={`mailto:${anvyxConfig.links.contactEmail}`}
                aria-label="Contact Concierge"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-[#58E6FF]/50 flex items-center justify-center text-[#9BA8C7] hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Links Column */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#58E6FF]">
              Experience Navigation
            </div>
            <ul className="space-y-2 text-sm text-[#9BA8C7] font-['Inter']">
              {anvyxConfig.navigation.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Event Intel Column */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#9878FF]">
              Verified Event Intel
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 text-xs font-mono text-[#9BA8C7]">
              <div>
                <span className="text-white/40 block">CALENDAR:</span>
                <span className="text-white">{anvyxConfig.dates.display}</span>
              </div>
              <div>
                <span className="text-white/40 block">ARENA:</span>
                <span className="text-white">{anvyxConfig.dates.venue}</span>
              </div>
              <div>
                <span className="text-white/40 block">FORMAT:</span>
                <span className="text-[#58E6FF]">{anvyxConfig.dates.format}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Attribution & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#9BA8C7]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#58E6FF]" />
            <span>© 2027 ANVYX Hackathon Council. All intellectual property remains 100% with creators.</span>
          </div>
          <div className="flex items-center gap-4 text-white/50">
            <span>Security Standard 2.0</span>
            <span>•</span>
            <span>Privacy Protocol</span>
            <span>•</span>
            <span className="text-[#58E6FF]">Edition ’27</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
