export interface YearRoadmap {
  year: string;
  semester: string;
  title: string;
  focus: string;
  milestones: string[];
  recommendedTools: string[];
  careerOutcome: string;
}

export const fourYearRoadmap: YearRoadmap[] = [
  {
    year: "1st Year (Freshman)",
    semester: "Sem 1 & 2",
    title: "Foundations & The Builder Mindset",
    focus: "Stop being a passive consumer of ChatGPT; become someone who writes Python scripts and controls APIs.",
    milestones: [
      "Master Python fundamentals (functions, dictionaries, OOP, JSON handling).",
      "Set up Git & GitHub: make 1 commit per week minimum.",
      "Experiment with Prompt Engineering: few-shot prompting, system instructions, chain-of-thought.",
      "Build your first 3 CLI / Gradio chatbots (MKCE notes bot, quiz bot).",
      "Understand basic Linear Algebra intuition: vectors, dot products, matrices."
    ],
    recommendedTools: ["Python 3.12", "VS Code", "GitHub", "Ollama", "Gradio", "Google Colab"],
    careerOutcome: "Strong coding fundamentals, confidence with local AI models, working GitHub profile."
  },
  {
    year: "2nd Year (Sophomore)",
    semester: "Sem 3 & 4",
    title: "Full-Stack AI & RAG Engineering",
    focus: "Connecting Frontend interfaces with Vector Databases and Backend Orchestration.",
    milestones: [
      "Learn modern web frontend (React 19 / TypeScript / Tailwind CSS).",
      "Master Backend APIs with Python FastAPI and asynchronous request handling.",
      "Implement your first production RAG pipeline using ChromaDB, FAISS, and LangChain / LlamaIndex.",
      "Learn chunking strategies, embedding models, and hybrid search (BM25 + Dense Vectors).",
      "Participate in your first college hackathon and win prizes!"
    ],
    recommendedTools: ["React 19", "FastAPI", "LangChain", "ChromaDB", "Docker", "Hugging Face"],
    careerOutcome: "Can build end-to-end full-stack AI web applications; attractive for 2nd-year internships."
  },
  {
    year: "3rd Year (Junior)",
    semester: "Sem 5 & 6",
    title: "Autonomous Agents & Model Specialization",
    focus: "Moving beyond simple Q&A bots to multi-agent reasoning, tool calling, and fine-tuning.",
    milestones: [
      "Build Autonomous AI Agents using LangGraph, CrewAI, or AutoGen that call real-world APIs.",
      "Learn Parameter-Efficient Fine-Tuning (PEFT, LoRA, QLoRA) for open-source models (Llama 3, Mistral, DeepSeek).",
      "Implement LLM Evaluation & Guardrails (Ragas, TruLens, Langfuse, NeMo Guardrails).",
      "Deploy scalable AI microservices with Docker, Kubernetes, and serverless vector databases.",
      "Complete a major industry-level CSBS capstone project."
    ],
    recommendedTools: ["LangGraph", "CrewAI", "Unsloth / PyTorch", "PostgreSQL pgvector", "AWS / Azure AI"],
    careerOutcome: "Advanced AI engineer profile ready for tier-1 campus placements and product company interviews."
  },
  {
    year: "4th Year (Senior)",
    semester: "Sem 7 & 8",
    title: "Production Scale, Leadership & Ventures",
    focus: "High-throughput systems, latency optimization, and launching real products or startup ventures.",
    milestones: [
      "Optimize inference latency: vLLM, TensorRT-LLM, model quantization (GGUF, AWQ, FP8).",
      "Architect enterprise-grade security, data privacy, and compliance frameworks.",
      "Mentor junior 1st-year students at events like ZENTRA '27 & ZENTRA '28!",
      "Convert your best AI project into a live SaaS product or published research paper.",
      "Secure high-package dream offers (TCS Digital, CTS GenAI, Product MNCs, or Startup Founding)."
    ],
    recommendedTools: ["vLLM", "TensorRT", "Kubernetes", "Redis Caching", "Stripe / Razorpay API"],
    careerOutcome: "AI Architect / Product Lead mindset, highly sought-after engineering graduate."
  }
];
