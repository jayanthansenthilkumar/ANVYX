import React, { useState } from "react";
import { 
  Sliders, 
  HelpCircle
} from "lucide-react";
import { tokenPredictionSamples, llmParametersGuide } from "../data/conceptsData";

export const LlmExplainer: React.FC = () => {
  const [activeSampleIndex, setActiveSampleIndex] = useState(0);
  const [selectedTokenIndex, setSelectedTokenIndex] = useState(0);

  const activeSample = tokenPredictionSamples[activeSampleIndex];

  return (
    <section id="llm-concept" className="py-16 md:py-24 brutal-border-b bg-[#F4F2EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <div className="inline-block bg-[#111111] text-[#C8FF00] font-mono text-xs font-bold px-2 py-0.5 uppercase tracking-wider">
            [04] // PROBABILISTIC_INTELLIGENCE
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-[#111111]">
            WHAT IS AN LLM? <span className="bg-[#FFFFFF] px-2 brutal-border-thin">DECODED</span>
          </h2>
          <p className="text-sm sm:text-base text-[#555555] font-medium">
            An LLM is not conscious. At its mathematical core, it is a high-dimensional probability engine trained to play one game: <strong className="text-[#111111]">"Predict the most likely next word chunk (token)."</strong>
          </p>
        </div>

        {/* Next-Token Prediction Live Playground */}
        <div className="max-w-4xl mx-auto brutal-card p-6 sm:p-8 space-y-6 mb-16 bg-[#FFFFFF]">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#000000]">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-[#555555]">
                // LIVE PROBABILITY DISTRIBUTION ENGINE
              </span>
              <h3 className="font-display font-black text-xl text-[#111111] mt-0.5">
                NEXT-TOKEN PREDICTION METER
              </h3>
            </div>
            
            {/* Prompt Selector */}
            <div className="flex gap-1">
              {tokenPredictionSamples.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveSampleIndex(idx);
                    setSelectedTokenIndex(0);
                  }}
                  className={`px-3 py-1 text-xs font-mono font-bold brutal-border transition cursor-pointer ${
                    activeSampleIndex === idx
                      ? "bg-[#111111] text-[#C8FF00] brutal-shadow-sm"
                      : "bg-[#F4F2EB] text-[#111111] hover:bg-[#E8E5DC]"
                  }`}
                >
                  SAMPLE #{idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Active Prompt Box */}
          <div className="p-4 bg-[#F4F2EB] brutal-border flex flex-wrap items-center gap-2 text-sm sm:text-base font-mono">
            <span className="font-bold text-[#555555]">PROMPT:</span>
            <span className="font-bold text-[#111111]">"{activeSample.inputPrompt}"</span>
            <span className="bg-[#C8FF00] text-[#111111] px-2 py-0.5 brutal-border-thin font-bold">
              [{activeSample.tokens[selectedTokenIndex].token}]
            </span>
          </div>

          {/* Probability Bars */}
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase text-[#555555] block">
              // COMPUTED TOKEN PROBABILITIES VIA TRANSFORMER ATTENTION:
            </span>

            <div className="space-y-2">
              {activeSample.tokens.map((tok, idx) => (
                <div
                  key={tok.token}
                  onClick={() => setSelectedTokenIndex(idx)}
                  className={`p-3 brutal-border transition cursor-pointer font-mono ${
                    selectedTokenIndex === idx
                      ? "bg-[#111111] text-[#FFFFFF] brutal-shadow-sm"
                      : "bg-[#F4F2EB] text-[#111111] hover:bg-[#E8E5DC]"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs sm:text-sm mb-1 font-bold">
                    <span className="flex items-center gap-2">
                      <span className={`w-4 h-4 text-[10px] brutal-border-thin flex items-center justify-center ${
                        selectedTokenIndex === idx ? "bg-[#C8FF00] text-[#111111]" : "bg-[#FFFFFF] text-[#111111]"
                      }`}>
                        {idx + 1}
                      </span>
                      <span>"{tok.token}"</span>
                    </span>
                    <span className={selectedTokenIndex === idx ? "text-[#C8FF00]" : "text-[#111111]"}>
                      {tok.probability}%
                    </span>
                  </div>

                  {/* Visual Bar */}
                  <div className="w-full h-2.5 bg-[#FFFFFF] brutal-border-thin p-0.5">
                    <div
                      className={`h-full transition-all duration-300 ${
                        selectedTokenIndex === idx ? "bg-[#C8FF00]" : "bg-[#111111]"
                      }`}
                      style={{ width: `${tok.probability}%` }}
                    />
                  </div>

                  <p className="text-[11px] font-sans font-medium text-[#777777] mt-1.5">
                    Rationale: {tok.rationale}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Analogy Box */}
          <div className="p-3.5 bg-[#F4F2EB] brutal-border flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-[#111111] shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <strong className="text-xs font-mono uppercase text-[#111111] block">
                // SMARTPHONE PREDICTIVE KEYBOARD ANALOGY:
              </strong>
              <p className="text-xs sm:text-sm text-[#444444] font-medium leading-relaxed">
                When you type "See you..." on your phone, it suggests "soon", "later", or "tomorrow". An LLM performs the exact same mathematical prediction, but evaluates 100,000 token possibilities across 70+ billion parameters calibrated against trillions of pages of human text!
              </p>
            </div>
          </div>
        </div>

        {/* LLM Parameters Knobs */}
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="border-b border-[#000000] pb-2">
            <h3 className="font-display font-black text-xl sm:text-2xl text-[#111111]">
              THE 4 CRITICAL HYPERPARAMETERS
            </h3>
            <p className="text-xs sm:text-sm font-mono text-[#555555]">
              Every CSBS software engineer must tune these knobs in production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {llmParametersGuide.map((param) => (
              <div 
                key={param.name}
                className="p-5 brutal-card space-y-2 bg-[#FFFFFF]"
              >
                <div className="flex items-center justify-between pb-2 border-b border-[#000000]">
                  <h4 className="font-display font-bold text-base text-[#111111] flex items-center gap-1.5">
                    <Sliders className="w-4 h-4 text-[#0038FF]" />
                    {param.name}
                  </h4>
                  <span className="font-mono text-xs bg-[#F4F2EB] px-2 py-0.5 brutal-border-thin font-bold">
                    {param.range}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#333333] font-medium leading-relaxed">
                  {param.description}
                </p>

                <div className="pt-2 border-t border-[#000000]/10 text-xs font-mono text-[#111111]">
                  <strong>1ST-YEAR RULE OF THUMB:</strong> {param.firstYearTip}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
