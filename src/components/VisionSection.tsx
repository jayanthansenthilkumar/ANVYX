import React from "react";
import { 
  Sparkles, 
  Lightbulb, 
  Terminal, 
  Layers, 
  ArrowRight,
  Code2
} from "lucide-react";

export const VisionSection: React.FC = () => {
  return (
    <section id="vision" className="py-24 md:py-36 relative px-4 sm:px-6 lg:px-8 border-t border-[#F4F6FF]/5 bg-[#080A12] overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-[#58E6FF]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Vision Manifesto */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-surface text-xs font-mono text-[#58E6FF]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE PHILOSOPHY</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-[#F4F6FF] tracking-tight leading-[1.1]">
              GREAT IDEAS<br />
              <span className="text-gradient-cyan">DESERVE TO EXIST.</span>
            </h2>

            <p className="text-[#9BA8C7] text-base sm:text-lg leading-relaxed font-normal">
              Most revolutionary products stall in ideation. They linger in notes, sketchbooks, and endless debates. ANVYX ’27 creates a high-pressure, zero-distraction sanctuary where theoretical musings convert into executed software.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-2xl glass-surface space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#58E6FF]/10 text-[#58E6FF] flex items-center justify-center">
                  <Code2 className="w-4 h-4" />
                </div>
                <h3 className="font-display font-bold text-base text-[#F4F6FF]">Unfiltered Focus</h3>
                <p className="text-xs text-[#9BA8C7] leading-relaxed">
                  Eight continuous hours eliminates procrastination. Decisions are made quickly; code is tested immediately.
                </p>
              </div>

              <div className="p-5 rounded-2xl glass-surface space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#9878FF]/10 text-[#9878FF] flex items-center justify-center">
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="font-display font-bold text-base text-[#F4F6FF]">Craft & Architecture</h3>
                <p className="text-xs text-[#9BA8C7] leading-relaxed">
                  We value not merely functional logic, but aesthetic elegance, human delight, and resilient system design.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Abstract Geometric Visual with Dimensional Accents */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md p-8 rounded-3xl glass-surface-glow space-y-6 overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-[#F4F6FF]/10">
                <span className="font-mono text-xs text-[#58E6FF] font-semibold">ANVYX_CREATIVE_MATRIX</span>
                <span className="w-2 h-2 rounded-full bg-[#58E6FF] animate-ping" />
              </div>

              {/* Dimensional Diagram Card */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#10162A]/60 border border-[#F4F6FF]/5 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#9BA8C7] uppercase">VELOCITY</span>
                    <p className="font-display font-bold text-lg text-[#F4F6FF]">800% Acceleration</p>
                  </div>
                  <span className="text-xs font-mono text-[#58E6FF] bg-[#58E6FF]/10 px-2 py-1 rounded">08:00:00</span>
                </div>

                <div className="p-4 rounded-xl bg-[#10162A]/60 border border-[#F4F6FF]/5 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#9BA8C7] uppercase">ARTEFACT GOAL</span>
                    <p className="font-display font-bold text-lg text-[#F4F6FF]">Deployable Reality</p>
                  </div>
                  <span className="text-xs font-mono text-[#9878FF] bg-[#9878FF]/10 px-2 py-1 rounded">WORKING_MVP</span>
                </div>

                <div className="p-4 rounded-xl bg-[#10162A]/60 border border-[#F4F6FF]/5 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#9BA8C7] uppercase">EVALUATION</span>
                    <p className="font-display font-bold text-lg text-[#F4F6FF]">Jury of Architects</p>
                  </div>
                  <span className="text-xs font-mono text-[#F4F6FF] bg-[#F4F6FF]/10 px-2 py-1 rounded">LIVE_DEMO</span>
                </div>
              </div>

              <div className="pt-2 text-xs font-mono text-[#9BA8C7] flex items-center justify-between">
                <span>STAGE: SPRINT_COHORT</span>
                <span className="text-[#58E6FF]">READY</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
