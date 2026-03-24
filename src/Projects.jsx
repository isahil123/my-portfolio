import React from "react";

const projectData = [
  {
    id: "01",
    title: "Machine Hub",
    type: "Full-Stack Orchestration",
    desc: "A high-performance inventory management ecosystem featuring a secure JWT-based RBAC system with 4 distinct authority levels and real-time stock orchestration.",
    tech: ["React", "Node.js", "MongoDB", "Firebase"],
    link: "https://github.com/isahil123/Inventory-Management-website",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "Loan Predictor",
    type: "Predictive Intelligence",
    desc: "Machine Learning classification engine utilizing Logistic Regression and Decision Trees to analyze applicant risk profiles with integrated NLP text processing.",
    tech: ["Python", "Scikit-Learn", "Plotly", "NLTK"],
    link: "https://github.com/isahil123/loan-predictor-website",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
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
          {/* IMAGE CONTAINER WITH 3D HUD OVERLAY */}
          <div className="w-full lg:w-1/2 perspective-1000">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl transition-all duration-1000 group-hover:rotate-y-6 group-hover:scale-[1.02] border border-white/10 group-hover:border-cyan-500/30">
              {/* Actual Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
              />

              {/* Lavish HUD Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f11] via-transparent to-transparent opacity-80"></div>

              {/* Top Bar Chrome Details */}
              <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500/40"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/40"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/40"></div>
                </div>
                <div className="text-[8px] font-mono text-white/20 uppercase tracking-[0.4em]">
                  Node_Active_{project.id}
                </div>
              </div>

              {/* Hover Scanline */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent skew-x-[-25deg] animate-scan"></div>
              </div>

              {/* Corner Accents */}
              <div className="absolute bottom-4 left-4 border-l border-b border-white/20 w-8 h-8 transition-all group-hover:border-cyan-500/50"></div>
              <div className="absolute top-4 right-4 border-r border-t border-white/20 w-8 h-8 transition-all group-hover:border-cyan-500/50"></div>
            </div>
          </div>

          {/* PROJECT INFO */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-2">
              <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.4em]">
                {project.type}
              </span>
              <h4 className="text-5xl font-black text-white tracking-tighter uppercase italic group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-400 transition-all duration-700">
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
                rel="noreferrer"
                className="relative inline-flex items-center gap-6 px-10 py-4 bg-white text-black font-black text-[10px] uppercase tracking-[0.3em] rounded-lg overflow-hidden transition-all hover:scale-110 active:scale-95 group/btn"
              >
                <span className="relative z-10 font-bold">Execute_Source</span>
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
