import React, { useState, useEffect } from "react";
import { 
  Radio, 
  Tv, 
  Sparkles, 
  Flame, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  ArrowLeft,
  Activity,
  Layers,
  Terminal,
  Volume2
} from "lucide-react";
import { anvyx27Config } from "../config/anvyx27Data";
import { playCyberClick, playCyberHover } from "../utils/audio";

interface LiveFeedViewProps {
  onBackToHome: () => void;
  onRegisterClick: () => void;
}

export const LiveFeedView: React.FC<LiveFeedViewProps> = ({ 
  onBackToHome,
  onRegisterClick 
}) => {
  const [activeTab, setActiveTab] = useState<"reviews" | "stream" | "announcements">("reviews");
  const [tickerTime, setTickerTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTickerTime(now.toLocaleTimeString("en-US", { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const reviews = [
    {
      round: "REVIEW 01",
      title: "Problem Statement Alignment & Architecture",
      weight: "15 MARKS",
      schedule: "DAY 1 — 16:00 HRS",
      status: "SCHEDULED",
      criteria: [
        "Clarity and novelty of chosen problem statement",
        "System architecture & chosen technology stack",
        "Feasibility and modular breakdown of components",
        "Preliminary Git repo structure and task allocation"
      ]
    },
    {
      round: "REVIEW 02",
      title: "Mid-Sprint Working Prototype & Logic",
      weight: "20 MARKS",
      schedule: "DAY 1 — 22:30 HRS (MIDNIGHT LABS)",
      status: "SCHEDULED",
      criteria: [
        "Working core algorithms & backend endpoints",
        "UI wireframe to interactive code transformation",
        "Integration of required APIs, databases, or AI models",
        "Team velocity and obstacle mitigation capability"
      ]
    },
    {
      round: "REVIEW 03",
      title: "Final Deployment, Live Demo & Pitch",
      weight: "15 MARKS",
      schedule: "DAY 2 — 09:30 HRS (AUDITORIUM)",
      status: "SCHEDULED",
      criteria: [
        "Live deployed demonstration (zero mockups allowed)",
        "User experience, responsiveness, and performance",
        "Real-world business value and market scalability",
        "Confidence, Q&A responses, and code quality"
      ]
    }
  ];

  const announcements = [
    { time: "08:30 IST", tag: "GATEWAY", message: "Check-in & delegate kit distribution initialized at Auditorium Foyer." },
    { time: "09:30 IST", tag: "CEREMONY", message: "Inaugural address by Chief Guest & Industry Keynote in Main Auditorium." },
    { time: "10:30 IST", tag: "SPRINT", message: "Hacking countdown initiates! 24-Hour timer running across all labs." },
    { time: "13:30 IST", tag: "REFUEL", message: "Buffet lunch served at KPRIET Central Dining Facility." },
    { time: "16:00 IST", tag: "JURY", message: "Jury Review 1 commences across Lab 01 to Lab 06." },
    { time: "20:30 IST", tag: "DINNER", message: "Grand dinner buffet & midnight caffeine bar opens." },
    { time: "23:00 IST", tag: "JAM", message: "Midnight acoustic session & gaming pitstops live in recreation block." }
  ];

  return (
    <div className="min-h-screen bg-[#020206] text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8 select-none relative overflow-hidden">
      {/* Background Cybernetic Aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-[#6575F5]/15 via-[#8B70E8]/5 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        
        {/* Navigation & Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <button
            onClick={() => {
              playCyberClick();
              onBackToHome();
            }}
            onMouseEnter={playCyberHover}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#090C1F] border border-white/10 hover:border-[#6575F5] text-xs font-mono text-gray-300 hover:text-white transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#6575F5]" />
            RETURN TO MAIN OVERVIEW
          </button>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              LIVE TELEMETRY
            </span>
            <span className="font-mono text-xs text-[#55E5D2]">
              SYS TIME: {tickerTime || "08:44:12"}
            </span>
          </div>
        </div>

        {/* Hero Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6575F5]/10 border border-[#6575F5]/30 text-[#55E5D2] font-mono text-xs uppercase tracking-widest">
            <Radio className="w-3.5 h-3.5 text-[#55E5D2] animate-pulse" />
            MISSION BROADCAST & EVALUATION PROTOCOL
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-white">
            ANVYX '27 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6575F5] via-[#55E5D2] to-[#FF405F]">LIVE DECK</span>
          </h1>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto font-mono">
            Direct feed into jury review criteria, live stage stream, and real-time announcements from KPRIET Campus.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#080B1C] border border-white/10 gap-2 font-mono text-xs">
            <button
              onClick={() => {
                playCyberClick();
                setActiveTab("reviews");
              }}
              className={`px-5 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "reviews" 
                  ? "bg-[#6575F5] text-white shadow-[0_0_15px_rgba(101,117,245,0.5)] font-bold" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Award className="w-4 h-4" />
              JURY RUBRIC (50M)
            </button>

            <button
              onClick={() => {
                playCyberClick();
                setActiveTab("stream");
              }}
              className={`px-5 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "stream" 
                  ? "bg-[#6575F5] text-white shadow-[0_0_15px_rgba(101,117,245,0.5)] font-bold" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Tv className="w-4 h-4" />
              STAGE STREAM
            </button>

            <button
              onClick={() => {
                playCyberClick();
                setActiveTab("announcements");
              }}
              className={`px-5 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "announcements" 
                  ? "bg-[#6575F5] text-white shadow-[0_0_15px_rgba(101,117,245,0.5)] font-bold" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Terminal className="w-4 h-4" />
              LIVE TICKER
            </button>
          </div>
        </div>

        {/* TAB 1: JURY REVIEWS */}
        {activeTab === "reviews" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            {reviews.map((rev, idx) => (
              <div 
                key={idx}
                className="rounded-2xl p-6 bg-[#080B1E] border border-[rgba(101,117,245,0.25)] hover:border-[#55E5D2] transition-all relative overflow-hidden group shadow-[0_0_30px_rgba(101,117,245,0.1)]"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-black text-[#55E5D2] px-2.5 py-1 rounded bg-[#55E5D2]/10 border border-[#55E5D2]/30">
                    {rev.round}
                  </span>
                  <span className="text-xs font-mono font-bold text-white px-2 py-0.5 rounded bg-white/10">
                    {rev.weight}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-display text-white mb-2 group-hover:text-[#55E5D2] transition-colors">
                  {rev.title}
                </h3>

                <div className="text-xs font-mono text-gray-400 flex items-center gap-1.5 mb-4 pb-3 border-b border-white/10">
                  <Clock className="w-3.5 h-3.5 text-[#6575F5]" />
                  {rev.schedule}
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase text-gray-400 font-bold block">
                    EVALUATION PILLARS:
                  </span>
                  {rev.criteria.map((crit, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#55E5D2] shrink-0 mt-0.5" />
                      <span>{crit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: SIMULATED STAGE STREAM */}
        {activeTab === "stream" && (
          <div className="rounded-2xl p-6 bg-[#080B1E] border border-[rgba(101,117,245,0.3)] shadow-[0_0_40px_rgba(101,117,245,0.2)] animate-fadeIn space-y-4">
            <div className="aspect-video w-full rounded-xl bg-[#04060F] border border-white/10 relative flex flex-col items-center justify-center overflow-hidden">
              {/* Scanlines Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none" />

              <div className="w-16 h-16 rounded-full bg-[#6575F5]/20 border border-[#6575F5] flex items-center justify-center animate-pulse mb-3">
                <Radio className="w-8 h-8 text-[#55E5D2]" />
              </div>

              <span className="font-display font-black text-xl text-white tracking-wide">
                ANVYX '27 STAGE FEED STANDBY
              </span>
              <span className="text-xs font-mono text-gray-400 mt-1">
                CAM 01 // AUDITORIUM MAIN PODIUM · 4K 60FPS
              </span>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-gray-400 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  FEED PRIMED FOR OCT 08 09:00 IST
                </span>
                <span>KPRIET NETWORK: 10 Gbps FIBER</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div className="text-xs font-mono text-gray-400">
                Live stream commentary, project spotlights, and keynote presentations will be broadcasted here during the hackathon.
              </div>
              <button
                onClick={() => {
                  playCyberClick();
                  onRegisterClick();
                }}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#6575F5] to-[#8B70E8] text-white font-mono text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                JOIN AS DELEGATE
              </button>
            </div>
          </div>
        )}

        {/* TAB 3: ANNOUNCEMENTS */}
        {activeTab === "announcements" && (
          <div className="rounded-2xl p-6 bg-[#080B1E] border border-[rgba(101,117,245,0.3)] shadow-[0_0_40px_rgba(101,117,245,0.2)] animate-fadeIn space-y-4">
            <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
              <Terminal className="w-5 h-5 text-[#55E5D2]" />
              OFFICIAL SYSTEM DISPATCHES
            </h3>

            <div className="space-y-3 font-mono text-xs">
              {announcements.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#050713] border border-white/5 flex flex-col sm:flex-row items-start sm:items-center gap-3 hover:border-white/15 transition-all"
                >
                  <span className="text-gray-500 shrink-0">{item.time}</span>
                  <span className="px-2 py-0.5 rounded bg-[#6575F5]/20 text-[#55E5D2] border border-[#6575F5]/30 text-[10px] font-bold shrink-0">
                    {item.tag}
                  </span>
                  <span className="text-gray-200">{item.message}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
