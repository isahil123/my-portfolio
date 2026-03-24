import React from "react";

const projectData = [
  {
    id: "01",
    title: "Machine Hub",
    type: "Full-Stack Orchestration",
    desc: "A high-performance inventory management ecosystem featuring a secure JWT-based RBAC system with 4 distinct authority levels and real-time stock orchestration.",
    tech: ["React", "Node.js", "MongoDB", "Firebase"],
    link: "https://github.com/isahil123/Inventory-Management-website",
    color: "cyan",
  },
  {
    id: "02",
    title: "Loan Predictor",
    type: "Predictive Intelligence",
    desc: "Machine Learning classification engine utilizing Logistic Regression and Decision Trees to analyze applicant risk profiles with integrated NLP text processing.",
    tech: ["Python", "Scikit-Learn", "Plotly", "NLTK"],
    link: "https://github.com/isahil123/loan-predictor-website",
    color: "blue",
  },
];

export const Projects = () => (
  <section id="projects" className="py-40 border-t border-white/5 relative">
    <div className="mb-32 text-center">
      <h2 className="text-[10px] font-black uppercase tracking-[1em] text-zinc-600 mb-4 italic">
        // Mission_Manifest
      </h2>
      <h3 className="text-6xl font-black text-white tracking-tighter uppercase italic">
        Deploys.
      </h3>
    </div>

    <div className="space-y-64">
      {projectData.map((project, index) => (
        <div
          key={project.id}
          className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-20 items-center group`}
        >
          <div className="w-full lg:w-1/2 perspective-1000">
            <div className="relative aspect-video bg-gradient-to-br from-[#1a1a1c] to-[#0f0f11] border border-white/10 rounded-xl overflow-hidden shadow-2xl transition-all duration-1000 group-hover:rotate-y-6 group-hover:scale-[1.02] group-hover:border-cyan-500/30">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>

              <div className="absolute top-6 left-8 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/40"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500/40"></div>
                <div className="w-2 h-2 rounded-full bg-green-500/40"></div>
              </div>

              <div className="h-full w-full flex items-center justify-center p-12">
                <div className="text-center space-y-4">
                  <div className="text-[80px] font-black text-white/5 select-none">
                    {project.id}
                  </div>
                  <div className="font-mono text-[10px] text-cyan-500/40 uppercase tracking-[0.5em] animate-pulse">
                    System_Active: {project.color}_Core
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-25deg] animate-scan"></div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-2">
              <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.4em]">
                {project.type}
              </span>
              <h4 className="text-5xl font-black text-white tracking-tighter uppercase italic group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-500 transition-all duration-500">
                {project.title}
              </h4>
            </div>

            <p className="text-zinc-400 text-lg font-light leading-relaxed border-l-2 border-white/5 pl-8 italic">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-4 py-1.5 rounded-md bg-[#1a1a1c] border border-white/5 text-[9px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all duration-500"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="pt-10">
              <a
                href={project.link}
                target="_blank"
                className="relative inline-flex items-center gap-6 px-10 py-4 bg-white text-black font-black text-[10px] uppercase tracking-[0.3em] rounded-lg overflow-hidden transition-all hover:scale-110 active:scale-95 group/btn"
              >
                <span className="relative z-10">Execute_Source</span>
                <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="relative z-10"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>

    <style>{`
      @keyframes scan { 0% { left: -100%; } 100% { left: 150%; } }
      .animate-scan { animation: scan 4s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
      .perspective-1000 { perspective: 1000px; }
      .rotate-y-6 { transform: rotateY(6deg); }
    `}</style>
  </section>
);
