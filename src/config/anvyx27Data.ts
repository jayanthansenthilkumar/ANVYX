export interface DomainTrack {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  prompts: string[];
  gradient: string;
}

export interface TimelinePhase {
  id: string;
  phaseNumber: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  description: string;
  deliverables: string[];
  status: "Completed" | "Live" | "Upcoming";
}

export interface TestimonialItem {
  id: string;
  author: string;
  location: string;
  handle: string;
  score: string;
  quote: string;
  college: string;
  metric: string;
}

export interface SponsorItem {
  name: string;
  tier: "Co-Partner" | "Academic" | "Technical" | "Media";
  category: string;
  logoUrl?: string;
  logoText: string;
  website: string;
  perks: string[];
}

export interface FaqItem {
  id: string;
  category: "General" | "Registration" | "Rules" | "Logistics" | "Judging";
  question: string;
  answer: string;
}

export const anvyx27Config = {
  name: "ANVYX",
  edition: "'27",
  fullName: "ANVYX '27 | KPRIET Edition",
  institution: "KPR Institute of Engineering and Technology, Coimbatore",
  department: "Department of Information Technology • KPRIET",
  motto: "THINK · BUILD · DISRUPT",
  duration: "24 HOURS NON-STOP HACK",
  eventDates: "08 & 09 OCTOBER 2027",
  countdownTarget: "2027-10-08T10:30:00+05:30",
  venue: "Metropolitan Tech Pavilion & 24H Labs, KPRIET Campus, Coimbatore",
  prizePool: "₹20,000",
  prizeSummary: "₹20,000 Cash Pool + Offline Corporate Internships with WYNTRIX",
  teamSize: "2 to 4 Members",
  ieeePassFee: 500,
  nonIeeePassFee: 600,
  registrationDeadline: "24 SEPTEMBER 2027",
  
  coordinators: {
    faculty: [
      { name: "Dr. Muthu Lakshmi", phone: "9962714641", role: "Faculty Coordinator" },
      { name: "Dr. Malathy", phone: "9488087212", role: "Faculty Coordinator" },
      { name: "Dr. Kalaivanan", phone: "9842050511", role: "Faculty Coordinator" }
    ],
    student: [
      { name: "Keertana M S", phone: "9944070580", role: "Lead Student Organizer" },
      { name: "Madhumitha S", phone: "9342828394", role: "Student Coordinator" }
    ]
  },

  socials: {
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    website: "https://kpriet.ac.in",
    discord: "https://discord.gg/anvyx27",
    github: "https://github.com/anvyx27"
  },

  domains: [
    {
      id: "ai-smart-solutions",
      name: "AI & SMART TECH",
      tagline: "GENERATIVE AI · INTELLIGENT SYSTEMS · AUTOMATION",
      description: "Explore the power of Artificial Intelligence and intelligent technologies to solve real-world problems. Develop innovative systems using Generative AI, Machine Learning, Computer Vision, NLP, and intelligent cognitive automation.",
      tags: ["Computer Vision", "Machine Learning", "Generative AI", "NLP", "Cognitive Automation"],
      prompts: [
        "Multimodal agentic systems for automated medical data extraction",
        "Edge-computing real-time vision algorithms for factory inspection",
        "Low-latency speech translation & accessibility engines"
      ],
      gradient: "from-[#6575F5] to-[#8B70E8]"
    },
    {
      id: "cyber-defense-security",
      name: "CYBER SAFETY",
      tagline: "CYBERSECURITY · THREAT DETECTION · SECURE SYSTEMS",
      description: "Develop innovative solutions for cybersecurity and digital defense against data breaches, malware, ransomware, and unauthorized intrusions. Explore zero-trust architectures, digital forensics, privacy preservation, and secure cloud platforms.",
      tags: ["Zero-Trust", "Threat Detection", "Digital Forensics", "Secure Cloud", "Privacy Preservation"],
      prompts: [
        "Autonomous heuristic malware sandboxing & behavior fingerprinting",
        "Post-quantum resilient identity attestation protocol",
        "Encrypted multi-party computation for private medical inference"
      ],
      gradient: "from-[#8B70E8] to-[#FF405F]"
    },
    {
      id: "health-wellness-tech",
      name: "HEALTH TECH",
      tagline: "HEALTHCARE · WELLNESS · ASSISTIVE TECHNOLOGY",
      description: "Create technology-driven solutions for digital health, clinical diagnostics, health monitoring, wearable telemetry, and mental wellness to solve urgent real-world patient and hospital challenges.",
      tags: ["Health Telemetry", "AI Diagnostics", "Assistive Devices", "Smart Wearables", "Clinical Workflow"],
      prompts: [
        "Continuous vital sign telemetry with early sepsis anomaly warning",
        "Spatial audio assistive guidance for visually impaired navigation",
        "Decentralized patient electronic medical records with granular consent"
      ],
      gradient: "from-[#55E5D2] to-[#6575F5]"
    },
    {
      id: "green-sustainable-tech",
      name: "GREEN TECH",
      tagline: "SUSTAINABILITY · ENERGY · ENVIRONMENTAL SOLUTIONS",
      description: "Engineer technology-driven solutions for environmental challenges, renewable energy optimization, waste recycling, water conservation, precision agriculture, and verifiable carbon reduction.",
      tags: ["Waste Management", "Resource Telemetry", "Clean Energy", "Precision Agriculture", "Carbon Tracking"],
      prompts: [
        "Hyperlocal solar microgrid dispatch optimization with weather modeling",
        "Automated computer-vision robotic sorting for recyclable polymers",
        "Satellite telemetry for precision crop irrigation and soil nitrogen balance"
      ],
      gradient: "from-[#55E5D2] to-[#8B70E8]"
    },
    {
      id: "industry-automation",
      name: "SMART INDUSTRY",
      tagline: "INDUSTRIAL AUTOMATION · IOT · SMART OPERATIONS",
      description: "Build automation-driven solutions that improve industrial throughput, workplace safety, predictive equipment maintenance, and supply-chain logistics through connected sensors and IoT.",
      tags: ["Industrial IoT", "Smart Robotics", "Predictive Maintenance", "Process Optimization", "Supply Chain"],
      prompts: [
        "Acoustic vibration anomaly detection on high-speed industrial turbine bearings",
        "Autonomous mobile robot fleet coordination for warehouse logistics",
        "Digital twin telemetry dashboard for chemical manufacturing safety"
      ],
      gradient: "from-[#6575F5] to-[#FF405F]"
    },
    {
      id: "open-innovation-future",
      name: "OPEN INNOVATION",
      tagline: "EMERGING TECHNOLOGIES · BOLD UNCONVENTIONAL SOLUTIONS",
      description: "Tackle any meaningful real-world problem with complete freedom. Interdisciplinary squads can combine cutting-edge tech, unique software, and novel hardware solutions to disrupt status-quo paradigms.",
      tags: ["Cross-Disciplinary", "Novel Hardware", "Rapid Prototyping", "Speculative UI", "Moonshot"],
      prompts: [
        "Novel tactile sensory feedback interfaces for spatial computing",
        "Decentralized peer-to-peer resilient emergency communication networks",
        "Algorithmic generative audio-visual synesthesia installations"
      ],
      gradient: "from-[#8B70E8] to-[#55E5D2]"
    }
  ] as DomainTrack[],

  protocolPhases: [
    {
      step: "01",
      code: "DEFINE PROBLEM",
      title: "Choose Problem Statement",
      desc: "Select or formulate a genuine real-world problem you want to solve under open theme guidelines."
    },
    {
      step: "02",
      code: "DOMAIN REGISTRATION",
      title: "Register in Related Domain",
      desc: "Map your challenge thesis to one of the 6 specialized industry domain tracks."
    },
    {
      step: "03",
      code: "SPRINT & BUILD",
      title: "Engineer Prototype",
      desc: "Build and deploy a functional working prototype during the 24-hour uninterrupted sprint."
    },
    {
      step: "04",
      code: "JURY EVALUATION",
      title: "Pitch Live Jury",
      desc: "Present live working code, architecture, and prototype to industry technology architects."
    }
  ],

  timeline: [
    {
      id: "phase-01",
      phaseNumber: "01",
      title: "INAUGURATION & IDEATION",
      subtitle: "01 / INAUGURATION · DAY 1 — 09:00 AM",
      date: "DAY 1",
      time: "DAY 1 — 09:00 AM",
      description: "Begin the 24-hour innovation journey with ceremonial inauguration, keynote industry insights, and hackathon rules briefing.",
      deliverables: ["Keynote briefing attended", "Cohort Wi-Fi credential sync", "Ideation alignment"],
      status: "Upcoming"
    },
    {
      id: "phase-02",
      phaseNumber: "02",
      title: "REGISTRATION & VENUE CHECK-IN",
      subtitle: "02 / CHECK-IN · DAY 1 — 11:00 AM",
      date: "DAY 1",
      time: "DAY 1 — 11:00 AM",
      description: "Complete physical badge verification, collect event delegate kits, occupy squad workbenches, and prepare dev environments.",
      deliverables: ["Physical delegate badges collected", "Workbench assigned", "Git repository initialized"],
      status: "Upcoming"
    },
    {
      id: "phase-03",
      phaseNumber: "03",
      title: "PROBLEM STATEMENT REVIEW (REVIEW 1)",
      subtitle: "03 / REVIEW · DAY 1 — 02:00 PM",
      date: "DAY 1",
      time: "DAY 1 — 02:00 PM",
      description: "Present your problem statement, thesis architecture, and UI wireframes for expert jury validation before heavy code build.",
      deliverables: ["Abstract + PPT (Slide deck)", "System architecture diagram", "30-mark preliminary scoring"],
      status: "Upcoming"
    },
    {
      id: "phase-04",
      phaseNumber: "04",
      title: "PROTOTYPE CHECKPOINT (REVIEW 2)",
      subtitle: "04 / PROTOTYPE · DAY 1 — 07:00 PM",
      date: "DAY 1",
      time: "DAY 1 — 07:00 PM",
      description: "Demonstrate mid-sprint functional prototype and receive expert mentorship on backend resilience, API integration, and edge cases.",
      deliverables: ["Running backend API", "Live database connection", "Midway mentor guidance"],
      status: "Upcoming"
    },
    {
      id: "phase-05",
      phaseNumber: "05",
      title: "FINAL SYSTEM REVIEW (REVIEW 3)",
      subtitle: "05 / FINALIZE · DAY 2 — 05:00 AM",
      date: "DAY 2",
      time: "DAY 2 — 05:00 AM",
      description: "Present the complete end-to-end working software and hardware prototype for final jury evaluation on technical depth, impact, and code quality.",
      deliverables: ["Full production MVP demonstration", "Repository code commit", "Final scoring tally"],
      status: "Upcoming"
    },
    {
      id: "phase-06",
      phaseNumber: "06",
      title: "VALEDICTORY & PRIZE DISTRIBUTION",
      subtitle: "06 / CEREMONY · DAY 2 — 10:30 AM",
      date: "DAY 2",
      time: "DAY 2 — 10:30 AM",
      description: "Celebrate the top podium squads, award ₹20,000 cash prizes, announce Wyntrix corporate internship offers, and distribute certificates.",
      deliverables: ["Trophies & certificates", "Wyntrix internship letters", "Closing address"],
      status: "Upcoming"
    }
  ] as TimelinePhase[],

  testimonials: [
    {
      id: "LOG_0x01",
      author: "Gowsika M",
      location: "Trichy",
      handle: "@gowsika_m",
      score: "5.0 / 5.0",
      quote: "I really enjoyed the hackathon! Everything was well organized, and I learned many new things. Working with my team and solving problems made me feel more confident and excited to join more events like this. Would love to join again!",
      college: "SRM Institute of Science & Technology, Trichy",
      metric: "Confidence boost & collaborative problem solving"
    },
    {
      id: "LOG_0x02",
      author: "Ratul Prabhanchan N",
      location: "Coimbatore",
      handle: "@ratul_kit",
      score: "5.0 / 5.0",
      quote: "I had my first and beautiful experience participating in a hackathon in an external college. All services such as food, accommodation, guidance, fun events, and complimentary kits were very good.",
      college: "KalaignarKarunanidhi Institute of Tech (KIT)",
      metric: "Inaugural inter-college hackathon experience"
    },
    {
      id: "LOG_0x03",
      author: "S. Shriram Sivanesan",
      location: "Pollachi",
      handle: "@shriram_s",
      score: "5.0 / 5.0",
      quote: "Great experience.... Wonderful memories! Coordination and teamwork were completely fulfilled with dedicated mentorship and supportive peers.",
      college: "Dr. Mahalingam College of Engg & Tech (MCET)",
      metric: "Teamwork & coordination fulfillment"
    },
    {
      id: "LOG_0x04",
      author: "Hindusthan Innovator",
      location: "Coimbatore",
      handle: "@hicet_hacker",
      score: "5.0 / 5.0",
      quote: "Got great exposure and the juries were really supportive and respectful! Experience and knowledge gained during the 24 hours was top tier.",
      college: "Hindusthan College of Engineering & Technology",
      metric: "Jury mentorship & real industry exposure"
    },
    {
      id: "LOG_0x05",
      author: "Nithish A T",
      location: "Coimbatore",
      handle: "@nithish_at",
      score: "4.0 / 5.0",
      quote: "Have to adapt for everything in real-world software engineering sprints. Great practical learning curve on handling rapid technical challenges.",
      college: "Sri Eshwar College of Engineering",
      metric: "Rapid adaptation & resilient engineering"
    },
    {
      id: "LOG_0x06",
      author: "MKCE Delegate",
      location: "Karur",
      handle: "@mkce_hacker",
      score: "5.0 / 5.0",
      quote: "Overall very good event! Smooth check-in, high energy hackathon floor, and great technical vibes throughout the night.",
      college: "M. Kumarasamy College of Engineering (MKCE)",
      metric: "Sprint execution under tight deadlines"
    },
    {
      id: "LOG_0x07",
      author: "Bannari Amman Delegate",
      location: "Erode",
      handle: "@bit_squad",
      score: "4.0 / 5.0",
      quote: "Very interesting and thoughtful project ideas across all 6 sectors. The caliber of student innovations on the floor was truly inspiring.",
      college: "Bannari Amman Institute of Technology (BIT)",
      metric: "Thoughtful multi-domain project architectures"
    },
    {
      id: "LOG_0x08",
      author: "Applied Skills Hacker",
      location: "Tamil Nadu",
      handle: "@applied_dev",
      score: "5.0 / 5.0",
      quote: "I learned valuable insights about teamwork and communication, and gained a better understanding of how to apply new skills in real-life situations.",
      college: "Anna University Regional Campus",
      metric: "Practical skills application & team synergy"
    },
    {
      id: "LOG_0x09",
      author: "Sprint Strategist",
      location: "Coimbatore",
      handle: "@agile_builder",
      score: "4.0 / 5.0",
      quote: "Understood the importance of planning, prioritizing, and presenting solutions clearly under intense 24-hour hackathon conditions.",
      college: "Coimbatore Institute of Technology (CIT)",
      metric: "Strategic planning & clear solution pitching"
    },
    {
      id: "LOG_0x10",
      author: "Pitch Leader",
      location: "Coimbatore",
      handle: "@pitch_pro",
      score: "5.0 / 5.0",
      quote: "I learned how to present the PPT effectively and structure a compelling live demo that judges loved.",
      college: "Government College of Technology (GCT)",
      metric: "Presentation skills & demo narrative"
    },
    {
      id: "LOG_0x11",
      author: "Domain Master",
      location: "Coimbatore",
      handle: "@track_runner",
      score: "4.0 / 5.0",
      quote: "Got tremendous experience about domain-specific problem statements and building dedicated solutions for real-world impact.",
      college: "Kumaraguru College of Technology (KCT)",
      metric: "Domain-focused engineering architecture"
    },
    {
      id: "LOG_0x12",
      author: "Cyber Lead",
      location: "Host Campus",
      handle: "@duper_innovator",
      score: "5.0 / 5.0",
      quote: "Duper experience! The midnight activities, campus amenities, high-speed infra, and delegate camaraderie made this unforgettable.",
      college: "KPR Institute of Engineering and Technology",
      metric: "Collaborative energy & 24hr hacker spirit"
    },
    {
      id: "LOG_0x13",
      author: "PSG Tech Delegate",
      location: "Coimbatore",
      handle: "@psg_builder",
      score: "4.0 / 5.0",
      quote: "Good coordination and energetic atmosphere. Working non-stop with our squad to deliver a full working MVP was an incredible journey.",
      college: "PSG College of Technology",
      metric: "MVP delivery from scratch in 24 hours"
    },
    {
      id: "LOG_0x14",
      author: "Protocol Explorer",
      location: "Coimbatore",
      handle: "@cyber_ideator",
      score: "5.0 / 5.0",
      quote: "Very thoughtful challenges and great mentors who guided us in refining our backend and cloud deployment architecture.",
      college: "Sri Krishna College of Engg & Tech (SKCET)",
      metric: "Architectural refinement & mentor guidance"
    }
  ] as TestimonialItem[],

  sponsors: [
    {
      name: "MSI",
      tier: "Co-Partner",
      category: "Official Co-Partner",
      logoUrl: "/images/Shield with MSI/2019-msi-dragon-spirit-logo-digital_h_4c_w.png",
      logoText: "MSI",
      website: "https://msi.com",
      perks: ["Hardware Development Kits", "Gaming Peripherals & Goodies", "Keynote Address"]
    },
    {
      name: "IEEE KPRIET Student Branch",
      tier: "Academic",
      category: "Academic Sponsor & Certification",
      logoText: "IEEE KPRIET",
      website: "https://ieee.org",
      perks: ["Verified IEEE Certificate Endorsement", "Student Chapter Travel Grants", "Judge Delegation"]
    },
    {
      name: "IEEE Information Theory Society",
      tier: "Academic",
      category: "Specialized Society Sponsor",
      logoText: "IEEE ITS",
      website: "https://itsoc.org",
      perks: ["Technical Architecture Workshops", "Algorithmic Paper Awards"]
    },
    {
      name: "WYNTRIX",
      tier: "Technical",
      category: "Corporate Career Partner",
      logoUrl: "/images/WYNTRIX/WYNTRIX_LOGO_transparent.png",
      logoText: "WYNTRIX",
      website: "https://wyntrix.com",
      perks: ["15-30 Days Offline Corporate Internships", "Fast-track PPI Interview Passes", "Senior Mentors"]
    },
    {
      name: "Litztech",
      tier: "Technical",
      category: "Technology Ecosystem Partner",
      logoText: "LITZTECH",
      website: "https://litztech.in",
      perks: ["Cloud Server Credits", "DevOps Tooling Sandboxes", "Tech Evaluation"]
    },
    {
      name: "Eventopia",
      tier: "Media",
      category: "Media & Outreach Partner",
      logoUrl: "/images/eventopia/Eventopia-Logo-13.png",
      logoText: "Eventopia",
      website: "https://eventopia.in",
      perks: ["National Community Outreach", "Livestream Coverage", "Builder Spotlights"]
    }
  ] as SponsorItem[],

  faqs: [
    {
      id: "faq-01",
      category: "General",
      question: "What is ANVYX '27?",
      answer: "ANVYX '27 is a flagship 24-hour national student hackathon hosted at KPR Institute of Engineering and Technology, Coimbatore. Developers, designers, and innovators gather to solve real-world industry challenges across 6 specialized problem domains."
    },
    {
      id: "faq-02",
      category: "Registration",
      question: "What is the required team size?",
      answer: "Each team must consist of 2 to 4 members. You can create a new team or join an existing team using a unique Join Code during registration."
    },
    {
      id: "faq-03",
      category: "Registration",
      question: "What is the registration fee structure?",
      answer: "Registration is charged per person: ₹500 for IEEE Members and ₹600 for Non-IEEE Members. The total squad registration fee is calculated dynamically at checkout based on the number of members in your squad (2 to 4) and their IEEE status."
    },
    {
      id: "faq-04",
      category: "Rules",
      question: "Can code be pre-written before the hackathon begins?",
      answer: "No. All code and solution logic must be built during the 24-hour event timeline. Pre-existing open-source libraries, frameworks, and public APIs are fully permitted."
    },
    {
      id: "faq-05",
      category: "Logistics",
      question: "Will food, stay, and energy drinks be provided?",
      answer: "Yes! Complimentary meals (3 full meals), late-night snacks, energy drinks, high-speed Wi-Fi, and designated rest/accommodation zones are provided for all registered participants throughout the 24 hours."
    },
    {
      id: "faq-06",
      category: "Judging",
      question: "How will projects be scored by judges?",
      answer: "Evaluations take place across 5 parameters (10 points each, totaling 50 points): Innovation, Technical Complexity, Real-World Impact, Code Implementation, and Pitch Presentation."
    },
    {
      id: "faq-07",
      category: "Judging",
      question: "How are certificates issued?",
      answer: "Physical hardcopy certificates bearing official IEEE and college endorsements will be presented to all participants who complete the 24-hour hackathon during the valedictory ceremony."
    }
  ] as FaqItem[]
};
