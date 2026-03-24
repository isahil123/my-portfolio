import React from "react";

export const CVLedger = () => {
  return (
    <section id="cv" className="py-32 border-t border-white/[0.05]">
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="space-y-4">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.8em] text-zinc-600 italic">
            04 // Official Record
          </h2>
          <h3 className="text-6xl font-bold text-white tracking-tighter italic uppercase">
            Ledger.
          </h3>
        </div>
        <a
          href="/my-cv.pdf"
          download
          className="group relative px-10 py-4 bg-white text-black font-black text-[10px] uppercase tracking-widest rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
        >
          <span className="relative z-10">Export PDF Document</span>
          <div className="absolute inset-0 bg-zinc-200 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </a>
      </div>

      {/* THE CV PAPER COMPONENT */}
      <div className="max-w-4xl mx-auto bg-[#ffffff] text-[#0a0a0b] p-8 md:p-20 shadow-[0_50px_100px_rgba(0,0,0,0.6)] rounded-sm relative overflow-hidden animate-reveal">
        {/* DOCUMENT HEADER */}
        <div className="border-b-[3px] border-zinc-900 pb-10 mb-10 flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <h4 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              Sahil Pathan
            </h4>
            <p className="text-sm font-bold text-zinc-500 uppercase tracking-[0.4em] mt-3">
              Full Stack Systems Engineer
            </p>
          </div>
          <div className="text-[10px] space-y-2 font-bold uppercase tracking-widest text-zinc-400 text-left md:text-right pt-2">
            <p className="hover:text-black transition-colors">
              ✉️ sp776115@gmail.com
            </p>
            <p>📞 +91 9829377025</p>
            <p>📍 Jodhpur, Rajasthan, India</p>
          </div>
        </div>

        {/* SUMMARY SECTION */}
        <div className="mb-12">
          <h5 className="text-[11px] font-black uppercase tracking-[0.2em] mb-4 text-zinc-900">
            Professional Summary
          </h5>
          <p className="text-sm leading-relaxed text-zinc-700 max-w-3xl">
            Highly disciplined Systems Engineer specializing in the **MERN
            Stack** and **Machine Learning**. Proven track record in developing
            secure, scalable architectures with a focus on Role-Based Access
            Control (RBAC) and predictive analytics. Committed to daily
            deployment and algorithmic mastery.
          </p>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="grid md:grid-cols-3 gap-16">
          {/* LEFT COLUMN (Experience & Education) */}
          <div className="md:col-span-2 space-y-12">
            {/* PROJECTS/MISSIONS */}
            <div className="space-y-8">
              <h5 className="text-[11px] font-black uppercase tracking-[0.2em] border-b-2 border-zinc-100 pb-2 mb-6">
                Mission Deploys
              </h5>

              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-baseline">
                    <h6 className="text-lg font-black uppercase">
                      Machine Hub
                    </h6>
                    <span className="text-[10px] font-bold text-zinc-400">
                      2024
                    </span>
                  </div>
                  <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-3">
                    MERN • Firebase • JWT RBAC
                  </p>
                  <ul className="text-[12px] leading-relaxed space-y-2 text-zinc-600 list-disc pl-4">
                    <li>
                      Engineered a dynamic inventory system for industrial spare
                      parts tracking.
                    </li>
                    <li>
                      Implemented **JWT-based Security** with 4 distinct user
                      roles (Admin, Manager, User, Guest).
                    </li>
                    <li>
                      Built high-performance MongoDB aggregation pipelines for
                      real-time stock orchestration.
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-baseline">
                    <h6 className="text-lg font-black uppercase">
                      Loan Approval Predictor
                    </h6>
                    <span className="text-[10px] font-bold text-zinc-400">
                      2024
                    </span>
                  </div>
                  <p className="text-[10px] font-bold text-green-600 uppercase tracking-widest mb-3">
                    Python • ML • Plotly Dash • NLTK
                  </p>
                  <ul className="text-[12px] leading-relaxed space-y-2 text-zinc-600 list-disc pl-4">
                    <li>
                      Developed a binary classification engine using **Logistic
                      Regression & Decision Trees**.
                    </li>
                    <li>
                      Applied **TF-IDF vectorization** and NLTK preprocessing
                      for educational feature analysis.
                    </li>
                    <li>
                      Visualized predictive probabilities and applicant metrics
                      via high-speed Plotly dashboards.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ACADEMIC HISTORY */}
            <div className="space-y-8">
              <h5 className="text-[11px] font-black uppercase tracking-[0.2em] border-b-2 border-zinc-100 pb-2 mb-6">
                Academic Roadmap
              </h5>
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h6 className="text-md font-black uppercase">
                      B.Tech in Computer Science
                    </h6>
                    <p className="text-sm text-zinc-600">
                      Lovely Professional University
                    </p>
                    <p className="text-[11px] font-bold text-zinc-400 mt-1 italic uppercase tracking-widest underline decoration-zinc-200 underline-offset-4">
                      CGPA: 8.08
                    </p>
                  </div>
                  <span className="text-[10px] font-black text-zinc-400">
                    2023 — PRESENT
                  </span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h6 className="text-md font-black uppercase">
                      Higher Secondary (XII)
                    </h6>
                    <p className="text-sm text-zinc-600">RDSS Bilara</p>
                    <p className="text-[11px] font-bold text-zinc-400 mt-1 italic uppercase tracking-widest underline decoration-zinc-200 underline-offset-4">
                      Score: 81.8%
                    </p>
                  </div>
                  <span className="text-[10px] font-black text-zinc-400">
                    2021 — 2022
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (Skills, Certs, Metrics) */}
          <div className="space-y-12 border-l-2 border-zinc-50 pl-10">
            {/* TECHNICAL SUITE */}
            <div className="space-y-6">
              <h5 className="text-[11px] font-black uppercase tracking-[0.2em] border-b-2 border-zinc-100 pb-2 mb-4">
                Mastery
              </h5>
              <div className="flex flex-wrap gap-2">
                {[
                  "React.js",
                  "Node.js",
                  "MongoDB",
                  "Python",
                  "Java",
                  "C++",
                  "Azure",
                  "ML",
                  "Tailwind",
                ].map((s) => (
                  <span
                    key={s}
                    className="px-2 py-1 bg-zinc-50 border border-zinc-200 text-[9px] font-black uppercase text-zinc-500 rounded-sm hover:bg-zinc-900 hover:text-white transition-colors cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* METRICS */}
            <div className="space-y-6">
              <h5 className="text-[11px] font-black uppercase tracking-[0.2em] border-b-2 border-zinc-100 pb-2 mb-4">
                Problem Solving
              </h5>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-zinc-400">LEETCODE</span>
                  <span className="font-black">100+ SOLVED</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-zinc-400">GFG</span>
                  <span className="font-black">200+ SOLVED</span>
                </div>
              </div>
            </div>

            {/* CREDENTIALS */}
            <div className="space-y-6">
              <h5 className="text-[11px] font-black uppercase tracking-[0.2em] border-b-2 border-zinc-100 pb-2 mb-4">
                Certifications
              </h5>
              <ul className="text-[10px] font-bold space-y-4 text-zinc-500 uppercase leading-relaxed">
                <li className="border-l-2 border-zinc-100 pl-3">
                  NPTEL: Privacy & Security in Social Media
                </li>
                <li className="border-l-2 border-zinc-100 pl-3">
                  CipherSchools: ML with Data Science
                </li>
                <li className="border-l-2 border-zinc-100 pl-3">
                  Edyoda: Python Developer Certificate
                </li>
                <li className="border-l-2 border-zinc-100 pl-3">
                  Coursera: Networking Basics
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* VALIDATION STAMP */}
        <div className="absolute bottom-10 right-10 opacity-[0.04] rotate-[-15deg] select-none pointer-events-none">
          <div className="border-[6px] border-zinc-900 p-4 rounded-xl">
            <h4 className="text-8xl font-black italic">VALIDATED</h4>
            <p className="text-center font-black tracking-[1em] mt-2">
              SAHIL PATHAN
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
