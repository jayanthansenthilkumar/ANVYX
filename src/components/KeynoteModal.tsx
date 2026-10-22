import React, { useState, useEffect } from "react";
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize, 
  Minimize, 
  Clock, 
  Eye, 
  EyeOff, 
  Zap, 
  Cpu, 
  History, 
  Briefcase, 
  Brain, 
  AlertTriangle, 
  BookOpen, 
  MapPin, 
  Sparkles, 
  Target, 
  Trophy, 
  Play, 
  Pause, 
  RotateCcw 
} from "lucide-react";
import { keynoteSlides } from "../data/presentationData";

interface KeynoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const KeynoteModal: React.FC<KeynoteModalProps> = ({ isOpen, onClose }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Presentation Timer (Speech pacing in Sir C V Raman Hall)
  const [seconds, setSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let interval: any = null;
    if (timerRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerRunning]);

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        setCurrentSlideIndex((prev) => (prev < keynoteSlides.length - 1 ? prev + 1 : prev));
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : prev));
      } else if (e.key === "Escape") {
        if (document.fullscreenElement) {
          document.exitFullscreen().catch(() => {});
        } else {
          onClose();
        }
      } else if (e.key.toLowerCase() === "f") {
        toggleFullscreen();
      } else if (e.key.toLowerCase() === "n") {
        setShowNotes((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const slide = keynoteSlides[currentSlideIndex];

  const getAnalogyIcon = (iconName?: string) => {
    switch (iconName) {
      case "zap": return <Zap className="w-5 h-5 text-[#111111]" />;
      case "history": return <History className="w-5 h-5 text-[#111111]" />;
      case "cpu": return <Cpu className="w-5 h-5 text-[#0038FF]" />;
      case "briefcase": return <Briefcase className="w-5 h-5 text-[#111111]" />;
      case "brain": return <Brain className="w-5 h-5 text-[#FF3E00]" />;
      case "alert-triangle": return <AlertTriangle className="w-5 h-5 text-[#FF3E00]" />;
      case "book-open": return <BookOpen className="w-5 h-5 text-[#0038FF]" />;
      case "map-pin": return <MapPin className="w-5 h-5 text-[#111111]" />;
      case "sparkles": return <Sparkles className="w-5 h-5 text-[#111111]" />;
      case "target": return <Target className="w-5 h-5 text-[#FF3E00]" />;
      case "trophy": return <Trophy className="w-5 h-5 text-[#111111]" />;
      default: return <Sparkles className="w-5 h-5 text-[#111111]" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#111111]/90 flex flex-col justify-between overflow-hidden select-none">
      {/* Top Bar */}
      <div className="h-14 px-6 bg-[#FFFFFF] brutal-border-b flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-4">
          <span className="bg-[#111111] text-[#C8FF00] px-2.5 py-1 font-bold">
            ZENTRA '26 KEYNOTE
          </span>
          <span className="font-bold text-[#111111] hidden sm:inline">
            SLIDE 0{currentSlideIndex + 1} // 0{keynoteSlides.length}
          </span>
        </div>

        {/* Stopwatch */}
        <div className="flex items-center gap-2 bg-[#F4F2EB] px-3 py-1 brutal-border-thin">
          <Clock className="w-3.5 h-3.5 text-[#111111]" />
          <span className="font-mono font-bold text-[#111111]">{formatTimer(seconds)}</span>
          <button
            onClick={() => setTimerRunning(!timerRunning)}
            className="p-1 hover:text-[#0038FF] transition cursor-pointer"
            title={timerRunning ? "Pause Timer" : "Start Timer"}
          >
            {timerRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          </button>
          <button
            onClick={() => {
              setSeconds(0);
              setTimerRunning(false);
            }}
            className="p-1 hover:text-[#FF3E00] transition cursor-pointer"
            title="Reset Timer"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>

        {/* Right utility buttons */}
        <div className="flex items-center gap-2">
          {/* Notes toggle */}
          <button
            onClick={() => setShowNotes(!showNotes)}
            className={`px-3 py-1 text-xs font-bold font-mono brutal-border transition cursor-pointer flex items-center gap-1.5 ${
              showNotes ? "bg-[#C8FF00] text-[#111111]" : "bg-[#FFFFFF] text-[#111111] hover:bg-[#E8E5DC]"
            }`}
            title="Toggle Speaker Notes (Shortcut: N)"
          >
            {showNotes ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
            <span className="hidden md:inline">SPEAKER NOTES (N)</span>
          </button>

          {/* Fullscreen toggle */}
          <button
            onClick={toggleFullscreen}
            className="p-1.5 brutal-border bg-[#FFFFFF] text-[#111111] hover:bg-[#E8E5DC] cursor-pointer"
            title="Toggle Fullscreen (Shortcut: F)"
          >
            {isFullscreen ? <Minimize className="w-3.5 h-3.5" /> : <Maximize className="w-3.5 h-3.5" />}
          </button>

          {/* Close modal */}
          <button
            onClick={onClose}
            className="p-1.5 brutal-border bg-[#111111] text-[#FFFFFF] hover:bg-[#FF3E00] transition cursor-pointer"
            title="Exit Presentation (Esc)"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Slide Stage Area */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden bg-[#F4F2EB] brutal-grid-bg">
        {/* Slide Display Area */}
        <div className={`flex-1 p-6 md:p-12 lg:p-16 flex flex-col justify-center overflow-y-auto ${showNotes ? "md:w-2/3" : "w-full"}`}>
          <div className="max-w-4xl mx-auto w-full space-y-6">
            
            {/* Slide Badge */}
            <div className="inline-block bg-[#111111] text-[#C8FF00] px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider">
              {slide.badge}
            </div>

            {/* Slide Titles */}
            <div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-[#111111] leading-none">
                {slide.title}
              </h2>
              <p className="text-base sm:text-xl text-[#555555] font-medium font-mono mt-2">
                // {slide.subtitle}
              </p>
            </div>

            {/* Slide Body Card */}
            <div className="p-6 md:p-8 brutal-card brutal-shadow-lg bg-[#FFFFFF] space-y-4">
              <h3 className="font-display font-black text-xl text-[#111111] flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#C8FF00]"></span>
                {slide.content.heading}
              </h3>

              <p className="text-sm md:text-base text-[#333333] font-medium leading-relaxed font-sans">
                {slide.content.description}
              </p>

              {/* Bullet Points */}
              <ul className="space-y-2.5 pt-2">
                {slide.content.bulletPoints.map((bp, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-mono text-[#111111]">
                    <span className="font-bold bg-[#111111] text-[#C8FF00] px-1.5 py-0.2 shrink-0">
                      0{idx + 1}
                    </span>
                    <span className="font-sans font-medium">{bp}</span>
                  </li>
                ))}
              </ul>

              {/* Analogy Box */}
              {slide.content.analogy && (
                <div className="mt-5 p-4 bg-[#F4F2EB] brutal-border flex items-start gap-3">
                  <div className="p-2 bg-[#FFFFFF] brutal-border-thin shrink-0">
                    {getAnalogyIcon(slide.content.analogy.icon)}
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-[#0038FF] uppercase">
                      // 1ST-YEAR ANALOGY: {slide.content.analogy.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#333333] font-medium mt-1 leading-relaxed font-sans whitespace-pre-line">
                      {slide.content.analogy.text}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Speaker Notes Side Drawer */}
        {showNotes && (
          <div className="w-full md:w-96 border-t md:border-t-0 md:border-l-2 border-[#000000] bg-[#FFFFFF] p-6 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#000000]">
                <h4 className="font-mono font-bold text-xs uppercase flex items-center gap-2 text-[#111111]">
                  <Eye className="w-4 h-4 text-[#0038FF]" />
                  SPEAKER TALKING POINTS
                </h4>
                <span className="bg-[#C8FF00] text-[#111111] px-1.5 py-0.5 text-[10px] font-mono font-bold">
                  STAGE CUES
                </span>
              </div>

              {/* Stage Direction */}
              <div className="p-3 bg-[#F4F2EB] brutal-border-thin space-y-1">
                <span className="text-[10px] font-mono text-[#555555] font-bold block uppercase">
                  // BODY LANGUAGE & FLOW:
                </span>
                <p className="text-xs text-[#111111] italic font-medium leading-relaxed">
                  "{slide.stageDirection}"
                </p>
              </div>

              {/* Verbal Points */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-[#555555] font-bold block uppercase">
                  // WHAT TO SAY TO 1ST YEARS:
                </span>
                <ul className="space-y-2">
                  {slide.speakerNotes.map((note, idx) => (
                    <li key={idx} className="text-xs text-[#222222] font-mono p-2.5 bg-[#F4F2EB] brutal-border-thin">
                      <strong className="text-[#0038FF] block mb-0.5">[POINT #{idx + 1}]:</strong>
                      <span className="font-sans font-medium">{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-[#000000] text-[10px] font-mono text-[#777777]">
              SHORTCUTS: <kbd className="bg-[#E8E5DC] px-1 border border-[#000]">Space</kbd> / <kbd className="bg-[#E8E5DC] px-1 border border-[#000]">Arrow</kbd> for slides.
            </div>
          </div>
        )}
      </div>

      {/* Bottom Slide Bar */}
      <div className="h-14 px-6 bg-[#FFFFFF] brutal-border-t flex items-center justify-between font-mono text-xs">
        <button
          onClick={() => setCurrentSlideIndex((prev) => Math.max(0, prev - 1))}
          disabled={currentSlideIndex === 0}
          className="brutal-btn brutal-btn-white px-4 py-1.5 disabled:opacity-30 flex items-center gap-1.5"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          <span>PREVIOUS</span>
        </button>

        {/* Progress Bar */}
        <div className="flex items-center gap-1">
          {keynoteSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`h-2 transition-all cursor-pointer ${
                idx === currentSlideIndex
                  ? "w-8 bg-[#111111] border border-[#111111]"
                  : "w-2 bg-[#E8E5DC] hover:bg-[#888888] border border-[#000000]"
              }`}
              title={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentSlideIndex((prev) => Math.min(keynoteSlides.length - 1, prev + 1))}
          disabled={currentSlideIndex === keynoteSlides.length - 1}
          className="brutal-btn brutal-btn-primary px-4 py-1.5 disabled:opacity-30 flex items-center gap-1.5"
        >
          <span>NEXT</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
