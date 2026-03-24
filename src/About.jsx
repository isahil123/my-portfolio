import React from "react";

export const About = () => (
  <section id="about" className="py-32 border-t border-white/[0.05]">
    <div className="grid lg:grid-cols-2 gap-20 items-center">
      <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden border-2 border-white/10 shadow-2xl bg-zinc-900 group">
        <img
          src="/profile.jpg"
          alt="Sahil"
          className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80";
          }}
        />
      </div>
      <div className="space-y-8">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.8em] text-zinc-600 italic">
          01 // Biography
        </h3>
        <p className="text-4xl font-bold text-white tracking-tight">
          Engineering logic into{" "}
          <span className="text-zinc-500 italic">Resilient Systems</span>.
        </p>
        <p className="text-zinc-400 text-lg font-light leading-relaxed">
          Full-Stack developer specializing in the MERN stack and Machine
          Learning. I build systems that bridge heavy logic with seamless
          performance.
        </p>
      </div>
    </div>
  </section>
);
