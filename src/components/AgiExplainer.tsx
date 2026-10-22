import React from "react";
import { 
  AlertTriangle, 
  TrendingUp
} from "lucide-react";

export const AgiExplainer: React.FC = () => {
  const aiTiers = [
    {
      level: "LEVEL 01",
      name: "ARTIFICIAL NARROW INTELLIGENCE (ANI)",
      timeline: "TODAY [1960 - PRESENT]",
      status: "CURRENT REALITY",
      badgeClass: "bg-[#111111] text-[#FFFFFF]",
      cardBg: "bg-[#FFFFFF]",
      description: "AI specialized in one single task. Cannot transfer cognitive heuristics across different domains without retraining.",
      examples: ["ChatGPT & Claude (Text)", "AlphaGo (Chess/Go)", "Midjourney (Diffusion Images)", "Tesla Full Self-Driving (Vision)"],
      limitation: "A world-champion chess AI cannot diagnose a common fever or write an MKCE bus route circular."
    },
    {
      level: "LEVEL 02",
      name: "ARTIFICIAL GENERAL INTELLIGENCE (AGI)",
      timeline: "PROJECTED [2027 - 2030]",
      status: "ACTIVE FRONTIER",
      badgeClass: "bg-[#111111] text-[#C8FF00]",
      cardBg: "bg-[#C8FF00]/10",
      description: "Autonomous software capable of executing virtually any economically valuable intellectual task a human can perform.",
      examples: [
        "Formulate novel scientific hypotheses & discover pharmaceuticals",
        "Architect, test, and deploy entire distributed software platforms",
        "Autonomous strategic planning across cross-disciplinary domains"
      ],
      limitation: "Requires solving persistent reasoning, mathematical hallucination, and safe human alignment."
    },
    {
      level: "LEVEL 03",
      name: "ARTIFICIAL SUPERINTELLIGENCE (ASI)",
      timeline: "POST-AGI HORIZON",
      status: "THEORETICAL",
      badgeClass: "bg-[#0038FF] text-[#FFFFFF]",
      cardBg: "bg-[#FFFFFF]",
      description: "An intellect vastly superior to the combined cognitive capability of all human minds across all fields.",
      examples: ["Planetary climate engineering", "Unified mathematical theory of physics", "Interstellar logistics"],
      limitation: "Safety imperative: Value alignment with human flourishing is non-negotiable."
    }
  ];

  const mythBusters = [
    {
      myth: "AI will replace software engineers and make our CSBS degree useless.",
      reality: "AI is a 10x leverage multiplier. You will not spend 4 hours debugging missing semicolons; you will act as the Tech Lead directing autonomous AI agents to build entire enterprise systems in days."
    },
    {
      myth: "AGI will be an evil sentient humanoid robot like Terminator.",
      reality: "AGI is cloud-based distributed software running mathematical matrix tensor operations. The real engineering challenges are data privacy, verification, latency, and preventing human misuse."
    },
    {
      myth: "You must be a math genius with a PhD to work in modern AI.",
      reality: "Modern AI is modular! Frameworks like LangChain, Ollama, and Hugging Face allow 1st-year students with basic Python to build production-grade AI systems today."
    }
  ];

  return (
    <section id="agi-concept" className="py-16 md:py-24 brutal-border-b bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <div className="inline-block bg-[#111111] text-[#C8FF00] font-mono text-xs font-bold px-2 py-0.5 uppercase tracking-wider">
            [05] // FRONTIER_OF_COMPUTING
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-[#111111]">
            THE ROAD TO <span className="bg-[#C8FF00] px-2 brutal-border-thin">AGI</span>
          </h2>
          <p className="text-sm sm:text-base text-[#555555] font-medium">
            Where does AI stand today, what will computing look like when you graduate in 2030, and how should 1st-year engineers prepare?
          </p>
        </div>

        {/* 3 Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {aiTiers.map((tier) => (
            <div
              key={tier.level}
              className={`p-6 brutal-card flex flex-col justify-between space-y-6 ${tier.cardBg}`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#000000]">
                  <span className="font-mono text-xs font-bold text-[#111111]">{tier.level}</span>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 brutal-border-thin ${tier.badgeClass}`}>
                    {tier.status}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-black text-xl text-[#111111] leading-tight">
                    {tier.name}
                  </h3>
                  <span className="text-xs font-mono font-bold text-[#0038FF] flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {tier.timeline}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#333333] font-medium leading-relaxed">
                  {tier.description}
                </p>

                {/* Capabilities */}
                <div className="space-y-1.5 pt-2 border-t border-[#000000]/10">
                  <span className="text-[10px] font-mono font-bold uppercase text-[#555555] block">
                    KEY CAPABILITIES:
                  </span>
                  <ul className="space-y-1 text-xs font-mono">
                    {tier.examples.map((ex, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-[#111111]">
                        <span className="font-bold text-[#0038FF]">▸</span>
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Limitation */}
              <div className="p-3 bg-[#FFFFFF] brutal-border-thin text-[11px] font-mono text-[#555555]">
                <strong>LIMITATION:</strong> {tier.limitation}
              </div>
            </div>
          ))}
        </div>

        {/* Mythbusters for 1st Year Students */}
        <div className="brutal-card p-6 sm:p-8 space-y-6 bg-[#F4F2EB]">
          <div className="flex items-center justify-between pb-3 border-b border-[#000000]">
            <div className="flex items-center gap-2">
              <span className="bg-[#FF3E00] text-[#FFFFFF] p-1 brutal-border-thin">
                <AlertTriangle className="w-4 h-4" />
              </span>
              <h3 className="font-display font-black text-xl text-[#111111]">
                1ST-YEAR AI MYTHBUSTERS
              </h3>
            </div>
            <span className="text-xs font-mono font-bold text-[#555555]">
              // HOLLYWOOD VS ENGINEERING REALITY
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {mythBusters.map((mb, idx) => (
              <div key={idx} className="p-4 bg-[#FFFFFF] brutal-border space-y-3">
                <div className="text-xs font-mono font-bold text-[#FF3E00] uppercase">
                  [MYTH #{idx + 1}]:
                </div>
                <p className="text-xs sm:text-sm font-bold text-[#111111] leading-snug">
                  "{mb.myth}"
                </p>
                <div className="pt-2 border-t border-[#000000]/10 space-y-1">
                  <span className="text-[11px] font-mono font-bold text-[#0038FF] uppercase block">
                    // THE REALITY:
                  </span>
                  <p className="text-xs text-[#333333] font-medium leading-relaxed">
                    {mb.reality}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Keynote Takeaway Quote */}
          <div className="p-5 bg-[#111111] text-[#FFFFFF] brutal-border text-center space-y-1">
            <p className="font-display font-black text-lg sm:text-xl text-[#C8FF00] tracking-tight">
              "AI will not replace humans. But humans who master AI will replace those who don't."
            </p>
            <span className="text-xs font-mono text-[#888888] block">
              — Chief Guest Keynote Address for 1st-Year CSBS Engineers // ZENTRA '26
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
