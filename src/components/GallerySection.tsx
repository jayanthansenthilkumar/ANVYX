import React, { useState } from "react";
import { Camera, Maximize2, Sparkles, Filter, ShieldCheck } from "lucide-react";
import { playCyberClick, playCyberHover } from "../utils/audio";

export const GallerySection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL");

  const categories = ["ALL", "CEREMONY", "SPRINT", "JURY", "LABS"];

  const glimpses = [
    {
      id: "GLIMPSE-01",
      title: "Inaugural Keynote & Cohort Assembly",
      category: "CEREMONY",
      timestamp: "DAY 1 — 09:30 AM",
      arena: "Metropolitan Auditorium",
      telemetry: "500+ BUILDERS ASSEMBLED",
      gradient: "from-indigo-900/60 via-purple-900/40 to-black"
    },
    {
      id: "GLIMPSE-02",
      title: "Midnight Deep-Sprint Coding Floor",
      category: "SPRINT",
      timestamp: "DAY 1 — 02:45 AM",
      arena: "Lab Sector 4",
      telemetry: "UNINTERRUPTED FLOW STATE",
      gradient: "from-blue-900/60 via-slate-900/40 to-black"
    },
    {
      id: "GLIMPSE-03",
      title: "Review 1 Architectural Abstract Defense",
      category: "JURY",
      timestamp: "DAY 1 — 03:15 PM",
      arena: "Jury Chamber Beta",
      telemetry: "CODE & SCHEMATIC VALIDATION",
      gradient: "from-rose-900/60 via-pink-900/40 to-black"
    },
    {
      id: "GLIMPSE-04",
      title: "Hardware & Edge AI IoT Prototyping",
      category: "LABS",
      timestamp: "DAY 1 — 06:20 PM",
      arena: "Makerspace Workbench",
      telemetry: "SENSOR ARRAY HANDSHAKE",
      gradient: "from-emerald-900/60 via-teal-900/40 to-black"
    },
    {
      id: "GLIMPSE-05",
      title: "1-on-1 Senior Industry Architect Mentorship",
      category: "SPRINT",
      timestamp: "DAY 1 — 08:40 PM",
      arena: "Consultation Desks",
      telemetry: "LATENCY & ALGO REFACTOR",
      gradient: "from-purple-900/60 via-indigo-900/40 to-black"
    },
    {
      id: "GLIMPSE-06",
      title: "Grand Prix Podium & Valedictory Awards",
      category: "CEREMONY",
      timestamp: "DAY 2 — 11:30 AM",
      arena: "Main Tech Stage",
      telemetry: "₹20,000 + WYNTRIX INTERNSHIPS",
      gradient: "from-amber-900/60 via-yellow-900/40 to-black"
    }
  ];

  const filteredGlimpses = selectedFilter === "ALL"
    ? glimpses
    : glimpses.filter(g => g.category === selectedFilter);

  return (
    <section id="gallery" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 border-t border-white/10 bg-[#020205] relative overflow-hidden">
      
      {/* Background radial lighting */}
      <div className="absolute top-1/3 right-10 w-[600px] h-[400px] bg-purple-500/05 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-purple-400 bg-purple-500/10 border border-purple-500/25 mb-4">
              <Camera className="w-3.5 h-3.5 text-purple-400" />
              <span>04 / EVENT GLIMPSE SCANNER</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-display uppercase leading-tight">
              SIGHTS FROM{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                THE ARENA.
              </span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { playCyberClick(); setSelectedFilter(cat); }}
                onMouseEnter={playCyberHover}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  selectedFilter === cat
                    ? "bg-[#6575F5] text-white shadow-[0_0_12px_rgba(101,117,245,0.6)]"
                    : "bg-[#060716] text-slate-400 hover:text-white border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Glimpses Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGlimpses.map((item) => (
            <div
              key={item.id}
              onMouseEnter={playCyberHover}
              className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#060716] group h-[320px] flex flex-col justify-between p-6 transition-all duration-300 hover:border-[#8B70E8]/50 shadow-xl"
            >
              {/* Card visual background with dynamic gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-40 group-hover:opacity-70 transition-opacity duration-500`} />
              
              {/* Scanline overlay effect */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                  backgroundImage: "linear-gradient(rgba(18, 16, 38, 0) 50%, rgba(0, 0, 0, 0.25) 50%)",
                  backgroundSize: "100% 4px"
                }}
              />

              {/* Laser sweep animation on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#55E5D2] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Top metadata row */}
              <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-slate-300">
                <span className="px-2 py-0.5 rounded bg-black/60 border border-white/15 text-[#55E5D2]">
                  {item.category}
                </span>
                <span className="text-white/60">{item.timestamp}</span>
              </div>

              {/* Center icon / emblem */}
              <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                <div className="w-14 h-14 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-white group-hover:scale-110 group-hover:border-[#6575F5]/60 transition-all shadow-inner">
                  <Camera className="w-6 h-6" />
                </div>
              </div>

              {/* Bottom information */}
              <div className="relative z-10 space-y-1.5 pt-4 border-t border-white/10 bg-black/40 -mx-6 -mb-6 p-6 backdrop-blur-sm">
                <div className="font-mono text-[9px] uppercase tracking-wider text-rose-400 font-bold">
                  {item.arena}
                </div>
                <h4 className="font-display font-black text-lg text-white leading-snug group-hover:text-[#55E5D2] transition-colors">
                  {item.title}
                </h4>
                <div className="flex items-center gap-1.5 font-mono text-[9.5px] text-slate-400 pt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6575F5] animate-pulse" />
                  <span>{item.telemetry}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
