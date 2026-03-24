import React from "react";

const certifications = [
  {
    title: "Privacy and Security in Online Social Media",
    issuer: "NPTEL",
    date: "2025",
    id: "NPTEL25CS117S1458702424",
    url: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS117S145870242410889377",
    color: "#EA4335", // NPTEL Red
    initial: "NP",
  },
  {
    title: "Machine Learning with Data Science",
    issuer: "CipherSchools",
    date: "2025",
    id: "687e408f7efd",
    url: "https://www.cipherschools.com/certificate/preview?id=687e408f7efd6d5090703dd7",
    color: "#FBBC05", // Cipher Yellow
    initial: "CS",
  },
  {
    title: "Python Developer Certificate",
    issuer: "Edyoda",
    date: "2024",
    id: "PYMD020324",
    url: "https://classroom.edyoda.com/public-certificate/sp776115/PYMD020324",
    color: "#4285F4", // Edyoda Blue
    initial: "EY",
  },
  {
    title: "Computer Networking Basics",
    issuer: "Coursera",
    date: "2024",
    id: "B8DMG8KCM7QB",
    url: "https://www.coursera.org/account/accomplishments/verify/B8DMG8KCM7QB",
    color: "#34A853", // Coursera Green
    initial: "CO",
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24 border-t border-white/[0.05]">
      {/* SECTION HEADER */}
      <div className="mb-16">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.8em] text-zinc-600 mb-4 italic">
          05 // Credential Vault
        </h2>
        <div className="flex justify-between items-end">
          <h3 className="text-5xl font-bold text-white tracking-tighter italic uppercase">
            Validation.
          </h3>
          <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest hidden md:block">
            Verification links active
          </span>
        </div>
      </div>

      {/* GRID CONTAINER */}
      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-8 rounded-[2.5rem] bg-[#0a0a0b] border border-white/[0.05] hover:border-white/20 transition-all duration-500 overflow-hidden block"
          >
            {/* Dynamic Background Glow */}
            <div
              className="absolute -right-12 -top-12 w-40 h-40 blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-700"
              style={{ backgroundColor: cert.color }}
            ></div>

            <div className="relative z-10 flex items-start gap-8">
              {/* Brand Branding Block */}
              <div
                className="w-16 h-16 shrink-0 rounded-2xl border border-white/10 flex items-center justify-center text-xl font-black italic transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-black"
                style={{ color: cert.color }}
              >
                {cert.initial}
              </div>

              {/* Information Block */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
                    {cert.issuer}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-zinc-800"></span>
                  <span className="text-[10px] font-bold text-zinc-600">
                    {cert.date}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white leading-tight transition-colors group-hover:text-zinc-200">
                  {cert.title}
                </h4>

                <div className="flex items-center gap-4 pt-1">
                  <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-tighter">
                    ID: {cert.id}
                  </p>
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-10px] group-hover:translate-x-0">
                    <span className="text-[8px] font-black bg-white/5 text-white/60 px-2 py-0.5 rounded-full tracking-[0.2em] uppercase border border-white/5">
                      Live Verify
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* External Indicator */}
            <div className="absolute bottom-8 right-8 opacity-0 translate-y-4 group-hover:opacity-30 group-hover:translate-y-0 transition-all duration-500 text-white">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
