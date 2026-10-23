import React from "react";
import { MapPin, Navigation, Plane, Train, Bus, ShieldCheck, Wifi, Coffee, Bed } from "lucide-react";
import { anvyx27Config } from "../config/anvyx27Data";
import { playCyberClick, playCyberHover } from "../utils/audio";

export const VenueSection: React.FC = () => {
  return (
    <section id="venue" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 border-t border-white/10 bg-[#020205] relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-purple-500/05 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-[#55E5D2] bg-[#55E5D2]/10 border border-[#55E5D2]/25 mb-4">
              <MapPin className="w-3.5 h-3.5 text-[#55E5D2]" />
              <span>09 / VENUE LOCATION MAP</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-display uppercase leading-tight">
              COORDINATES &amp;{" "}
              <span className="bg-gradient-to-r from-[#55E5D2] via-indigo-400 to-[#FF405F] bg-clip-text text-transparent">
                VENUE MAP.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
            Hosted inside state-of-the-art technological pavilions and 24-hour innovation laboratories at KPRIET Campus, Coimbatore.
          </p>
        </div>

        {/* Map & Transit Information Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Campus Intel & Transit Directions */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Campus Address Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#060716] border border-white/10 space-y-4 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="font-mono text-xs font-bold text-[#55E5D2] uppercase tracking-wider">
                  PHYSICAL HOST SITE
                </span>
                <span className="font-mono text-[10px] text-slate-400">COIMBATORE, TN</span>
              </div>

              <div className="space-y-1">
                <h3 className="font-display font-black text-xl text-white">
                  KPR Institute of Engineering and Technology
                </h3>
                <p className="font-mono text-xs text-indigo-400">
                  Department of Information Technology
                </p>
                <p className="text-xs text-slate-400 font-sans leading-relaxed pt-2">
                  Avinashi Road, Arasur, Coimbatore, Tamil Nadu 641407, India.
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 grid grid-cols-3 gap-2 text-center font-mono text-[9px] text-slate-300">
                <div className="p-2 rounded-lg bg-white/[0.03]">
                  <Wifi className="w-3.5 h-3.5 text-indigo-400 mx-auto mb-1" />
                  <span>GIGABIT LAN</span>
                </div>
                <div className="p-2 rounded-lg bg-white/[0.03]">
                  <Coffee className="w-3.5 h-3.5 text-rose-400 mx-auto mb-1" />
                  <span>24H FOOD</span>
                </div>
                <div className="p-2 rounded-lg bg-white/[0.03]">
                  <Bed className="w-3.5 h-3.5 text-[#55E5D2] mx-auto mb-1" />
                  <span>REST ZONES</span>
                </div>
              </div>
            </div>

            {/* Travel Directions Hub */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#060716] border border-white/10 space-y-4 shadow-xl font-sans">
              <span className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider block">
                TRANSIT &amp; CONNECTIVITY
              </span>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <Plane className="w-4 h-4 text-[#55E5D2] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">From Coimbatore Airport (CJB):</span>
                    <span className="text-slate-400">~12 km via Avinashi Rd (15-20 minutes by cab / taxi)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <Train className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">From Coimbatore Junction Railway:</span>
                    <span className="text-slate-400">~20 km. Frequent buses available towards Avinashi / Tirupur</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <Bus className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">From Gandhipuram Bus Stand:</span>
                    <span className="text-slate-400">~18 km. Direct city buses drop right at the KPRIET main campus gate</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Frame */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#060716] h-[480px] relative">
              <iframe
                title="KPRIET Campus Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.654848356953!2d77.14371907570498!3d11.064483789098863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8ff56a591e1d3%3A0xc47b85d0d1b9195b!2sKPR%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-85 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
              
              {/* Overlay GPS Tag */}
              <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-[#020205]/90 border border-white/20 backdrop-blur-md font-mono text-[10px] text-white space-y-0.5 pointer-events-none">
                <div className="text-[#55E5D2] font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#55E5D2] animate-pulse" />
                  <span>KPRIET COIMBATORE NODE</span>
                </div>
                <div className="text-slate-400">GPS: 11.0645° N, 77.1459° E</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
