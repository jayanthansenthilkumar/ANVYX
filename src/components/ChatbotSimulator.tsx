import React, { useState, useRef, useEffect } from "react";
import { 
  Send, 
  Sliders, 
  Database, 
  AlertTriangle, 
  CheckCircle2, 
  RotateCcw, 
  Terminal
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
      text: "Vanakkam! I am the Zentra '26 Interactive Simulator. I demonstrate how modern software architectures combine LLM reasoning with RAG (Retrieval-Augmented Generation). Ask about Zentra '26, bus timings, or how to build a bot!",
      timestamp: "10:00:00 AM",
      isRagGrounded: true,
      retrievedContext: ["MKCE Campus Handbook 2026", "Zentra '26 Official Event Dossier"]
    }
  ]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isGenerating]);

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
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery("");
    setIsGenerating(true);

    setTimeout(() => {
      let botResponse = "";
      let retrievedContext: string[] = [];

      const lower = query.toLowerCase();

      if (!ragEnabled) {
        if (lower.includes("zentra") || lower.includes("resource person") || lower.includes("bus")) {
          botResponse = "[ERROR: KNOWLEDGE_CUTOFF_LIMITATION]\nI am a bare pre-trained model with knowledge frozen in 2024. I have no access to 2026 campus events or private MKCE college files. I cannot verify Zentra '26 schedule or internal bus routes.\n\n(Observe: Without RAG, even large models hallucinate or fail on private domain data!)";
        } else {
          botResponse = `[GENERIC_LLM_RESPONSE]: Regarding "${query}", I can offer generalized conversational assumptions, but I have no verified campus documentation.`;
        }
      } else {
        if (lower.includes("zentra") || lower.includes("resource person") || lower.includes("hall") || lower.includes("venue")) {
          retrievedContext = [
            "Source 1: Zentra '26 Flyer - Oct 23, 2026 at Sir C V Raman Hall, MKCE.",
            "Source 2: Resource Persons - Jayanthan Senthilkumar (TCS) & Sarveshwaran Sanjeevi (CTS Chennai).",
            "Source 3: Organizers - Dept of CSBS & AIML with IBM Skills & AAROH."
          ];
          botResponse = temperature < 0.5 
            ? "VERIFIED KNOWLEDGE CHUNKS RETRIEVED:\n• Event: ZENTRA '26 (AI Chatbot Workshop & Build Challenge)\n• Date: 23rd October 2026\n• Venue: Sir C V Raman Hall, MKCE Campus\n• Slogan: 'Don't Just Use AI, Create It'\n• Resource Persons: Jayanthan Senthilkumar (System Engineer, TCS) & Sarveshwaran Sanjeevi (Associate Engineer, CTS)\n• Hosts: Dept of CSBS & AIML with IBM Skills & AAROH."
            : "Welcome to ZENTRA '26! Taking place at Sir C V Raman Hall on October 23, 2026, this event turns 1st years from AI consumers into AI architects! Our resource persons from TCS and CTS are here to guide your build challenge. Let's code!";
        } else if (lower.includes("bus") || lower.includes("route") || lower.includes("timing")) {
          retrievedContext = [
            "Source: MKCE Transport Circular 2026 - Route #12 & #18 Karur to College Campus."
          ];
          botResponse = "MKCE CAMPUS TRANSPORT DATA:\nBus Route #12 departs Karur Central Bus Stand at 07:45 AM; Route #18 departs at 08:00 AM. Both reach the main campus gate by 08:30 AM before morning attendance.";
        } else if (lower.includes("embedding") || lower.includes("vector")) {
          retrievedContext = [
            "Source: CSBS AI Course Module 1 - Semantic Representations in Vector Spaces."
          ];
          botResponse = "VECTOR EMBEDDINGS EXPLAINED FOR 1ST YEARS:\nAn embedding translates the meaning of text into a list of numbers (coordinates). Just like Karur and Chennai have GPS coordinates on a map and close coordinates mean physical proximity, 'chatbot' and 'conversational agent' have close coordinates in mathematical meaning space. That is how vector search works!";
        } else {
          retrievedContext = [
            "Source: ZENTRA '26 Masterclass Knowledge Base."
          ];
          botResponse = `GROUNDED RESPONSE FOR CSBS:\nRegarding "${query}": RAG combines procedural verification with neural linguistic fluency. It allows 1st-year engineers to build trustworthy applications without spending millions retraining weights.`;
        }
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        text: botResponse,
        isRagGrounded: ragEnabled,
        retrievedContext: ragEnabled && retrievedContext.length > 0 ? retrievedContext : undefined,
        latency: ragEnabled ? "280ms (Vector Search: 42ms + LLM: 238ms)" : "195ms (Direct LLM)",
        timestamp: new Date().toLocaleTimeString()
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsGenerating(false);
    }, 600);
  };

  const handleReset = () => {
    setMessages([
      {
        id: "reset",
        role: "assistant",
        text: "Console reset. Toggle the RAG switch above to test Bare LLM (hallucination-prone) versus RAG Grounded (accurate & cited).",
        timestamp: new Date().toLocaleTimeString(),
        isRagGrounded: ragEnabled
      }
    ]);
  };

  return (
    <section id="simulator" className="py-16 md:py-24 brutal-border-b bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <div className="inline-block bg-[#111111] text-[#C8FF00] font-mono text-xs font-bold px-2 py-0.5 uppercase tracking-wider">
            [01] // INTERACTIVE CONSOLE
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-[#111111]">
            CHATBOT & RAG <span className="bg-[#C8FF00] px-2 brutal-border-thin">SIMULATOR</span>
          </h2>
          <p className="text-sm sm:text-base text-[#555555] font-medium">
            Test the live difference between an ungrounded LLM and a verified RAG architecture. Toggle parameters and inspect retrieved chunks.
          </p>
        </div>

        {/* Industrial Brutalist Simulator Container */}
        <div className="max-w-4xl mx-auto brutal-card brutal-shadow-lg overflow-hidden flex flex-col h-[720px] bg-[#FFFFFF]">
          
          {/* Top Instrument Header */}
          <div className="bg-[#111111] text-[#FFFFFF] p-4 brutal-border-b flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#C8FF00] text-[#111111] brutal-border flex items-center justify-center font-bold">
                <Terminal className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-mono text-xs font-bold text-[#FFFFFF] flex items-center gap-2">
                  <span>CONSOLE_V26 // MKCE_KNOWLEDGE_VAULT</span>
                  <span className={`px-1.5 py-0.2 text-[10px] font-bold ${
                    ragEnabled ? "bg-[#C8FF00] text-[#111111]" : "bg-[#FF3E00] text-[#FFFFFF]"
                  }`}>
                    {ragEnabled ? "RAG_ACTIVE" : "BARE_LLM"}
                  </span>
                </h3>
                <span className="text-[10px] font-mono text-[#888888]">
                  TEMP: {temperature} // LATENCY: 280MS // SYSTEM: READY
                </span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              {/* RAG Master Switch */}
              <button
                onClick={() => setRagEnabled(!ragEnabled)}
                className={`px-3 py-1.5 text-xs font-mono font-bold brutal-border transition flex items-center gap-2 ${
                  ragEnabled 
                    ? "bg-[#C8FF00] text-[#111111]" 
                    : "bg-[#FFFFFF] text-[#111111]"
                }`}
              >
                <Database className="w-3.5 h-3.5" />
                <span>RAG: {ragEnabled ? "ENABLED" : "DISABLED"}</span>
              </button>

              {/* Param Tweak */}
              <button
                onClick={() => setShowConfig(!showConfig)}
                className={`p-2 brutal-border text-xs font-mono transition ${
                  showConfig ? "bg-[#C8FF00] text-[#111111]" : "bg-[#FFFFFF] text-[#111111] hover:bg-[#E8E5DC]"
                }`}
                title="Configure Temperature & Persona"
              >
                <Sliders className="w-3.5 h-3.5" />
              </button>

              {/* Reset */}
              <button
                onClick={handleReset}
                className="p-2 brutal-border bg-[#FFFFFF] text-[#111111] hover:bg-[#E8E5DC] text-xs font-mono"
                title="Reset Console"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Collapsible Parameter Controls */}
          {showConfig && (
            <div className="p-4 bg-[#F4F2EB] brutal-border-b grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div>
                <div className="flex justify-between font-bold mb-1">
                  <span>TEMPERATURE (CREATIVITY): {temperature}</span>
                  <span className="text-[#555555]">{temperature < 0.4 ? "DETERMINISTIC" : "CREATIVE"}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1.0"
                  step="0.1"
                  value={temperature}
                  onChange={(e) => setTemperature(parseFloat(e.target.value))}
                  className="w-full accent-[#111111] cursor-pointer"
                />
                <span className="text-[10px] text-[#666666] block mt-1">
                  Use 0.0 for factual college regulations; 0.8 for creative writing.
                </span>
              </div>

              <div>
                <span className="font-bold block mb-1">SYSTEM PERSONA:</span>
                <div className="grid grid-cols-3 gap-1">
                  {(["mentor", "admin", "business"] as const).map((p) => (
                    <button
                      key={p}
                      onClick={() => setPersona(p)}
                      className={`py-1 px-2 uppercase text-[11px] font-bold brutal-border transition ${
                        persona === p
                          ? "bg-[#111111] text-[#C8FF00]"
                          : "bg-[#FFFFFF] text-[#111111] hover:bg-[#E8E5DC]"
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
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-[#F4F2EB] brutal-grid-bg">
            {messages.map((m) => (
              <div 
                key={m.id} 
                className={`flex gap-3 ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {/* Assistant Avatar */}
                {m.role === "assistant" && (
                  <div className={`w-8 h-8 brutal-border flex items-center justify-center font-mono font-bold shrink-0 ${
                    m.isRagGrounded ? "bg-[#C8FF00] text-[#111111]" : "bg-[#FF3E00] text-[#FFFFFF]"
                  }`}>
                    AI
                  </div>
                )}

                {/* Message Box */}
                <div className={`max-w-[85%] brutal-border p-4 text-xs sm:text-sm ${
                  m.role === "user"
                    ? "bg-[#111111] text-[#FFFFFF] brutal-shadow-sm font-mono"
                    : "bg-[#FFFFFF] text-[#111111] brutal-shadow space-y-2"
                }`}>
                  {m.role === "assistant" && (
                    <div className="flex flex-wrap items-center justify-between pb-2 mb-2 border-b border-[#000000] text-[10px] font-mono">
                      {m.isRagGrounded ? (
                        <span className="bg-[#C8FF00] text-[#111111] px-1 font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          RAG_GROUNDED // MKCE_VAULT
                        </span>
                      ) : (
                        <span className="bg-[#FF3E00] text-[#FFFFFF] px-1 font-bold flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3" />
                          UNGROUNDED_MODEL_MEMORY
                        </span>
                      )}
                      <span className="text-[#666666]">{m.latency}</span>
                    </div>
                  )}

                  <p className="whitespace-pre-line leading-relaxed font-sans font-medium">
                    {m.text}
                  </p>

                  {/* Retrieved Context Chunks */}
                  {m.retrievedContext && m.retrievedContext.length > 0 && (
                    <div className="pt-2 border-t border-[#000000]/20 space-y-1">
                      <span className="text-[10px] font-mono uppercase font-bold text-[#555555] block">
                        // RETRIEVED GROUNDING CHUNKS ({m.retrievedContext.length}):
                      </span>
                      {m.retrievedContext.map((c, i) => (
                        <div key={i} className="text-[11px] font-mono bg-[#E8E5DC] p-1.5 brutal-border-thin text-[#222222]">
                          {c}
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="text-[10px] font-mono text-[#888888] pt-1 text-right">
                    {m.timestamp}
                  </div>
                </div>

                {/* User Avatar */}
                {m.role === "user" && (
                  <div className="w-8 h-8 brutal-border bg-[#FFFFFF] text-[#111111] font-mono font-bold flex items-center justify-center shrink-0">
                    YOU
                  </div>
                )}
              </div>
            ))}

            {isGenerating && (
              <div className="flex gap-2 items-center text-xs font-mono font-bold text-[#111111] pl-11">
                <span className="w-2 h-2 bg-[#C8FF00] animate-ping"></span>
                <span>SEARCHING VECTOR SPACE & SYNTHESIZING...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions Ticker */}
          <div className="px-4 py-2 bg-[#E8E5DC] brutal-border-t flex items-center gap-2 overflow-x-auto text-xs font-mono">
            <span className="font-bold text-[#111111] whitespace-nowrap">PROMPTS:</span>
            {sampleQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                className="px-2.5 py-1 bg-[#FFFFFF] hover:bg-[#C8FF00] brutal-border-thin whitespace-nowrap text-[#111111] font-bold cursor-pointer transition text-[11px]"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-[#FFFFFF] brutal-border-t flex gap-2"
          >
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder="Ask anything (e.g. 'What is Zentra 26?', 'How does RAG eliminate hallucinations?')..."
              className="flex-1 bg-[#F4F2EB] text-[#111111] font-mono px-4 py-2.5 text-xs sm:text-sm brutal-border focus:outline-none focus:bg-[#FFFFFF]"
            />
            <button
              type="submit"
              disabled={isGenerating || !inputQuery.trim()}
              className="brutal-btn brutal-btn-primary px-5 py-2.5 text-xs font-mono flex items-center gap-2"
            >
              <span>SEND</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};
