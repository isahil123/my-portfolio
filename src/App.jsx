import React, { useState } from "react";
import { Navbar } from "./Navbar.jsx";
import { Hero } from "./Hero.jsx";
import { About } from "./About.jsx";
import { Achievements } from "./Achievements.jsx";
import { Education } from "./Education.jsx";
import { Certifications } from "./Certifications.jsx";
import { Projects } from "./Projects.jsx";
import { CVLedger } from "./CVLedger.jsx";
import { Contact } from "./Contact.jsx";

export default function App() {
  const [view, setView] = useState("none");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCommand = (id) => {
    if (view === id) {
      setView("none");
    } else {
      setIsProcessing(true);
      setTimeout(() => {
        setView(id);
        setIsProcessing(false);
      }, 700);
    }
  };

  return (
    <div className="w-full min-h-screen text-[#e2e2e2] antialiased bg-[#0f0f11] relative overflow-x-hidden selection:bg-cyan-500/30">
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-slate-500/5 blur-[140px] animate-mesh-1"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-cyan-500/5 blur-[140px] animate-mesh-2"></div>
      </div>

      <div className="fixed inset-0 pointer-events-none z-[1] bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:30px_30px]"></div>

      <Navbar />

      <main className="max-w-5xl mx-auto px-6 pt-44 relative z-10">
        <Hero />
        <About />
        <Achievements />

        <div className="flex flex-col md:flex-row gap-12 justify-center my-44 items-center">
          {[
            {
              id: "edu",
              label: "execute_edu_roadmap",
              color: "from-[#2d2d30] via-[#4a4a4e] to-[#2d2d30]",
            },
            {
              id: "cert",
              label: "verify_vault_access",
              color: "from-[#2d2d30] via-[#4a4a4e] to-[#2d2d30]",
            },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => handleCommand(btn.id)}
              disabled={isProcessing}
              className={`
                 group relative px-20 py-10 rounded-lg border transition-all duration-700 overflow-hidden shadow-2xl
                 ${
                   view === btn.id
                     ? "border-cyan-400 bg-white text-black scale-105 shadow-[0_0_40px_rgba(0,242,255,0.15)]"
                     : "border-white/10 text-zinc-400 hover:border-zinc-500 hover:scale-[1.02]"
                 }
               `}
            >
              <span
                className={`
                 relative z-20 font-mono text-[11px] font-black uppercase tracking-[0.5em] transition-colors duration-500
                 ${view === btn.id ? "text-black" : "group-hover:text-white"}
               `}
              >
                {isProcessing && !view.includes(btn.id)
                  ? "COMPILING..."
                  : view === btn.id
                    ? "./EXIT"
                    : `./${btn.label}`}
              </span>

              <div className="absolute inset-0 z-10 w-full h-full pointer-events-none">
                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] animate-scan"></div>
              </div>

              <div
                className={`
                 absolute inset-0 z-0 bg-gradient-to-r ${btn.color} transition-transform duration-700 ease-in-out
                 ${view === btn.id ? "translate-y-0 opacity-100" : "translate-y-full group-hover:translate-y-0 opacity-80"}
               `}
              ></div>
            </button>
          ))}
        </div>

        <div className="relative">
          <div
            className={`transition-all duration-1000 ease-out transform ${view === "edu" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 h-0 overflow-hidden"}`}
          >
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-12 animate-pulse"></div>
            <Education />
          </div>

          <div
            className={`transition-all duration-1000 ease-out transform ${view === "cert" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 h-0 overflow-hidden"}`}
          >
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-12 animate-pulse"></div>
            <Certifications />
          </div>
        </div>

        <Projects />
        <CVLedger />
        <Contact />
      </main>

      <footer className="py-24 border-t border-white/5 text-center relative z-10 bg-[#0f0f11]">
        <p className="text-[10px] text-zinc-600 font-black uppercase tracking-[2em] italic">
          SAHIL.PATHAN.CORE.v.2026
        </p>
      </footer>

      <style>{`
        @keyframes mesh-1 { 0% { transform: translate(0,0); } 50% { transform: translate(10%, 15%); } 100% { transform: translate(0,0); } }
        @keyframes mesh-2 { 0% { transform: translate(0,0); } 50% { transform: translate(-10%, -15%); } 100% { transform: translate(0,0); } }
        @keyframes scan { 0% { left: -100%; } 100% { left: 150%; } }
        .animate-mesh-1 { animation: mesh-1 20s infinite ease-in-out; }
        .animate-mesh-2 { animation: mesh-2 25s infinite ease-in-out; }
        .animate-scan { animation: scan 3s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
        html { scroll-behavior: smooth; scrollbar-width: none; background: #0f0f11; }
        ::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
