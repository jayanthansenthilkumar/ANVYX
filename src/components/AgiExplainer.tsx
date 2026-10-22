import React from "react";
import { 
  Sparkles, 
  Target, 
  ShieldCheck, 
  AlertTriangle, 
  GraduationCap, 
  Cpu, 
  Zap, 
  ArrowRight,
  TrendingUp,
  Flame
} from "lucide-react";

export const AgiExplainer: React.FC = () => {
  const aiTiers = [
    {
      level: "Level 1",
      name: "Artificial Narrow Intelligence (ANI)",
      timeline: "Today (1960 - Present)",
      status: "CURRENT REALITY",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
      description: "AI that excels at one single specific task. It cannot transfer its knowledge to other domains without being retrained.",
      examples: ["ChatGPT & Claude (Language)", "AlphaGo & Stockfish (Chess/Go)", "Midjourney (Image gen)", "Tesla Full Self-Driving"],
      limitation: "A world-champion chess AI cannot write a simple poem or diagnose a fever."
    },
    {
      level: "Level 2",
      name: "Artificial General Intelligence (AGI)",
      timeline: "Projected 2027 - 2030",
      status: "ACTIVE FRONTIER",
      badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
      description: "An autonomous software intellect capable of performing virtually any economically valuable intellectual task a human can do.",
      examples: [
        "Formulate novel scientific hypotheses & discover new medicines",
        "Design, write, test, and deploy entire software platforms end-to-end",
        "Autonomous multi-step strategic planning and reasoning across any field"
      ],
      limitation: "Requires solving persistent reasoning, mathematical grounding, and safe value alignment."
    },
    {
      level: "Level 3",
      name: "Artificial Superintelligence (ASI)",
      timeline: "Post-AGI Future",
      status: "THEORETICAL",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/40",
      description: "An intellect vastly smarter than the combined intelligence of all human minds across all scientific, creative, and strategic domains.",
      examples: ["Solving climate engineering at planetary scale", "Unified theory of physics", "Interstellar navigation"],
      limitation: "Existential safety imperative: alignment with human flourishing is mandatory."
    }
  ];

  const mythBusters = [
    {
      myth: "AI will replace software engineers and make our CSBS degree useless.",
      reality: "AI is a 10x leverage multiplier. You won't spend 4 hours debugging missing semicolons; you will act as the Tech Lead directing multiple AI agents to build entire business systems in days."
    },
    {
      myth: "AGI will be an evil sentient robot like Terminator / Skynet.",
      reality: "AGI is cloud-based distributed software running mathematical matrix operations. The real challenge is safety, data privacy, fairness, and preventing human misuse."
    },
    {
      myth: "You must be a math genius with a PhD to work in modern AI.",
      reality: "Modern AI is modular! Frameworks like LangChain, Hugging Face, and Ollama allow 1st-year students with basic Python to build production-level AI applications today."
    }
  ];

  return (
    <section id="agi-concept" className="py-20 md:py-28 relative border-b border-white/10 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-xs uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            The Frontier of Computing
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            The Road to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">AGI</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Where are we right now, what will technology look like when you graduate in 2030, and how should 1st-year engineers prepare?
          </p>
        </div>

        {/* 3 Tiers of AI Progression */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {aiTiers.map((tier) => (
            <div
              key={tier.level}
              className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-white/10 backdrop-blur-xl flex flex-col justify-between space-y-6 hover:border-cyan-400/40 transition shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-slate-400">{tier.level}</span>
                  <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-mono font-bold border ${tier.badgeColor}`}>
                    {tier.status}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-black text-white">{tier.name}</h3>
                  <span className="text-xs font-mono text-cyan-300 flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {tier.timeline}
                  </span>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {tier.description}
                </p>

                {/* Examples */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Key Capabilities:</span>
                  <ul className="space-y-1.5">
                    {tier.examples.map((ex, idx) => (
                      <li key={idx} className="text-xs text-slate-200 flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Insight */}
              <div className="p-3 rounded-xl bg-slate-950/80 border border-white/5 text-[11px] text-slate-400 italic">
                {tier.limitation}
              </div>
            </div>
          ))}
        </div>

        {/* Mythbusters for 1st Year Students */}
        <div className="max-w-5xl mx-auto rounded-3xl border border-white/15 bg-slate-900/90 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">1st-Year AI Mythbusters</h3>
              <p className="text-xs text-slate-400">Separating Hollywood hype from software engineering reality.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {mythBusters.map((mb, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-950/70 border border-white/5 space-y-3">
                <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Myth:</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-medium italic">
                  "{mb.myth}"
                </p>
                <div className="pt-2 border-t border-white/5">
                  <span className="text-xs font-bold text-emerald-400 block uppercase tracking-wider mb-1">
                    ✓ The Reality:
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {mb.reality}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Inspirational Chief Guest Quote for Stage */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-indigo-950/40 to-purple-950/40 border border-cyan-500/30 text-center space-y-2">
            <p className="text-base sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-200">
              "AI will not replace humans. But humans who master AI will replace those who don't."
            </p>
            <span className="text-xs font-mono text-cyan-400 block">
              — Keynote takeaway for 1st-Year CSBS Students at ZENTRA '26
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
