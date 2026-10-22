import React, { useState } from "react";
import { 
  Trophy, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Sparkles, 
  HelpCircle,
  ArrowRight
} from "lucide-react";
import confetti from "canvas-confetti";
import { quizQuestions } from "../data/quizData";

export const QuizSection: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);

  const currentQ = quizQuestions[currentQuestionIndex];
  const isAnswered = selectedAnswers[currentQuestionIndex] !== undefined;
  const isSelected = selectedAnswers[currentQuestionIndex];

  const handleSelectOption = (optIndex: number) => {
    if (isAnswered) return; // Prevent changing answer after reveal

    const updated = { ...selectedAnswers, [currentQuestionIndex]: optIndex };
    setSelectedAnswers(updated);

    // If answered correctly, trigger small celebratory burst
    if (optIndex === currentQ.correctIndex) {
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { y: 0.8 }
      });
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
      // Big celebratory confetti for completion
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.6 }
      });
    }
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setShowResults(false);
  };

  const score = calculateScore();

  return (
    <section id="quiz" className="py-20 md:py-28 relative border-b border-white/10 bg-slate-950/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            Knowledge Checkpoint
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            1st-Year <span className="text-amber-400">AI Masterclass Quiz</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Test what you learned about LLMs, RAG, Embeddings & AGI. Instant feedback on every choice!
          </p>
        </div>

        {/* Quiz Card */}
        <div className="rounded-3xl border border-white/15 bg-slate-900/90 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
          
          {!showResults ? (
            <div className="space-y-6">
              {/* Progress & Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs">
                <span className="font-mono text-cyan-400 font-bold">
                  Question {currentQuestionIndex + 1} of {quizQuestions.length}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-white/5 font-mono">
                  Concept: {currentQ.conceptBadge}
                </span>
              </div>

              {/* Question Text */}
              <h3 className="text-lg sm:text-xl font-bold text-white leading-relaxed">
                {currentQ.question}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options.map((opt, idx) => {
                  const isThisSelected = isSelected === idx;
                  const isCorrect = idx === currentQ.correctIndex;
                  
                  let optionStyles = "bg-slate-950/70 border-white/5 text-slate-300 hover:bg-slate-800 hover:text-white";

                  if (isAnswered) {
                    if (isCorrect) {
                      optionStyles = "bg-emerald-950/40 border-emerald-500 text-emerald-200 font-bold shadow-md shadow-emerald-500/10";
                    } else if (isThisSelected) {
                      optionStyles = "bg-rose-950/40 border-rose-500 text-rose-200";
                    } else {
                      optionStyles = "bg-slate-950/40 border-white/5 text-slate-500 opacity-60";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswered}
                      className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm transition flex items-center justify-between gap-3 cursor-pointer ${optionStyles}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-lg bg-slate-900 border border-white/10 font-mono text-xs flex items-center justify-center shrink-0">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{opt}</span>
                      </div>

                      {isAnswered && (
                        <div>
                          {isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
                          {isThisSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-400 shrink-0" />}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation Box (Visible after answering) */}
              {isAnswered && (
                <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 text-xs sm:text-sm text-cyan-200 space-y-1 animate-in fade-in">
                  <span className="font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 text-xs">
                    <Sparkles className="w-4 h-4" />
                    Key Takeaway for 1st Years:
                  </span>
                  <p className="text-slate-300 leading-relaxed">{currentQ.explanation}</p>
                </div>
              )}

              {/* Footer Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-xs text-slate-500">
                  {isAnswered ? "Answer revealed" : "Select an option to reveal explanation"}
                </span>

                {isAnswered && (
                  <button
                    onClick={handleNext}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/25 transition cursor-pointer"
                  >
                    <span>{currentQuestionIndex === quizQuestions.length - 1 ? "See Results" : "Next Question"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Results Screen */
            <div className="text-center py-6 space-y-6">
              <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-slate-950 shadow-2xl shadow-amber-500/30">
                <Trophy className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Quiz Completed!
                </h3>
                <p className="text-base text-slate-300">
                  You scored <span className="text-amber-400 font-extrabold text-xl">{score}</span> out of <span className="text-white font-bold">{quizQuestions.length}</span>!
                </p>
                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  {score >= 4
                    ? "🌟 Outstanding! You have grasped the foundational intuition of LLMs, RAG, and AGI. You are fully ready for the afternoon Chatbot Build Challenge!"
                    : "👍 Great effort! Review the RAG and LLM deep dive sections above to solidify your concepts before the coding challenge."}
                </p>
              </div>

              <button
                onClick={handleResetQuiz}
                className="px-6 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-semibold inline-flex items-center gap-2 border border-white/10 transition cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Try Quiz Again</span>
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
