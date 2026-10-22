export interface Slide {
  id: number;
  badge: string;
  title: string;
  subtitle: string;
  content: {
    heading: string;
    description: string;
    bulletPoints: string[];
    analogy?: {
      title: string;
      text: string;
      icon: string;
    };
    codeSnippet?: string;
  };
  speakerNotes: string[];
  stageDirection: string;
}

export const keynoteSlides: Slide[] = [
  {
    id: 1,
    badge: "OPENING KEYNOTE",
    title: "Don't Just Use AI — Create It",
    subtitle: "Welcome to ZENTRA '26 | Dept of CSBS, M. Kumarasamy College of Engineering",
    content: {
      heading: "The Golden Era for 1st-Year Engineers",
      description: "You are starting your engineering journey right in the middle of the greatest technological revolution in human history. In the next 4 years, knowing how to prompt will be basic literacy; knowing how to ARCHITECT AI systems will be your superpower.",
      bulletPoints: [
        "Why CSBS is the perfect degree: AI requires both heavy computing and deep business systems acumen.",
        "From consumer to creator: Shifting your mindset from asking ChatGPT for homework to building the engine behind it.",
        "Today's agenda: Demystifying Chatbots, LLMs, RAG, and the road to AGI without intimidating math."
      ],
      analogy: {
        title: "The Electricity Analogy",
        text: "In 1900, electricity arrived. Those who only used it to turn on light bulbs stayed users. Those who designed electric motors and appliances built modern civilization. AI is the electricity of the 21st century.",
        icon: "zap"
      }
    },
    speakerNotes: [
      "Smile, look across the hall. Welcome the dignitaries, HOD, faculty, and especially the fresh 1st-year CSBS students.",
      "Hook: 'Raise your hand if you used ChatGPT, Gemini, or Claude this week.' (Almost all hands will go up).",
      "Follow up: 'Keep your hand up if you know how that chatbot actually generated the first word of its answer.' (Hands will drop).",
      "Punchline: 'By 4:30 PM today, not only will every single one of you understand it—you will have built your own chatbot!'"
    ],
    stageDirection: "High energy, make eye contact across all rows of Sir C V Raman Hall, pause for audience hands."
  },
  {
    id: 2,
    badge: "HISTORICAL PERSPECTIVE",
    title: "The Evolution of Chatbots",
    subtitle: "How we went from 1966 regex scripts to conversational reasoning",
    content: {
      heading: "4 Generations of Conversational AI",
      description: "Chatbots didn't start with OpenAI in 2022. They've been evolving for over 60 years across four distinct eras.",
      bulletPoints: [
        "Gen 1 (1966 - ELIZA): Simple pattern matching and keyword substitution. If input had 'mother', reply 'Tell me more about your family.'",
        "Gen 2 (2010s - Siri & Rule-Based IVRs): Intent classification and decision trees. 'Press 1 for English, Press 2 to talk to human.' Fragile and frustrating.",
        "Gen 3 (2022 - Generative LLMs): Giant neural networks predicting natural language. Extremely fluent, but hallucinated when they lacked facts.",
        "Gen 4 (2024-2026 - RAG & Autonomous Agents): Grounded in private real-time data, capable of calling APIs and taking multi-step actions."
      ],
      analogy: {
        title: "The Evolution Analogy",
        text: "ELIZA was a parrot repeating words. Siri was a flowchart receptionist. ChatGPT was an eloquent storyteller who sometimes fibbed. Modern RAG Chatbots are research librarians with PhDs.",
        icon: "history"
      }
    },
    speakerNotes: [
      "Explain ELIZA briefly. Mention Joseph Weizenbaum created it at MIT in 1966.",
      "Show why rule-based systems fail: If the user says 'I want to cancel my ticket because my dog got sick', a rule-based bot looks for keywords and says 'Sorry, dogs are not allowed on flight'.",
      "Emphasize how Generative AI solved the language understanding problem."
    ],
    stageDirection: "Use humor when describing customer support bots that get stuck in infinite loops."
  },
  {
    id: 3,
    badge: "SYSTEM ARCHITECTURE",
    title: "Anatomy of a Modern AI Chatbot",
    subtitle: "The 5-Layer Stack every software engineer must master",
    content: {
      heading: "Behind the Chat Bubble: The 5 Layers",
      description: "When you build an enterprise chatbot for business systems, you don't just call an API. You orchestrate 5 distinct architectural layers.",
      bulletPoints: [
        "1. Interface Layer (UI): React / Next.js / WhatsApp webhook / Mobile App.",
        "2. Orchestrator (Backend Brain): FastAPI, LangChain, or LlamaIndex managing state & conversation flow.",
        "3. LLM Engine (Reasoning Core): GPT-4o, Claude 3.5 Sonnet, Llama-3, or Ollama on local machines.",
        "4. Memory & Knowledge Vault (Vector DB): ChromaDB, Pinecone, or FAISS holding verified domain knowledge.",
        "5. Tool Execution (Action Layer): SQL queries, CRM updates, ERP connectors, or payment gateways."
      ],
      analogy: {
        title: "The Iron Man / J.A.R.V.I.S. Analogy",
        text: "The UI is Tony Stark's holographic visor. The LLM is Jarvis's intellect. The Vector DB is Stark Industries' secret blueprints database. The Tools are the thrusters and repulsor beams Jarvis controls on command.",
        icon: "cpu"
      }
    },
    speakerNotes: [
      "Point out that 1st years often think a chatbot is just 1 file with an OpenAI API key.",
      "Walk through the 5 layers step-by-step. Highlight the role of CSBS students: You understand both the technical backend and the business workflow that the tools connect to!",
      "Tell them that in the afternoon challenge, they will build layers 1, 2, 3, and 4."
    ],
    stageDirection: "Point to the visual diagram on screen and trace a message from user down to database and back."
  },
  {
    id: 4,
    badge: "BUSINESS IMPACT",
    title: "Why Industry Is Obsessed: Chatbot Use Cases",
    subtitle: "Connecting Computer Science to Business Systems (CSBS)",
    content: {
      heading: "From Cost Center to Revenue Driver",
      description: "Chatbots are no longer just FAQ answering machines. In modern business systems, they are autonomous operational agents.",
      bulletPoints: [
        "Fintech & Banking: Real-time fraud detection alerts, portfolio advice, 24/7 KYC onboarding without human queues.",
        "Smart Campus (MKCE Bot): Instant answers for internal marks, Anna University syllabus, bus timings, hall ticket downloads.",
        "Healthcare & Triage: First-response symptom checking, insurance pre-authorization, patient appointment scheduling.",
        "Software Engineering: GitHub Copilot, automated code PR reviews, DevOps incident remediation."
      ],
      analogy: {
        title: "The 24/7 Super-Employee",
        text: "Imagine an employee who speaks 95 languages, has read every single page of your company documentation, never sleeps, responds in 400 milliseconds, and handles 50,000 customers simultaneously.",
        icon: "briefcase"
      }
    },
    speakerNotes: [
      "Connect directly to the CSBS syllabus! Business Systems is about operations, ROI, customer lifetime value, and compliance.",
      "Give the MKCE Campus example: 'How many of you spent 30 minutes in line asking about bus route #7 or college fees? An internal RAG bot answers that in 2 seconds.'",
      "Mention ROI stats: Companies save 30-50% in customer service support while boosting customer satisfaction."
    ],
    stageDirection: "Address faculty nods, encourage students to think about real campus problems they can solve today."
  },
  {
    id: 5,
    badge: "FOUNDATIONAL CONCEPT",
    title: "What is an LLM? Demystifying the Magic",
    subtitle: "How Large Language Models actually 'think'",
    content: {
      heading: "The Superpowered Predictive Autocomplete",
      description: "An LLM is not a conscious entity. At its mathematical core, an LLM is a colossal probability engine trained to predict the next word chunk (token).",
      bulletPoints: [
        "Tokenization: Computers don't see words; they see numbers. 'Computer' might be token ID 3842.",
        "The Next-Token Game: Given 'The capital of Tamil Nadu is...', the model evaluates probabilities: Chennai (99.2%), Madurai (0.4%), Coimbatore (0.2%).",
        "The Attention Mechanism (Transformer): The breakthrough from 2017 ('Attention Is All You Need'). The model casts a dynamic spotlight across previous words to understand context and relationships.",
        "Temperature Parameter: 0.0 = strict, factual, deterministic. 0.8+ = creative, imaginative, expressive."
      ],
      analogy: {
        title: "The Smart Keyboard Analogy",
        text: "Your phone keyboard suggests 3 next words based on your text messages. An LLM does the exact same thing, but it has read billions of books, research papers, and code repositories, and suggests from 100,000 possibilities with 70 billion parameters!",
        icon: "brain"
      }
    },
    speakerNotes: [
      "Demystify the math: Don't dive into matrix multiplication, give them the intuition.",
      "Show how temperature works: In banking, temperature = 0.0 (we don't want a creative bank balance!). In story writing, temperature = 0.8.",
      "Ask a student to complete this sentence: 'Once upon a...'. When they say 'time', say: 'Congratulations, you just performed next-token prediction!'"
    ],
    stageDirection: "Demonstrate interactive token prediction using the live widget on screen."
  },
  {
    id: 6,
    badge: "THE BIG PROBLEM",
    title: "The Fatal Flaw: Hallucinations",
    subtitle: "Why pure LLMs fail in mission-critical applications",
    content: {
      heading: "When High Confidence Meets False Information",
      description: "Because LLMs are trained to generate plausible-sounding text rather than verify truth, they can fabricate facts with total confidence.",
      bulletPoints: [
        "Cutoff Dates: A model trained until 2024 has zero knowledge of 2026 events like Zentra '26.",
        "Private Data Ignorance: An LLM knows nothing about MKCE's internal circulars, your private bank records, or company codebases.",
        "Hallucination Danger: In medicine or law, an invented citation or wrong drug dosage can be catastrophic.",
        "The Solution: We need a way to feed the model verified facts right before it generates its response. That solution is RAG!"
      ],
      analogy: {
        title: "The Overconfident Friend",
        text: "An LLM is like a friend who has watched thousands of documentaries but hasn't studied for today's exam. If you ask a tough question, instead of saying 'I don't know', they make up a brilliant-sounding story that sounds completely real!",
        icon: "alert-triangle"
      }
    },
    speakerNotes: [
      "Share real-world legal horror stories: The lawyer who used ChatGPT and submitted fake court case citations, getting fined by the judge.",
      "Ask the hall: 'Why can't we just retrain the LLM every time college publishes a circular?' (Because retraining takes weeks and millions of dollars!).",
      "Segway into the most important concept of the workshop: RAG."
    ],
    stageDirection: "Pause for dramatic effect before revealing the RAG solution."
  },
  {
    id: 7,
    badge: "CORE ARCHITECTURE",
    title: "RAG Demystified: Retrieval-Augmented Generation",
    subtitle: "Giving the LLM an open-book exam with real-time memory",
    content: {
      heading: "The Open-Book Superpower",
      description: "RAG bridges the gap between what the LLM learned during training and the private, real-time facts it needs to know right now.",
      bulletPoints: [
        "Step 1 - Ingestion: Take your documents (PDFs, MKCE syllabus, company manuals) and split them into chunks.",
        "Step 2 - Vector Embeddings: Transform chunks into coordinate numbers in semantic meaning space.",
        "Step 3 - Vector Search: When a user asks a question, find the top 3 most relevant chunks using cosine similarity.",
        "Step 4 - Prompt Augmentation: Stuff the retrieved chunks into the prompt: 'Answer the question ONLY using this provided context.'",
        "Step 5 - Generation: The LLM generates a 100% grounded, factual answer with exact citations!"
      ],
      analogy: {
        title: "Closed-Book vs Open-Book Exam",
        text: "Closed-Book Exam (Pure LLM): Student relies solely on memory from months ago. Might mix up formulas or forget.\n\nOpen-Book Exam (RAG): Student has a desktop with indexed textbooks. When a question is asked, they look up chapter 4 page 12, read the exact paragraph, and write the verified answer.",
        icon: "book-open"
      }
    },
    speakerNotes: [
      "Reiterate this analogy twice. It is the clearest way for 1st-year students to never forget RAG.",
      "Show how RAG costs 1,000x less than fine-tuning or training a model from scratch.",
      "Point out that virtually every enterprise chatbot built at TCS, CTS, Google, or Microsoft uses RAG."
    ],
    stageDirection: "Click the interactive pipeline stepper on the web platform to show the 5 stages visually."
  },
  {
    id: 8,
    badge: "THE SECRET SAUCE",
    title: "How Embeddings Turn Meaning Into Math",
    subtitle: "Understanding Vector Spaces without complex linear algebra",
    content: {
      heading: "Words as Points in Space",
      description: "How can a computer know that 'puppy' is similar to 'dog', but opposite to 'calculator'? Through Vector Embeddings.",
      bulletPoints: [
        "An embedding is an array of floating-point numbers (e.g. [0.24, -0.89, 0.51, ...]) representing semantic concept.",
        "Words with similar meanings are positioned close together in high-dimensional space.",
        "Famous AI equation: Vector('King') - Vector('Man') + Vector('Woman') ≈ Vector('Queen').",
        "Cosine Similarity: Measuring the angle between two vectors to see how closely their meanings align."
      ],
      analogy: {
        title: "The GPS Map of Ideas",
        text: "Just like Chennai and Karur are coordinates on Google Maps and their distance tells you physical proximity, 'Student' and 'Professor' are coordinates in meaning space and their proximity tells the computer semantic relationship.",
        icon: "map-pin"
      }
    },
    speakerNotes: [
      "Tell students: 'You will learn Linear Algebra in 2nd semester. When your professor teaches Dot Product and Cosine Distance, remember: this is the engine powering AI search!'",
      "Explain why traditional keyword search fails: Searching 'automobile trouble' misses a document about 'car engine malfunction'. Vector search finds it instantly."
    ],
    stageDirection: "Show the interactive Vector distance comparison widget on screen."
  },
  {
    id: 9,
    badge: "THE FUTURE HORIZON",
    title: "The Road to AGI: What, When & How?",
    subtitle: "From Narrow AI to Artificial General Intelligence",
    content: {
      heading: "The 3 Stages of Artificial Intelligence",
      description: "Where are we today, and where will technology be when you graduate in 2030?",
      bulletPoints: [
        "1. Artificial Narrow AI (ANI) [TODAY]: Specialized in specific tasks. Chess bots, ChatGPT writing essays, Midjourney drawing art.",
        "2. Artificial General Intelligence (AGI) [COMING 2027-2030]: An AI system that can perform ANY intellectual task a human can do, including learning new domains autonomously, doing scientific research, and writing production software from scratch.",
        "3. Artificial Superintelligence (ASI) [FUTURE]: AI vastly smarter than all human minds combined.",
        "Debunking Hollywood: AGI is not Terminator or Skynet. It is automated scientific discovery, cure for diseases, and universal personalized education."
      ],
      analogy: {
        title: "The Swiss Army Knife vs The Renaissance Scholar",
        text: "Narrow AI is like a Swiss knife: great at cutting, but can't paint. AGI is Leonardo da Vinci: an intellect that can invent machines, paint masterpieces, solve anatomy, and compose music seamlessly.",
        icon: "sparkles"
      }
    },
    speakerNotes: [
      "Address the elephant in the room: 'Will AGI take away our software engineering jobs?'",
      "Deliver the empowering message: 'AI will not replace software engineers. But software engineers who use AI will replace those who don't!'",
      "Explain how junior developers in 2026 act like Tech Leads of 5 AI agents rather than typing boilerplate syntax line by line."
    ],
    stageDirection: "Speak with passion and reassurance. Motivate the 1st years."
  },
  {
    id: 10,
    badge: "ACTION PLAN",
    title: "The 1st-Year Blueprint: How to Become an AI Builder",
    subtitle: "What to do starting tonight at your hostel or home",
    content: {
      heading: "Your 4-Year Roadmap to Becoming an AI Architect",
      description: "Don't wait for your 4th-year final project. Start building small projects today.",
      bulletPoints: [
        "Year 1: Master Python & Data Structures. Build 5 simple CLI chatbots. Learn Git & GitHub.",
        "Year 2: Understand APIs, LangChain, ChromaDB, and prompt engineering. Build an MKCE campus bot.",
        "Year 3: Explore Open Source LLMs (Ollama, Hugging Face, fine-tuning LoRA). Build autonomous agents.",
        "Year 4: Build high-scale distributed systems, ship production SaaS, publish open source, secure dream offers."
      ],
      analogy: {
        title: "Gym for Your Mind",
        text: "You can't get six-pack abs by watching workout tutorials on YouTube. You only build muscle by lifting weights. In AI, you only learn by writing code and seeing it fail and succeed.",
        icon: "target"
      }
    },
    speakerNotes: [
      "Give them actionable advice: Star GitHub repos, create a GitHub profile this week, push every project.",
      "Highlight free resources: Google Colab, Hugging Face, Ollama, Groq free API tiers.",
      "Encourage cross-collaboration between CSBS, AIML, and CSE students."
    ],
    stageDirection: "Inspiring tone, direct challenge to the audience."
  },
  {
    id: 11,
    badge: "CHALLENGE LAUNCH",
    title: "ZENTRA '26 Build Challenge: Let's Code!",
    subtitle: "Hands-on Workshop & Afternoon Competition Guidelines",
    content: {
      heading: "Your Mission This Afternoon",
      description: "Team up in groups of 2-3. Pick a real-world use case. Build a working chatbot prototype with knowledge grounding.",
      bulletPoints: [
        "Track 1 - Campus Assistant: Solves an MKCE student problem (hostel, library, exam timetable).",
        "Track 2 - Business & Fintech: Customer onboarding, loan calculation, policy summarizer.",
        "Track 3 - Creative & Healthcare: Mental health companion, diagnostic triage, study buddy.",
        "Judging Criteria: Innovation (30%), System Architecture & RAG (40%), Live Demonstration & Pitch (30%)."
      ],
      analogy: {
        title: "The Hackathon Spirit",
        text: "A working prototype on your laptop is worth 1,000 PowerPoint slides. Don't worry about perfection; build something that talks and brings value!",
        icon: "trophy"
      }
    },
    speakerNotes: [
      "Introduce the student coordinator S R Sharanya and mentors.",
      "Remind them to use the starter code provided on this website.",
      "End keynote with: 'Remember the motto of Zentra '26: Don't Just Use AI, Create It. Let the coding begin! Thank you!'"
    ],
    stageDirection: "Crescendo to a big standing finish. Applaud the audience."
  }
];
