import React from "react";

export const Education = () => (
  <section id="education" className="py-24 border-t border-white/[0.05]">
    <h2 className="text-[10px] font-bold uppercase tracking-[0.8em] text-zinc-600 mb-20 text-center italic">
      02 // Academic Roadmap
    </h2>

    <div className="max-w-2xl mx-auto space-y-20 border-l border-zinc-800 pl-12 relative">
      {/* 1. UNDERGRADUATE - LPU */}
      <div className="relative group">
        <div className="absolute -left-[54px] top-0 w-3 h-3 rounded-full bg-white shadow-[0_0_15px_white] transition-transform group-hover:scale-125"></div>
        <p className="text-[10px] font-black text-white bg-white/5 px-3 py-1 rounded-full inline-block tracking-widest uppercase">
          2023 — 2027 (Present)
        </p>
        <h4 className="text-2xl font-bold text-white mt-4 uppercase tracking-tighter">
          B.Tech in Computer Science
        </h4>
        <p className="text-zinc-500 uppercase tracking-widest text-[11px] font-bold mt-1">
          Lovely Professional University
        </p>
        <p className="text-white font-black italic mt-2 text-xs underline underline-offset-4 decoration-zinc-800">
          CGPA: 8.08
        </p>
      </div>

      {/* 2. HIGHER SECONDARY - RDSS */}
      <div className="relative group opacity-60 hover:opacity-100 transition-opacity">
        <div className="absolute -left-[54px] top-0 w-3 h-3 rounded-full bg-zinc-800 group-hover:bg-zinc-600 transition-colors"></div>
        <p className="text-[10px] font-black text-zinc-500 border border-white/5 px-3 py-1 rounded-full inline-block tracking-widest uppercase">
          2021 — 2022
        </p>
        <h4 className="text-2xl font-bold text-white mt-4 uppercase tracking-tighter">
          Higher Secondary Certificate
        </h4>
        <p className="text-zinc-500 uppercase tracking-widest text-[11px] font-bold mt-1">
          RDSS Bilara
        </p>
        <p className="text-zinc-400 font-bold mt-2 text-xs italic">
          Score: 81.8%
        </p>
      </div>

      {/* 3. SECONDARY SCHOOL - SVGMS */}
      <div className="relative group opacity-60 hover:opacity-100 transition-opacity">
        <div className="absolute -left-[54px] top-0 w-3 h-3 rounded-full bg-zinc-800 group-hover:bg-zinc-600 transition-colors"></div>
        <p className="text-[10px] font-black text-zinc-500 border border-white/5 px-3 py-1 rounded-full inline-block tracking-widest uppercase">
          2020
        </p>
        <h4 className="text-2xl font-bold text-white mt-4 uppercase tracking-tighter">
          Secondary School Certificate
        </h4>
        <p className="text-zinc-500 uppercase tracking-widest text-[11px] font-bold mt-1">
          Swami Vivekananda Govt. Model School
        </p>
        <p className="text-zinc-400 font-bold mt-2 text-xs italic">
          Score: 89.2%
        </p>
      </div>
    </div>
  </section>
);
