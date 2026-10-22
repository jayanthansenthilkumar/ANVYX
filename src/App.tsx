import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { VisionSection } from "./components/VisionSection";
import { EightHoursTimeline } from "./components/EightHoursTimeline";
import { ChallengeDomains } from "./components/ChallengeDomains";
import { ParticipantJourney } from "./components/ParticipantJourney";
import { PrizesSection } from "./components/PrizesSection";
import { JudgingCriteria } from "./components/JudgingCriteria";
import { FaqSection } from "./components/FaqSection";
import { FooterExperience } from "./components/FooterExperience";
import { RegistrationModal } from "./components/RegistrationModal";
import { ArrowUp } from "lucide-react";

export const App: React.FC = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
      setShowScrollTop(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#080A12] text-[#F4F6FF] selection:bg-[#58E6FF] selection:text-[#080A12] font-['Inter'] relative selection:font-medium">
      {/* Scroll Progress Bar at very top */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-50 bg-white/5 pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-[#58E6FF] via-[#9878FF] to-[#58E6FF] transition-all duration-150 ease-out shadow-[0_0_12px_rgba(88,230,255,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Global Navigation */}
      <Navbar onRegisterClick={() => setIsRegisterOpen(true)} />

      {/* Main Experience Flows */}
      <main className="relative">
        {/* Fullscreen Hero with 3D Sculptural Installation */}
        <HeroSection 
          onRegisterClick={() => setIsRegisterOpen(true)} 
          onDiscoverClick={() => {
            const el = document.getElementById("vision");
            el?.scrollIntoView({ behavior: "smooth" });
          }} 
        />

        {/* Section 01: The Vision */}
        <VisionSection />

        {/* Section 02: 8 Hours. One Mission. */}
        <EightHoursTimeline />

        {/* Section 03: Challenge Domains */}
        <ChallengeDomains onSelectTrack={() => setIsRegisterOpen(true)} />

        {/* Section 04: Participant Journey */}
        <ParticipantJourney onRegisterClick={() => setIsRegisterOpen(true)} />

        {/* Section 05: Prizes & Recognition */}
        <PrizesSection onRegisterClick={() => setIsRegisterOpen(true)} />

        {/* Section 06: Judging Criteria */}
        <JudgingCriteria />

        {/* Section 08: Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Section 09: Final Experience / Footer */}
      <FooterExperience onRegisterClick={() => setIsRegisterOpen(true)} />

      {/* Interactive Registration Modal */}
      <RegistrationModal 
        isOpen={isRegisterOpen} 
        onClose={() => setIsRegisterOpen(false)} 
      />

      {/* Quick Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#10162A]/90 border border-white/20 text-[#9BA8C7] hover:text-[#58E6FF] hover:border-[#58E6FF]/50 backdrop-blur-md shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default App;
