import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { 
  X, 
  CheckCircle2, 
  Sparkles, 
  Terminal, 
  Users, 
  User, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  Download, 
  QrCode, 
  CreditCard, 
  Check, 
  AlertCircle,
  Building,
  Phone,
  Mail,
  Flame,
  Radio,
  Cpu
} from "lucide-react";
import { anvyx27Config } from "../config/anvyx27Data";
import { 
  playCyberClick, 
  playCyberHover, 
  playCyberOpen, 
  playCyberClose, 
  playCyberSuccess 
} from "../utils/audio";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDomainId?: string;
}

interface SquadMember {
  name: string;
  email: string;
  phone: string;
  isIeeeMember: boolean;
  ieeeNumber: string;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({ 
  isOpen, 
  onClose,
  initialDomainId 
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [leadName, setLeadName] = useState<string>("");
  const [leadEmail, setLeadEmail] = useState<string>("");
  const [leadPhone, setLeadPhone] = useState<string>("");
  const [collegeName, setCollegeName] = useState<string>("");
  const [selectedDomain, setSelectedDomain] = useState<string>(initialDomainId || "ai-smart-solutions");
  
  // Squad Members (2 to 4 including lead)
  const [teamSize, setTeamSize] = useState<number>(3);
  const [members, setMembers] = useState<SquadMember[]>([
    { name: "", email: "", phone: "", isIeeeMember: false, ieeeNumber: "" },
    { name: "", email: "", phone: "", isIeeeMember: false, ieeeNumber: "" },
    { name: "", email: "", phone: "", isIeeeMember: false, ieeeNumber: "" }
  ]);
  const [leadIsIeee, setLeadIsIeee] = useState<boolean>(false);
  const [leadIeeeNumber, setLeadIeeeNumber] = useState<string>("");

  // Payment State
  const [utrNumber, setUtrNumber] = useState<string>("");
  const [paymentConfirmed, setPaymentConfirmed] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [issuedPassId, setIssuedPassId] = useState<string>("");

  useEffect(() => {
    if (initialDomainId) {
      setSelectedDomain(initialDomainId);
    }
  }, [initialDomainId]);

  useEffect(() => {
    if (isOpen) {
      playCyberOpen();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Adjust member rows when teamSize changes
  const handleTeamSizeChange = (size: number) => {
    playCyberClick();
    setTeamSize(size);
    // Number of additional members = size - 1
    const additionalCount = size - 1;
    setMembers((prev) => {
      const copy = [...prev];
      while (copy.length < additionalCount) {
        copy.push({ name: "", email: "", phone: "", isIeeeMember: false, ieeeNumber: "" });
      }
      return copy.slice(0, additionalCount);
    });
  };

  const handleMemberChange = (index: number, field: keyof SquadMember, value: any) => {
    setMembers((prev) => {
      const copy = [...prev];
      copy[index] = { ...copy[index], [field]: value };
      return copy;
    });
  };

  // Pricing calculation
  const totalIeeeCount = (leadIsIeee ? 1 : 0) + members.filter(m => m.isIeeeMember).length;
  const totalNonIeeeCount = teamSize - totalIeeeCount;
  const totalPrice = (totalIeeeCount * anvyx27Config.ieeePassFee) + (totalNonIeeeCount * anvyx27Config.nonIeeePassFee);

  const handleNextStep = () => {
    playCyberClick();
    setCurrentStep((prev) => Math.min(prev + 1, 5));
  };

  const handlePrevStep = () => {
    playCyberClick();
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!utrNumber && !paymentConfirmed) {
      alert("Please enter the payment transaction / UTR reference ID to verify squad enrollment.");
      return;
    }

    setIsSubmitting(true);
    playCyberClick();

    setTimeout(() => {
      const generatedId = `ANV-27-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;
      setIssuedPassId(generatedId);
      setIsSubmitting(false);
      setCurrentStep(5);
      playCyberSuccess();

      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.5 },
          colors: ["#6575F5", "#55E5D2", "#FF405F", "#8B70E8", "#FFFFFF"]
        });
      } catch (err) {
        console.error("Confetti trigger:", err);
      }
    }, 1200);
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
      className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-black/85 backdrop-blur-md transition-all animate-fadeIn select-none"
    >
      <div 
        className="relative w-full max-w-3xl my-auto rounded-2xl bg-[#060814] border border-[rgba(101,117,245,0.4)] shadow-[0_0_80px_rgba(101,117,245,0.25)] overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Laser Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6575F5] via-[#55E5D2] to-[#FF405F]" />

        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between bg-[#080B1C]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0C1026] border border-[#6575F5]/40 flex items-center justify-center">
              <Cpu className="w-4 h-4 text-[#55E5D2]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-lg text-white">ANVYX '27 SQUAD PROTOCOL</span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[rgba(101,117,245,0.2)] text-[#55E5D2] border border-[#6575F5]/30">
                  STEP {currentStep} / 5
                </span>
              </div>
              <p className="text-xs font-mono text-gray-400">
                Official Department of IT, KPRIET Registration Gateway
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

        {/* Step Indicator Wizard Bar */}
        <div className="px-6 py-3 bg-[#03050c] border-b border-white/5 flex items-center justify-between overflow-x-auto text-[11px] font-mono">
          {[
            { step: 1, label: "01 // SQUAD LEAD" },
            { step: 2, label: "02 // DOMAIN" },
            { step: 3, label: "03 // MEMBERS" },
            { step: 4, label: "04 // FEE & UPI" },
            { step: 5, label: "05 // PASS" }
          ].map((item) => (
            <div 
              key={item.step}
              className={`flex items-center gap-1.5 shrink-0 px-2.5 py-1 rounded-md transition-all ${
                currentStep === item.step 
                  ? "bg-[#6575F5]/20 text-[#55E5D2] border border-[#6575F5]/40 font-bold" 
                  : currentStep > item.step 
                    ? "text-gray-400 line-through decoration-[#55E5D2]/50" 
                    : "text-gray-600"
              }`}
            >
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Body Content by Step */}
        <div className="p-6 sm:p-8 max-h-[72vh] overflow-y-auto">
          
          {/* STEP 1: SQUAD LEAD & INSTITUTION */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="border-l-2 border-[#6575F5] pl-3">
                <h3 className="font-display font-bold text-xl text-white">Squad Lead Coordinates</h3>
                <p className="text-xs font-mono text-gray-400 mt-0.5">
                  The syndicate lead will receive pass tokens and official jury communications.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1.5 uppercase">
                    Lead Hacker Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    placeholder="e.g. Alex Mercer"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0A0D20] border border-white/10 text-white placeholder-gray-600 text-sm focus:border-[#6575F5] focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1.5 uppercase">
                    Email Address (Official/College) *
                  </label>
                  <input
                    type="email"
                    required
                    value={leadEmail}
                    onChange={(e) => setLeadEmail(e.target.value)}
                    placeholder="alex@institution.edu.in"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0A0D20] border border-white/10 text-white placeholder-gray-600 text-sm focus:border-[#6575F5] focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1.5 uppercase">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={leadPhone}
                    onChange={(e) => setLeadPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0A0D20] border border-white/10 text-white placeholder-gray-600 text-sm focus:border-[#6575F5] focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1.5 uppercase">
                    College / University Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={collegeName}
                    onChange={(e) => setCollegeName(e.target.value)}
                    placeholder="e.g. KPR Institute of Engg & Tech"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0A0D20] border border-white/10 text-white placeholder-gray-600 text-sm focus:border-[#6575F5] focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* IEEE Membership Check for Lead */}
              <div className="p-4 rounded-xl bg-[#0A0E24] border border-[rgba(101,117,245,0.25)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="leadIeee"
                    checked={leadIsIeee}
                    onChange={(e) => {
                      playCyberClick();
                      setLeadIsIeee(e.target.checked);
                    }}
                    className="w-4 h-4 rounded text-[#6575F5] accent-[#6575F5] bg-gray-900 border-gray-700 cursor-pointer"
                  />
                  <label htmlFor="leadIeee" className="text-xs font-mono text-gray-200 cursor-pointer">
                    Lead is an <span className="text-[#55E5D2] font-bold">IEEE Student Member</span> (₹500 special pass)
                  </label>
                </div>

                {leadIsIeee && (
                  <input
                    type="text"
                    value={leadIeeeNumber}
                    onChange={(e) => setLeadIeeeNumber(e.target.value)}
                    placeholder="Enter IEEE Member #"
                    className="px-3 py-1.5 rounded-lg bg-[#04060F] border border-[#55E5D2]/40 text-xs font-mono text-[#55E5D2] placeholder-gray-600 focus:outline-none"
                  />
                )}
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={handleNextStep}
                  disabled={!leadName || !leadEmail || !leadPhone}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#6575F5] to-[#8B70E8] text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:shadow-[0_0_20px_rgba(101,117,245,0.6)] disabled:opacity-40 disabled:pointer-events-none cursor-pointer transition-all"
                >
                  SELECT DOMAIN SECTOR
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: DOMAIN TRACK SELECTION */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="border-l-2 border-[#55E5D2] pl-3">
                <h3 className="font-display font-bold text-xl text-white">Choose Primary Domain Sector</h3>
                <p className="text-xs font-mono text-gray-400 mt-0.5">
                  Select the battleground where your team will engineer their 24-hour solution.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {anvyx27Config.domains.map((domain) => {
                  const isSelected = selectedDomain === domain.id;
                  return (
                    <div
                      key={domain.id}
                      onClick={() => {
                        playCyberClick();
                        setSelectedDomain(domain.id);
                      }}
                      onMouseEnter={playCyberHover}
                      className={`p-4 rounded-xl border cursor-pointer transition-all ${
                        isSelected 
                          ? "bg-[rgba(101,117,245,0.15)] border-[#55E5D2] shadow-[0_0_25px_rgba(85,229,210,0.25)]" 
                          : "bg-[#090C1C] border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-display font-bold text-sm text-white">
                          {domain.name}
                        </span>
                        {isSelected && <Check className="w-4 h-4 text-[#55E5D2]" />}
                      </div>
                      <p className="text-[11px] text-gray-400 line-clamp-2">
                        {domain.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2.5">
                        {domain.tags.slice(0, 3).map((tag, tIdx) => (
                          <span key={tIdx} className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white font-mono text-xs cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  BACK
                </button>
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#6575F5] to-[#8B70E8] text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:shadow-[0_0_20px_rgba(101,117,245,0.6)] cursor-pointer transition-all"
                >
                  CONFIGURE SQUAD MEMBERS
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: SQUAD SIZE & MEMBERS */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="border-l-2 border-[#8B70E8] pl-3">
                <h3 className="font-display font-bold text-xl text-white">Squad Manifest & Teammates</h3>
                <p className="text-xs font-mono text-gray-400 mt-0.5">
                  Teams must consist of 2 to 4 members. Specify IEEE status for each member.
                </p>
              </div>

              {/* Team Size Selector */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-gray-300 uppercase">Squad Size:</span>
                {[2, 3, 4].map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => handleTeamSizeChange(size)}
                    onMouseEnter={playCyberHover}
                    className={`px-4 py-2 rounded-xl font-mono text-xs uppercase border cursor-pointer transition-all ${
                      teamSize === size 
                        ? "bg-[#6575F5] text-white border-[#6575F5] shadow-[0_0_15px_rgba(101,117,245,0.5)] font-bold" 
                        : "bg-[#090C1B] text-gray-400 border-white/10 hover:border-white/20"
                    }`}
                  >
                    {size} Builders
                  </button>
                ))}
              </div>

              {/* Member Rows */}
              <div className="space-y-4">
                {/* Lead Summary Row */}
                <div className="p-3.5 rounded-xl bg-[#090D22] border border-white/10 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-[#6575F5]/30 text-[#55E5D2] font-bold">MEMBER 1 (LEAD)</span>
                    <span className="text-white font-medium">{leadName || "Lead Hacker"}</span>
                  </div>
                  <span className={leadIsIeee ? "text-[#55E5D2]" : "text-gray-400"}>
                    {leadIsIeee ? "IEEE Pass (₹500)" : "Non-IEEE Pass (₹600)"}
                  </span>
                </div>

                {/* Additional Members Inputs */}
                {members.map((member, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-xl bg-[#070918] border border-white/10 space-y-3"
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-[#8B70E8] font-bold">
                      <span>MEMBER {index + 2} DETAILS</span>
                      <span className="text-[10px] text-gray-500">OPERATIVE #{index + 2}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[10px] font-mono text-gray-400 mb-1 uppercase">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={member.name}
                          onChange={(e) => handleMemberChange(index, "name", e.target.value)}
                          placeholder="Member Name"
                          className="w-full px-3 py-2 rounded-lg bg-[#0D1126] border border-white/10 text-white placeholder-gray-600 text-xs focus:border-[#6575F5] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono text-gray-400 mb-1 uppercase">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={member.email}
                          onChange={(e) => handleMemberChange(index, "email", e.target.value)}
                          placeholder="member@college.edu"
                          className="w-full px-3 py-2 rounded-lg bg-[#0D1126] border border-white/10 text-white placeholder-gray-600 text-xs focus:border-[#6575F5] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono text-gray-400 mb-1 uppercase">Phone Number</label>
                        <input
                          type="tel"
                          value={member.phone}
                          onChange={(e) => handleMemberChange(index, "phone", e.target.value)}
                          placeholder="+91..."
                          className="w-full px-3 py-2 rounded-lg bg-[#0D1126] border border-white/10 text-white placeholder-gray-600 text-xs focus:border-[#6575F5] focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Member IEEE Check */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-1 border-t border-white/5">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id={`mem-ieee-${index}`}
                          checked={member.isIeeeMember}
                          onChange={(e) => handleMemberChange(index, "isIeeeMember", e.target.checked)}
                          className="w-3.5 h-3.5 rounded text-[#6575F5] accent-[#6575F5] bg-gray-900 border-gray-700 cursor-pointer"
                        />
                        <label htmlFor={`mem-ieee-${index}`} className="text-[11px] font-mono text-gray-300 cursor-pointer">
                          This builder is an <span className="text-[#55E5D2]">IEEE Member</span> (₹500 Pass)
                        </label>
                      </div>

                      {member.isIeeeMember && (
                        <input
                          type="text"
                          value={member.ieeeNumber}
                          onChange={(e) => handleMemberChange(index, "ieeeNumber", e.target.value)}
                          placeholder="IEEE Member Number"
                          className="px-2.5 py-1 rounded bg-[#04060F] border border-[#55E5D2]/40 text-[11px] font-mono text-[#55E5D2] placeholder-gray-600 focus:outline-none"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white font-mono text-xs cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  BACK
                </button>
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#6575F5] to-[#8B70E8] text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:shadow-[0_0_20px_rgba(101,117,245,0.6)] cursor-pointer transition-all"
                >
                  REVIEW PRICING & PAYMENT
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: FEE COMPUTATION & UPI PAYMENT */}
          {currentStep === 4 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="border-l-2 border-[#FF405F] pl-3">
                <h3 className="font-display font-bold text-xl text-white">Delegation Admission & Payment</h3>
                <p className="text-xs font-mono text-gray-400 mt-0.5">
                  Includes 24H AC hack lab access, 4 meals, hi-tea, night snacks, Wi-Fi 6, and participant kits.
                </p>
              </div>

              {/* Dynamic Price Breakdown Box */}
              <div className="p-5 rounded-2xl bg-[#090C1F] border border-[rgba(101,117,245,0.3)] shadow-[0_0_30px_rgba(101,117,245,0.15)] space-y-3 font-mono">
                <div className="flex items-center justify-between text-xs text-gray-300 pb-2 border-b border-white/10">
                  <span>IEEE Member Passes ({totalIeeeCount} × ₹{anvyx27Config.ieeePassFee})</span>
                  <span className="text-white font-bold">₹{totalIeeeCount * anvyx27Config.ieeePassFee}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-300 pb-2 border-b border-white/10">
                  <span>Non-IEEE Delegate Passes ({totalNonIeeeCount} × ₹{anvyx27Config.nonIeeePassFee})</span>
                  <span className="text-white font-bold">₹{totalNonIeeeCount * anvyx27Config.nonIeeePassFee}</span>
                </div>
                <div className="flex items-center justify-between text-base font-bold pt-1">
                  <span className="text-white">TOTAL SQUAD ADMISSION FEE</span>
                  <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#55E5D2] to-[#6575F5]">
                    ₹{totalPrice}
                  </span>
                </div>
              </div>

              {/* UPI QR & Bank Coordinates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center p-4 rounded-xl bg-[#050713] border border-white/10">
                <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#0A0E24] border border-[#55E5D2]/30 text-center">
                  <div className="w-36 h-36 p-2 rounded-lg bg-white flex items-center justify-center shadow-lg mb-2">
                    {/* Simulated Clean Dynamic QR Code */}
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=upi://pay?pa=kpriet.anvyx@upi%26pn=ANVYX27_KPRIET%26am=${totalPrice}%26cu=INR`}
                      alt="UPI QR Code for Payment"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-[11px] font-mono text-[#55E5D2] font-bold">
                    SCAN WITH ANY UPI APP
                  </span>
                  <span className="text-[10px] font-mono text-gray-400">
                    GPay, PhonePe, Paytm, BHIM
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase">UPI VPA / ID:</span>
                    <div className="text-sm text-white font-bold tracking-wide">
                      kpriet.anvyx@upi
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase">Beneficiary:</span>
                    <div className="text-xs text-gray-300">
                      KPR Institute of Engineering and Technology (Dept of IT)
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase">Amount to Transfer:</span>
                    <div className="text-sm font-bold text-[#55E5D2]">
                      ₹{totalPrice} (Exact Amount)
                    </div>
                  </div>
                </div>
              </div>

              {/* UTR Input Form */}
              <form onSubmit={handleFinalSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1.5 uppercase">
                    UPI Transaction ID / 12-Digit UTR Reference Number *
                  </label>
                  <input
                    type="text"
                    required
                    value={utrNumber}
                    onChange={(e) => setUtrNumber(e.target.value)}
                    placeholder="e.g. 427819204812"
                    className="w-full px-4 py-3 rounded-xl bg-[#0A0D20] border border-[#6575F5]/40 text-white font-mono text-sm placeholder-gray-600 focus:border-[#55E5D2] focus:outline-none"
                  />
                  <p className="text-[10px] font-mono text-gray-500 mt-1">
                    * Found in your UPI app receipt after making the payment transfer.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white font-mono text-xs cursor-pointer flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    BACK
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting || !utrNumber}
                    className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#6575F5] via-[#55E5D2] to-[#FF405F] text-black font-mono font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-[0_0_25px_rgba(85,229,210,0.5)] hover:scale-105 active:scale-95 disabled:opacity-40 disabled:pointer-events-none cursor-pointer transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        VERIFYING TRANSACTION...
                      </>
                    ) : (
                      <>
                        <Flame className="w-4 h-4 text-black" />
                        CONFIRM SQUAD ENROLLMENT
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* STEP 5: CRYPTOGRAPHIC SQUAD PASS CONFIRMATION */}
          {currentStep === 5 && (
            <div className="space-y-6 text-center animate-fadeIn">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#55E5D2] to-[#6575F5] flex items-center justify-center shadow-[0_0_40px_rgba(85,229,210,0.6)]">
                <CheckCircle2 className="w-8 h-8 text-black" />
              </div>

              <div>
                <span className="text-xs font-mono text-[#55E5D2] tracking-widest uppercase">
                  REGISTRATION VERIFIED & ALLOCATED
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-display text-white mt-1">
                  SQUAD PASS ISSUED // ANVYX '27
                </h3>
                <p className="text-xs text-gray-400 font-mono mt-1 max-w-md mx-auto">
                  Your team has been authenticated. Check your lead email for the digital kit and bring this pass on Oct 08.
                </p>
              </div>

              {/* Digital Pass Card */}
              <div className="max-w-md mx-auto p-6 rounded-2xl bg-[#080B1C] border border-[#55E5D2]/50 shadow-[0_0_50px_rgba(85,229,210,0.2)] text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 px-3 py-1 bg-[#6575F5] text-[10px] font-mono text-white font-bold rounded-bl-xl uppercase">
                  CONFIRMED PASS
                </div>

                <div className="font-mono text-xs text-[#55E5D2] mb-1">
                  PASS CODE: <span className="text-white font-bold">{issuedPassId}</span>
                </div>
                <div className="text-base font-bold text-white mb-2">
                  {leadName}'s Syndicate ({teamSize} Hackers)
                </div>
                <div className="text-xs font-mono text-gray-400 mb-4">
                  Track: {anvyx27Config.domains.find(d => d.id === selectedDomain)?.name}
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-400">
                  <span>VENUE: KPRIET Campus</span>
                  <span className="text-[#55E5D2]">OCT 08-09, 2027</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full sm:w-auto px-8 py-3 rounded-xl bg-[#6575F5] hover:bg-[#8B70E8] text-white font-mono text-xs font-bold uppercase tracking-wider cursor-pointer transition-all shadow-[0_0_20px_rgba(101,117,245,0.4)]"
                >
                  RETURN TO ARENA
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
