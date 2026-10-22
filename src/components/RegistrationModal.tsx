import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { X, CheckCircle, Sparkles, Terminal, Users, User, ArrowRight, ShieldCheck, Download, Calendar, ExternalLink } from "lucide-react";
import { anvyxConfig } from "../config/anvyxConfig";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [teamSize, setTeamSize] = useState<number>(2);
  const [selectedTrack, setSelectedTrack] = useState<string>("ai");
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [githubHandle, setGithubHandle] = useState<string>("");
  const [attendanceType, setAttendanceType] = useState<"physical" | "virtual">("physical");
  const [status, setStatus] = useState<"idle" | "submitting" | "confirmed">("idle");
  const [passToken, setPassToken] = useState<string>("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;

    setStatus("submitting");

    setTimeout(() => {
      const generatedToken = `ANV-27-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
      setPassToken(generatedToken);
      setStatus("confirmed");

      // Trigger celebratory particle explosion
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#58E6FF", "#9878FF", "#F4F6FF", "#10162A"]
        });
      } catch (err) {
        console.error("Confetti trigger:", err);
      }
    }, 900);
  };

  const handleReset = () => {
    setStatus("idle");
    setFullName("");
    setEmail("");
    setGithubHandle("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="registration-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md transition-all animate-fadeIn"
    >
      <div 
        className="relative w-full max-w-2xl rounded-2xl bg-[#080A12] border border-white/15 shadow-[0_0_80px_rgba(88,230,255,0.2)] overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top luminous decorative accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#58E6FF] via-[#9878FF] to-transparent" />

        {/* Modal Close Button */}
        <button
          onClick={onClose}
          aria-label="Close registration modal"
          className="absolute top-5 right-5 p-2 rounded-xl text-[#9BA8C7] hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {status !== "confirmed" ? (
          <div className="p-6 sm:p-8 md:p-10">
            {/* Header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-[#58E6FF] bg-[#58E6FF]/10 border border-[#58E6FF]/25 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Section 07 // Builder Protocol</span>
              </div>
              <h2 id="registration-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F4F6FF] font-['Space_Grotesk']">
                YOUR IDEA BELONGS IN THE FUTURE.
              </h2>
              <p className="text-xs sm:text-sm text-[#9BA8C7] font-['Inter'] mt-2">
                Secure your cohort entry for ANVYX ’27. Eight hours of radical focus alongside the world's most driven engineers and designers.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Squad Size Selector */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#58E6FF] mb-2.5">
                  Squad Configuration
                </label>
                <div className="grid grid-cols-4 gap-2.5">
                  {[1, 2, 3, 4].map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setTeamSize(size)}
                      className={`p-3 rounded-xl border text-xs font-mono flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                        teamSize === size
                          ? "bg-[#58E6FF]/15 border-[#58E6FF] text-[#58E6FF] shadow-[0_0_15px_rgba(88,230,255,0.25)] font-bold"
                          : "bg-[#10162A]/60 border-white/10 text-[#9BA8C7] hover:border-white/25"
                      }`}
                    >
                      {size === 1 ? <User className="w-4 h-4" /> : <Users className="w-4 h-4" />}
                      <span>{size === 1 ? "Solo Builder" : `${size} Creators`}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Challenge Track */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#58E6FF] mb-2.5">
                  Primary Dimension Track
                </label>
                <select
                  value={selectedTrack}
                  onChange={(e) => setSelectedTrack(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#10162A] border border-white/15 text-sm text-[#F4F6FF] focus:outline-none focus:border-[#58E6FF] transition-colors"
                >
                  {anvyxConfig.challengeDomains.map((domain) => (
                    <option key={domain.id} value={domain.id} className="bg-[#10162A] text-white">
                      {domain.title} — ({domain.tagline})
                    </option>
                  ))}
                </select>
              </div>

              {/* Attendance Mode */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#58E6FF] mb-2.5">
                  Participation Vector
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setAttendanceType("physical")}
                    className={`p-3 rounded-xl border text-xs font-mono text-left transition-all cursor-pointer ${
                      attendanceType === "physical"
                        ? "bg-[#58E6FF]/15 border-[#58E6FF] text-[#58E6FF]"
                        : "bg-[#10162A]/60 border-white/10 text-[#9BA8C7]"
                    }`}
                  >
                    <div className="font-bold text-white mb-0.5">Physical Cohort</div>
                    <div className="text-[11px] opacity-80">Metropolitan Arena // In-Person</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setAttendanceType("virtual")}
                    className={`p-3 rounded-xl border text-xs font-mono text-left transition-all cursor-pointer ${
                      attendanceType === "virtual"
                        ? "bg-[#9878FF]/15 border-[#9878FF] text-[#9878FF]"
                        : "bg-[#10162A]/60 border-white/10 text-[#9BA8C7]"
                    }`}
                  >
                    <div className="font-bold text-white mb-0.5">Virtual Stream</div>
                    <div className="text-[11px] opacity-80">Global Decentralized Node</div>
                  </button>
                </div>
              </div>

              {/* Creator Credentials Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#9BA8C7] mb-1.5">
                    Lead Creator Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Vance"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#10162A] border border-white/15 text-sm text-[#F4F6FF] placeholder:text-white/20 focus:outline-none focus:border-[#58E6FF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#9BA8C7] mb-1.5">
                    Primary Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@domain.dev"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#10162A] border border-white/15 text-sm text-[#F4F6FF] placeholder:text-white/20 focus:outline-none focus:border-[#58E6FF]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#9BA8C7] mb-1.5">
                  GitHub / Portfolio Handle (Optional)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/30 font-mono text-xs">
                    github.com/
                  </div>
                  <input
                    type="text"
                    placeholder="username"
                    value={githubHandle}
                    onChange={(e) => setGithubHandle(e.target.value)}
                    className="w-full pl-28 pr-4 py-3 rounded-xl bg-[#10162A] border border-white/15 text-sm text-[#F4F6FF] placeholder:text-white/20 focus:outline-none focus:border-[#58E6FF]"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#58E6FF] to-[#9878FF] text-[#080A12] font-bold text-sm flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.99] transition-all shadow-[0_0_25px_rgba(88,230,255,0.3)] disabled:opacity-50 cursor-pointer"
                >
                  {status === "submitting" ? (
                    <span className="flex items-center gap-2 font-mono">
                      <span className="w-4 h-4 border-2 border-[#080A12] border-t-transparent rounded-full animate-spin" />
                      Cryptographically Registering...
                    </span>
                  ) : (
                    <>
                      <span>TRANSMIT REGISTRATION INTENT</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-[#9BA8C7]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#58E6FF]" />
                <span>Zero registration fee. Strict privacy protocol. Instant cryptographic pass generation.</span>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Screen / Verified Pass */
          <div className="p-8 sm:p-10 text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#58E6FF]/20 border border-[#58E6FF] flex items-center justify-center text-[#58E6FF] shadow-[0_0_30px_rgba(88,230,255,0.4)]">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-[#58E6FF]/10 text-[#58E6FF] border border-[#58E6FF]/30">
                REGISTRATION CONFIRMED // LIVE
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#F4F6FF] font-['Space_Grotesk']">
                Welcome to ANVYX ’27.
              </h3>
              <p className="text-sm text-[#9BA8C7] font-['Inter'] max-w-md mx-auto">
                Your builder seat has been verified and registered into the cohort schedule.
              </p>
            </div>

            {/* Futuristic Digital Pass Card */}
            <div className="relative max-w-md mx-auto p-6 rounded-2xl bg-gradient-to-b from-[#10162A] to-[#080A12] border border-white/20 shadow-2xl text-left overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#58E6FF]/10 rounded-full blur-2xl" />
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div>
                  <div className="font-['Space_Grotesk'] font-bold text-lg text-white">ANVYX ’27 PASS</div>
                  <div className="text-[10px] font-mono text-[#58E6FF]">OFFICIAL COHORT TICKET</div>
                </div>
                <div className="font-mono text-xs font-bold text-[#58E6FF] px-2 py-1 bg-[#58E6FF]/10 rounded border border-[#58E6FF]/25">
                  {passToken}
                </div>
              </div>

              <div className="space-y-2.5 text-xs font-mono text-[#9BA8C7]">
                <div className="flex justify-between">
                  <span>BUILDER:</span>
                  <span className="text-white font-bold">{fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span>SQUAD SIZE:</span>
                  <span className="text-white">{teamSize} Participant{teamSize > 1 ? "s" : ""}</span>
                </div>
                <div className="flex justify-between">
                  <span>DIMENSION:</span>
                  <span className="text-[#9878FF] uppercase">{selectedTrack}</span>
                </div>
                <div className="flex justify-between">
                  <span>VECTOR:</span>
                  <span className="text-[#58E6FF] uppercase">{attendanceType}</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-dashed border-white/15 flex items-center justify-between text-[11px] font-mono text-white/50">
                <span>8-HOUR CONTINUOUS SPRINT</span>
                <span>MARCH 2027</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={anvyxConfig.links.discordUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-mono transition-colors"
              >
                <span>Join Discord Arena</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-white/20 text-[#9BA8C7] hover:text-white text-xs font-mono transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
