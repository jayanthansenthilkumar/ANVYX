import React, { useState } from "react";
import { 
  BookOpen, 
  AlertOctagon, 
  CheckCircle2, 
  HelpCircle
} from "lucide-react";
import { ragPipelineStages, semanticVectorPairs } from "../data/conceptsData";

export const RagExplainer: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedPairIndex, setSelectedPairIndex] = useState(0);

  const currentStage = ragPipelineStages[activeStep];
  const activePair = semanticVectorPairs[selectedPairIndex];

  return (
    <section id="rag-concept" className="py-16 md:py-24 brutal-border-b bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <div className="inline-block bg-[#111111] text-[#C8FF00] font-mono text-xs font-bold px-2 py-0.5 uppercase tracking-wider">
            [03] // RAG_ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-[#111111]">
            RAG DEMYSTIFIED: <span className="bg-[#C8FF00] px-2 brutal-border-thin">GROUNDED AI</span>
          </h2>
          <p className="text-sm sm:text-base text-[#555555] font-medium">
            How do you make an AI recite your private college regulations, company policies, or live timetables without spending millions retraining weights? You give it an open-book library.
          </p>
        </div>

        {/* Closed-Book vs Open-Book Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          
          {/* Bare LLM Card */}
          <div className="p-6 brutal-card space-y-4 bg-[#FFFFFF]">
            <div className="flex items-center justify-between pb-3 border-b border-[#000000]">
              <span className="bg-[#FF3E00] text-[#FFFFFF] font-mono text-xs font-bold px-2 py-0.5">
                PURE LLM (WITHOUT RAG)
              </span>
              <AlertOctagon className="w-5 h-5 text-[#FF3E00]" />
            </div>

            <h3 className="font-display font-black text-2xl text-[#111111]">
              CLOSED-BOOK EXAM
            </h3>
            
            <p className="text-sm text-[#444444] font-medium leading-relaxed">
              The model relies entirely on memories frozen in its neural network during pre-training months or years ago.
            </p>

            <ul className="space-y-2 text-xs sm:text-sm font-medium text-[#222222] pt-2">
              <li className="flex items-start gap-2">
                <span className="text-[#FF3E00] font-bold font-mono">[!]</span>
                <span><strong>Knowledge Cutoff:</strong> Blind to any event, circular, or news occurring after training.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF3E00] font-bold font-mono">[!]</span>
                <span><strong>Hallucinations:</strong> Guesses plausible-sounding answers with total confidence when unsure.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF3E00] font-bold font-mono">[!]</span>
                <span><strong>Blind to Private Data:</strong> Knows nothing about internal MKCE guidelines or enterprise databases.</span>
              </li>
            </ul>
          </div>

          {/* RAG Enabled Card */}
          <div className="p-6 brutal-card brutal-shadow-lg space-y-4 bg-[#F4F2EB] border-2 border-[#000000]">
            <div className="flex items-center justify-between pb-3 border-b border-[#000000]">
              <span className="bg-[#C8FF00] text-[#111111] font-mono text-xs font-bold px-2 py-0.5 brutal-border-thin">
                RAG ARCHITECTURE
              </span>
              <CheckCircle2 className="w-5 h-5 text-[#111111]" />
            </div>

            <h3 className="font-display font-black text-2xl text-[#111111]">
              OPEN-BOOK EXAM + LIBRARIAN
            </h3>
            
            <p className="text-sm text-[#222222] font-medium leading-relaxed">
              When a query arrives, a semantic vector search fetches the exact 3 paragraphs from your private database and injects them into the prompt.
            </p>

            <ul className="space-y-2 text-xs sm:text-sm font-medium text-[#111111] pt-2">
              <li className="flex items-start gap-2">
                <span className="text-[#0038FF] font-bold font-mono">[✓]</span>
                <span><strong>Zero Training Cost:</strong> Update your database in seconds without retraining multi-million dollar models.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0038FF] font-bold font-mono">[✓]</span>
                <span><strong>Verifiable Source Citations:</strong> Points students directly to page numbers, circulars, and PDF names.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0038FF] font-bold font-mono">[✓]</span>
                <span><strong>Data Sovereignty:</strong> Confidential student records and business secrets never leak into public training sets.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* 5-Step RAG Pipeline Stepper */}
        <div className="max-w-5xl mx-auto brutal-card p-6 sm:p-8 space-y-6 bg-[#FFFFFF]">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#000000]">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-[#555555]">
                // DATA FLOW PIPELINE
              </span>
              <h3 className="font-display font-black text-xl sm:text-2xl text-[#111111]">
                THE 5-STEP RAG PIPELINE
              </h3>
            </div>
            <span className="text-xs font-mono font-bold bg-[#111111] text-[#C8FF00] px-2 py-0.5">
              STEP {currentStage.step} OF 5
            </span>
          </div>

          {/* Stepper Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {ragPipelineStages.map((stage, idx) => (
              <button
                key={stage.step}
                onClick={() => setActiveStep(idx)}
                className={`p-3 brutal-border text-left transition cursor-pointer font-mono ${
                  activeStep === idx
                    ? "bg-[#111111] text-[#FFFFFF] brutal-shadow-sm translate-x-[-1px] translate-y-[-1px]"
                    : "bg-[#F4F2EB] text-[#111111] hover:bg-[#E8E5DC]"
                }`}
              >
                <div className="flex items-center justify-between mb-1 text-xs font-bold">
                  <span>[0{stage.step}]</span>
                  {activeStep === idx && <span className="w-2 h-2 bg-[#C8FF00]"></span>}
                </div>
                <p className="text-xs font-bold truncate">{stage.title.split("&")[0]}</p>
              </button>
            ))}
          </div>

          {/* Active Step Panel */}
          <div className="p-6 bg-[#F4F2EB] brutal-border space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#000000]">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-[#555555]">
                  STAGE {currentStage.step}:
                </span>
                <h4 className="font-display font-black text-xl text-[#111111]">{currentStage.title}</h4>
                <p className="text-xs font-mono text-[#0038FF] font-bold mt-0.5">{currentStage.subtitle}</p>
              </div>
              <span className="text-xs font-mono bg-[#FFFFFF] px-2.5 py-1 brutal-border-thin font-bold text-[#111111]">
                TECH: {currentStage.techUsed}
              </span>
            </div>

            <p className="text-sm sm:text-base text-[#222222] font-medium leading-relaxed">
              {currentStage.description}
            </p>

            {/* Analogy badge */}
            <div className="p-3.5 bg-[#FFFFFF] brutal-border flex items-start gap-3">
              <BookOpen className="w-5 h-5 text-[#111111] shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <span className="text-xs font-mono font-bold uppercase text-[#111111] block">
                  // 1ST-YEAR ANALOGY:
                </span>
                <p className="text-xs sm:text-sm text-[#444444] font-medium">
                  "{currentStage.analogy}"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Semantic Vector Space Visualizer */}
        <div className="max-w-5xl mx-auto mt-14 brutal-card p-6 sm:p-8 space-y-6 bg-[#F4F2EB]">
          <div>
            <div className="inline-block bg-[#111111] text-[#C8FF00] font-mono text-[10px] font-bold px-2 py-0.5 uppercase mb-1">
              MATHEMATICAL ENGINE
            </div>
            <h3 className="font-display font-black text-xl sm:text-2xl text-[#111111]">
              VECTOR EMBEDDINGS & COSINE SIMILARITY
            </h3>
            <p className="text-xs sm:text-sm text-[#555555] font-medium">
              Computers do not understand words; they calculate angles between high-dimensional coordinates. Select a test pair:
            </p>
          </div>

          {/* Sample Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
            {semanticVectorPairs.map((pair, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedPairIndex(idx)}
                className={`p-3 brutal-border text-left font-mono text-xs transition cursor-pointer ${
                  selectedPairIndex === idx
                    ? "bg-[#111111] text-[#FFFFFF] brutal-shadow-sm font-bold"
                    : "bg-[#FFFFFF] text-[#111111] hover:bg-[#E8E5DC]"
                }`}
              >
                <div className="flex items-center justify-between mb-1 text-[11px]">
                  <span>PAIR #{idx + 1}</span>
                  <span className={selectedPairIndex === idx ? "text-[#C8FF00]" : "text-[#0038FF]"}>
                    {(pair.similarity * 100).toFixed(0)}%
                  </span>
                </div>
                <p className="truncate font-sans font-medium">{pair.phraseA}</p>
              </button>
            ))}
          </div>

          {/* Comparison Output Box */}
          <div className="p-6 bg-[#FFFFFF] brutal-border space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3.5 bg-[#F4F2EB] brutal-border-thin space-y-1">
                <span className="text-[10px] font-mono uppercase font-bold text-[#555555]">
                  PHRASE A (STUDENT QUESTION):
                </span>
                <p className="text-sm font-bold text-[#111111]">"{activePair.phraseA}"</p>
              </div>

              <div className="p-3.5 bg-[#F4F2EB] brutal-border-thin space-y-1">
                <span className="text-[10px] font-mono uppercase font-bold text-[#0038FF]">
                  PHRASE B (COLLEGE HANDBOOK CHUNK):
                </span>
                <p className="text-sm font-bold text-[#111111]">"{activePair.phraseB}"</p>
              </div>
            </div>

            {/* Score Metric Bar */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono font-bold">
                <span className="flex items-center gap-2">
                  <span>COSINE SIMILARITY SCORE:</span>
                  <span className="text-base text-[#111111] font-black bg-[#C8FF00] px-1.5 brutal-border-thin">
                    {(activePair.similarity * 100).toFixed(0)}%
                  </span>
                </span>
                <span className="bg-[#111111] text-[#FFFFFF] px-2 py-0.5 uppercase text-[10px]">
                  {activePair.category}
                </span>
              </div>

              <div className="w-full h-4 bg-[#E8E5DC] brutal-border-thin p-0.5">
                <div 
                  className="h-full bg-[#111111] transition-all duration-300"
                  style={{ width: `${activePair.similarity * 100}%` }}
                />
              </div>
            </div>

            {/* Explanation */}
            <div className="p-3 bg-[#F4F2EB] brutal-border-thin text-xs text-[#222222] font-mono flex items-start gap-2">
              <HelpCircle className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
              <span><strong>ENGINEERING INSIGHT:</strong> {activePair.explanation}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
