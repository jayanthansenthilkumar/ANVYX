import React, { useState } from "react";
import { 
  X, 
  Copy, 
  Check, 
  Mic
} from "lucide-react";

interface SpeechNotesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SpeechNotesDrawer: React.FC<SpeechNotesDrawerProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<"script" | "qa">("script");
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const fullSpeechScript = `CHIEF GUEST KEYNOTE SPEECH DRAFT
EVENT: ZENTRA '26 - AI Chatbot Workshop & Build Challenge
VENUE: Sir C V Raman Hall, M. Kumarasamy College of Engineering (MKCE)
AUDIENCE: 1st-Year Students (Dept of CSBS & AIML), Dignitaries & Faculty
SLOGAN: "Don't Just Use AI, Create It"

=======================================================
[00:00 - 05:00] PART 1: THE HOOK & BREAKING THE ICE
=======================================================
"Good morning respected Principal, Head of Department of CSBS and AIML, esteemed faculty members, student organizers, and most importantly—my dear first-year engineers!

Let me start with a quick poll. Raise your hand if you used ChatGPT, Gemini, Claude, or Instagram AI in the past 48 hours.
[Pause — look across Sir C V Raman Hall as 90% of hands go up. Smile.]
Wonderful. Almost every single hand is up.

Now, keep your hand raised if you know exactly what happened inside the neural network to generate the very first word of that reply.
[Pause — hands will drop. Chuckle.]
Don't worry. You are in your first year. That's why we are here today. By 4:30 PM this afternoon, not only will every single one of you understand exactly how it works—you will have built and demonstrated your own AI chatbot right from this hall!

The theme of ZENTRA '26 is: 'Don't Just Use AI, Create It.' Anyone can type a prompt. A 10-year-old kid can type 'Write me a poem.' But you are not just consumers; you are Computer Science and Business Systems engineers. Your job is to ARCHITECT the systems that power modern enterprise."

=======================================================
[05:00 - 15:00] PART 2: WHAT IS A CHATBOT & THE 5-LAYER ANATOMY
=======================================================
"So, how do we build a chatbot?

A lot of people think building a chatbot is just taking an OpenAI API key and putting it into an HTML page. That is like saying building a Ferrari is just putting gas in a tank.

In the real industry, a chatbot has five distinct layers:
Layer 1 is the Face: The Interface (UI). Where the user types or speaks.
Layer 2 is the Nervous System: The Orchestrator (FastAPI, LangChain). It handles user history, sessions, and routes questions.
Layer 3 is the Brain: The LLM Engine (Llama 3, Claude, GPT). It handles language fluency and logical reasoning.
Layer 4 is the Long-Term Memory: The Vector Database (ChromaDB, Pinecone). This is where our private data lives.
Layer 5 is the Hands & Feet: Tool Calling. When the bot needs to check a student's attendance in the MKCE portal or book a bus ticket, it calls an external API.

Notice how this connects to CSBS! Computer Science gives you the algorithms and neural architectures; Business Systems gives you the workflows, the return-on-investment, and customer operations."

=======================================================
[15:00 - 25:00] PART 3: WHAT ARE THE USE CASES?
=======================================================
"Why is every bank, hospital, and university investing millions in chatbots?
Let's look at MKCE. Every semester, hundreds of 1st-year students line up at the office asking: 'Which bus route goes to Karur bus stand at 4:30 PM?', 'What is the internal marks weightage?', 'How do I apply for on-duty leave?'
An MKCE Smart Campus bot trained on college circulars answers that in 300 milliseconds on WhatsApp in both English and Tamil!

In Banking: When you suspect fraud on your debit card at 2:00 AM, you don't want a 40-minute call center queue. An autonomous banking bot freezes the card, files the dispute, and issues a new virtual card in 30 seconds.
In Healthcare: Clinical triage bots translate complex blood test numbers like HbA1c into plain, reassuring explanations with doctor appointment links.
In Software Engineering: GitHub Copilot writes 40% of standard boilerplate code today."

=======================================================
[25:00 - 35:00] PART 4: DEMYSTIFYING LLM & THE FATAL FLAW OF HALLUCINATIONS
=======================================================
"Now, let's understand the Brain: What is an LLM (Large Language Model)?
It sounds like magic, but let me remove the mystery.
An LLM is fundamentally a supercharged predictive autocomplete machine!
Just like your phone keyboard suggests 'soon' when you type 'See you...', an LLM predicts the next word chunk (token).
The difference? Your phone only looks at your last 2 text messages. An LLM has read billions of web pages, research papers, and books, and uses 70 billion parameters to pick the next token from 100,000 choices.

And that brings us to the biggest flaw in modern AI: HALLUCINATION!
Because an LLM is trained to predict plausible-sounding text, it doesn't know what is factually true versus what sounds good.
If you ask a pure LLM: 'What are the rules of Zentra '26 at MKCE?', it will make up a convincing answer with fake rules! Because its training data cutoff was months ago and it has never seen our private poster.
In banking, healthcare, and engineering, hallucinations are dangerous.
So how do we fix it? That brings us to RAG!"

=======================================================
[35:00 - 45:00] PART 5: RAG — THE OPEN-BOOK EXAM SUPERPOWER
=======================================================
"RAG stands for Retrieval-Augmented Generation.
Remember this one analogy for the rest of your engineering degree:
A pure LLM is like a student writing a CLOSED-BOOK exam. They have to rely on their memory from 2 years ago. They might confuse dates, forget formulas, or hallucinate.

RAG is an OPEN-BOOK exam with a super-fast librarian!
When a student asks a question, the librarian walks into our private library, pulls out the exact 3 pages of the MKCE handbook, puts it on the student's desk, and says: 'Answer the question using ONLY these 3 pages.'
Suddenly: Zero hallucination! Exact citations! And it costs 1,000 times less than retraining a neural network.

How does it work under the hood? Vector Embeddings!
Words are converted into numbers—coordinates in meaning space. When the user asks a question, we compute cosine similarity to find the closest matching paragraph in our ChromaDB database, inject it into the prompt, and the LLM writes a 100% accurate answer."

=======================================================
[45:00 - 55:00] PART 6: THE ROAD TO AGI & YOUR 4-YEAR BLUEPRINT
=======================================================
"Finally, where is all this going? You've heard the buzzword: AGI — Artificial General Intelligence.
Today we have Narrow AI: AI that is good at one thing. ChatGPT is great at text; AlphaGo is great at Go; Midjourney is great at images.
AGI is when software reaches human-level adaptability across ANY intellectual task. It will be able to do scientific research, write software systems from scratch, and solve complex business problems.

Students always ask me: 'Sir, will AGI take away our jobs?'
Here is my honest answer:
AI will NOT replace software engineers.
But software engineers who master AI will replace those who do not!

Your role in 2026 is not to spend 6 hours typing boilerplate loops. Your role is to be the ARCHITECT.
Starting tonight:
1. Master Python.
2. Build 1 small chatbot every month.
3. Keep your code on GitHub.
4. Learn RAG and Vector Databases in your 2nd year.

Let's kick off the afternoon Chatbot Build Challenge. Team up, pick a real problem, and build something that speaks!
Remember the motto of ZENTRA '26:
'Don't Just Use AI, Create It.'
Thank you very much, and all the best!"`;

  const studentQA = [
    {
      q: "Sir, will AI take away coding jobs by the time we graduate in 2030?",
      a: "No. The nature of programming is evolving from manual typing of syntax to high-level system architecture. Just like compilers didn't kill programmers (they replaced assembly with C++), AI will allow you to build software 10x faster. The demand for engineers who understand systems, business logic, and security will explode."
    },
    {
      q: "Sir, I only know basic C or Python in 1st year. Is that enough to build chatbots?",
      a: "Yes! Modern AI tooling is modular. You don't need to code a transformer from scratch. With 25 lines of Python, Ollama, and Gradio (which we provide in the starter code today), you can have a running AI bot on your laptop in 10 minutes."
    },
    {
      q: "Sir, do I need an expensive laptop with an NVIDIA GPU?",
      a: "Not at all. In today's workshop, you will see lightweight quantized models (like Llama 3.2 1B or DeepSeek) running smoothly on a standard 8GB RAM college laptop without any dedicated GPU using Ollama. For cloud models, free tiers of Groq, Google Colab, and Hugging Face are more than enough."
    },
    {
      q: "Sir, what is the special advantage of CSBS compared to CSE or AIML?",
      a: "In the industry, pure AI models are useless unless they solve a business problem. CSBS combines heavy computer science with business systems (finance, operations, supply chain, enterprise ERP). A CSBS graduate knows not just HOW to build the bot, but WHERE to deploy it to save millions of dollars."
    }
  ];

  const handleCopyScript = () => {
    navigator.clipboard.writeText(fullSpeechScript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#111111]/80 backdrop-blur-none flex justify-end">
      <div className="w-full max-w-2xl bg-[#FFFFFF] brutal-border-l h-full flex flex-col justify-between brutal-shadow-xl animate-in slide-in-from-right">
        
        {/* Header */}
        <div className="p-4 bg-[#111111] text-[#FFFFFF] brutal-border-b flex items-center justify-between font-mono text-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-[#C8FF00] text-[#111111] brutal-border flex items-center justify-center font-bold">
              <Mic className="w-3.5 h-3.5" />
            </div>
            <div>
              <h3 className="font-bold text-[#FFFFFF]">CHIEF GUEST SPEECH SCRIPT</h3>
              <p className="text-[10px] text-[#888888]">ZENTRA '26 // SIR C V RAMAN HALL</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyScript}
              className="brutal-btn brutal-btn-primary px-3 py-1 text-xs font-mono flex items-center gap-1.5"
              title="Copy entire speech draft"
            >
              {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? "COPIED" : "COPY_ALL"}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 brutal-border bg-[#FFFFFF] text-[#111111] hover:bg-[#FF3E00] hover:text-[#FFFFFF] transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="px-4 py-2 bg-[#F4F2EB] brutal-border-b flex gap-1 font-mono text-xs">
          <button
            onClick={() => setActiveTab("script")}
            className={`px-3 py-1 font-bold brutal-border transition cursor-pointer ${
              activeTab === "script" 
                ? "bg-[#111111] text-[#C8FF00]" 
                : "bg-[#FFFFFF] text-[#111111] hover:bg-[#E8E5DC]"
            }`}
          >
            WORD-FOR-WORD SCRIPT
          </button>
          <button
            onClick={() => setActiveTab("qa")}
            className={`px-3 py-1 font-bold brutal-border transition cursor-pointer ${
              activeTab === "qa" 
                ? "bg-[#111111] text-[#C8FF00]" 
                : "bg-[#FFFFFF] text-[#111111] hover:bg-[#E8E5DC]"
            }`}
          >
            STUDENT Q&A CHEAT SHEET
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 font-mono text-[#111111] bg-[#F4F2EB]">
          {activeTab === "script" ? (
            <div className="space-y-3">
              <div className="p-3 bg-[#FFFFFF] brutal-border text-xs text-[#222222]">
                <strong className="text-[#0038FF] block mb-0.5">// STAGE TIP FOR CHIEF GUEST:</strong>
                Feel free to read or adapt this script during the Sir C V Raman Hall keynote. It is tailored with student-friendly analogies!
              </div>
              <div className="p-4 bg-[#FFFFFF] brutal-border text-xs leading-relaxed whitespace-pre-wrap select-text font-mono">
                {fullSpeechScript}
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="text-xs text-[#555555]">
                // RESPONSES TO COMMON QUESTIONS 1ST-YEAR STUDENTS ASK ON STAGE:
              </div>
              {studentQA.map((item, idx) => (
                <div key={idx} className="p-4 bg-[#FFFFFF] brutal-border space-y-2">
                  <div className="text-xs font-bold text-[#111111] flex items-start gap-2">
                    <span className="bg-[#111111] text-[#C8FF00] px-1.5 py-0.2 shrink-0">Q{idx + 1}</span>
                    <span className="font-sans">{item.q}</span>
                  </div>
                  <div className="text-xs text-[#333333] pt-2 border-t border-[#000000]/10 leading-relaxed font-sans">
                    <strong className="text-[#0038FF] block font-mono text-[11px] mb-0.5">
                      // RECOMMENDED RESPONSE:
                    </strong>
                    {item.a}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        <div className="p-4 bg-[#FFFFFF] brutal-border-t text-xs font-mono text-[#555555] flex items-center justify-between">
          <span>SPEECH DURATION: ~45 MINS</span>
          <button
            onClick={onClose}
            className="brutal-btn brutal-btn-dark px-4 py-1.5 text-xs font-mono"
          >
            CLOSE
          </button>
        </div>

      </div>
    </div>
  );
};
