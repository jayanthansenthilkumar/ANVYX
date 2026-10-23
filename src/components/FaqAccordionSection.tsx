import React, { useState } from "react";
import { HelpCircle, ChevronDown, MessageSquare } from "lucide-react";
import { anvyx27Config } from "../config/anvyx27Data";
import { playCyberClick, playCyberHover } from "../utils/audio";

export const FaqAccordionSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("faq-01");
  const faqs = anvyx27Config.faqs;

  const toggleAccordion = (id: string) => {
    playCyberClick();
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 border-t border-white/10 bg-[#020205] relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-500/05 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/25 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-400" />
            <span>10 / FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-display uppercase leading-tight">
            FREQUENTLY ASKED{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-400 bg-clip-text text-transparent">
              QUESTIONS.
            </span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 font-sans">
            Clear guidelines on participation rules, accommodations, judging rubrics, and team structures.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#0A0D24] border-[#6575F5] shadow-[0_0_30px_rgba(101,117,245,0.18)]"
                    : "bg-[#060716] border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  onMouseEnter={playCyberHover}
                  className="w-full p-6 text-left flex items-start justify-between gap-4 cursor-pointer"
                >
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-indigo-400 uppercase tracking-widest font-semibold block">
                      // {faq.category}
                    </span>
                    <h3 className="font-display font-black text-base sm:text-lg text-white leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 shrink-0 mt-1 transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-[#6575F5] text-white" : ""
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-white/5">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Help Card */}
        <div className="mt-14 p-6 rounded-2xl bg-[#060716] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white font-display">
                Have a specialized inquiry?
              </div>
              <div className="text-xs text-slate-400 font-sans">
                Our student and faculty hackathon desk is on standby 24/7.
              </div>
            </div>
          </div>

          <a
            href={`tel:${anvyx27Config.coordinators.student[0].phone}`}
            onClick={playCyberClick}
            className="px-5 py-2.5 rounded-xl border border-white/20 hover:border-indigo-400 text-xs font-mono text-white hover:text-indigo-400 transition-colors shrink-0"
          >
            Call Helpdesk: {anvyx27Config.coordinators.student[0].phone}
          </a>
        </div>

      </div>
    </section>
  );
};
