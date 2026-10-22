export interface UseCase {
  id: string;
  category: "Fintech" | "Campus & EdTech" | "Healthcare" | "Enterprise" | "DevOps";
  title: string;
  summary: string;
  problem: string;
  solution: string;
  techStack: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  csbsAdvantage: string;
  samplePrompt: string;
  sampleBotResponse: string;
}

export const useCasesList: UseCase[] = [
  {
    id: "campus-bot",
    category: "Campus & EdTech",
    title: "MKCE Smart Campus AI Companion",
    summary: "24/7 autonomous college assistant answering queries on Anna University regulations, bus routes, lab schedules, and internal marks.",
    problem: "1st year students stand in long lines at administrative offices or flood WhatsApp groups asking the same repetitive questions about fees, bus routes, and exam timetables.",
    solution: "A local RAG chatbot trained on MKCE handbooks, departmental circulars, bus route PDFs, and college academic calendars.",
    techStack: ["React 19 Frontend", "FastAPI Backend", "ChromaDB Vector Store", "Ollama (Llama 3)", "Telegram Bot API"],
    metrics: [
      { label: "Query Resolution", value: "85% automated" },
      { label: "Response Time", value: "< 600 ms" },
      { label: "Admin Workload Reduction", value: "70%" }
    ],
    csbsAdvantage: "Transforms campus administrative operations from manual paper-based queries into a streamlined digital business workflow with analytics on what students need most.",
    samplePrompt: "Which bus route goes from Karur bus stand to MKCE campus, and what is the morning departure time?",
    sampleBotResponse: "Route #12 and Route #18 depart from Karur Central Bus Stand at 7:45 AM and 8:00 AM respectively, arriving at MKCE campus main gate by 8:30 AM."
  },
  {
    id: "fintech-advisor",
    category: "Fintech",
    title: "Autonomous Banking & Fraud Advisory Bot",
    summary: "Real-time transaction anomaly explanation, conversational KYC onboarding, and personalized loan eligibility guidance.",
    problem: "Traditional banking apps have confusing menus; customers wait 45 minutes on telephone queues to contest suspicious debit transactions.",
    solution: "A secure conversational agent with tool-calling capabilities that inspects ledger databases and guides customers through dispute filings instantly.",
    techStack: ["Next.js", "Python LangChain", "pgvector (PostgreSQL)", "Mistral-Large", "PCI-DSS Compliant Guardrails"],
    metrics: [
      { label: "Resolution Speed", value: "Instant (vs 45 min wait)" },
      { label: "Customer CSAT", value: "4.8 / 5.0" },
      { label: "Support Cost Savings", value: "42%" }
    ],
    csbsAdvantage: "Directly bridges Computer Science (security, latency, vector search) with Business Systems (financial regulations, KYC compliance, customer retention).",
    samplePrompt: "Why was a transaction of ₹4,200 charged to my card in Mumbai when I am currently in Karur?",
    sampleBotResponse: "I detected a card-present transaction in Mumbai at 3:14 PM while your mobile device pinged Karur. I have temporarily frozen online transactions for this card. Would you like me to initiate a fraud dispute and issue a new virtual card?"
  },
  {
    id: "healthcare-triage",
    category: "Healthcare",
    title: "Clinical Triage & Patient Report Explainer",
    summary: "Decodes complex blood test reports and lab jargon into plain Tamil/English with verified medical disclaimers.",
    problem: "Patients receive lab reports filled with confusing medical acronyms like HbA1c, SGPT, and MCV, leading to anxiety and unnecessary ER visits.",
    solution: "A RAG system grounded strictly on peer-reviewed clinical guidelines that summarizes lab findings and suggests whether doctor consultation is urgent.",
    techStack: ["React", "FastAPI", "PubMed Embeddings", "Claude 3.5 Sonnet", "HIPAA Guardrails"],
    metrics: [
      { label: "Comprehension Score", value: "94% patient clarity" },
      { label: "Triage Accuracy", value: "98.2% vs physician" },
      { label: "Unnecessary Clinic Visits", value: "-30%" }
    ],
    csbsAdvantage: "Demonstrates how AI can streamline hospital administrative queues and patient care operations.",
    samplePrompt: "My blood test says Fasting Blood Sugar is 142 mg/dL. What does this mean?",
    sampleBotResponse: "A fasting blood sugar level of 142 mg/dL is above the standard non-diabetic range (70-99 mg/dL) and indicates elevated glucose (hyperglycemia). While this is not an immediate emergency, please schedule an appointment with your physician for an HbA1c test and lifestyle guidance."
  },
  {
    id: "enterprise-procurement",
    category: "Enterprise",
    title: "Enterprise ERP & Vendor Procurement Bot",
    summary: "Automates multi-million dollar supply chain purchase orders, SLA verifications, and invoice reconciliation.",
    problem: "Supply chain managers spend 15 hours weekly cross-checking physical PDF purchase orders against ERP databases like SAP or Oracle.",
    solution: "An agentic RAG bot with Vision OCR that matches purchase orders with supplier contracts and automatically flags price discrepancies.",
    techStack: ["Vue / React", "LlamaIndex", "Unstructured.io", "GPT-4o Vision", "SAP S/4HANA Connector"],
    metrics: [
      { label: "Invoice Processing Time", value: "10 sec (vs 3 days)" },
      { label: "Discrepancy Catch Rate", value: "99.4%" },
      { label: "Annual Dollar Savings", value: "$1.8M / Enterprise" }
    ],
    csbsAdvantage: "The ultimate CSBS showcase: combining relational business ERP databases with cutting-edge multi-modal AI to optimize enterprise bottom lines.",
    samplePrompt: "Verify if Invoice #INV-882 matches Contract SLA regarding shipping penalty clauses.",
    sampleBotResponse: "Invoice #INV-882 arrived 6 days past the agreed SLA date of October 15. Clause 8.2 of Master Services Agreement dictates a 2% late penalty (₹24,000). I have drafted an adjusted credit memo for finance review."
  },
  {
    id: "devops-copilot",
    category: "DevOps",
    title: "DevOps Incident Commander Bot",
    summary: "Automatically identifies server crashes, parses Kubernetes logs, and drafts pull requests with hotfixes.",
    problem: "When production servers go down at 2 AM, on-call engineers spend hours sifting through gigabytes of logs to find the single null pointer exception.",
    solution: "An autonomous agent that monitors cloud telemetry, finds root-cause logs in vector embeddings, and suggests exact git diffs.",
    techStack: ["Go / Python", "Elasticsearch / OpenSearch", "Vector Search", "DeepSeek-Coder / Claude", "GitHub Webhooks"],
    metrics: [
      { label: "Mean Time to Detect (MTTD)", value: "-75%" },
      { label: "Mean Time to Recover (MTTR)", value: "Under 4 minutes" },
      { label: "Developer Sleep Quality", value: "Priceless" }
    ],
    csbsAdvantage: "Ensures high system reliability and 99.99% uptime for digital business operations.",
    samplePrompt: "Analyze the 500 error spike on the payment checkout microservice.",
    sampleBotResponse: "The payment microservice crashed due to connection pool exhaustion in Redis at 02:14 UTC. Root cause: Connection leak in `checkout_handler.py:L84`. I have generated a patch PR #412 and verified tests pass in staging."
  }
];
