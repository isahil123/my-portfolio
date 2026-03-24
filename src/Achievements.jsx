import React from "react";

export const Achievements = () => (
  <section className="py-24 border-t border-white/[0.05]">
    <div className="grid md:grid-cols-2 gap-12">
      <div className="p-12 rounded-[48px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all">
        <p className="text-xs font-bold text-zinc-600 uppercase tracking-widest mb-6 italic">
          Mastery
        </p>
        <h3 className="text-6xl font-black text-white italic tracking-tighter">
          100+ LeetCode
        </h3>
      </div>
      <div className="p-12 rounded-[48px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all">
        <p className="text-xs font-bold text-zinc-600 uppercase tracking-widest mb-6 italic">
          Data Structures
        </p>
        <h3 className="text-6xl font-black text-white italic tracking-tighter">
          200+ GFG
        </h3>
      </div>
    </div>
  </section>
);
