import React from "react";
import { 
  Bot, 
  GraduationCap, 
  Sparkles, 
  Globe, 
  Phone, 
  ExternalLink, 
  Heart,
  Award
} from "lucide-react";
import { eventDetails } from "../data/eventData";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand info */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-0.5 flex items-center justify-center text-white">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-black text-white">
                  ZENTRA <span className="text-cyan-400">'26</span>
                </span>
                <p className="text-xs text-slate-500 font-mono">Department of CSBS & AIML</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              Official Keynote & Learning Platform for the AI Chatbot Workshop & Build Challenge held on 23rd October 2026 at Sir C V Raman Hall, M. Kumarasamy College of Engineering, Karur.
            </p>

            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                "{eventDetails.tagline}"
              </span>
            </div>
          </div>

          {/* College Accreditations */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
              Institution Accreditations
            </h4>
            <ul className="space-y-2 text-xs">
              {eventDetails.accreditations.map((acc, idx) => (
                <li key={idx} className="flex items-center gap-2 text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span>{acc}</span>
                </li>
              ))}
              <li className="text-slate-400 pt-1">Autonomous • Affiliated to Anna University Chennai</li>
            </ul>
          </div>

          {/* Quick Links & Partners */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
              Community Partners
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <p className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                IBM Skills & IBM Z Explore
              </p>
              <p className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-indigo-400" />
                AAROH - Raising Together
              </p>
              <p className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                Contact: {eventDetails.contact}
              </p>
              <a 
                href={`https://${eventDetails.website}`} 
                target="_blank" 
                rel="noreferrer"
                className="text-cyan-400 hover:underline flex items-center gap-1 pt-1"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{eventDetails.website}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2026 M. Kumarasamy College of Engineering (MKCE) • Department of CSBS. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-slate-400">
            Crafted for 1st-Year Engineers with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> & AI.
          </p>
        </div>

      </div>
    </footer>
  );
};
