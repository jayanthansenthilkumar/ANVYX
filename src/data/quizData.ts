export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  conceptBadge: "LLM" | "RAG" | "AGI" | "Embeddings" | "Architecture";
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Under the hood, what is an LLM (Large Language Model) mathematically trained to do?",
    options: [
      "Possess human consciousness and true conscious beliefs",
      "Predict the most statistically probable next token (word chunk)",
      "Search Google live for every single letter you type",
      "Store pre-written sentences in a giant relational database"
    ],
    correctIndex: 1,
    explanation: "At its core, an LLM calculates probability distributions over a vocabulary of tokens to predict the most likely next piece of text based on preceding context.",
    conceptBadge: "LLM"
  },
  {
    id: 2,
    question: "Why do companies choose RAG (Retrieval-Augmented Generation) instead of fine-tuning or retraining the entire LLM?",
    options: [
      "RAG is 1,000x cheaper, updates instantly without retraining, and cites exact verified sources",
      "RAG makes the model run without any computer or electricity",
      "Fine-tuning is illegal under international software copyright laws",
      "RAG only works if you write code in C language"
    ],
    correctIndex: 0,
    explanation: "Retraining a 70B parameter model costs millions of dollars and weeks of GPU compute. RAG allows you to update your database in seconds with zero training cost!",
    conceptBadge: "RAG"
  },
  {
    id: 3,
    question: "In vector semantic search, what is the 'Open-Book Exam' analogy for RAG?",
    options: [
      "The student cheats by whispering to another student in the hall",
      "The student relies only on what they memorized 2 years ago (Pure LLM) vs pulling out the exact textbook page on demand (RAG)",
      "The student writes the exam using an open laptop without internet",
      "The examiner gives everyone 100 marks automatically"
    ],
    correctIndex: 1,
    explanation: "A closed-book exam is like a pure LLM: it can only recall training weights and might hallucinate. RAG provides the relevant textbook pages into the prompt before generating the answer.",
    conceptBadge: "RAG"
  },
  {
    id: 4,
    question: "If you are building an AI chatbot for MKCE College Fee & Accounting, what Temperature should you choose?",
    options: [
      "1.5 (Maximum creativity and wildest imagination)",
      "0.8 (Casual storytelling tone)",
      "0.0 or 0.1 (Strictly deterministic and factually grounded)",
      "Negative 100 (-100)"
    ],
    correctIndex: 2,
    explanation: "For financial systems, accounting, and legal compliance, you want zero hallucination and 100% deterministic precision. Temperature = 0.0 or 0.1 is standard.",
    conceptBadge: "LLM"
  },
  {
    id: 5,
    question: "What is the defining characteristic of Artificial General Intelligence (AGI) compared to today's Narrow AI?",
    options: [
      "AGI can only play chess faster than Gary Kasparov",
      "AGI can perform virtually any economically valuable intellectual task a human can do across diverse domains",
      "AGI is a robot with metal arms and legs that walks around college",
      "AGI is simply a computer with 64GB of RAM"
    ],
    correctIndex: 1,
    explanation: "Narrow AI (ANI) excels at single tasks (voice transcription, chess, text generation). AGI represents generalized human-level cognitive adaptability across novel tasks without task-specific training.",
    conceptBadge: "AGI"
  }
];
