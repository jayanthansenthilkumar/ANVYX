import React, { useState } from "react";
import { MessageSquare, Star, ArrowLeft, ArrowRight, ShieldCheck, Sparkles, Building2 } from "lucide-react";
import { anvyx27Config } from "../config/anvyx27Data";
import { playCyberClick, playCyberHover } from "../utils/audio";

export const TestimonialsSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const testimonials = anvyx27Config.testimonials;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const displayedTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section id="testimonials" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 border-t border-white/10 bg-[#020205] relative overflow-hidden">
      
      {/* Background glow burst */}
      <div className="absolute top-1/2 left-1/4 w-[700px] h-[400px] bg-rose-500/05 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-rose-400 bg-rose-500/10 border border-rose-500/25 mb-4">
              <MessageSquare className="w-3.5 h-3.5 text-rose-400" />
              <span>06 / DELEGATE FEEDBACK PROTOCOL</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-display uppercase leading-tight">
              DELEGATE VOICES &amp;{" "}
              <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                EXPERIENCES.
              </span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 font-sans max-w-xl">
              Unfiltered feedback gathered from verified ANVYX delegates across 14+ colleges and universities. Explore real ratings, key takeaways, and collaborative breakthroughs.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3 rounded-2xl bg-[#060716] border border-white/10 font-sans text-center">
            <div className="px-3 py-1 border-r border-white/5">
              <div className="font-display font-black text-xl text-white">4.9 / 5.0</div>
              <div className="font-mono text-[9px] text-[#55E5D2] uppercase font-bold">AVG RATING</div>
            </div>
            <div className="px-3 py-1 border-r border-white/5">
              <div className="font-display font-black text-xl text-white">14</div>
              <div className="font-mono text-[9px] text-purple-400 uppercase font-bold">METRICS</div>
            </div>
            <div className="px-3 py-1 border-r border-white/5">
              <div className="font-display font-black text-xl text-white">14+</div>
              <div className="font-mono text-[9px] text-rose-400 uppercase font-bold">COLLEGES</div>
            </div>
            <div className="px-3 py-1">
              <div className="font-display font-black text-xl text-white">100%</div>
              <div className="font-mono text-[9px] text-emerald-400 uppercase font-bold">VERIFIED</div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid (6 cards per page) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {displayedTestimonials.map((item) => (
            <div
              key={item.id}
              onMouseEnter={playCyberHover}
              className="p-6 rounded-2xl bg-[#060716] border border-white/10 hover:border-rose-500/40 transition-all duration-300 flex flex-col justify-between space-y-4 shadow-lg group"
            >
              <div className="space-y-3">
                {/* Log Header & Score */}
                <div className="flex items-center justify-between pb-2 border-b border-white/5">
                  <span className="font-mono text-[10px] text-rose-400 font-bold tracking-wider">
                    {item.id} [VERIFIED]
                  </span>
                  <div className="flex items-center gap-1 font-mono text-xs text-amber-300 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{item.score}</span>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-sans italic">
                  &gt; “{item.quote}”
                </p>
              </div>

              {/* Author & University Details */}
              <div className="pt-3 border-t border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-bold text-sm text-white group-hover:text-rose-300 transition-colors">
                      {item.author}
                    </h4>
                    <span className="font-mono text-[10px] text-slate-500">
                      {item.handle} · {item.location}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400">
                    <Building2 className="w-4 h-4 text-purple-400" />
                  </div>
                </div>

                <div className="font-sans text-[11px] text-slate-400 flex items-center gap-1.5 truncate">
                  <span className="truncate">{item.college}</span>
                </div>

                <div className="inline-block px-2 py-0.5 rounded text-[9.5px] font-mono bg-rose-500/10 text-rose-300 border border-rose-500/20 truncate max-w-full">
                  METRIC: {item.metric}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10 font-mono text-xs text-slate-400">
          <span>PAGE 0{currentPage + 1} OF 0{totalPages} // 14 DELEGATE LOGS</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => { playCyberClick(); setCurrentPage(prev => Math.max(0, prev - 1)); }}
              disabled={currentPage === 0}
              className="p-2 rounded-lg bg-[#060716] border border-white/10 hover:border-white/30 text-white disabled:opacity-30 cursor-pointer"
              aria-label="Previous Page"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => { playCyberClick(); setCurrentPage(prev => Math.min(totalPages - 1, prev + 1)); }}
              disabled={currentPage === totalPages - 1}
              className="p-2 rounded-lg bg-[#060716] border border-white/10 hover:border-white/30 text-white disabled:opacity-30 cursor-pointer"
              aria-label="Next Page"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
