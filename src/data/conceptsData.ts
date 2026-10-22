export interface TokenPredictionSample {
  inputPrompt: string;
  tokens: { token: string; probability: number; rationale: string }[];
}

export const tokenPredictionSamples: TokenPredictionSample[] = [
  {
    inputPrompt: "The capital of Tamil Nadu is",
    tokens: [
      { token: " Chennai", probability: 96.8, rationale: "Highest probability geographic association" },
      { token: " known", probability: 1.6, rationale: "Grammatically valid continuing descriptor" },
      { token: " one", probability: 0.9, rationale: "Descriptive continuation ('one of the largest...')" },
      { token: " home", probability: 0.4, rationale: "Linguistic variant ('home to...')" },
      { token: " located", probability: 0.3, rationale: "Geographical location clause" }
    ]
  },
  {
    inputPrompt: "To build a modern chatbot, we need an LLM and",
    tokens: [
      { token: " RAG", probability: 64.2, rationale: "Dominant enterprise architecture for grounding" },
      { token: " a", probability: 18.5, rationale: "Grammar article before noun (e.g. 'a database')" },
      { token: " vector", probability: 10.3, rationale: "Vector database component" },
      { token: " prompts", probability: 4.8, rationale: "Prompt engineering requirement" },
      { token: " APIs", probability: 2.2, rationale: "Integration layer" }
    ]
  },
  {
    inputPrompt: "Artificial General Intelligence (AGI) refers to AI that can",
    tokens: [
      { token: " perform", probability: 58.4, rationale: "Standard definition phrasing ('perform any task')" },
      { token: " understand", probability: 22.1, rationale: "Cognitive comprehension phrasing" },
      { token: " match", probability: 11.2, rationale: "Comparative human ability phrasing" },
      { token: " learn", probability: 5.6, rationale: "Autonomous generalization phrasing" },
      { token: " reason", probability: 2.7, rationale: "Multi-domain intellectual reasoning" }
    ]
  }
];

export interface SemanticVectorPair {
  phraseA: string;
  phraseB: string;
  similarity: number; // 0 to 1
  category: "High Semantic Match" | "Moderate Match" | "Unrelated / Distant";
  explanation: string;
}

export const semanticVectorPairs: SemanticVectorPair[] = [
  {
    phraseA: "How can I apply for leave during semester exam?",
    phraseB: "MKCE student medical leave policy and procedures",
    similarity: 0.92,
    category: "High Semantic Match",
    explanation: "Completely different words, but identical meaning in vector space! Keyword search fails, but vector search succeeds."
  },
  {
    phraseA: "What is the fee payment deadline for 1st year CSBS?",
    phraseB: "Tuition and hostel payment schedule for Anna University affiliated students",
    similarity: 0.88,
    category: "High Semantic Match",
    explanation: "Vector embeddings recognize financial deadlines and college fees as strongly clustered concepts."
  },
  {
    phraseA: "How to train a deep neural network on GPU?",
    phraseB: "Best gaming graphics card under 30,000 rupees",
    similarity: 0.54,
    category: "Moderate Match",
    explanation: "Both mention GPUs/hardware, but one is about ML training and the other is about PC gaming."
  },
  {
    phraseA: "What is Retrieval-Augmented Generation?",
    phraseB: "How to make South Indian filter coffee",
    similarity: 0.08,
    category: "Unrelated / Distant",
    explanation: "Orthogonal vectors in high-dimensional space with near zero cosine overlap."
  }
];

export const ragPipelineStages = [
  {
    step: 1,
    title: "Document Ingestion & Chunking",
    subtitle: "Breaking big knowledge into digestible bites",
    description: "You cannot feed a 500-page college handbook to an LLM on every user query. We slice text into overlapping chunks of 300-500 words each.",
    analogy: "Like cutting a long novel into index cards so you can find any topic in 3 seconds.",
    techUsed: "LangChain RecursiveCharacterTextSplitter, LlamaIndex Chunking",
    icon: "file-text"
  },
  {
    step: 2,
    title: "Vector Embedding Generation",
    subtitle: "Translating words into mathematical coordinates",
    description: "Each text chunk passes through an embedding model (e.g. OpenAI text-embedding-3 or HuggingFace BGE) converting it into an array of 1536 floating numbers.",
    analogy: "Like assigning a GPS latitude and longitude coordinate to the meaning of each sentence.",
    techUsed: "OpenAI Embeddings, sentence-transformers, Ollama all-minilm",
    icon: "binary"
  },
  {
    step: 3,
    title: "Vector Database Storage & Indexing",
    subtitle: "Storing meaning coordinates for fast search",
    description: "Embeddings are indexed in a specialized Vector Database (ChromaDB, Pinecone, FAISS) using algorithms like HNSW (Hierarchical Navigable Small World).",
    analogy: "The library card catalog, but indexed by idea rather than alphabetical title.",
    techUsed: "ChromaDB (Local, Open-source), FAISS, Pinecone, Qdrant",
    icon: "database"
  },
  {
    step: 4,
    title: "Semantic Search & Retrieval",
    subtitle: "Finding the exact matching chunks in 20 milliseconds",
    description: "When the user asks 'When is Zentra 26?', the question is embedded into a vector, and the DB calculates cosine similarity to grab the top 3 closest chunks.",
    analogy: "The librarian instantly pulling the exact 3 pages containing the answer.",
    techUsed: "Cosine Similarity, Euclidean Distance, Hybrid Search (Dense + BM25)",
    icon: "search"
  },
  {
    step: 5,
    title: "Augmentation & Grounded Response",
    subtitle: "The LLM generates an answer with strict factual grounding",
    description: "We merge the user query + retrieved chunks into a prompt template: 'Answer using ONLY the provided context. If unsure, say I don't know.'",
    analogy: "An open-book exam where the student writes down verified facts with zero hallucination.",
    techUsed: "System Prompt Injection, Citation Generation, Guardrails",
    icon: "sparkles"
  }
];

export const llmParametersGuide = [
  {
    name: "Temperature",
    range: "0.0 to 1.5",
    default: "0.7",
    description: "Controls randomness and creativity. At 0.0, the model is strictly deterministic and always picks the #1 most probable token (ideal for math, coding, factual banking). At 1.0+, it samples less likely tokens for creative writing.",
    firstYearTip: "Think of temperature as caffeine! 0.0 is a sober accountant; 1.0 is an excited poet at midnight."
  },
  {
    name: "System Prompt",
    range: "Text instructions",
    default: "You are an AI assistant...",
    description: "The overarching persona, rules, boundaries, and tone of voice programmed into the LLM before the user speaks.",
    firstYearTip: "Like giving an actor their script and costume before they walk out onto the stage."
  },
  {
    name: "Context Window",
    range: "8k to 2M tokens",
    default: "128k tokens",
    description: "The working memory of the model during a single interaction. Everything outside this window is forgotten.",
    firstYearTip: "Like your short-term memory during an exam desk session."
  },
  {
    name: "Top-P (Nucleus Sampling)",
    range: "0.0 to 1.0",
    default: "0.9",
    description: "Alternative to temperature: limits token consideration to the smallest pool whose cumulative probability exceeds P.",
    firstYearTip: "Filters out bizarre or absurd words while keeping diverse plausible choices."
  }
];
