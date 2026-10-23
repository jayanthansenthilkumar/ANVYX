import React, { useState } from "react";
import { QrCode, Download, Share2, Sparkles, ShieldCheck, User, Building, Cpu } from "lucide-react";
import confetti from "canvas-confetti";
import { anvyx27Config } from "../config/anvyx27Data";
import { playCyberClick, playCyberHover, playCyberSuccess } from "../utils/audio";

export const DigitalIdPassSection: React.FC = () => {
  const [builderName, setBuilderName] = useState("Alex Vance");
  const [collegeName, setCollegeName] = useState("KPRIET, Coimbatore");
  const [domainTrack, setDomainTrack] = useState("AI & SMART TECH");
  const [builderRole, setBuilderRole] = useState("Full-Stack Systems Architect");
  const [isIeee, setIsIeee] = useState(true);
  const [passToken, setPassToken] = useState("ANV-27-8942");

  const handleDownload = () => {
    playCyberSuccess();
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#6575F5", "#8B70E8", "#FF405F", "#55E5D2"]
      });
    } catch {}
    alert(`Pass for ${builderName} (${passToken}) verified for ANVYX '27!`);
  };

  const regenerateToken = () => {
    playCyberClick();
    const rand = Math.floor(1000 + Math.random() * 9000);
    setPassToken(`ANV-27-${rand}`);
  };

  return (
    <section id="pass" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 border-t border-white/10 bg-[#020205] relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-cyan-500/05 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-[#55E5D2] bg-[#55E5D2]/10 border border-[#55E5D2]/25 mb-4">
              <QrCode className="w-3.5 h-3.5 text-[#55E5D2]" />
              <span>07 / NETRUNNER DIGITAL PASS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-display uppercase leading-tight">
              GENERATE YOUR{" "}
              <span className="bg-gradient-to-r from-[#55E5D2] via-indigo-400 to-[#FF405F] bg-clip-text text-transparent">
                BUILDER DIGITAL ID.
              </span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 font-sans max-w-xl">
              Create and preview your official ANVYX '27 holographic access badge. Features laser scan telemetry, dynamic QR payload, and verified builder credentials.
            </p>
          </div>
        </div>

        {/* Builder Pass Grid: Controls (Left) & Live Holographic Pass (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Form Controls */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#060716] border border-white/10 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="font-mono text-xs font-bold text-[#55E5D2] uppercase tracking-wider">
                ID PARAMETER CONFIGURATOR
              </span>
              <button
                onClick={regenerateToken}
                className="text-[11px] font-mono text-purple-400 hover:text-white transition-colors cursor-pointer"
              >
                [ RE-ROLL TOKEN ]
              </button>
            </div>

            {/* Builder Name */}
            <div>
              <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                Builder Name
              </label>
              <input
                type="text"
                value={builderName}
                onChange={(e) => setBuilderName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#030409] border border-white/15 text-sm text-white focus:outline-none focus:border-[#6575F5] font-sans"
              />
            </div>

            {/* College / Institution */}
            <div>
              <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                College / Institution
              </label>
              <input
                type="text"
                value={collegeName}
                onChange={(e) => setCollegeName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#030409] border border-white/15 text-sm text-white focus:outline-none focus:border-[#6575F5] font-sans"
              />
            </div>

            {/* Domain Track Selection */}
            <div>
              <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                Assigned Domain Track
              </label>
              <select
                value={domainTrack}
                onChange={(e) => setDomainTrack(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#030409] border border-white/15 text-sm text-white focus:outline-none focus:border-[#6575F5] font-sans"
              >
                {anvyx27Config.domains.map(d => (
                  <option key={d.id} value={d.name} className="bg-[#030409] text-white">
                    {d.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Builder Role */}
            <div>
              <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                Builder Role
              </label>
              <select
                value={builderRole}
                onChange={(e) => setBuilderRole(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#030409] border border-white/15 text-sm text-white focus:outline-none focus:border-[#6575F5] font-sans"
              >
                <option value="Full-Stack Systems Architect">Full-Stack Systems Architect</option>
                <option value="AI / ML Intelligence Lead">AI / ML Intelligence Lead</option>
                <option value="UI / UX Spatial Designer">UI / UX Spatial Designer</option>
                <option value="Hardware / IoT Specialist">Hardware / IoT Specialist</option>
                <option value="Cyber Defense Researcher">Cyber Defense Researcher</option>
              </select>
            </div>

            {/* IEEE Membership Toggle */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <div>
                <span className="font-mono text-xs font-bold text-slate-200 block">IEEE STUDENT AFFILIATION</span>
                <span className="text-[11px] text-slate-400 font-sans">Applies ₹500 discounted pass tier</span>
              </div>
              <button
                type="button"
                onClick={() => { playCyberClick(); setIsIeee(!isIeee); }}
                className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
                  isIeee ? "bg-[#6575F5]" : "bg-white/20"
                }`}
              >
                <span className={`block w-5 h-5 rounded-full bg-white transition-transform ${
                  isIeee ? "translate-x-6" : "translate-x-1"
                }`} />
              </button>
            </div>

            <button
              onClick={handleDownload}
              onMouseEnter={playCyberHover}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#6575F5] via-[#8B70E8] to-[#FF405F] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(101,117,245,0.4)] cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>CLAIM DIGITAL BUILDER PASS</span>
            </button>
          </div>

          {/* Right Column: Holographic Badge Visual */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[420px] rounded-3xl bg-[#030409] border-2 border-[#6575F5]/40 shadow-[0_0_60px_rgba(101,117,245,0.25)] p-6 sm:p-7 overflow-hidden group">
              
              {/* Dynamic Laser Beam Scan Effect */}
              <div 
                className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#55E5D2] to-transparent shadow-[0_0_12px_#55E5D2] z-30 pointer-events-none"
                style={{ animation: "qrLaserScan 2.4s ease-in-out infinite" }}
              />

              {/* Holographic Watermark Background */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-[#6575F5]/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-44 h-44 bg-[#FF405F]/10 rounded-full blur-2xl pointer-events-none" />

              {/* Top Pass Ribbon */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5 relative z-10">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#060716] border border-white/15 p-0.5 flex items-center justify-center">
                    <img src="/images/logo-nobg.png" alt="Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <div className="font-display font-black text-sm text-white">ANVYX '27</div>
                    <div className="text-[9px] font-mono text-slate-400">BUILDER PASS</div>
                  </div>
                </div>

                <div className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  {passToken}
                </div>
              </div>

              {/* Identity Details */}
              <div className="space-y-4 relative z-10 mb-6">
                <div>
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">
                    BUILDER NAME
                  </span>
                  <div className="font-display font-black text-2xl text-white tracking-tight">
                    {builderName || "Alex Vance"}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">
                      CAMPUS NODE
                    </span>
                    <span className="font-sans font-semibold text-slate-200 truncate block">
                      {collegeName || "KPRIET, Coimbatore"}
                    </span>
                  </div>

                  <div>
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">
                      STATUS TIER
                    </span>
                    <span className="font-mono font-bold text-[#55E5D2]">
                      {isIeee ? "IEEE STUDENT" : "NON-IEEE DELEGATE"}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">
                    ASSIGNED SECTOR
                  </span>
                  <span className="font-mono text-xs font-bold text-purple-400 uppercase">
                    {domainTrack}
                  </span>
                </div>

                <div>
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">
                    ROLE MATRIX
                  </span>
                  <span className="font-sans text-xs text-slate-300 font-medium">
                    {builderRole}
                  </span>
                </div>
              </div>

              {/* Holographic QR Code & Barcode Row */}
              <div className="pt-4 border-t border-dashed border-white/15 flex items-center justify-between relative z-10">
                <div className="w-16 h-16 p-1 rounded-xl bg-white flex items-center justify-center shadow-md">
                  {/* Stylized QR SVG */}
                  <svg className="w-full h-full" viewBox="0 0 100 100" fill="#000">
                    <rect x="10" y="10" width="30" height="30" />
                    <rect x="16" y="16" width="18" height="18" fill="#fff" />
                    <rect x="20" y="20" width="10" height="10" />
                    <rect x="60" y="10" width="30" height="30" />
                    <rect x="66" y="16" width="18" height="18" fill="#fff" />
                    <rect x="70" y="20" width="10" height="10" />
                    <rect x="10" y="60" width="30" height="30" />
                    <rect x="16" y="66" width="18" height="18" fill="#fff" />
                    <rect x="20" y="70" width="10" height="10" />
                    <rect x="48" y="20" width="6" height="6" />
                    <rect x="48" y="48" width="12" height="12" />
                    <rect x="65" y="65" width="20" height="10" />
                    <rect x="75" y="50" width="10" height="8" />
                  </svg>
                </div>

                <div className="flex flex-col items-end text-right font-mono text-[9px] text-slate-400 space-y-1">
                  <div className="text-[#55E5D2] font-bold">24H ALL-ACCESS VALIDATED</div>
                  <div>OCTOBER 08 &amp; 09, 2027</div>
                  <div className="text-white/40">KPRIET CAMPUS, COIMBATORE</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
