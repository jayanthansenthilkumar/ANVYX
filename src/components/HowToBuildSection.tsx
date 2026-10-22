import React, { useState } from "react";
import { 
  Layers, 
  Copy, 
  Check, 
  Cpu, 
  Database, 
  Globe, 
  Wrench
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
      name: "INTERFACE (UI)",
      role: "The Face & Ears",
      tech: "React 19 / Gradio / Streamlit / WhatsApp",
      desc: "Where the user interacts. Handles token streaming, auto-scrolling conversation bubbles, and accessible responsive controls.",
      icon: <Globe className="w-5 h-5 text-[#111111]" />
    },
    {
      num: 2,
      name: "ORCHESTRATOR",
      role: "Central Nervous System",
      tech: "FastAPI / Python / LangChain / LlamaIndex",
      desc: "Manages session state, conversation history buffers, token budgeting, and coordinates search queries with database vaults.",
      icon: <Layers className="w-5 h-5 text-[#0038FF]" />
    },
    {
      num: 3,
      name: "VECTOR VAULT (RAG)",
      role: "Long-Term Knowledge Memory",
      tech: "ChromaDB / FAISS / Pinecone / pgvector",
      desc: "Stores documents, circulars, and handbooks as numerical coordinates in high-dimensional semantic space. Completely stops hallucinations.",
      icon: <Database className="w-5 h-5 text-[#111111]" />
    },
    {
      num: 4,
      name: "LLM ENGINE",
      role: "The Reasoning Core",
      tech: "Ollama (Llama 3.2) / Claude / OpenAI / Gemini",
      desc: "Takes user input + retrieved context and calculates probability distributions to generate accurate, natural language answers.",
      icon: <Cpu className="w-5 h-5 text-[#FF3E00]" />
    },
    {
      num: 5,
      name: "TOOL EXECUTION",
      role: "Hands & Action Layer",
      tech: "REST APIs / SQL / College ERP / SMTP",
      desc: "Empowers the bot to take real-world actions: retrieving attendance records, booking lab equipment, or sending notifications.",
      icon: <Wrench className="w-5 h-5 text-[#111111]" />
    }
  ];

  return (
    <section id="how-to-build" className="py-16 md:py-24 brutal-border-b bg-[#F4F2EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <div className="inline-block bg-[#111111] text-[#C8FF00] font-mono text-xs font-bold px-2 py-0.5 uppercase tracking-wider">
            [02] // SYSTEM_ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-[#111111]">
            HOW TO BUILD AN <span className="bg-[#FFFFFF] px-2 brutal-border-thin">AI CHATBOT</span>
          </h2>
          <p className="text-sm sm:text-base text-[#555555] font-medium">
            A production chatbot is an orchestrated 5-layer engineering stack. Inspect each architectural tier below and copy the starter code for your build challenge.
          </p>
        </div>

        {/* 5-Layer Stack Grid */}
        <div className="mb-14">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#555555] mb-3">
            // SELECT AN ARCHITECTURAL LAYER TO INSPECT:
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {layers.map((layer, idx) => (
              <div
                key={layer.num}
                onClick={() => setSelectedLayer(idx)}
                className={`p-4 brutal-border transition cursor-pointer flex flex-col justify-between ${
                  selectedLayer === idx
                    ? "bg-[#111111] text-[#FFFFFF] brutal-shadow-lg translate-x-[-2px] translate-y-[-2px]"
                    : "bg-[#FFFFFF] text-[#111111] brutal-shadow-sm hover:bg-[#E8E5DC]"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-mono font-bold px-1.5 py-0.5 brutal-border-thin ${
                      selectedLayer === idx ? "bg-[#C8FF00] text-[#111111]" : "bg-[#F4F2EB] text-[#111111]"
                    }`}>
                      L{layer.num}
                    </span>
                    <div className={selectedLayer === idx ? "text-[#C8FF00]" : ""}>
                      {layer.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm tracking-tight">{layer.name}</h4>
                    <span className={`text-[11px] font-mono block mt-0.5 ${
                      selectedLayer === idx ? "text-[#C8FF00]" : "text-[#555555]"
                    }`}>
                      {layer.role}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-current/20 mt-3 text-[10px] font-mono truncate">
                  {layer.tech}
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Inspector Box */}
          <div className="mt-4 p-5 bg-[#FFFFFF] brutal-border brutal-shadow flex flex-col sm:flex-row items-start gap-4">
            <div className="w-12 h-12 bg-[#C8FF00] brutal-border flex items-center justify-center font-bold shrink-0">
              {layers[selectedLayer].icon}
            </div>
            <div className="space-y-2 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs font-bold bg-[#111111] text-[#FFFFFF] px-2 py-0.5">
                  LAYER {layers[selectedLayer].num}: {layers[selectedLayer].name}
                </span>
                <span className="text-xs font-mono font-bold text-[#555555]">
                  // {layers[selectedLayer].role}
                </span>
              </div>
              <p className="text-sm text-[#222222] font-medium leading-relaxed">
                {layers[selectedLayer].desc}
              </p>
              <div className="text-xs font-mono pt-1 text-[#111111]">
                <strong className="text-[#0038FF]">TECH STACK SPECIFICATION:</strong>{" "}
                <span className="bg-[#E8E5DC] px-2 py-0.5 brutal-border-thin font-bold">
                  {layers[selectedLayer].tech}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Code Snippets & Build Challenge Templates */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="inline-block bg-[#0038FF] text-[#FFFFFF] font-mono text-[10px] font-bold px-2 py-0.5 uppercase mb-1">
                AFTERNOON BUILD CHALLENGE
              </div>
              <h3 className="font-display font-black text-xl sm:text-2xl text-[#111111]">
                STARTER CODE TEMPLATES
              </h3>
            </div>

            {/* Snippet Tabs */}
            <div className="flex flex-wrap gap-1">
              {starterCodeSnippets.map((snippet) => (
                <button
                  key={snippet.id}
                  onClick={() => setActiveSnippetId(snippet.id)}
                  className={`px-3 py-1.5 text-xs font-mono font-bold brutal-border transition cursor-pointer ${
                    activeSnippetId === snippet.id
                      ? "bg-[#111111] text-[#C8FF00] brutal-shadow-sm"
                      : "bg-[#FFFFFF] text-[#111111] hover:bg-[#E8E5DC]"
                  }`}
                >
                  {snippet.filename}
                </button>
              ))}
            </div>
          </div>

          {/* Active Snippet Terminal Block */}
          <div className="brutal-card brutal-shadow-lg overflow-hidden bg-[#111111] text-[#FFFFFF]">
            {/* Header bar */}
            <div className="px-4 py-3 bg-[#1B1B1B] brutal-border-b flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-[#C8FF00] inline-block"></span>
                <span className="text-[#C8FF00] font-bold">{activeSnippet.filename}</span>
                <span className="text-[#888888] hidden sm:inline">
                  [{activeSnippet.difficulty} // ~{activeSnippet.estimatedTime}]
                </span>
              </div>

              <button
                onClick={handleCopy}
                className="brutal-btn brutal-btn-primary px-3 py-1 text-xs font-mono flex items-center gap-1.5"
              >
                {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? "COPIED!" : "COPY_CODE"}</span>
              </button>
            </div>

            {/* Prerequisites */}
            <div className="px-4 py-2 bg-[#161616] border-b border-[#333333] text-xs font-mono flex flex-wrap items-center gap-2">
              <span className="text-[#C8FF00] font-bold">SETUP:</span>
              {activeSnippet.prerequisites.map((p, idx) => (
                <span key={idx} className="bg-[#242424] text-[#E0E0E0] px-2 py-0.5 border border-[#3A3A3A] text-[11px]">
                  {p}
                </span>
              ))}
            </div>

            {/* Code */}
            <div className="p-4 sm:p-6 overflow-x-auto max-h-[420px] font-mono text-xs sm:text-sm text-[#F4F2EB] leading-relaxed select-text bg-[#0D0D0D]">
              <pre>
                <code>{activeSnippet.code}</code>
              </pre>
            </div>

            {/* Line walkthrough guide */}
            <div className="p-4 bg-[#1B1B1B] brutal-border-t">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C8FF00] block mb-2">
                // 1ST-YEAR ARCHITECTURAL CODE BREAKDOWN:
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-mono">
                {activeSnippet.explanationSteps.map((step, idx) => (
                  <div key={idx} className="p-2 bg-[#111111] border border-[#333333] space-y-0.5">
                    <span className="text-[#C8FF00] font-bold">{step.lineRange}:</span>
                    <p className="text-[#CCCCCC]">{step.description}</p>
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
