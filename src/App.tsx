import React, { useState, useEffect } from "react";
import { CyberBootLoader } from "./components/CyberBootLoader";
import { CyberNavbar } from "./components/CyberNavbar";
import { CyberHero } from "./components/CyberHero";
import { AboutSection } from "./components/AboutSection";
import { PrizesStackCards } from "./components/PrizesStackCards";
import { ProblemStatementsSection } from "./components/ProblemStatementsSection";
import { SectorsDomainsSection } from "./components/SectorsDomainsSection";
import { GallerySection } from "./components/GallerySection";
import { TimelineSection } from "./components/TimelineSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { DigitalIdPassSection } from "./components/DigitalIdPassSection";
import { SponsorsSection } from "./components/SponsorsSection";
import { VenueSection } from "./components/VenueSection";
import { FaqAccordionSection } from "./components/FaqAccordionSection";
import { CyberFooter } from "./components/CyberFooter";
import { RegisterModal } from "./components/RegisterModal";
import { LoginModal } from "./components/LoginModal";
import { LiveFeedView } from "./components/LiveFeedView";
import { ArrowUp } from "lucide-react";
import { playCyberClick, playCyberHover } from "./utils/audio";

import { CyberDomain3DMap } from "./components/CyberDomain3DMap";
import { anvyx27Config, DomainTrack } from "./config/anvyx27Data";

export const App: React.FC = () => {
  const [isBooting, setIsBooting] = useState<boolean>(true);
  const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(false);
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [selectedTrackId, setSelectedTrackId] = useState<string>("ai-smart-solutions");
  const [selectedMapSector, setSelectedMapSector] = useState<DomainTrack | null>(null);
  const [currentRoute, setCurrentRoute] = useState<string>("/");
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Sync with browser URL / history
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;

      if (path === "/map" || hash === "#map") {
        setCurrentRoute("/map");
      } else if (path === "/live" || hash === "#live") {
        setCurrentRoute("/live");
      } else if (path === "/register" || hash === "#register") {
        setIsRegisterOpen(true);
        setCurrentRoute("/");
      } else if (path === "/login" || hash === "#login") {
        setIsLoginOpen(true);
        setCurrentRoute("/");
      } else {
        setCurrentRoute("/");
        if (hash) {
          const sectionId = hash.replace("#", "");
          setActiveSection(sectionId);
          setTimeout(() => {
            const el = document.getElementById(sectionId);
            el?.scrollIntoView({ behavior: "smooth" });
          }, 400);
        }
      }
    };

    handleLocationChange();
    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
    };
  }, []);

  // Track active section and scroll top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);

      const sections = [
        "hero",
        "about",
        "prizes",
        "problem-statements",
        "sectors",
        "gallery",
        "timeline",
        "testimonials",
        "pass",
        "sponsors",
        "venue",
        "faq",
        "contact"
      ];

      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (path: string) => {
    if (path === "/map") {
      setCurrentRoute("/map");
      window.history.pushState(null, "", "/map");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (path === "/live") {
      setCurrentRoute("/live");
      window.history.pushState(null, "", "/live");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (path === "/register") {
      setIsRegisterOpen(true);
    } else if (path === "/login") {
      setIsLoginOpen(true);
    } else {
      setCurrentRoute("/");
      window.history.pushState(null, "", path);
      const targetId = path.replace("/", "").replace("#", "");
      if (targetId) {
        const el = document.getElementById(targetId);
        el?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const scrollToSection = (id: string) => {
    playCyberClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    playCyberClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#020205] text-[#F4F6FF] selection:bg-[#6575F5] selection:text-white font-sans relative overflow-x-hidden">
      
      {/* HK27 CYBER BOOT LOADER (Runs on system startup) */}
      {isBooting && (
        <CyberBootLoader onComplete={() => setIsBooting(false)} />
      )}

      {/* GLOBAL CYBER NAVBAR */}
      {currentRoute !== "/map" && (
        <CyberNavbar
          onRegisterClick={() => setIsRegisterOpen(true)}
          onLoginClick={() => setIsLoginOpen(true)}
          activeSection={activeSection}
          onNavigate={handleNavigate}
        />
      )}

      {/* CONDITIONAL ROUTE RENDERING */}
      {currentRoute === "/map" ? (
        <CyberDomain3DMap
          selectedSector={selectedMapSector}
          onSelectSector={(s) => setSelectedMapSector(s)}
          onResetView={() => setSelectedMapSector(null)}
          isFullScreen={true}
          onCloseFullScreen={() => {
            setCurrentRoute("/");
            window.history.pushState(null, "", "/#sectors");
            setTimeout(() => {
              const el = document.getElementById("sectors");
              el?.scrollIntoView({ behavior: "smooth" });
            }, 100);
          }}
          onRegisterClick={(id) => {
            setSelectedTrackId(id);
            setIsRegisterOpen(true);
          }}
        />
      ) : currentRoute === "/live" ? (
        <LiveFeedView
          onBackToHome={() => {
            setCurrentRoute("/");
            window.history.pushState(null, "", "/");
          }}
          onRegisterClick={() => setIsRegisterOpen(true)}
        />
      ) : (
        <main className="relative">
          {/* SECTION 00: HERO WITH SAMURAI HOLOGRAPHIC GLITCH ARTWORK & LIVE COUNTDOWN */}
          <CyberHero
            onRegisterClick={() => setIsRegisterOpen(true)}
            onExploreClick={() => scrollToSection("about")}
          />

          {/* SECTION 01: ABOUT THE EVENT */}
          <AboutSection />

          {/* SECTION 02: REWARDS, CASH POOL & ADMISSION PASSES */}
          <PrizesStackCards
            onRegisterClick={() => setIsRegisterOpen(true)}
          />

          {/* SECTION 03: 4-PHASE PROBLEM STATEMENTS PROTOCOL */}
          <ProblemStatementsSection
            onRegisterClick={() => setIsRegisterOpen(true)}
          />

          {/* SECTION 04: 6 NEURAL CITY SECTOR DOMAINS WITH EXACT 3D INTERACTIVE MAP */}
          <SectorsDomainsSection
            onSelectTrack={(trackId) => {
              setSelectedTrackId(trackId);
              setIsRegisterOpen(true);
            }}
            onOpenFullscreenMap={() => {
              setCurrentRoute("/map");
              window.history.pushState(null, "", "/map");
            }}
          />

          {/* SECTION 05: EVENT GLIMPSE SCANNER (ALL, CEREMONY, SPRINT, JURY, LABS) */}
          <GallerySection />

          {/* SECTION 06: MISSION PROTOCOL TIMELINE & JURY MATRIX */}
          <TimelineSection />

          {/* SECTION 07: 14 VERIFIED DELEGATE FEEDBACK LOGS */}
          <TestimonialsSection />

          {/* SECTION 08: NETRUNNER DIGITAL ID PASS GENERATOR */}
          <DigitalIdPassSection />

          {/* SECTION 09: SPONSORS & PARTNERS DOSSIER (MSI CO-PARTNER, IEEE, WYNTRIX, LITZTECH, EVENTOPIA) */}
          <SponsorsSection />

          {/* SECTION 10: VENUE COORDINATES & TRAVEL TRANSIT ROUTES */}
          <VenueSection />

          {/* SECTION 11: FREQUENTLY ASKED QUESTIONS ACCORDION */}
          <FaqAccordionSection />
        </main>
      )}

      {/* GLOBAL CYBER FOOTER WITH CONTACT COORDINATES */}
      <CyberFooter
        onRegisterClick={() => setIsRegisterOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* SQUAD REGISTRATION MODAL */}
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        initialDomainId={selectedTrackId}
      />

      {/* NETRUNNER TERMINAL LOGIN MODAL */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onRegisterInstead={() => {
          setIsLoginOpen(false);
          setIsRegisterOpen(true);
        }}
      />

      {/* FLOATING QUICK SCROLL TO TOP RETICLE */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          onMouseEnter={playCyberHover}
          aria-label="Scroll back to apex"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-[#090C1F]/90 border border-[rgba(101,117,245,0.4)] text-[#55E5D2] hover:text-white hover:border-[#55E5D2] backdrop-blur-md shadow-[0_0_20px_rgba(101,117,245,0.4)] hover:scale-110 active:scale-95 transition-all cursor-pointer flex items-center justify-center group"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}
    </div>
  );
};

export default App;
