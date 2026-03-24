import React from "react";

export const Navbar = () => (
  <nav className="fixed top-0 w-full z-[100] backdrop-blur-xl bg-black/60">
    <div
      className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 animate-chrome-flow"
      style={{ backgroundSize: "200% auto" }}
    ></div>
    <div className="max-w-5xl mx-auto px-8 h-20 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center font-black">
          S
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-black tracking-[0.3em] uppercase text-white leading-none">
            Sahil Pathan
          </span>
          <span className="text-[8px] font-bold text-cyan-500 uppercase tracking-widest mt-1">
            Core.Engine_Active
          </span>
        </div>
      </div>
      <div className="flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
        <a href="#about" className="hover:text-cyan-400 transition-all">
          About
        </a>
        <a href="#projects" className="hover:text-cyan-400 transition-all">
          Projects
        </a>
        <a href="#cv" className="hover:text-cyan-400 transition-all">
          Ledger
        </a>
        <a
          href="#contact"
          className="px-5 py-2.5 bg-white text-black rounded-lg hover:bg-cyan-500 hover:text-white transition-all shadow-xl shadow-cyan-500/10"
        >
          Connect
        </a>
      </div>
    </div>
  </nav>
);
