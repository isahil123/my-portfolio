import React, { useState } from "react";

export const Contact = () => {
  const [status, setStatus] = useState("");
  const [focused, setFocused] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xzdjnkrz", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-40 border-t border-white/5 relative">
      <div className="grid lg:grid-cols-2 gap-32 items-start">
        <div className="space-y-12 text-left">
          <h3 className="text-[10px] font-black uppercase tracking-[0.8em] text-zinc-600 mb-6 italic">
            // Terminal_Connection
          </h3>
          <p className="text-6xl font-black text-white tracking-tighter italic leading-none">
            Establish <br /> Connection.
          </p>
          <div className="space-y-6 text-zinc-500 font-mono text-sm uppercase tracking-widest">
            <p className="flex items-center gap-6">
              <span className="w-12 h-[1px] bg-zinc-800"></span> Jodhpur,
              Rajasthan
            </p>
            <p className="flex items-center gap-6">
              <span className="w-12 h-[1px] bg-zinc-800"></span>{" "}
              sp776115@gmail.com
            </p>
            <p className="flex items-center gap-6 font-black text-white">
              <span className="w-12 h-[1px] bg-zinc-800"></span> +91 9829377025
            </p>
          </div>
        </div>

        <form
          onSubmit={handleFormSubmit}
          className="space-y-12 bg-[#fafafa] p-12 md:p-16 rounded-xl shadow-2xl relative overflow-hidden border border-zinc-200 text-left"
        >
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-cyan-500 via-zinc-400 to-zinc-600"></div>

          <div className="space-y-12">
            <div className="relative">
              <input
                required
                name="name"
                type="text"
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused("")}
                className="w-full bg-transparent border-b-2 border-zinc-200 py-3 text-zinc-900 font-bold focus:outline-none focus:border-cyan-600 transition-all placeholder-transparent peer"
                placeholder="Name"
              />
              <label
                className={`absolute left-0 transition-all font-black uppercase tracking-widest ${focused === "name" ? "-top-6 text-[9px] text-cyan-600" : "top-3 text-[11px] text-zinc-400"}`}
              >
                Full Name
              </label>
            </div>

            <div className="relative">
              <input
                required
                name="email"
                type="email"
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused("")}
                className="w-full bg-transparent border-b-2 border-zinc-200 py-3 text-zinc-900 font-bold focus:outline-none focus:border-cyan-600 transition-all placeholder-transparent peer"
                placeholder="Email"
              />
              <label
                className={`absolute left-0 transition-all font-black uppercase tracking-widest ${focused === "email" ? "-top-6 text-[9px] text-cyan-600" : "top-3 text-[11px] text-zinc-400"}`}
              >
                Email Address
              </label>
            </div>

            <div className="relative">
              <textarea
                required
                name="message"
                rows="3"
                onFocus={() => setFocused("msg")}
                onBlur={() => setFocused("")}
                className="w-full bg-transparent border-b-2 border-zinc-200 py-3 text-zinc-900 font-bold focus:outline-none focus:border-cyan-600 transition-all placeholder-transparent peer resize-none"
                placeholder="Message"
              ></textarea>
              <label
                className={`absolute left-0 transition-all font-black uppercase tracking-widest ${focused === "msg" ? "-top-6 text-[9px] text-cyan-600" : "top-3 text-[11px] text-zinc-400"}`}
              >
                Mission Brief
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-6 bg-[#0f0f11] text-white font-black rounded-lg hover:bg-cyan-600 transition-all duration-500 text-[11px] tracking-[0.5em] uppercase shadow-xl hover:shadow-cyan-500/20 active:scale-95"
          >
            {status === "sending" ? "TRANSMITTING..." : "Send Secure Message"}
          </button>

          {status === "success" && (
            <div className="text-center">
              <p className="text-green-600 font-black text-[10px] uppercase tracking-widest animate-pulse">
                ✔ Connection Established
              </p>
            </div>
          )}
          {status === "error" && (
            <p className="text-red-600 text-center font-black text-[10px] uppercase tracking-widest">
              ✘ System Error: Retry Transmission
            </p>
          )}
        </form>
      </div>
    </section>
  );
};
