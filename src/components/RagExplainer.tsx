import React, { useState } from "react";
import { 
  Database, 
  FileText, 
  Binary, 
  Search, 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  AlertOctagon, 
  CheckCircle2, 
  Zap,
  HelpCircle
} from "lucide-react";
import { ragPipelineStages, semanticVectorPairs } from "../data/conceptsData";

export const RagExplainer: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedPairIndex, setSelectedPairIndex] = useState(0);

  const currentStage = ragPipelineStages[activeStep];
  const activePair = semanticVectorPairs[selectedPairIndex];

  return (
    <section id="rag-concept" className="py-20 md:py-28 relative border-b border-white/10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-mono text-xs uppercase tracking-wider">
            <Database className="w-3.5 h-3.5" />
            Core Architectural Breakthrough
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            RAG Demystified: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Retrieval-Augmented Generation</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            How do you make an AI know your private college circulars, company manuals, or today's news without spending millions retraining the model? You give it an open-book library.
          </p>
        </div>

        {/* Closed-Book vs Open-Book Comparison Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          
          {/* Bare LLM Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-rose-500/20 backdrop-blur-xl space-y-4 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-mono font-bold">
                Pure LLM (Without RAG)
              </span>
              <AlertOctagon className="w-5 h-5 text-rose-400" />
            </div>

            <h3 className="text-xl font-bold text-white">Closed-Book Exam</h3>
            
            <p className="text-slate-300 text-sm leading-relaxed">
              The model relies entirely on memories frozen in its neural weights during training months or years ago.
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 pt-2">
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">✗</span>
                <span><strong className="text-white">Knowledge Cutoff:</strong> Knows zero events occurring after training.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">✗</span>
                <span><strong className="text-white">Hallucinations:</strong> Guesses plausible-sounding answers when unsure.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">✗</span>
                <span><strong className="text-white">Blind to Private Data:</strong> No access to MKCE circulars, internal databases, or private code.</span>
              </li>
            </ul>
          </div>

          {/* RAG Enabled Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 via-cyan-950/20 to-slate-900/90 border border-cyan-500/40 backdrop-blur-xl space-y-4 relative overflow-hidden shadow-xl shadow-cyan-500/10">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-bold">
                RAG Architecture (Open-Book)
              </span>
              <CheckCircle2 className="w-5 h-5 text-cyan-400" />
            </div>

            <h3 className="text-xl font-bold text-white">Open-Book Exam with Personal Librarian</h3>
            
            <p className="text-slate-300 text-sm leading-relaxed">
              When a question arrives, a vector search grabs the exact 3 pages from your private knowledge base and stuffs them into the prompt.
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200 pt-2">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">✓</span>
                <span><strong className="text-white">Zero Training Cost:</strong> Update your database in 5 seconds without retraining weights.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">✓</span>
                <span><strong className="text-white">Exact Source Citations:</strong> Points students to chapter, page number, and PDF filename.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">✓</span>
                <span><strong className="text-white">Total Privacy:</strong> Private campus or enterprise data never leaves your infrastructure.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* The 5-Stage RAG Pipeline Visualizer */}
        <div className="max-w-5xl mx-auto rounded-3xl border border-white/10 bg-slate-900/80 p-6 sm:p-8 backdrop-blur-xl space-y-8">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              The 5-Step RAG Pipeline
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Click through the 5 stages to follow how a document transforms into a grounded response.
            </p>
          </div>

          {/* Stepper Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {ragPipelineStages.map((stage, idx) => (
              <button
                key={stage.step}
                onClick={() => setActiveStep(idx)}
                className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                  activeStep === idx
                    ? "bg-cyan-500/20 border-cyan-400 text-white shadow-lg shadow-cyan-500/20"
                    : "bg-slate-950/80 border-white/5 text-slate-400 hover:text-white hover:bg-slate-900"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`w-5 h-5 rounded-full text-xs font-mono font-bold flex items-center justify-center ${
                    activeStep === idx ? "bg-cyan-400 text-slate-950" : "bg-slate-800 text-slate-300"
                  }`}>
                    {stage.step}
                  </span>
                  {activeStep === idx && <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>}
                </div>
                <p className="text-xs font-bold truncate text-slate-200">{stage.title.split("&")[0]}</p>
                <span className="text-[10px] text-slate-400 block truncate">{stage.techUsed.split(",")[0]}</span>
              </button>
            ))}
          </div>

          {/* Active Step Showcase Card */}
          <div className="p-6 rounded-2xl bg-slate-950/80 border border-cyan-500/30 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/10">
              <div>
                <span className="text-xs font-mono uppercase text-cyan-400 font-bold">
                  Stage {currentStage.step} of 5
                </span>
                <h4 className="text-xl font-extrabold text-white mt-0.5">{currentStage.title}</h4>
                <p className="text-xs text-cyan-200/70">{currentStage.subtitle}</p>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-slate-900 text-slate-300 border border-white/10 font-mono">
                Tech: {currentStage.techUsed}
              </span>
            </div>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              {currentStage.description}
            </p>

            {/* Analogy badge */}
            <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20 flex items-start gap-3">
              <BookOpen className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  How to explain this to a 1st year:
                </span>
                <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                  "{currentStage.analogy}"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Semantic Vector Space Visualizer */}
        <div className="max-w-5xl mx-auto mt-16 rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-xl space-y-6">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider">
              <Binary className="w-4 h-4" />
              The Secret Sauce: High-Dimensional Embeddings
            </div>
            <h3 className="text-2xl font-black text-white mt-1">
              Why Keyword Search Fails & Vector Search Triumphs
            </h3>
            <p className="text-slate-300 text-sm">
              Computers can't read emotions or nuance. They turn sentences into mathematical lists of numbers. Test these sample sentence pairs:
            </p>
          </div>

          {/* Sample Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
            {semanticVectorPairs.map((pair, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedPairIndex(idx)}
                className={`p-3 rounded-xl border text-left transition cursor-pointer text-xs ${
                  selectedPairIndex === idx
                    ? "bg-cyan-500/20 border-cyan-400 text-white font-semibold"
                    : "bg-slate-950 text-slate-400 border-white/5 hover:text-white"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-[10px] text-cyan-300">Pair #{idx + 1}</span>
                  <span className="font-mono text-[10px] text-emerald-400">{(pair.similarity * 100).toFixed(0)}%</span>
                </div>
                <p className="truncate font-medium">{pair.phraseA}</p>
              </button>
            ))}
          </div>

          {/* Interactive Comparison Card */}
          <div className="p-6 rounded-2xl bg-slate-950 border border-white/10 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900 border border-white/5 space-y-1">
                <span className="text-[11px] font-mono text-cyan-400 uppercase font-semibold">Phrase A (User Query):</span>
                <p className="text-sm font-semibold text-white">"{activePair.phraseA}"</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-white/5 space-y-1">
                <span className="text-[11px] font-mono text-indigo-400 uppercase font-semibold">Phrase B (Handbook Chunk):</span>
                <p className="text-sm font-semibold text-white">"{activePair.phraseB}"</p>
              </div>
            </div>

            {/* Similarity Score Bar */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                  <span>Cosine Similarity Score:</span>
                  <span className="text-cyan-400 font-mono font-bold text-sm">
                    {activePair.similarity.toFixed(2)} ({(activePair.similarity * 100).toFixed(0)}%)
                  </span>
                </span>
                <span className={`px-2.5 py-0.5 rounded-full font-mono text-[11px] font-bold ${
                  activePair.similarity > 0.8 
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40" 
                    : activePair.similarity > 0.4
                    ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                    : "bg-slate-800 text-slate-400 border border-white/10"
                }`}>
                  {activePair.category}
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden p-0.5">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-500"
                  style={{ width: `${activePair.similarity * 100}%` }}
                />
              </div>
            </div>

            {/* Explanation */}
            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/5 text-xs text-slate-300 leading-relaxed flex items-start gap-2.5">
              <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span><strong className="text-white">Why this happens:</strong> {activePair.explanation}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
