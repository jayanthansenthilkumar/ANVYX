import React, { useState, useEffect } from "react";
import { 
  X, 
  Terminal, 
  KeyRound, 
  Users, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle,
  Lock,
  ArrowRight,
  Flame,
  Radio
} from "lucide-react";
import { 
  playCyberClick, 
  playCyberHover, 
  playCyberOpen, 
  playCyberClose, 
  playCyberSuccess 
} from "../utils/audio";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegisterInstead: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ 
  isOpen, 
  onClose,
  onRegisterInstead 
}) => {
  const [authMode, setAuthMode] = useState<"code" | "credentials">("code");
  const [joinCode, setJoinCode] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [passkey, setPasskey] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [authSuccess, setAuthSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    if (isOpen) {
      playCyberOpen();
      document.body.style.overflow = "hidden";
      setErrorMessage("");
      setAuthSuccess(false);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);
    playCyberClick();

    setTimeout(() => {
      setIsLoading(false);
      if (authMode === "code" && (!joinCode || joinCode.length < 5)) {
        setErrorMessage("INVALID PROTOCOL CODE: Passcode format must be ANV-27-XXXX");
        return;
      }
      if (authMode === "credentials" && (!email || !passkey)) {
        setErrorMessage("AUTHENTICATION REJECTED: Invalid email or security passkey.");
        return;
      }
      setAuthSuccess(true);
      playCyberSuccess();
    }, 1000);
  };

  const handleClose = () => {
    playCyberClose();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md transition-all animate-fadeIn select-none"
    >
      <div 
        className="relative w-full max-w-md my-auto rounded-2xl bg-[#070918] border border-[rgba(101,117,245,0.4)] shadow-[0_0_70px_rgba(101,117,245,0.3)] overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Laser Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6575F5] via-[#55E5D2] to-[#FF405F]" />

        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between bg-[#090C22]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0E1333] border border-[#6575F5]/40 flex items-center justify-center">
              <Terminal className="w-4 h-4 text-[#55E5D2]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-lg text-white">NETRUNNER ACCESS</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[rgba(101,117,245,0.2)] text-[#55E5D2] border border-[#6575F5]/30">
                  v2.7
                </span>
              </div>
              <p className="text-xs font-mono text-gray-400">
                Squad Terminal & Participant Dashboard
              </p>
            </div>
          </div>

          <button
            onClick={handleClose}
            onMouseEnter={playCyberHover}
            className="p-2 rounded-xl text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/5 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="p-2 bg-[#040611] border-b border-white/5 flex gap-2">
          <button
            type="button"
            onClick={() => {
              playCyberClick();
              setAuthMode("code");
              setErrorMessage("");
            }}
            onMouseEnter={playCyberHover}
            className={`flex-1 py-2 rounded-lg font-mono text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              authMode === "code" 
                ? "bg-[#6575F5]/20 text-[#55E5D2] border border-[#6575F5]/40 font-bold shadow-sm" 
                : "text-gray-400 hover:text-white"
            }`}
          >
            <KeyRound className="w-3.5 h-3.5" />
            SQUAD PASSCODE
          </button>

          <button
            type="button"
            onClick={() => {
              playCyberClick();
              setAuthMode("credentials");
              setErrorMessage("");
            }}
            onMouseEnter={playCyberHover}
            className={`flex-1 py-2 rounded-lg font-mono text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              authMode === "credentials" 
                ? "bg-[#6575F5]/20 text-[#55E5D2] border border-[#6575F5]/40 font-bold shadow-sm" 
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            LEAD AUTH
          </button>
        </div>

        {/* Modal Form Content */}
        <div className="p-6">
          {authSuccess ? (
            <div className="space-y-5 text-center py-4 animate-fadeIn">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-[#55E5D2] to-[#6575F5] flex items-center justify-center shadow-[0_0_35px_rgba(85,229,210,0.6)]">
                <CheckCircle2 className="w-7 h-7 text-black" />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-white">ACCESS GRANTED</h4>
                <p className="text-xs font-mono text-[#55E5D2] mt-1">
                  AUTHENTICATED // NODE: KPR-IT-ANV27
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  Welcome to the syndicate control deck. Your live mission dashboard is primed.
                </p>
              </div>

              <button
                type="button"
                onClick={handleClose}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#6575F5] to-[#8B70E8] text-white font-mono text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                PROCEED TO MISSION CONSOLE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {authMode === "code" ? (
                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1.5 uppercase">
                    Syndicate Passcode / Join Code *
                  </label>
                  <input
                    type="text"
                    required
                    value={joinCode}
                    onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
                    placeholder="e.g. ANV-27-8491"
                    className="w-full px-4 py-3 rounded-xl bg-[#0A0D20] border border-white/10 text-white font-mono text-sm tracking-wider placeholder-gray-600 focus:border-[#6575F5] focus:outline-none uppercase"
                  />
                  <p className="text-[10px] font-mono text-gray-500 mt-1">
                    Provided by your Squad Lead upon team enrollment.
                  </p>
                </div>
              ) : (
                <>
                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1.5 uppercase">
                      Hacker Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="hacker@institution.edu"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0A0D20] border border-white/10 text-white text-sm placeholder-gray-600 focus:border-[#6575F5] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1.5 uppercase">
                      Security Passkey *
                    </label>
                    <input
                      type="password"
                      required
                      value={passkey}
                      onChange={(e) => setPasskey(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0A0D20] border border-white/10 text-white text-sm placeholder-gray-600 focus:border-[#6575F5] focus:outline-none"
                    />
                  </div>
                </>
              )}

              {/* Telemetry info */}
              <div className="p-3 rounded-xl bg-[#040612] border border-white/5 space-y-1 font-mono text-[10px] text-gray-500">
                <div className="flex justify-between">
                  <span>SECURITY CIPHER:</span>
                  <span className="text-[#55E5D2]">AES-256-GCM</span>
                </div>
                <div className="flex justify-between">
                  <span>AUTH NODE:</span>
                  <span className="text-gray-400">KPRIET-GATEWAY-27</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                onMouseEnter={playCyberHover}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#6575F5] via-[#8B70E8] to-[#FF405F] text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(101,117,245,0.4)] hover:shadow-[0_0_30px_rgba(101,117,245,0.7)] hover:scale-[1.02] active:scale-98 disabled:opacity-50 cursor-pointer transition-all"
              >
                {isLoading ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    DECRYPTING CREDENTIALS...
                  </>
                ) : (
                  <>
                    <Radio className="w-3.5 h-3.5 text-[#55E5D2]" />
                    ESTABLISH SECURE LINK
                  </>
                )}
              </button>

              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={() => {
                    handleClose();
                    onRegisterInstead();
                  }}
                  className="text-xs font-mono text-gray-400 hover:text-[#55E5D2] transition-colors cursor-pointer"
                >
                  Need a squad pass? <span className="underline decoration-[#55E5D2]/50">Register Team Here</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
