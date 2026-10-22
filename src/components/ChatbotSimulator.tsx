import React, { useState, useRef, useEffect } from "react";
import { 
  Bot, 
  User, 
  Send, 
  Sparkles, 
  Sliders, 
  Database, 
  AlertTriangle, 
  CheckCircle, 
  RotateCcw, 
  Layers,
  ChevronDown,
  Info
} from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  text: string;
  isRagGrounded?: boolean;
  retrievedContext?: string[];
  latency?: string;
  timestamp: string;
}

export const ChatbotSimulator: React.FC = () => {
  const [ragEnabled, setRagEnabled] = useState(true);
  const [temperature, setTemperature] = useState(0.3);
  const [persona, setPersona] = useState<"mentor" | "admin" | "business">("mentor");
  const [inputQuery, setInputQuery] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [showConfig, setShowConfig] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial",
      role: "assistant",
      text: "👋 Vanakkam! I am your Zentra '26 Interactive Simulator. I am here to demonstrate how modern AI chatbots combine LLM reasoning with RAG (Retrieval-Augmented Generation). Try asking me about Zentra '26, bus timings, or how to build a bot!",
      timestamp: "10:00 AM",
      isRagGrounded: true,
      retrievedContext: ["MKCE Campus Handbook 2026", "Zentra '26 Event Agenda"]
    }
  ]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isGenerating]);

  // Pre-configured questions that demonstrate RAG vs Non-RAG
  const sampleQuestions = [
    "What is ZENTRA '26 and who are the resource persons?",
    "Which bus goes from Karur bus stand to MKCE and at what time?",
    "Why should a 1st year CSBS student learn RAG instead of just prompting?",
    "Explain what an embedding vector is in simple words."
  ];

  const handleSend = (textToSend?: string) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery("");
    setIsGenerating(true);

    // Simulate realistic generation latency
    setTimeout(() => {
      let botResponse = "";
      let retrievedContext: string[] = [];

      const lower = query.toLowerCase();

      if (!ragEnabled) {
        // SIMULATED PURE LLM WITHOUT RAG (Hallucination or knowledge cutoff)
        if (lower.includes("zentra") || lower.includes("resource person") || lower.includes("bus")) {
          botResponse = "⚠️ [Pure LLM without RAG]: I am sorry, but as a generic pre-trained model with a training cutoff in early 2024, I have no access to real-time 2026 campus events or private MKCE college files. I don't know the exact schedule of Zentra '26 or internal Karur bus routes. \n\n(Notice: Without RAG, even the most expensive LLM cannot answer questions about private or up-to-date domain data!)";
        } else {
          botResponse = `[Generic LLM]: Based on general knowledge, ${query} is a broad topic. I can discuss high-level theory, but I have no specific campus context or verified local documentation.`;
        }
      } else {
        // SIMULATED RAG ENABLED (Grounded with verified knowledge base)
        if (lower.includes("zentra") || lower.includes("resource person") || lower.includes("hall") || lower.includes("venue")) {
          retrievedContext = [
            "Source 1: Zentra '26 Poster - Held on Oct 23, 2026 at Sir C V Raman Hall, MKCE.",
            "Source 2: Resource Persons - Jayanthan Senthilkumar (System Engineer, TCS) & Sarveshwaran Sanjeevi (Associate Engineer, CTS Chennai).",
            "Source 3: Organizers - Dept of CSBS & AIML with IBM Skills & AAROH."
          ];
          botResponse = temperature < 0.5 
            ? "✅ Grounded Fact Summary:\n• Event: ZENTRA '26 (AI Chatbot Workshop & Build Challenge)\n• Date & Venue: 23rd October 2026 at Sir C V Raman Hall, MKCE Campus\n• Slogan: 'Don't Just Use AI, Create It'\n• Resource Persons: Jayanthan Senthilkumar (TCS) & Sarveshwaran Sanjeevi (CTS Chennai)\n• Hosts: Dept of CSBS & AIML in partnership with IBM Skills & AAROH."
            : "🚀 Welcome to ZENTRA '26! Taking place right here at Sir C V Raman Hall on October 23, 2026, this event is designed to transform you from an AI consumer to an AI builder! Our esteemed resource persons are Jayanthan Senthilkumar from TCS and Sarveshwaran Sanjeevi from CTS. Let's build something extraordinary today!";
        } else if (lower.includes("bus") || lower.includes("route") || lower.includes("timing")) {
          retrievedContext = [
            "Source: MKCE Transport Circular 2026 - Route #12 & #18 Karur to College Campus."
          ];
          botResponse = "🚌 Official Campus Transport Information:\nMKCE College Bus Route #12 departs from Karur Central Bus Stand at 07:45 AM, and Route #18 departs at 08:00 AM. Both arrive at the college main gate by 08:30 AM before morning attendance.";
        } else if (lower.includes("embedding") || lower.includes("vector")) {
          retrievedContext = [
            "Source: CSBS AI Course Module 1 - Semantic Representations in High-Dimensional Vector Spaces."
          ];
          botResponse = "📐 Vector Embedding Explained for 1st Years:\nAn embedding translates the 'meaning' of words into GPS coordinates (a list of numbers). Just like Chennai and Karur are coordinates on a map and close distance means they are geographically nearby, 'chatbot' and 'conversational AI' are coordinates close to each other in meaning space. This allows computers to understand synonyms without exact keyword matching!";
        } else {
          retrievedContext = [
            "Source: ZENTRA '26 Keynote Knowledge Base & CSBS Curriculum."
          ];
          botResponse = `🎯 Grounded Response for CSBS Students:\nRegarding "${query}": The key takeaway for 1st-year students is that software in 2026 combines procedural code with probabilistic reasoning. RAG gives you the best of both worlds: deterministic factual accuracy with human-like linguistic fluency!`;
        }
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        text: botResponse,
        isRagGrounded: ragEnabled,
        retrievedContext: ragEnabled && retrievedContext.length > 0 ? retrievedContext : undefined,
        latency: ragEnabled ? "280ms (Vector Search: 42ms + LLM: 238ms)" : "195ms (Direct LLM)",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsGenerating(false);
    }, 700);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: "reset",
        role: "assistant",
        text: "Simulator reset. Toggle the RAG switch above to observe how answers change between Pure LLM (hallucination prone) and RAG Grounded (accurate & cited)!",
        timestamp: "Now",
        isRagGrounded: ragEnabled
      }
    ]);
  };

  return (
    <section id="simulator" className="py-20 md:py-28 relative border-b border-white/10 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Live Laboratory
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Chatbot & RAG <span className="text-cyan-400">Simulator</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Experience firsthand the difference between a bare LLM and a grounded RAG architecture. Toggle parameters and watch knowledge retrieval in action!
          </p>
        </div>

        {/* Simulator Box */}
        <div className="max-w-4xl mx-auto rounded-3xl border border-white/15 bg-slate-900/90 shadow-2xl backdrop-blur-2xl overflow-hidden flex flex-col h-[700px]">
          
          {/* Top Control Bar */}
          <div className="p-4 sm:p-5 border-b border-white/10 bg-slate-950/80 flex flex-wrap items-center justify-between gap-4">
            
            {/* Status / Bot Identity */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
                  <Bot className="w-5 h-5" />
                </div>
                <span className={`absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-slate-950 ${
                  ragEnabled ? "bg-emerald-400" : "bg-amber-400"
                }`}></span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  Zentra Knowledge Engine
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-medium ${
                    ragEnabled 
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" 
                      : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                  }`}>
                    {ragEnabled ? "RAG Grounded" : "Bare LLM (No RAG)"}
                  </span>
                </h3>
                <p className="text-xs text-slate-400 font-mono">Temp: {temperature} • Latency: ~280ms</p>
              </div>
            </div>

            {/* Quick Interactive Toggles */}
            <div className="flex items-center gap-3">
              {/* RAG Master Switch */}
              <div className="flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-xl border border-white/10">
                <Database className={`w-4 h-4 ${ragEnabled ? "text-cyan-400" : "text-slate-500"}`} />
                <span className="text-xs text-slate-200 font-medium">RAG Mode:</span>
                <button
                  onClick={() => setRagEnabled(!ragEnabled)}
                  className={`w-11 h-6 rounded-full p-0.5 transition-colors cursor-pointer ${
                    ragEnabled ? "bg-cyan-500" : "bg-slate-700"
                  }`}
                  title="Toggle Retrieval-Augmented Generation"
                >
                  <div className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    ragEnabled ? "translate-x-5" : "translate-x-0"
                  }`} />
                </button>
              </div>

              {/* Advanced Config Dropdown toggle */}
              <button
                onClick={() => setShowConfig(!showConfig)}
                className={`p-2 rounded-xl border transition cursor-pointer ${
                  showConfig 
                    ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/40" 
                    : "bg-slate-900 text-slate-400 hover:text-white border-white/10"
                }`}
                title="Tweak Temperature & System Persona"
              >
                <Sliders className="w-4 h-4" />
              </button>

              {/* Reset Chat button */}
              <button
                onClick={handleResetChat}
                className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-white/10 transition cursor-pointer"
                title="Reset Conversation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Collapsible Advanced Parameters Drawer */}
          {showConfig && (
            <div className="p-4 bg-slate-950/95 border-b border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs animate-in slide-in-from-top-2">
              <div>
                <div className="flex justify-between text-slate-300 font-medium mb-1.5">
                  <span className="flex items-center gap-1.5">
                    Temperature (Creativity): <span className="text-cyan-400 font-mono font-bold">{temperature}</span>
                  </span>
                  <span className="text-slate-400">{temperature < 0.4 ? "Precise/Deterministic" : "Creative/Diverse"}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1.0"
                  step="0.1"
                  value={temperature}
                  onChange={(e) => setTemperature(parseFloat(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
                <span className="text-[10px] text-slate-400 mt-1 block">
                  Tip: Use 0.0 for factual banking/exam rules; 0.8 for creative writing.
                </span>
              </div>

              <div>
                <span className="text-slate-300 font-medium block mb-1.5">System Persona:</span>
                <div className="grid grid-cols-3 gap-2">
                  {(["mentor", "admin", "business"] as const).map((p) => (
                    <button
                      key={p}
                      onClick={() => setPersona(p)}
                      className={`py-1.5 px-2 rounded-lg text-center capitalize transition cursor-pointer border ${
                        persona === p
                          ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/40 font-bold"
                          : "bg-slate-900 text-slate-400 border-white/5 hover:text-white"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
            {messages.map((m) => (
              <div 
                key={m.id} 
                className={`flex gap-3.5 ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {/* Bot Avatar */}
                {m.role === "assistant" && (
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border shadow ${
                    m.isRagGrounded 
                      ? "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" 
                      : "bg-amber-500/20 text-amber-400 border-amber-500/30"
                  }`}>
                    <Bot className="w-5 h-5" />
                  </div>
                )}

                {/* Message Bubble */}
                <div className={`max-w-[85%] rounded-3xl p-4 sm:p-5 text-sm sm:text-base ${
                  m.role === "user"
                    ? "bg-gradient-to-r from-cyan-600 to-indigo-600 text-white rounded-tr-none shadow-lg shadow-cyan-600/20"
                    : "bg-slate-900/95 text-slate-200 border border-white/10 rounded-tl-none shadow-md space-y-3"
                }`}>
                  
                  {/* Assistant Header Badge: Grounded or Unverified */}
                  {m.role === "assistant" && (
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-white/5 text-xs font-mono">
                      {m.isRagGrounded ? (
                        <span className="text-emerald-400 flex items-center gap-1.5 font-semibold">
                          <CheckCircle className="w-3.5 h-3.5" />
                          RAG Grounded in MKCE Vault
                        </span>
                      ) : (
                        <span className="text-amber-400 flex items-center gap-1.5 font-semibold">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          Unverified Generic Memory (No Context)
                        </span>
                      )}
                      {m.latency && <span className="text-slate-400">{m.latency}</span>}
                    </div>
                  )}

                  {/* Message Text */}
                  <p className="whitespace-pre-line leading-relaxed">
                    {m.text}
                  </p>

                  {/* Retrieved Context Cards (RAG Inspection) */}
                  {m.retrievedContext && m.retrievedContext.length > 0 && (
                    <div className="pt-2">
                      <div className="p-3 rounded-xl bg-slate-950/70 border border-cyan-500/20 text-xs space-y-1.5">
                        <span className="text-cyan-300 font-bold uppercase tracking-wider flex items-center gap-1 text-[11px]">
                          <Database className="w-3 h-3 text-cyan-400" />
                          Retrieved Context Chunks (Top-K = {m.retrievedContext.length}):
                        </span>
                        {m.retrievedContext.map((c, i) => (
                          <p key={i} className="text-slate-300 font-mono text-[11px] bg-slate-900/80 p-1.5 rounded border border-white/5">
                            {c}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}

                  <span className="text-[10px] text-slate-400 block text-right mt-1">
                    {m.timestamp}
                  </span>
                </div>

                {/* User Avatar */}
                {m.role === "user" && (
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center justify-center shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                )}
              </div>
            ))}

            {isGenerating && (
              <div className="flex gap-3 items-center text-cyan-400 text-xs sm:text-sm font-mono pl-12">
                <Sparkles className="w-4 h-4 animate-spin" />
                <span>Searching vector indices & synthesizing response...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="px-4 py-2 bg-slate-950/60 border-t border-white/5 flex items-center gap-2 overflow-x-auto text-xs">
            <span className="text-slate-400 font-mono whitespace-nowrap">Try asking:</span>
            {sampleQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                className="px-3 py-1 rounded-full bg-slate-900 hover:bg-slate-800 text-cyan-300 hover:text-white border border-cyan-500/20 whitespace-nowrap transition cursor-pointer text-xs"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-4 border-t border-white/10 bg-slate-950 flex gap-3"
          >
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder="Ask anything (e.g. 'What is Zentra 26?', 'How does RAG eliminate hallucinations?')..."
              className="flex-1 bg-slate-900 text-white rounded-2xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10 placeholder:text-slate-500"
            />
            <button
              type="submit"
              disabled={isGenerating || !inputQuery.trim()}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 disabled:opacity-40 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 flex items-center gap-2 transition cursor-pointer shrink-0"
            >
              <span>Send</span>
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};
