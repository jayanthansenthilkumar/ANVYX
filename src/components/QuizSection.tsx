import React, { useState } from "react";
import { 
  Trophy, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
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
    if (isAnswered) return;

    const updated = { ...selectedAnswers, [currentQuestionIndex]: optIndex };
    setSelectedAnswers(updated);

    if (optIndex === currentQ.correctIndex) {
      confetti({
        particleCount: 25,
        spread: 50,
        origin: { y: 0.8 },
        colors: ["#C8FF00", "#111111", "#0038FF"]
      });
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.6 },
        colors: ["#C8FF00", "#111111", "#0038FF", "#FF3E00"]
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
    <section id="quiz" className="py-16 md:py-24 brutal-border-b bg-[#FFFFFF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10 space-y-2">
          <div className="inline-block bg-[#111111] text-[#C8FF00] font-mono text-xs font-bold px-2 py-0.5 uppercase tracking-wider">
            [07] // KNOWLEDGE_VERIFICATION
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-[#111111]">
            1ST-YEAR <span className="bg-[#C8FF00] px-2 brutal-border-thin">AI QUIZ</span>
          </h2>
          <p className="text-sm sm:text-base text-[#555555] font-medium">
            Test what you learned about LLMs, RAG, Embeddings, and AGI. Instant explanation on every choice.
          </p>
        </div>

        {/* Quiz Card */}
        <div className="brutal-card brutal-shadow-lg p-6 sm:p-10 bg-[#F4F2EB] relative overflow-hidden">
          
          {!showResults ? (
            <div className="space-y-6">
              {/* Progress & Badge */}
              <div className="flex items-center justify-between pb-3 border-b border-[#000000] text-xs font-mono font-bold">
                <span className="bg-[#111111] text-[#FFFFFF] px-2 py-0.5">
                  QUESTION 0{currentQuestionIndex + 1} // 0{quizQuestions.length}
                </span>
                <span className="bg-[#C8FF00] text-[#111111] px-2 py-0.5 brutal-border-thin">
                  TOPIC: {currentQ.conceptBadge}
                </span>
              </div>

              {/* Question Text */}
              <h3 className="text-lg sm:text-xl font-display font-black text-[#111111] leading-snug">
                {currentQ.question}
              </h3>

              {/* Options */}
              <div className="space-y-2.5">
                {currentQ.options.map((opt, idx) => {
                  const isThisSelected = isSelected === idx;
                  const isCorrect = idx === currentQ.correctIndex;
                  
                  let optionStyles = "bg-[#FFFFFF] text-[#111111] hover:bg-[#E8E5DC]";

                  if (isAnswered) {
                    if (isCorrect) {
                      optionStyles = "bg-[#C8FF00] text-[#111111] font-bold brutal-shadow-sm";
                    } else if (isThisSelected) {
                      optionStyles = "bg-[#FF3E00] text-[#FFFFFF] font-bold";
                    } else {
                      optionStyles = "bg-[#FFFFFF] text-[#888888] opacity-60";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswered}
                      className={`w-full p-3.5 brutal-border text-left text-xs sm:text-sm font-mono transition flex items-center justify-between gap-3 cursor-pointer ${optionStyles}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 brutal-border-thin bg-[#111111] text-[#FFFFFF] font-bold flex items-center justify-center shrink-0">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="font-sans font-medium">{opt}</span>
                      </div>

                      {isAnswered && (
                        <div>
                          {isCorrect && <CheckCircle2 className="w-5 h-5 text-[#111111] shrink-0" />}
                          {isThisSelected && !isCorrect && <XCircle className="w-5 h-5 text-[#FFFFFF] shrink-0" />}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation Box */}
              {isAnswered && (
                <div className="p-4 bg-[#FFFFFF] brutal-border space-y-1 text-xs font-mono">
                  <span className="font-bold uppercase text-[#0038FF] block">
                    // KEY TAKEAWAY FOR 1ST YEARS:
                  </span>
                  <p className="text-[#222222] font-sans font-medium leading-relaxed">
                    {currentQ.explanation}
                  </p>
                </div>
              )}

              {/* Footer Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-[#000000]">
                <span className="text-xs font-mono text-[#666666]">
                  {isAnswered ? "// Answer verified" : "// Select an option"}
                </span>

                {isAnswered && (
                  <button
                    onClick={handleNext}
                    className="brutal-btn brutal-btn-primary px-5 py-2.5 text-xs font-mono flex items-center gap-2"
                  >
                    <span>{currentQuestionIndex === quizQuestions.length - 1 ? "SEE RESULTS" : "NEXT QUESTION"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Results Screen */
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 mx-auto bg-[#C8FF00] brutal-border brutal-shadow flex items-center justify-center text-[#111111]">
                <Trophy className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <span className="font-mono text-xs font-bold bg-[#111111] text-[#FFFFFF] px-2 py-0.5 uppercase">
                  EVALUATION COMPLETE
                </span>
                <h3 className="font-display font-black text-3xl sm:text-4xl text-[#111111]">
                  SCORE: {score} / {quizQuestions.length}
                </h3>
                <p className="text-xs sm:text-sm text-[#444444] font-medium max-w-md mx-auto pt-1">
                  {score >= 4
                    ? "Outstanding! You have mastered the core intuition of LLMs, RAG, and AGI. You are fully equipped for the afternoon build challenge!"
                    : "Good effort! Review the RAG and LLM sections to strengthen your system understanding before coding your chatbot."}
                </p>
              </div>

              <button
                onClick={handleResetQuiz}
                className="brutal-btn brutal-btn-white px-5 py-2.5 text-xs font-mono inline-flex items-center gap-2"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>TRY QUIZ AGAIN</span>
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
