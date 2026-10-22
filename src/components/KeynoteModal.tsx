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

  // Keyboard navigation for slides
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

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  if (!isOpen) return null;

  const slide = keynoteSlides[currentSlideIndex];

  // Helper to pick icons
  const getAnalogyIcon = (iconName?: string) => {
    switch (iconName) {
      case "zap": return <Zap className="w-6 h-6 text-amber-400" />;
      case "history": return <History className="w-6 h-6 text-purple-400" />;
      case "cpu": return <Cpu className="w-6 h-6 text-cyan-400" />;
      case "briefcase": return <Briefcase className="w-6 h-6 text-emerald-400" />;
      case "brain": return <Brain className="w-6 h-6 text-pink-400" />;
      case "alert-triangle": return <AlertTriangle className="w-6 h-6 text-orange-400" />;
      case "book-open": return <BookOpen className="w-6 h-6 text-blue-400" />;
      case "map-pin": return <MapPin className="w-6 h-6 text-cyan-400" />;
      case "sparkles": return <Sparkles className="w-6 h-6 text-yellow-400" />;
      case "target": return <Target className="w-6 h-6 text-rose-400" />;
      case "trophy": return <Trophy className="w-6 h-6 text-amber-400" />;
      default: return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between overflow-hidden select-none">
      {/* Top Keynote Control Bar */}
      <div className="h-14 px-6 border-b border-white/10 bg-slate-950/80 backdrop-blur-md flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-cyan-400 font-extrabold tracking-wider text-sm flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
            ZENTRA '26 KEYNOTE
          </span>
          <span className="text-xs text-slate-400 hidden sm:inline">
            Slide {currentSlideIndex + 1} of {keynoteSlides.length}
          </span>
        </div>

        {/* Presentation Timer Control */}
        <div className="flex items-center gap-2 bg-slate-900/90 px-3 py-1 rounded-full border border-white/10 text-xs">
          <Clock className="w-3.5 h-3.5 text-cyan-400" />
          <span className="font-mono text-cyan-200 font-semibold">{formatTimer(seconds)}</span>
          <button
            onClick={() => setTimerRunning(!timerRunning)}
            className="p-1 text-slate-300 hover:text-white transition"
            title={timerRunning ? "Pause Timer" : "Start Timer"}
          >
            {timerRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          </button>
          <button
            onClick={() => {
              setSeconds(0);
              setTimerRunning(false);
            }}
            className="p-1 text-slate-400 hover:text-white transition"
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
            className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition ${
              showNotes ? "bg-amber-500/20 text-amber-300 border border-amber-500/40" : "bg-slate-900 text-slate-400 hover:text-white"
            }`}
            title="Toggle Speaker Notes (Shortcut: N)"
          >
            {showNotes ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
            <span className="hidden md:inline">Speaker Notes (N)</span>
          </button>

          {/* Fullscreen toggle */}
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-white/10"
            title="Toggle Fullscreen (Shortcut: F)"
          >
            {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </button>

          {/* Close modal */}
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-rose-400 border border-white/10 hover:border-rose-500/30 transition"
            title="Exit Presentation"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Slide Stage Area */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden relative">
        {/* Slide Display Area */}
        <div className={`flex-1 p-6 md:p-12 lg:p-16 flex flex-col justify-center overflow-y-auto transition-all ${showNotes ? "md:w-2/3" : "w-full"}`}>
          <div className="max-w-5xl mx-auto w-full space-y-6">
            {/* Slide Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs tracking-widest uppercase">
              {slide.badge}
            </div>

            {/* Slide Titles */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                {slide.title}
              </h2>
              <p className="text-lg sm:text-xl text-cyan-200/80 mt-2 font-medium">
                {slide.subtitle}
              </p>
            </div>

            {/* Slide Body Card */}
            <div className="p-6 md:p-8 rounded-3xl bg-slate-900/80 border border-white/10 shadow-2xl backdrop-blur-xl space-y-5">
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                {slide.content.heading}
              </h3>

              <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                {slide.content.description}
              </p>

              {/* Bullet Points */}
              <ul className="space-y-3 pt-2">
                {slide.content.bulletPoints.map((bp, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-200 text-sm md:text-base">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold border border-cyan-500/30">
                      {idx + 1}
                    </span>
                    <span>{bp}</span>
                  </li>
                ))}
              </ul>

              {/* Analogy Box */}
              {slide.content.analogy && (
                <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-indigo-950/40 to-purple-950/40 border border-cyan-500/30 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-white/10 shrink-0">
                    {getAnalogyIcon(slide.content.analogy.icon)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-cyan-300 uppercase tracking-wider">
                      💡 1st-Year Analogy: {slide.content.analogy.title}
                    </h4>
                    <p className="text-slate-300 text-sm md:text-base mt-1 whitespace-pre-line leading-relaxed">
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
          <div className="w-full md:w-96 border-t md:border-t-0 md:border-l border-white/10 bg-slate-950/95 p-6 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <h4 className="font-bold text-amber-400 text-sm flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  SPEAKER TALKING POINTS
                </h4>
                <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
                  Chief Guest Cues
                </span>
              </div>

              {/* Stage Direction */}
              <div className="p-3 rounded-xl bg-slate-900 border border-white/10">
                <span className="text-xs text-slate-400 font-semibold block uppercase">Stage Gesture & Flow:</span>
                <p className="text-xs text-amber-200 mt-1 italic leading-relaxed">
                  "{slide.stageDirection}"
                </p>
              </div>

              {/* Verbal Points */}
              <div>
                <span className="text-xs text-slate-400 font-semibold block uppercase mb-2">What to Say to 1st Years:</span>
                <ul className="space-y-3">
                  {slide.speakerNotes.map((note, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-slate-200 flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-white/5">
                      <span className="text-amber-400 font-mono font-bold shrink-0">#{idx + 1}</span>
                      <span className="leading-relaxed">{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-[11px] text-slate-500">
              Tip: Press <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-300 font-mono">Space</kbd> or <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-300 font-mono">→</kbd> for next slide.
            </div>
          </div>
        )}
      </div>

      {/* Bottom Slide Navigation Bar */}
      <div className="h-16 px-6 border-t border-white/10 bg-slate-950/90 flex items-center justify-between">
        {/* Previous Button */}
        <button
          onClick={() => setCurrentSlideIndex((prev) => Math.max(0, prev - 1))}
          disabled={currentSlideIndex === 0}
          className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-slate-900 text-slate-200 font-medium text-xs sm:text-sm flex items-center gap-2 border border-white/10 transition cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous</span>
        </button>

        {/* Slide Progress Dots / Bar */}
        <div className="flex items-center gap-1.5 max-w-md overflow-x-auto py-2">
          {keynoteSlides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                idx === currentSlideIndex
                  ? "w-8 bg-cyan-400 shadow-lg shadow-cyan-400/50"
                  : "w-2.5 bg-slate-700 hover:bg-slate-500"
              }`}
              title={`Jump to Slide ${idx + 1}: ${s.title}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={() => setCurrentSlideIndex((prev) => Math.min(keynoteSlides.length - 1, prev + 1))}
          disabled={currentSlideIndex === keynoteSlides.length - 1}
          className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-30 text-white font-medium text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/20 transition cursor-pointer"
        >
          <span>Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
