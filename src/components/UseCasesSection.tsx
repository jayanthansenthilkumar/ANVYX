import React, { useState } from "react";
import { 
  Briefcase, 
  GraduationCap, 
  CreditCard, 
  Activity, 
  Building2, 
  Terminal, 
  ArrowUpRight, 
  MessageSquare, 
  CheckCircle,
  TrendingUp,
  Cpu
} from "lucide-react";
import { useCasesList, type UseCase } from "../data/useCasesData";

export const UseCasesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedId, setExpandedId] = useState<string | null>("campus-bot");

  const categories = ["All", "Campus & EdTech", "Fintech", "Healthcare", "Enterprise", "DevOps"];

  const filteredUseCases = selectedCategory === "All" 
    ? useCasesList 
    : useCasesList.filter((uc) => uc.category === selectedCategory);

  return (
    <section id="use-cases" className="py-20 md:py-28 relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            CSBS Synergies: Technology Meets Business Systems
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Chatbot & AI <span className="text-emerald-400">Use Cases</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Why are Fortune 500 companies and universities racing to build chatbots? Because they bridge computing intelligence with massive operational business ROI.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer border ${
                selectedCategory === cat
                  ? "bg-emerald-500 text-slate-950 border-emerald-400 shadow-lg shadow-emerald-500/20"
                  : "bg-slate-900/80 text-slate-300 border-white/5 hover:text-white hover:bg-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Use Cases Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {filteredUseCases.map((uc) => (
            <div
              key={uc.id}
              className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-white/10 backdrop-blur-xl flex flex-col justify-between space-y-6 hover:border-emerald-500/40 transition shadow-xl relative overflow-hidden group"
            >
              <div className="space-y-4">
                {/* Category & Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-bold">
                    {uc.category}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    High Business Impact
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-emerald-300 transition">
                  {uc.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {uc.summary}
                </p>

                {/* Problem vs Solution */}
                <div className="space-y-2 pt-2 text-xs sm:text-sm">
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-rose-500/20 space-y-0.5">
                    <span className="font-bold text-rose-400 font-mono text-[11px] uppercase">The Business Problem:</span>
                    <p className="text-slate-300">{uc.problem}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/60 border border-emerald-500/20 space-y-0.5">
                    <span className="font-bold text-emerald-400 font-mono text-[11px] uppercase">The AI Solution:</span>
                    <p className="text-slate-300">{uc.solution}</p>
                  </div>
                </div>

                {/* CSBS Advantage Box */}
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-emerald-950/30 via-slate-900 to-slate-950 border border-emerald-500/30 text-xs space-y-1">
                  <span className="font-bold text-emerald-300 flex items-center gap-1.5 uppercase font-mono text-[11px]">
                    <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
                    Why CSBS Students Lead Here:
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    {uc.csbsAdvantage}
                  </p>
                </div>

                {/* Quantitative Metrics Bar */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5">
                  {uc.metrics.map((m, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-slate-950 text-center border border-white/5">
                      <span className="text-xs sm:text-sm font-extrabold text-white block truncate">{m.value}</span>
                      <span className="text-[10px] text-slate-400 block truncate">{m.label}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  {uc.techStack.map((tech, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sample Prompt / Response Drawer Toggle */}
              <div className="pt-2">
                <button
                  onClick={() => setExpandedId(expandedId === uc.id ? null : uc.id)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-emerald-300 hover:text-white border border-emerald-500/30 text-xs font-semibold flex items-center justify-between transition cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-3.5 h-3.5" />
                    {expandedId === uc.id ? "Hide Sample Conversation" : "See Live Prompt & Response"}
                  </span>
                  <span className="text-xs">{expandedId === uc.id ? "▲" : "▼"}</span>
                </button>

                {expandedId === uc.id && (
                  <div className="mt-3 p-4 rounded-xl bg-slate-950/90 border border-white/10 space-y-3 text-xs animate-in slide-in-from-top-1">
                    <div>
                      <span className="text-slate-400 font-mono uppercase text-[10px] block">User Asks:</span>
                      <p className="text-white font-medium italic mt-0.5">"{uc.samplePrompt}"</p>
                    </div>
                    <div className="pt-2 border-t border-white/5">
                      <span className="text-emerald-400 font-mono uppercase text-[10px] block">AI Bot Replies:</span>
                      <p className="text-slate-300 mt-0.5 leading-relaxed">{uc.sampleBotResponse}</p>
                    </div>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
