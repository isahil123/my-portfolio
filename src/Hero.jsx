import React, { useState, useEffect } from "react";
import { Icons } from "./Icons.jsx";

const skills = [
  { name: "React", slug: "react" },
  { name: "Node.js", slug: "node-dot-js" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Firebase", slug: "firebase" },
  { name: "Python", slug: "python" },
  { name: "C++", slug: "cplusplus" },
  { name: "TensorFlow", slug: "tensorflow" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Azure", slug: "microsoftazure" },
  { name: "Tailwind", slug: "tailwindcss" },
];

export const Hero = () => {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState(
    "Hello,\nThis is Sahil Pathan\nI'm a Professional Software Developer Aspirant.",
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(
        () => {
          setText((prev) => prev + fullText[index]);
          setIndex((prev) => prev + 1);
        },
        fullText[index] === "\n" ? 450 : 45,
      );
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section
      id="home"
      className="min-h-[85vh] flex flex-col justify-center relative"
    >
      <div className="grid lg:grid-cols-2 gap-20 items-center w-full mb-24">
        <div className="min-h-[320px] flex flex-col justify-center">
          <div className="font-mono space-y-3">
            {text.split("\n").map((line, i) => (
              <div key={i}>
                {i === 0 && (
                  <h2 className="text-zinc-500 font-black tracking-[0.6em] uppercase text-sm mb-4">
                    {line}
                  </h2>
                )}
                {i === 1 && (
                  <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-4">
                    {line.startsWith("This is") ? (
                      <>
                        This is{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-cyan-400 to-zinc-500 animate-chrome-flow pb-2">
                          {line.replace("This is ", "")}
                        </span>
                      </>
                    ) : (
                      line
                    )}
                  </h1>
                )}
                {i === 2 && (
                  <p className="text-lg md:text-2xl font-light text-zinc-400 leading-relaxed border-l-2 border-cyan-500/40 pl-6">
                    {line}
                    {index === fullText.length && (
                      <span className="inline-block w-2 h-6 bg-cyan-400 ml-3 animate-pulse shadow-[0_0_15px_#00f2ff]"></span>
                    )}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4 animate-reveal">
            {["linkedin", "github", "leetcode", "gfg"].map((s) => (
              <a
                key={s}
                href={
                  s === "linkedin"
                    ? "https://www.linkedin.com/in/sahilpathan23"
                    : s === "github"
                      ? "https://github.com/isahil123"
                      : s === "leetcode"
                        ? "https://leetcode.com/u/Sahil_pathan/"
                        : "https://www.geeksforgeeks.org/profile/sp776ah94?tab=overview"
                }
                target="_blank"
                className="w-12 h-12 rounded-lg border border-white/10 bg-gradient-to-b from-[#2d2d30] to-[#1a1a1c] flex items-center justify-center text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(0,242,255,0.1)] transition-all duration-500"
              >
                {Icons[s]}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden lg:block perspective-1000 group">
          <div className="relative p-12 bg-gradient-to-br from-[#2d2d30] to-[#0f0f11] border border-white/10 rounded-xl font-mono text-[12px] leading-relaxed shadow-[0_40px_80px_rgba(0,0,0,0.5)] transition-all duration-1000 group-hover:rotate-y-12 group-hover:border-cyan-500/40">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>

            <p className="text-cyan-500/40 mb-6 font-black uppercase tracking-widest text-[9px]">
              // SYSTEM_PAYLOAD_v2.0
            </p>

            <p>
              <span className="text-zinc-500">const</span>{" "}
              <span className="text-blue-400">sahil_dev</span> = {"{"}
            </p>
            <p className="ml-5">
              stack: [<span className="text-green-400">'MERN'</span>,{" "}
              <span className="text-green-400">'Next.js'</span>],
            </p>
            <p className="ml-5">
              intelligence: [<span className="text-green-400">'ML'</span>,{" "}
              <span className="text-green-400">'NLP'</span>],
            </p>
            <p className="ml-5">metrics: {"{"}</p>
            <p className="ml-10">
              leetcode: <span className="text-yellow-400">100+</span>,
            </p>
            <p className="ml-10">
              gfg_solved: <span className="text-yellow-400">200+</span>,
            </p>
            <p className="ml-10">
              cgpa: <span className="text-white font-bold">8.08</span>
            </p>
            <p className="ml-5">{"}"},</p>
            <p className="ml-5">
              status:{" "}
              <span className="text-cyan-400 animate-pulse">
                'Ready_To_Build'
              </span>
            </p>
            <p>{"}"};</p>

            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-xl"></div>
          </div>
        </div>
      </div>

      <div className="relative w-full py-16 border-y border-white/5 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#0f0f11] to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#0f0f11] to-transparent z-10"></div>
        <div className="flex animate-marquee-infinite">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex shrink-0">
              {skills.map((s) => (
                <div
                  key={s.name}
                  className="mx-10 flex items-center gap-4 px-8 py-3 rounded-lg border border-white/5 bg-[#1a1a1c] hover:border-cyan-500/40 transition-all duration-500 group"
                >
                  <img
                    src={`https://cdn.simpleicons.org/${s.slug}/white`}
                    width="20"
                    height="20"
                    className="opacity-30 group-hover:opacity-100 transition-all"
                    alt={s.name}
                  />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 group-hover:text-white">
                    {s.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-infinite { 0% { transform: translateX(0); } 100% { transform: translateX(-25%); } }
        .animate-marquee-infinite { animation: marquee-infinite 45s linear infinite; width: max-content; }
        .perspective-1000 { perspective: 1000px; }
        @keyframes chrome-flow { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
        .animate-chrome-flow { background-size: 200% auto; animation: chrome-flow 6s linear infinite; }
      `}</style>
    </section>
  );
};
