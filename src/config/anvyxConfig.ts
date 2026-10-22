export interface EventConfig {
  name: string;
  edition: string;
  tagline: string;
  headline: string;
  supportingText: string;
  durationHours: number;
  dates: {
    display: string;
    status: "Upcoming" | "Live" | "Open" | "Announced";
    venue: string;
    format: string;
  };
  navigation: {
    label: string;
    href: string;
  }[];
  timelineStages: {
    number: string;
    title: string;
    timeframe: string;
    description: string;
    deliverable: string;
  }[];
  challengeDomains: {
    id: string;
    title: string;
    tagline: string;
    description: string;
    accentColor: string;
    tags: string[];
    suggestedFocus: string[];
  }[];
  participantJourney: {
    step: string;
    title: string;
    detail: string;
  }[];
  prizes: {
    tier: string;
    rank: string;
    title: string;
    highlight: string;
    perks: string[];
    accent: string;
  }[];
  judgingCriteria: {
    title: string;
    weight: string;
    description: string;
    coreAspects: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
    category: "General" | "Teams" | "Rules" | "Logistics";
  }[];
  links: {
    registrationUrl: string;
    discordUrl: string;
    githubUrl: string;
    contactEmail: string;
  };
}

export const anvyxConfig: EventConfig = {
  name: "ANVYX",
  edition: "’27",
  tagline: "The ANVYX Dimension — Enter the Future of Building",
  headline: "EIGHT HOURS. INFINITE POSSIBILITIES.",
  supportingText: "Eight hours to imagine, engineer, and transform an idea into something real. A high-intensity creative hackathon at the intersection of engineering and design.",
  durationHours: 8,
  dates: {
    display: "March 2027 // Official Calendar Notice",
    status: "Open",
    venue: "Metropolitan Arena of Innovation & Global Virtual Stream",
    format: "Hybrid (Physical Cohort & Decentralized Stream)"
  },
  navigation: [
    { label: "Vision", href: "#vision" },
    { label: "8-Hour Timeline", href: "#timeline" },
    { label: "Challenges", href: "#challenges" },
    { label: "Journey", href: "#journey" },
    { label: "Prizes", href: "#prizes" },
    { label: "Evaluation", href: "#judging" },
    { label: "FAQ", href: "#faq" }
  ],
  timelineStages: [
    {
      number: "01",
      title: "Discover",
      timeframe: "00:00 — 01:00",
      description: "Deconstruct the challenge briefs, analyze unaddressed market vectors, and explore technological leverage points.",
      deliverable: "Problem vector defined & team synchrony established"
    },
    {
      number: "02",
      title: "Define",
      timeframe: "01:00 — 02:00",
      description: "Scope the core product thesis. Strip away peripheral noise to isolate the single high-impact hypothesis to prove.",
      deliverable: "One-sentence hypothesis & functional boundary scope"
    },
    {
      number: "03",
      title: "Design",
      timeframe: "02:00 — 03:00",
      description: "Draft high-fidelity user workflows, establish spatial component hierarchy, and align design systems with technical constraints.",
      deliverable: "Interface wireflows & token design foundation"
    },
    {
      number: "04",
      title: "Architect",
      timeframe: "03:00 — 04:00",
      description: "Formulate backend schemas, API contracts, local microservices, and neural inference pipelines for rapid execution.",
      deliverable: "Repository scaffolding & verified environment handshake"
    },
    {
      number: "05",
      title: "Build",
      timeframe: "04:00 — 05:30",
      description: "The core execution sprint. Implement primary functionality, data structures, and the differentiating algorithmic core.",
      deliverable: "Working functional pipeline with end-to-end data pass"
    },
    {
      number: "06",
      title: "Integrate",
      timeframe: "05:30 — 06:30",
      description: "Merge frontend interfaces with backend engines, connect live APIs, and verify edge-case recovery.",
      deliverable: "Cohesive end-to-end prototype operational on localhost"
    },
    {
      number: "07",
      title: "Refine",
      timeframe: "06:30 — 07:15",
      description: "Polish typography, micro-interactions, responsive states, input error boundaries, and benchmark latency.",
      deliverable: "Frictionless user experience & production deployment"
    },
    {
      number: "08",
      title: "Demonstrate",
      timeframe: "07:15 — 08:00",
      description: "Record concise 3-minute video walkthrough, push verified Git repositories, and pitch live to the review council.",
      deliverable: "Live functional demonstration & code submission"
    }
  ],
  challengeDomains: [
    {
      id: "ai",
      title: "Artificial Intelligence",
      tagline: "Autonomous Reasoning & Generative Dimensions",
      description: "Architect systems that leverage multi-modal models, local neural inference, agentic orchestration, and adaptive reasoning.",
      accentColor: "#58E6FF",
      tags: ["Agentic RAG", "Local LLMs", "Neural Interfaces", "Autonomous Logic"],
      suggestedFocus: ["Multi-agent collaboration", "Private edge AI", "Multimodal spatial assistants"]
    },
    {
      id: "web-mobile",
      title: "Web & Spatial Computing",
      tagline: "Fluid Digital Experiences & Modern Interfaces",
      description: "Build next-generation web applications characterized by responsive fluidity, WebGL/WebGPU visual experiences, and real-time connectivity.",
      accentColor: "#9878FF",
      tags: ["WebGPU", "React 19", "Spatial Design", "Zero-Latency P2P"],
      suggestedFocus: ["Real-time collaborative workspaces", "Spatial data exploration", "Micro-frontend architectures"]
    },
    {
      id: "cybersecurity",
      title: "Zero-Trust & Security",
      tagline: "Resilient Cryptography & Automated Defense",
      description: "Engineer resilient architectures capable of autonomous vulnerability triage, cryptographic verification, and adversarial mitigation.",
      accentColor: "#58E6FF",
      tags: ["Zero-Trust", "Homomorphic Encryption", "Automated Triage", "Auth Protocols"],
      suggestedFocus: ["API security auditors", "Identity attestation", "Decentralized permissioning"]
    },
    {
      id: "dev-tools",
      title: "Developer Tools & Ergonomics",
      tagline: "Amplifying Engineering Velocity",
      description: "Tools that remove developer toil: next-generation debuggers, CI/CD observability, compiler acceleration, and intelligent refactoring engines.",
      accentColor: "#F4F6FF",
      tags: ["Language Servers", "Compiler Optimization", "Dev Ergonomics", "Observability"],
      suggestedFocus: ["Live code telemetry", "AST-based refactor engines", "Instant sandbox environments"]
    },
    {
      id: "sustainability",
      title: "Sustainable Systems",
      tagline: "Telemetry for Planetary Resilience",
      description: "Harness computational models, sensor telemetry, and optimization algorithms to reduce environmental impact and optimize resource loops.",
      accentColor: "#58E6FF",
      tags: ["Energy Telemetry", "Carbon Scheduling", "Resource Optimization"],
      suggestedFocus: ["Compute load green-routing", "Circular materials tracking", "Renewable grid analytics"]
    },
    {
      id: "open-innovation",
      title: "Open Frontier",
      tagline: "Unconstrained Radical Exploration",
      description: "Uncategorized moonshot concepts that redefine the boundaries of hardware, software, art, human interaction, or scientific discovery.",
      accentColor: "#9878FF",
      tags: ["Moonshot", "Biocomputing", "Algorithmic Sound", "Speculative UI"],
      suggestedFocus: ["Hardware-software synthesis", "Generative audio synthesis", "Novel input interaction"]
    }
  ],
  participantJourney: [
    {
      step: "01",
      title: "Register",
      detail: "Form your squad of 1 to 4 creators or register as an unattached builder for automated cohort matching."
    },
    {
      step: "02",
      title: "Discover",
      detail: "Receive confidential domain challenge prompts and architectural telemetry at the opening keynote."
    },
    {
      step: "03",
      title: "Build",
      detail: "Eight uninterrupted hours of focused creation backed by on-demand engineering mentors and cloud sandboxes."
    },
    {
      step: "04",
      title: "Submit",
      detail: "Commit clean repository code, architectural documentation, and a concise 3-minute demonstration recording."
    },
    {
      step: "05",
      title: "Present",
      detail: "Finalists showcase live builds before the evaluation council for immediate live jury scoring."
    }
  ],
  prizes: [
    {
      tier: "Grand Prix",
      rank: "01",
      title: "ANVYX Vanguard Laureate",
      highlight: "Excellence in Innovation, Architecture & Product Execution",
      perks: [
        "First Place Recognition Trophy & Winner Title",
        "Direct Seed Incubation & Venture Advisory Fellowship",
        "Enterprise Cloud Infrastructure & GPU Compute Allocation",
        "Direct Partner Fast-Track Interviews"
      ],
      accent: "#58E6FF"
    },
    {
      tier: "Runner Up",
      rank: "02",
      title: "ANVYX Engineering Distinction",
      highlight: "Exemplary Technical Depth & Architectural Rigor",
      perks: [
        "Second Place Distinction Plaque",
        "Venture Mentorship Sessions & Accelerator Fast-Track",
        "Comprehensive High-Performance Compute Credits",
        "Featured Showcase across Global Engineering Network"
      ],
      accent: "#9878FF"
    },
    {
      tier: "Innovator Award",
      rank: "03",
      title: "ANVYX Creative Pioneer",
      highlight: "Exceptional User Experience & Elegant Interface Design",
      perks: [
        "Third Place Design & Innovation Trophy",
        "Hardware Development Grant & Tooling Passes",
        "Technical Mentorship with Industry Architects",
        "Permanent Feature in the ANVYX Innovation Archives"
      ],
      accent: "#F4F6FF"
    }
  ],
  judgingCriteria: [
    {
      title: "Innovation & Originality",
      weight: "25%",
      description: "Does the solution introduce a fresh perspective, novel algorithm, or unconventional synthesis of technologies?",
      coreAspects: ["Novelty of approach", "Creative technological application", "Freedom from derivative patterns"]
    },
    {
      title: "Technical Architecture & Execution",
      weight: "25%",
      description: "How robust, scalable, and well-engineered is the code and system design within the 8-hour constraint?",
      coreAspects: ["Code structure & clarity", "System reliability", "Appropriate technology selection"]
    },
    {
      title: "Practical Relevance & Viability",
      weight: "20%",
      description: "Does the project address a genuine, tangible bottleneck with a realistic path to production?",
      coreAspects: ["Clarity of value proposition", "Domain market need", "Viability beyond the hackathon"]
    },
    {
      title: "User Experience & Spatial Elegance",
      weight: "15%",
      description: "Is the interface intuitive, responsive, visually coherent, and pleasant to interact with?",
      coreAspects: ["Visual polish & aesthetic discipline", "Interaction feedback & clarity", "Accessibility fundamentals"]
    },
    {
      title: "Demonstration & Communication",
      weight: "15%",
      description: "How effectively did the creators articulate their thesis, architecture, and live functional demo?",
      coreAspects: ["Live functionality proof", "Concise articulation", "Honesty regarding prototype boundaries"]
    }
  ],
  faqs: [
    {
      category: "General",
      question: "What makes ANVYX ’27 distinct from traditional 48-hour hackathons?",
      answer: "ANVYX is strictly condensed into an eight-hour intense sprint. This sharp constraint removes procrastination, forces radical focus on the core value proposition, and celebrates teams that can design, architect, and deliver real working prototypes under discipline."
    },
    {
      category: "Teams",
      question: "What are the allowed team configurations?",
      answer: "Teams may consist of 1 to 4 participants. Solo builders are welcome, and we also provide an automated cohort matching session 48 hours prior to the event for individuals looking for complementary engineering or design partners."
    },
    {
      category: "Rules",
      question: "Can we use pre-existing code or libraries?",
      answer: "You are encouraged to leverage open-source frameworks, public libraries, and boilerplate scaffolding (e.g. Vite, React, standard UI kits). However, the core logic, domain architecture, and primary product features must be created within the 8-hour hackathon window."
    },
    {
      category: "Logistics",
      question: "Is ANVYX ’27 in-person or virtual?",
      answer: "ANVYX ’27 operates as a synchronized hybrid experience. We host a physical cohort at our Metropolitan Arena for localized teams, combined with a concurrent global digital stream with real-time mentor channels and virtual submission queues."
    },
    {
      category: "Rules",
      question: "Who retains intellectual property of the projects built?",
      answer: "100% of all intellectual property, source code, design assets, and venture rights remain exclusively with the creators. Neither the organizers nor sponsors claim any ownership over what you build."
    },
    {
      category: "General",
      question: "Is there an entry fee to participate?",
      answer: "Participation in ANVYX ’27 is entirely free for all selected builders, supported by our innovation partners."
    }
  ],
  links: {
    registrationUrl: "#register",
    discordUrl: "https://discord.gg/anvyx27",
    githubUrl: "https://github.com/anvyx27",
    contactEmail: "concierge@anvyx27.dev"
  }
};
