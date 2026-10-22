import React, { useState } from "react";
import { anvyxConfig } from "../config/anvyxConfig";
import { HelpCircle, ChevronDown, MessageSquare, Sparkles, Filter } from "lucide-react";

export const FaqSection: React.FC = () => {
  const faqs = anvyxConfig.faqs;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = ["All", "General", "Teams", "Rules", "Logistics"];

  const filteredFaqs = selectedCategory === "All"
    ? faqs
    : faqs.filter((faq) => faq.category === selectedCategory);

  return (
    <section id="faq" className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#080A12] overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/3 right-1/4 w-[450px] h-[450px] pointer-events-none opacity-15 blur-[130px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(152, 120, 255, 0.3) 0%, transparent 70%)"
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-[#58E6FF] bg-[#58E6FF]/10 border border-[#58E6FF]/25 mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Section 08 // Architectural Intel</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F4F6FF] font-['Space_Grotesk'] mb-6">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#58E6FF] via-[#9878FF] to-white">
              Questions.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#9BA8C7] font-['Inter'] leading-relaxed">
            Everything you need to know about the format, constraints, intellectual property rights, and cohort logistics.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setOpenIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#58E6FF]/15 border border-[#58E6FF] text-[#58E6FF] shadow-[0_0_15px_rgba(88,230,255,0.25)] font-bold"
                  : "bg-[#10162A]/60 border border-white/10 text-[#9BA8C7] hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-gradient-to-b from-[#10162A]/90 to-[#080A12]/95 border-[#58E6FF]/40 shadow-[0_0_25px_rgba(88,230,255,0.08)]"
                    : "bg-[#10162A]/40 border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-start justify-between gap-4 cursor-pointer"
                >
                  <div className="space-y-1 pr-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#58E6FF]">
                      // {faq.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#F4F6FF] font-['Space_Grotesk'] leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#9BA8C7] shrink-0 mt-1 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-[#58E6FF] bg-[#58E6FF]/10 border-[#58E6FF]/30" : ""
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-white/5">
                    <p className="text-sm sm:text-base text-[#9BA8C7] font-['Inter'] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Help Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-[#10162A]/80 to-[#080A12] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#9878FF]/15 border border-[#9878FF]/30 flex items-center justify-center text-[#9878FF] shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#F4F6FF] font-['Space_Grotesk']">
                Have a specialized inquiry?
              </div>
              <div className="text-xs text-[#9BA8C7] font-['Inter']">
                Our concierge engineering team is on standby 24/7.
              </div>
            </div>
          </div>
          <a
            href={`mailto:${anvyxConfig.links.contactEmail}`}
            className="px-5 py-2.5 rounded-xl border border-white/20 hover:border-[#58E6FF] text-xs font-mono text-white hover:text-[#58E6FF] transition-all cursor-pointer"
          >
            {anvyxConfig.links.contactEmail}
          </a>
        </div>
      </div>
    </section>
  );
};
