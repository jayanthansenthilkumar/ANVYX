import React, { useState } from "react";
import { 
  Briefcase, 
  MessageSquare, 
  TrendingUp
} from "lucide-react";
import { useCasesList } from "../data/useCasesData";

export const UseCasesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedId, setExpandedId] = useState<string | null>("campus-bot");

  const categories = ["All", "Campus & EdTech", "Fintech", "Healthcare", "Enterprise", "DevOps"];

  const filteredUseCases = selectedCategory === "All" 
    ? useCasesList 
    : useCasesList.filter((uc) => uc.category === selectedCategory);

  return (
    <section id="use-cases" className="py-16 md:py-24 brutal-border-b bg-[#F4F2EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <div className="inline-block bg-[#111111] text-[#C8FF00] font-mono text-xs font-bold px-2 py-0.5 uppercase tracking-wider">
            [06] // ENTERPRISE_APPLICATIONS
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-[#111111]">
            CHATBOT & AI <span className="bg-[#C8FF00] px-2 brutal-border-thin">USE CASES</span>
          </h2>
          <p className="text-sm sm:text-base text-[#555555] font-medium">
            Bridging Computer Science with Business Systems (CSBS). Why global enterprises deploy conversational agents to automate workflows and accelerate ROI.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-mono font-bold brutal-border transition cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#111111] text-[#C8FF00] brutal-shadow-sm"
                  : "bg-[#FFFFFF] text-[#111111] hover:bg-[#E8E5DC]"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Use Cases Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredUseCases.map((uc) => (
            <div
              key={uc.id}
              className="p-6 brutal-card flex flex-col justify-between space-y-6 bg-[#FFFFFF]"
            >
              <div className="space-y-4">
                {/* Category & Badge */}
                <div className="flex items-center justify-between pb-2 border-b border-[#000000]">
                  <span className="font-mono text-xs font-bold bg-[#111111] text-[#FFFFFF] px-2 py-0.5">
                    {uc.category.toUpperCase()}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#0038FF] flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    MEASURABLE_ROI
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-black text-xl sm:text-2xl text-[#111111]">
                  {uc.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#444444] font-medium leading-relaxed">
                  {uc.summary}
                </p>

                {/* Problem vs Solution */}
                <div className="space-y-2 text-xs font-mono">
                  <div className="p-3 bg-[#F4F2EB] brutal-border-thin space-y-1">
                    <span className="font-bold text-[#FF3E00] uppercase block">
                      // OPERATIONAL PROBLEM:
                    </span>
                    <p className="text-[#333333] font-sans font-medium">{uc.problem}</p>
                  </div>

                  <div className="p-3 bg-[#F4F2EB] brutal-border-thin space-y-1">
                    <span className="font-bold text-[#0038FF] uppercase block">
                      // AI ARCHITECTURAL SOLUTION:
                    </span>
                    <p className="text-[#333333] font-sans font-medium">{uc.solution}</p>
                  </div>
                </div>

                {/* CSBS Advantage */}
                <div className="p-3.5 bg-[#C8FF00]/20 brutal-border-thin space-y-1">
                  <span className="font-mono text-[11px] font-bold text-[#111111] uppercase flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" />
                    WHY CSBS STUDENTS EXCEL HERE:
                  </span>
                  <p className="text-xs text-[#222222] font-medium leading-relaxed font-sans">
                    {uc.csbsAdvantage}
                  </p>
                </div>

                {/* Quantitative Metrics Bar */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#000000]">
                  {uc.metrics.map((m, idx) => (
                    <div key={idx} className="p-2 bg-[#F4F2EB] brutal-border-thin text-center">
                      <span className="font-mono text-xs sm:text-sm font-black text-[#111111] block">
                        {m.value}
                      </span>
                      <span className="text-[10px] font-mono text-[#555555] block truncate">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1">
                  {uc.techStack.map((tech, idx) => (
                    <span key={idx} className="text-[10px] font-mono font-bold bg-[#E8E5DC] text-[#111111] px-2 py-0.5 brutal-border-thin">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sample Prompt / Response Drawer */}
              <div className="pt-2">
                <button
                  onClick={() => setExpandedId(expandedId === uc.id ? null : uc.id)}
                  className="w-full py-2 px-3 brutal-border bg-[#F4F2EB] hover:bg-[#C8FF00] text-xs font-mono font-bold flex items-center justify-between transition cursor-pointer"
                >
                  <span className="flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5" />
                    {expandedId === uc.id ? "HIDE CONVERSATION" : "SEE SAMPLE PROMPT & RESPONSE"}
                  </span>
                  <span>{expandedId === uc.id ? "[–]" : "[+]"}</span>
                </button>

                {expandedId === uc.id && (
                  <div className="mt-2 p-4 bg-[#111111] text-[#FFFFFF] brutal-border space-y-3 font-mono text-xs">
                    <div>
                      <span className="text-[#C8FF00] font-bold block">// USER_QUERY:</span>
                      <p className="text-[#E0E0E0] mt-0.5 font-sans">"{uc.samplePrompt}"</p>
                    </div>
                    <div className="pt-2 border-t border-[#333333]">
                      <span className="text-[#0038FF] bg-[#FFFFFF] px-1 font-bold block w-fit">// AI_RESPONSE:</span>
                      <p className="text-[#CCCCCC] mt-1 font-sans leading-relaxed">{uc.sampleBotResponse}</p>
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
