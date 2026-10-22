import React, { useState } from "react";
import { 
  Brain, 
  Sparkles, 
  Sliders, 
  HelpCircle, 
  Layers, 
  Cpu, 
  CheckCircle,
  Hash
} from "lucide-react";
import { tokenPredictionSamples, llmParametersGuide } from "../data/conceptsData";

export const LlmExplainer: React.FC = () => {
  const [activeSampleIndex, setActiveSampleIndex] = useState(0);
  const [selectedTokenIndex, setSelectedTokenIndex] = useState(0);

  const activeSample = tokenPredictionSamples[activeSampleIndex];

  return (
    <section id="llm-concept" className="py-20 md:py-28 relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 font-mono text-xs uppercase tracking-wider">
            <Brain className="w-3.5 h-3.5" />
            Probabilistic Linguistic Intelligence
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            What is an LLM? <span className="text-pink-400">Demystifying the Magic</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            An LLM is not a conscious human brain. It is a mathematical giant trained on petabytes of text to play one simple game: <span className="text-white font-semibold">"Guess the very next word chunk (token)."</span>
          </p>
        </div>

        {/* Next-Token Prediction Live Playground */}
        <div className="max-w-4xl mx-auto rounded-3xl border border-white/15 bg-slate-900/90 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl space-y-6 mb-16">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-mono uppercase text-pink-400 font-bold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                Interactive Next-Token Predictor
              </span>
              <h3 className="text-xl font-bold text-white mt-1">See Probability Distributions in Real Time</h3>
            </div>
            
            {/* Prompt Selector */}
            <div className="flex gap-1.5 bg-slate-950 p-1 rounded-xl border border-white/10">
              {tokenPredictionSamples.map((sample, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveSampleIndex(idx);
                    setSelectedTokenIndex(0);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition cursor-pointer ${
                    activeSampleIndex === idx
                      ? "bg-pink-500 text-slate-950 font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Prompt #{idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Prompt Display Box */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-pink-500/30 flex flex-wrap items-center gap-2 text-base sm:text-lg font-mono">
            <span className="text-slate-400">Prompt:</span>
            <span className="text-white font-medium">"{activeSample.inputPrompt}"</span>
            <span className="px-2 py-0.5 rounded bg-pink-500/20 text-pink-300 border border-pink-500/40 font-bold animate-pulse">
              [{activeSample.tokens[selectedTokenIndex].token}]
            </span>
          </div>

          {/* Probability Bars */}
          <div className="space-y-3">
            <span className="text-xs uppercase font-mono text-slate-400 block tracking-wider">
              Token Probabilities calculated by Transformer Neural Network:
            </span>

            <div className="space-y-2.5">
              {activeSample.tokens.map((tok, idx) => (
                <div
                  key={tok.token}
                  onClick={() => setSelectedTokenIndex(idx)}
                  className={`p-3 rounded-xl border transition cursor-pointer ${
                    selectedTokenIndex === idx
                      ? "bg-pink-950/40 border-pink-500 text-white shadow-md shadow-pink-500/10"
                      : "bg-slate-950/60 border-white/5 text-slate-300 hover:bg-slate-900"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs sm:text-sm font-mono mb-1.5">
                    <span className="flex items-center gap-2 font-bold">
                      <span className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center ${
                        idx === 0 ? "bg-pink-400 text-slate-950" : "bg-slate-800 text-slate-400"
                      }`}>
                        {idx + 1}
                      </span>
                      <span>"{tok.token}"</span>
                    </span>
                    <span className="font-bold text-pink-300">{tok.probability}%</span>
                  </div>

                  {/* Visual Bar */}
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        idx === 0 ? "bg-gradient-to-r from-pink-500 to-rose-400" : "bg-slate-600"
                      }`}
                      style={{ width: `${tok.probability}%` }}
                    />
                  </div>

                  <p className="text-[11px] text-slate-400 mt-1.5 font-sans">
                    Rationale: {tok.rationale}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 1st Year Analogy */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-white/10 text-xs text-slate-300 flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block text-sm">The Smartphone Keyboard Analogy:</strong>
              <p className="text-slate-300 mt-1 leading-relaxed">
                When you type "See you..." on WhatsApp, your phone suggests: "soon", "later", or "tomorrow". An LLM does the exact same calculation, but instead of 3 suggestions, it evaluates a vocabulary of 100,000 token possibilities using 70+ billion parameters calibrated across trillions of internet pages!
              </p>
            </div>
          </div>
        </div>

        {/* LLM Parameters Guide Cards */}
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white">The Knobs & Dials of an LLM</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Parameters every 1st-year CSBS student will configure when building AI systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {llmParametersGuide.map((param) => (
              <div 
                key={param.name}
                className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md space-y-3 hover:border-pink-500/40 transition"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-pink-400" />
                    {param.name}
                  </h4>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-pink-300 border border-white/5">
                    {param.range}
                  </span>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {param.description}
                </p>

                <div className="pt-2 border-t border-white/5">
                  <span className="text-xs text-pink-300/90 font-medium italic">
                    💡 1st-Year Tip: {param.firstYearTip}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
