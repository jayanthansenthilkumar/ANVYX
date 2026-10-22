import React, { useState } from "react";
import { 
  Wrench, 
  Briefcase
} from "lucide-react";
import { fourYearRoadmap } from "../data/roadmapData";

export const RoadmapSection: React.FC = () => {
  const [selectedYearIndex, setSelectedYearIndex] = useState(0);

  const activePlan = fourYearRoadmap[selectedYearIndex];

  return (
    <section id="roadmap" className="py-16 md:py-24 brutal-border-b bg-[#F4F2EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <div className="inline-block bg-[#111111] text-[#C8FF00] font-mono text-xs font-bold px-2 py-0.5 uppercase tracking-wider">
            [08] // CAREER_BLUEPRINT
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-[#111111]">
            THE 4-YEAR <span className="bg-[#C8FF00] px-2 brutal-border-thin">AI ROADMAP</span>
          </h2>
          <p className="text-sm sm:text-base text-[#555555] font-medium">
            A concrete action plan for 1st-year CSBS students. What you should build semester-by-semester to graduate as an elite AI architect.
          </p>
        </div>

        {/* 4-Year Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
          {fourYearRoadmap.map((item, idx) => (
            <button
              key={item.year}
              onClick={() => setSelectedYearIndex(idx)}
              className={`p-4 brutal-border text-left transition cursor-pointer font-mono ${
                selectedYearIndex === idx
                  ? "bg-[#111111] text-[#FFFFFF] brutal-shadow-lg translate-x-[-2px] translate-y-[-2px]"
                  : "bg-[#FFFFFF] text-[#111111] brutal-shadow-sm hover:bg-[#E8E5DC]"
              }`}
            >
              <span className={`text-[11px] font-bold block ${
                selectedYearIndex === idx ? "text-[#C8FF00]" : "text-[#555555]"
              }`}>
                {item.semester.toUpperCase()}
              </span>
              <h4 className="font-display font-black text-base text-current mt-0.5">
                {item.year.split(" ")[0].toUpperCase()} YEAR
              </h4>
              <span className={`text-[10px] block mt-0.5 truncate ${
                selectedYearIndex === idx ? "text-[#E0E0E0]" : "text-[#777777]"
              }`}>
                {item.title.split("&")[0]}
              </span>
            </button>
          ))}
        </div>

        {/* Detailed Active Year Showcase Card */}
        <div className="max-w-4xl mx-auto brutal-card p-6 sm:p-10 space-y-6 bg-[#FFFFFF]">
          {/* Header of Year Card */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#000000]">
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-[#111111] text-[#C8FF00] font-mono text-xs font-bold px-2 py-0.5">
                  {activePlan.year.toUpperCase()}
                </span>
                <span className="font-mono text-xs font-bold text-[#555555]">
                  // {activePlan.semester}
                </span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#111111] mt-2">
                {activePlan.title}
              </h3>
            </div>
            <div className="p-2.5 bg-[#F4F2EB] brutal-border-thin font-mono text-xs text-[#111111]">
              OUTCOME: <span className="font-bold">{activePlan.careerOutcome.split(",")[0]}</span>
            </div>
          </div>

          {/* Strategic Focus Statement */}
          <div className="p-3.5 bg-[#F4F2EB] brutal-border-thin text-xs sm:text-sm font-mono text-[#111111]">
            <span className="text-[#0038FF] font-bold uppercase block text-[11px] mb-0.5">
              // CORE STRATEGIC FOCUS:
            </span>
            <p className="font-sans font-medium text-[#222222]">"{activePlan.focus}"</p>
          </div>

          {/* Milestones Checklist */}
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-[#555555] block">
              // ACTIONABLE MILESTONES & REPOSITORIES:
            </span>
            <div className="space-y-2">
              {activePlan.milestones.map((m, idx) => (
                <div key={idx} className="p-3 bg-[#F4F2EB] brutal-border-thin flex items-start gap-2.5 text-xs sm:text-sm font-mono text-[#111111]">
                  <span className="text-[#0038FF] font-bold">[0{idx + 1}]</span>
                  <span className="font-sans font-medium">{m}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Tools & Stack */}
          <div className="pt-3 border-t border-[#000000] space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-[#555555] block flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5 text-[#111111]" />
              RECOMMENDED TECH STACK TO MASTER:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {activePlan.recommendedTools.map((t, idx) => (
                <span key={idx} className="px-2.5 py-1 bg-[#111111] text-[#C8FF00] font-mono font-bold text-xs">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Career Outcome */}
          <div className="p-3.5 bg-[#C8FF00]/20 brutal-border-thin flex items-start gap-3">
            <Briefcase className="w-5 h-5 text-[#111111] shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="text-xs font-mono font-bold uppercase text-[#111111] block">
                // TARGET CAREER OUTCOME:
              </span>
              <p className="text-xs sm:text-sm text-[#222222] font-medium font-sans">
                {activePlan.careerOutcome}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
