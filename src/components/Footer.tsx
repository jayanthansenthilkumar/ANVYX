import React from "react";
import { 
  ExternalLink
} from "lucide-react";
import { eventDetails } from "../data/eventData";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFFFFF] brutal-border-t text-[#111111] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand info */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="bg-[#111111] text-[#C8FF00] px-3 py-1.5 font-display font-black text-2xl tracking-tighter brutal-border brutal-shadow-sm">
                ZENTRA ’26
              </div>
              <div>
                <span className="font-mono text-xs font-bold uppercase text-[#555555] block">
                  DEPT OF CSBS × AIML
                </span>
                <span className="font-display font-bold text-sm text-[#111111]">
                  M. KUMARASAMY COLLEGE OF ENGINEERING
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#444444] font-medium max-w-md leading-relaxed font-sans">
              Official Keynote & Learning Platform for ZENTRA '26 — AI Chatbot Workshop & Build Challenge held on 23rd October 2026 at Sir C V Raman Hall, M. Kumarasamy College of Engineering (Autonomous), Karur.
            </p>

            <div className="pt-2">
              <span className="inline-block px-3 py-1 bg-[#111111] text-[#C8FF00] font-mono text-xs font-bold uppercase">
                "{eventDetails.tagline}"
              </span>
            </div>
          </div>

          {/* College Accreditations */}
          <div className="space-y-3 font-mono text-xs">
            <h4 className="font-bold uppercase tracking-wider text-[#111111] border-b border-[#000000] pb-1">
              INSTITUTION CREDENTIALS
            </h4>
            <ul className="space-y-1.5 font-medium">
              {eventDetails.accreditations.map((acc, idx) => (
                <li key={idx} className="flex items-center gap-1.5 text-[#333333]">
                  <span className="w-1.5 h-1.5 bg-[#C8FF00] border border-[#000000]"></span>
                  <span>{acc}</span>
                </li>
              ))}
              <li className="text-[#555555] pt-1">Autonomous • Affiliated to Anna University Chennai</li>
            </ul>
          </div>

          {/* Quick Links & Partners */}
          <div className="space-y-3 font-mono text-xs">
            <h4 className="font-bold uppercase tracking-wider text-[#111111] border-b border-[#000000] pb-1">
              COMMUNITY PARTNERS
            </h4>
            <div className="space-y-1.5">
              <p className="text-[#222222]">IBM Skills & IBM Z Explore</p>
              <p className="text-[#222222]">AAROH - Raising Together</p>
              <p className="text-[#222222]">Phone: {eventDetails.contact}</p>
              <a 
                href={`https://${eventDetails.website}`} 
                target="_blank" 
                rel="noreferrer"
                className="text-[#0038FF] font-bold hover:underline flex items-center gap-1 pt-1"
              >
                <span>{eventDetails.website}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="pt-8 border-t border-[#000000] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#555555]">
          <p>
            © 2026 M. KUMARASAMY COLLEGE OF ENGINEERING (MKCE) // DEPARTMENT OF CSBS.
          </p>
          <p className="font-bold text-[#111111]">
            ENGINEERED WITH REACT 19 & MODERN BRUTALIST ARCHITECTURE.
          </p>
        </div>

      </div>
    </footer>
  );
};
