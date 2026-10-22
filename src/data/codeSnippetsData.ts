export interface CodeSnippet {
  id: string;
  title: string;
  subtitle: string;
  language: string;
  filename: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  estimatedTime: string;
  prerequisites: string[];
  description: string;
  code: string;
  explanationSteps: {
    lineRange: string;
    description: string;
  }[];
}

export const starterCodeSnippets: CodeSnippet[] = [
  {
    id: "local-ollama-gradio",
    title: "1. Zero-Cost Offline Chatbot (Ollama + Gradio)",
    subtitle: "Runs 100% on your laptop without any API keys or credit cards!",
    language: "python",
    filename: "app_local_bot.py",
    difficulty: "Beginner",
    estimatedTime: "10 minutes",
    prerequisites: ["Install Python 3.10+", "Download Ollama from ollama.com", "Run: ollama run llama3.2:1b"],
    description: "The simplest, fastest way for a 1st-year student to build a working conversational AI web application with an interactive GUI.",
    code: `# ZENTRA '26 - Minimal Local AI Chatbot
# Run command: pip install gradio requests
import gradio as gr
import requests

OLLAMA_URL = "http://localhost:11434/api/generate"
MODEL_NAME = "llama3.2:1b"  # Fast, lightweight model for college laptops!

def chat_with_ai(user_message, history):
    system_instruction = "You are a helpful, enthusiastic mentor for 1st-year CSBS students at MKCE."
    full_prompt = f"{system_instruction}\\nUser: {user_message}\\nAI Assistant:"
    
    payload = {
        "model": MODEL_NAME,
        "prompt": full_prompt,
        "stream": False
    }
    
    try:
        response = requests.post(OLLAMA_URL, json=payload)
        response_data = response.json()
        return response_data.get("response", "No response received.")
    except Exception as e:
        return f"Error connecting to Ollama. Make sure Ollama is running on your laptop! Details: {e}"

# Build a modern web interface in just 3 lines of Gradio
demo = gr.ChatInterface(
    fn=chat_with_ai,
    title="🤖 Zentra '26 Local AI Companion",
    description="Ask me about Python, Computer Science, or Business Systems!"
)

if __name__ == "__main__":
    print("Launching server on http://127.0.0.1:7860 ...")
    demo.launch(share=False)
`,
    explanationSteps: [
      { lineRange: "Lines 1-4", description: "Imports Gradio (for the instant UI) and Requests (to talk to our local AI engine)." },
      { lineRange: "Lines 6-7", description: "Sets Ollama's local port (11434) and selects the lightweight 1-billion parameter model that runs smoothly on standard laptops." },
      { lineRange: "Lines 9-23", description: "Takes user input, wraps it with a persona prompt, sends it to Ollama, and unpacks the generated text." },
      { lineRange: "Lines 26-34", description: "Launches a reactive web chat UI with automatic conversation bubble history." }
    ]
  },
  {
    id: "chroma-rag-pipeline",
    title: "2. The Complete RAG Chatbot (ChromaDB + LangChain)",
    subtitle: "The gold standard: Answering questions from your own PDF or notes with zero hallucination!",
    language: "python",
    filename: "rag_mkce_handbook.py",
    difficulty: "Intermediate",
    estimatedTime: "25 minutes",
    prerequisites: ["pip install langchain-community chromadb langchain-ollama"],
    description: "This script indexes your custom notes into a local ChromaDB vector store and retrieves exact citations to answer queries.",
    code: `# ZENTRA '26 - Complete RAG Implementation
# Step-by-step: Chunking -> Vector Embeddings -> Retrieval -> Grounded Generation
from langchain_community.vectorstores import Chroma
from langchain_ollama import OllamaEmbeddings, OllamaLLM
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough
from langchain_core.output_parsers import StrOutputParser

# 1. Sample Knowledge Base (e.g. MKCE CSBS Department Guidelines)
CAMPUS_DOCUMENTS = [
    "ZENTRA '26 is the annual AI Chatbot Workshop and Build Challenge held on 23rd October 2026 at Sir C V Raman Hall, MKCE.",
    "The Department of Computer Science & Business Systems (CSBS) focuses on enterprise computing, business analytics, and scalable AI.",
    "MKCE college bus route #12 starts from Karur Central Bus Stand at 07:45 AM and reaches the college campus by 08:30 AM.",
    "Internal assessment marks consist of two cycle tests (50 marks each), model exam, and continuous lab assignments."
]

print("1. Creating Vector Embeddings and Indexing in ChromaDB...")
embeddings = OllamaEmbeddings(model="nomic-embed-text")
vector_store = Chroma.from_texts(
    texts=CAMPUS_DOCUMENTS,
    embedding=embeddings,
    collection_name="zentra_knowledge"
)
retriever = vector_store.as_retriever(search_kwargs={"k": 2})

# 2. Define the Grounded RAG Prompt Template
PROMPT_TEMPLATE = """You are an official MKCE Campus Assistant.
Answer the user's question ONLY using the factual context provided below.
If the answer is not contained in the context, say: 'I do not have this information in the official campus database.'

Context:
{context}

Question: {question}
Answer:"""

prompt = ChatPromptTemplate.from_template(PROMPT_TEMPLATE)
llm = OllamaLLM(model="llama3.2:1b", temperature=0.1)

# 3. Chain components using LCEL (LangChain Expression Language)
def format_docs(docs):
    return "\\n\\n".join(doc.page_content for doc in docs)

rag_chain = (
    {"context": retriever | format_docs, "question": RunnablePassthrough()}
    | prompt
    | llm
    | StrOutputParser()
)

# 4. Test RAG with a query
query = "What is the date and venue for ZENTRA '26?"
print(f"\\nUser Question: {query}")
result = rag_chain.invoke(query)
print(f"Grounded Bot Response:\\n{result}")
`,
    explanationSteps: [
      { lineRange: "Lines 11-16", description: "Our private facts that public models don't know: specific dates, bus timings, and departmental rules." },
      { lineRange: "Lines 19-25", description: "Converts text chunks into numbers via embeddings and saves them in ChromaDB." },
      { lineRange: "Lines 28-36", description: "The magic prompt constraint: instructs the LLM to only answer from retrieved context to eliminate hallucinations." },
      { lineRange: "Lines 41-47", description: "The RAG pipeline: automatically performs semantic search on the query, stuffs the top 2 chunks into the prompt, and runs inference." }
    ]
  },
  {
    id: "react-chatbot-component",
    title: "3. Modern Frontend Chat Bubble (React 19 + Tailwind)",
    subtitle: "A sleek, responsive, glassmorphic UI component ready to paste into web projects.",
    language: "typescript",
    filename: "ChatWidget.tsx",
    difficulty: "Intermediate",
    estimatedTime: "15 minutes",
    prerequisites: ["React 19", "Tailwind CSS", "lucide-react"],
    description: "A production-grade React 19 chat interface featuring auto-scroll, message bubbles, typing indicators, and quick suggestion chips.",
    code: `import React, { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  text: string;
  timestamp: string;
}

export const ChatWidget: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      text: "Hello! I am your Zentra '26 AI assistant. Ask me anything about building chatbots, RAG, or LLMs!",
      timestamp: "Just now"
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      text: input,
      timestamp: "Now"
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate backend LLM / RAG response
    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        text: \`Thanks for asking! That is a great question for 1st years. Remember: Modern chatbots use RAG to combine private documents with LLM reasoning.\`,
        timestamp: "Now"
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <div className="w-full max-w-xl mx-auto rounded-2xl border border-cyan-500/30 bg-slate-950/80 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col h-[520px]">
      {/* Header */}
      <div className="px-5 py-4 border-b border-white/10 bg-slate-900/60 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
            <Bot className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm">Zentra AI Assistant</h4>
            <span className="text-xs text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              Online • RAG Enabled
            </span>
          </div>
        </div>
      </div>

      {/* Message Feed */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((m) => (
          <div key={m.id} className={\`flex gap-3 \${m.role === "user" ? "justify-end" : "justify-start"}\`}>
            {m.role === "assistant" && (
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/30">
                <Bot className="w-4 h-4" />
              </div>
            )}
            <div className={\`max-w-[80%] rounded-2xl px-4 py-3 text-sm \${
              m.role === "user" 
                ? "bg-gradient-to-r from-cyan-600 to-indigo-600 text-white rounded-tr-none shadow-md" 
                : "bg-slate-900/90 text-slate-200 border border-white/10 rounded-tl-none shadow"
            }\`}>
              <p className="leading-relaxed">{m.text}</p>
              <span className="text-[10px] text-slate-400 mt-1 block text-right">{m.timestamp}</span>
            </div>
            {m.role === "user" && (
              <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-500/30">
                <User className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}
        {isTyping && (
          <div className="flex gap-2 items-center text-slate-400 text-xs">
            <Sparkles className="w-4 h-4 animate-spin text-cyan-400" />
            Generating response...
          </div>
        )}
        <div ref={scrollRef} />
      </div>

      {/* Input Bar */}
      <form onSubmit={handleSend} className="p-3 border-t border-white/10 bg-slate-900/80 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
          className="flex-1 bg-slate-800/80 text-white rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/5"
        />
        <button
          type="submit"
          className="p-2.5 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:opacity-90 rounded-xl text-white font-medium transition cursor-pointer"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
`,
    explanationSteps: [
      { lineRange: "Lines 1-8", description: "Standard React state and TypeScript interface for message history." },
      { lineRange: "Lines 22-26", description: "Smooth auto-scrolling to bottom whenever a new reply streams in." },
      { lineRange: "Lines 52-95", description: "Dual-styled chat bubbles with user vs AI avatar styling, glassmorphism, and typing indicator." }
    ]
  }
];
