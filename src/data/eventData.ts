export interface EventDetails {
  title: string;
  edition: string;
  tagline: string;
  department: string;
  college: string;
  accreditations: string[];
  date: string;
  time: string;
  venue: string;
  partners: string[];
  flow: string[];
  resourcePersons: {
    name: string;
    role: string;
    company: string;
    department: string;
    batch: string;
  }[];
  studentCoordinator: {
    name: string;
    phone: string;
  };
  contact: string;
  website: string;
}

export const eventDetails: EventDetails = {
  title: "ZENTRA '26",
  edition: "2026",
  tagline: "Don't Just Use AI, Create It",
  department: "Department of Computer Science & Business Systems (CSBS)",
  college: "M. Kumarasamy College of Engineering (Autonomous)",
  accreditations: ["Affiliated to Anna University", "NIRF Band 201-300", "NAAC 'A' Grade", "NBA Accredited"],
  date: "23rd October 2026",
  time: "9.00 AM - 4.30 PM",
  venue: "Sir C V Raman Hall",
  partners: ["IBM Skills", "IBM Z Explore Student Community", "AAROH - Raising Together"],
  flow: [
    "Hands-on Workshop: Demystifying LLMs, Prompting & Vector Embeddings",
    "Deep Dive: Building RAG Pipelines & Live Chatbot Architecture",
    "Chatbot Build Challenge: Teams Code Their Custom Solutions",
    "Live Demonstrations, Code Review & Winner Felicitation"
  ],
  resourcePersons: [
    {
      name: "Jayanthan Senthilkumar",
      role: "System Engineer",
      company: "Tata Consultancy Services (TCS)",
      department: "Dept of AIML",
      batch: "Batch 2022-2026"
    },
    {
      name: "Sarveshwaran Sanjeevi",
      role: "Associate Engineer",
      company: "Cognizant (CTS) / Chennai",
      department: "Dept of AIML",
      batch: "Batch 2022-2026"
    }
  ],
  studentCoordinator: {
    name: "S R Sharanya",
    phone: "+91 90953 91290"
  },
  contact: "+91 97503 56377",
  website: "www.mkce.ac.in"
};

export const scheduleTimeline = [
  { time: "09:00 AM - 09:30 AM", title: "Inauguration & Welcome Address", desc: "Dignitaries address 1st year CSBS students, IBM Z Explore orientation" },
  { time: "09:30 AM - 11:00 AM", title: "Chief Guest Keynote: AI Unveiled", desc: "How to Build a Chatbot, Demystifying LLMs, RAG & the Path to AGI" },
  { time: "11:00 AM - 11:15 AM", title: "Tea Break & Networking", desc: "Interact with senior speakers and mentors" },
  { time: "11:15 AM - 01:00 PM", title: "Hands-on Technical Session", desc: "Hands-on coding: Building a RAG Chatbot using Python, ChromaDB & Ollama" },
  { time: "01:00 PM - 02:00 PM", title: "Lunch Break", desc: "Campus Dining & Team discussions" },
  { time: "02:00 PM - 03:45 PM", title: "Chatbot Build Challenge", desc: "1st year student teams build domain bots (Fintech, EdTech, Smart Campus)" },
  { time: "03:45 PM - 04:30 PM", title: "Live Demonstrations & Valedictory", desc: "Showcase of best chatbot builds, mementos and certificates distribution" }
];
