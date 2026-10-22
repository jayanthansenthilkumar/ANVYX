import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { HowToBuildSection } from "./components/HowToBuildSection";
import { RagExplainer } from "./components/RagExplainer";
import { LlmExplainer } from "./components/LlmExplainer";
import { AgiExplainer } from "./components/AgiExplainer";
import { UseCasesSection } from "./components/UseCasesSection";
import { ChatbotSimulator } from "./components/ChatbotSimulator";
import { QuizSection } from "./components/QuizSection";
import { RoadmapSection } from "./components/RoadmapSection";
import { Footer } from "./components/Footer";
import { KeynoteModal } from "./components/KeynoteModal";
import { SpeechNotesDrawer } from "./components/SpeechNotesDrawer";
import { EventPosterModal } from "./components/EventPosterModal";

export function App() {
  const [isKeynoteOpen, setIsKeynoteOpen] = useState(false);
  const [isSpeechNotesOpen, setIsSpeechNotesOpen] = useState(false);
  const [isPosterOpen, setIsPosterOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  // Track active scroll section for navbar highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "overview",
        "how-to-build",
        "rag-concept",
        "llm-concept",
        "agi-concept",
        "use-cases",
        "simulator",
        "quiz",
        "roadmap"
      ];
      
      const scrollY = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Top Sticky Navbar */}
      <Navbar
        onOpenKeynote={() => setIsKeynoteOpen(true)}
        onOpenSpeechNotes={() => setIsSpeechNotesOpen(true)}
        onOpenPoster={() => setIsPosterOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Electrifying Hero Section */}
        <HeroSection
          onOpenKeynote={() => setIsKeynoteOpen(true)}
          onOpenPoster={() => setIsPosterOpen(true)}
        />

        {/* 2. Interactive Live Chatbot & RAG Simulator */}
        <ChatbotSimulator />

        {/* 3. Step-by-Step Blueprint: How to Build a Chatbot + Starter Code */}
        <HowToBuildSection />

        {/* 4. RAG Demystified (Open-Book Exam, 5-Stage Pipeline, Embedding Math) */}
        <RagExplainer />

        {/* 5. What is an LLM? (The Giant Autocomplete, Next-Token Playground, Parameters) */}
        <LlmExplainer />

        {/* 6. The Road to AGI (ANI vs AGI vs ASI, 1st-Year Mythbusters) */}
        <AgiExplainer />

        {/* 7. CSBS Use Cases (Fintech, EdTech, Healthcare, Enterprise ERP, DevOps) */}
        <UseCasesSection />

        {/* 8. Interactive 1st-Year Knowledge Quiz with Confetti */}
        <QuizSection />

        {/* 9. 4-Year AI Engineer Roadmap */}
        <RoadmapSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modal 1: Fullscreen Keynote Presentation for Sir C V Raman Hall Projector */}
      <KeynoteModal
        isOpen={isKeynoteOpen}
        onClose={() => setIsKeynoteOpen(false)}
      />

      {/* Modal 2: Chief Guest Speech Notes & Q&A Drawer */}
      <SpeechNotesDrawer
        isOpen={isSpeechNotesOpen}
        onClose={() => setIsSpeechNotesOpen(false)}
      />

      {/* Modal 3: Official Event Poster & Schedule Dossier */}
      <EventPosterModal
        isOpen={isPosterOpen}
        onClose={() => setIsPosterOpen(false)}
      />
    </div>
  );
}

export default App;
