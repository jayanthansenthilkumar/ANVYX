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
        "simulator",
        "how-to-build",
        "rag-concept",
        "llm-concept",
        "agi-concept",
        "use-cases",
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
    <div className="min-h-screen bg-[#F4F2EB] text-[#111111] flex flex-col font-sans selection:bg-[#C8FF00] selection:text-[#000000]">
      {/* Top Sticky Brutalist Navbar */}
      <Navbar
        onOpenKeynote={() => setIsKeynoteOpen(true)}
        onOpenSpeechNotes={() => setIsSpeechNotesOpen(true)}
        onOpenPoster={() => setIsPosterOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onOpenKeynote={() => setIsKeynoteOpen(true)}
          onOpenPoster={() => setIsPosterOpen(true)}
        />

        {/* 2. Interactive Console: Chatbot & RAG Simulator */}
        <ChatbotSimulator />

        {/* 3. System Architecture & Starter Code */}
        <HowToBuildSection />

        {/* 4. RAG Demystified (Open-Book Exam, Pipeline, Cosine Distance) */}
        <RagExplainer />

        {/* 5. What is an LLM? (Next-Token Prediction Meter, Parameters) */}
        <LlmExplainer />

        {/* 6. The Road to AGI (ANI, AGI, ASI, Mythbusters) */}
        <AgiExplainer />

        {/* 7. CSBS Enterprise Use Cases */}
        <UseCasesSection />

        {/* 8. 1st-Year AI Masterclass Quiz */}
        <QuizSection />

        {/* 9. 4-Year Career Trajectory Roadmap */}
        <RoadmapSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modal 1: Keynote Presentation Slides */}
      <KeynoteModal
        isOpen={isKeynoteOpen}
        onClose={() => setIsKeynoteOpen(false)}
      />

      {/* Modal 2: Chief Guest Speech Notes & Stage Script */}
      <SpeechNotesDrawer
        isOpen={isSpeechNotesOpen}
        onClose={() => setIsSpeechNotesOpen(false)}
      />

      {/* Modal 3: Event Dossier & Official Poster */}
      <EventPosterModal
        isOpen={isPosterOpen}
        onClose={() => setIsPosterOpen(false)}
      />
    </div>
  );
}

export default App;
