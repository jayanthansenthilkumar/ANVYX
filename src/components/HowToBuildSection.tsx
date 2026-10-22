import React, { useState } from "react";
import { 
  Terminal, 
  Layers, 
  Copy, 
  Check, 
  Sparkles, 
  Cpu, 
  Database, 
  Globe, 
  Wrench, 
  ArrowRight,
  BookOpen
} from "lucide-react";
import { starterCodeSnippets } from "../data/codeSnippetsData";

export const HowToBuildSection: React.FC = () => {
  const [activeSnippetId, setActiveSnippetId] = useState(starterCodeSnippets[0].id);
  const [copied, setCopied] = useState(false);
  const [selectedLayer, setSelectedLayer] = useState<number>(0);

  const activeSnippet = starterCodeSnippets.find((s) => s.id === activeSnippetId) || starterCodeSnippets[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const layers = [
    {
      num: 1,
      name: "Interface (UI)",
      role: "The Face & Ears",
      tech: "React 19 / Gradio / Streamlit / WhatsApp",
      desc: "Where the user types messages or speaks voice notes. Handles streaming tokens and auto-scrolling chat bubbles.",
      icon: <Globe className="w-5 h-5 text-cyan-400" />
    },
    {
      num: 2,
      name: "Orchestrator (Backend)",
      role: "The Central Nervous System",
      tech: "FastAPI / Python / LangChain / LlamaIndex",
      desc: "Manages conversation history, session memory, rate limits, authentication, and connects the user prompt to the database.",
      icon: <Layers className="w-5 h-5 text-indigo-400" />
    },
    {
      num: 3,
      name: "Vector Memory (RAG)",
      role: "The Long-Term Knowledge Vault",
      tech: "ChromaDB / FAISS / Pinecone / pgvector",
      desc: "Stores company PDFs, college syllabus, and private docs as high-dimensional semantic coordinates. Prevents hallucinations.",
      icon: <Database className="w-5 h-5 text-emerald-400" />
    },
    {
      num: 4,
      name: "LLM Engine",
      role: "The Reasoning Brain",
      tech: "Ollama (Llama 3) / Claude / OpenAI / Gemini",
      desc: "Consumes the prompt + retrieved context and synthesizes a fluent, natural language answer.",
      icon: <Cpu className="w-5 h-5 text-pink-400" />
    },
    {
      num: 5,
      name: "Tool Calling & Actions",
      role: "The Hands & Feet",
      tech: "REST APIs / SQL Queries / Email Dispatcher",
      desc: "Allows the chatbot to take real-world actions: booking a campus bus ticket, generating a fee receipt, or sending a slack message.",
      icon: <Wrench className="w-5 h-5 text-amber-400" />
    }
  ];

  return (
    <section id="how-to-build" className="py-20 md:py-28 relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs uppercase tracking-wider">
            <Terminal className="w-3.5 h-3.5" />
            Engineering Blueprint
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            How to Build an <span className="text-cyan-400">AI Chatbot</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            A production chatbot isn't just a single API call. Master the 5-layer anatomy, then grab ready-to-run starter code for your afternoon build challenge!
          </p>
        </div>

        {/* 5-Layer Interactive Architecture Diagram */}
        <div className="mb-16">
          <div className="text-center mb-6">
            <span className="text-xs uppercase font-mono text-cyan-400 tracking-wider">
              Interactive Architecture Map • Click Any Layer to Inspect
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 max-w-6xl mx-auto">
            {layers.map((layer, idx) => (
              <div
                key={layer.num}
                onClick={() => setSelectedLayer(idx)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer relative flex flex-col justify-between ${
                  selectedLayer === idx
                    ? "bg-slate-900 border-cyan-400 shadow-xl shadow-cyan-500/20 scale-102"
                    : "bg-slate-950/70 border-white/10 hover:border-white/20 hover:bg-slate-900/60"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-6 h-6 rounded-full bg-slate-800 text-slate-300 text-xs font-mono font-bold flex items-center justify-center border border-white/10">
                      L{layer.num}
                    </span>
                    {layer.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight">{layer.name}</h4>
                    <span className="text-[11px] text-cyan-300 font-medium block mt-0.5">{layer.role}</span>
                  </div>
                </div>
                <div className="pt-3 border-t border-white/5 mt-3">
                  <span className="text-[10px] font-mono text-slate-400 block truncate">{layer.tech}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Inspector Box for Selected Layer */}
          <div className="max-w-4xl mx-auto mt-6 p-6 rounded-2xl bg-slate-900/90 border border-cyan-500/30 backdrop-blur-xl flex flex-col sm:flex-row items-start gap-4">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0 border border-cyan-500/30">
              {layers[selectedLayer].icon}
            </div>
            <div className="space-y-1.5 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono uppercase bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/30 font-bold">
                  Layer {layers[selectedLayer].num}: {layers[selectedLayer].name}
                </span>
                <span className="text-xs text-slate-400 font-medium">Role: {layers[selectedLayer].role}</span>
              </div>
              <p className="text-slate-200 text-sm md:text-base leading-relaxed pt-1">
                {layers[selectedLayer].desc}
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-cyan-300">
                <span className="text-slate-400">Recommended Tech Stack:</span>
                <span className="bg-slate-800 px-2 py-0.5 rounded text-white">{layers[selectedLayer].tech}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Code Snippets & Build Challenge Templates */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Terminal className="w-5 h-5 text-cyan-400" />
                Chatbot Build Challenge Starter Code
              </h3>
              <p className="text-xs text-slate-400">Tested and ready to copy-paste for the afternoon hackathon.</p>
            </div>

            {/* Code Selector Tabs */}
            <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-white/10">
              {starterCodeSnippets.map((snippet) => (
                <button
                  key={snippet.id}
                  onClick={() => setActiveSnippetId(snippet.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                    activeSnippetId === snippet.id
                      ? "bg-cyan-500 text-slate-950 font-bold shadow-md"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {snippet.filename}
                </button>
              ))}
            </div>
          </div>

          {/* Active Snippet Card */}
          <div className="rounded-3xl border border-white/15 bg-slate-950 overflow-hidden shadow-2xl">
            {/* Header bar of Code Box */}
            <div className="px-5 py-3.5 bg-slate-900 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <span className="font-mono text-xs font-semibold text-cyan-300">
                  {activeSnippet.filename}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
                  {activeSnippet.difficulty} • ~{activeSnippet.estimatedTime}
                </span>
              </div>

              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition cursor-pointer border border-white/10"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied Code!" : "Copy Code"}</span>
              </button>
            </div>

            {/* Prerequisites Banner */}
            <div className="px-5 py-2.5 bg-cyan-950/20 border-b border-cyan-500/20 text-xs text-cyan-300 flex flex-wrap items-center gap-x-4 gap-y-1">
              <span className="font-bold uppercase tracking-wider text-[10px] text-cyan-400">Prerequisites:</span>
              {activeSnippet.prerequisites.map((p, idx) => (
                <span key={idx} className="font-mono text-[11px] bg-slate-900/80 px-2 py-0.5 rounded border border-white/5 text-slate-300">
                  {p}
                </span>
              ))}
            </div>

            {/* Code Block */}
            <div className="p-4 sm:p-6 overflow-x-auto max-h-[420px] font-mono text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-950/90">
              <pre>
                <code>{activeSnippet.code}</code>
              </pre>
            </div>

            {/* Code Line Breakdown Guide */}
            <div className="p-5 bg-slate-900/60 border-t border-white/10 space-y-2">
              <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-2">
                📖 1st-Year Code Walkthrough:
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {activeSnippet.explanationSteps.map((step, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-900/80 border border-white/5 text-xs space-y-1">
                    <span className="font-mono text-cyan-400 font-bold">{step.lineRange}</span>
                    <p className="text-slate-300">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
