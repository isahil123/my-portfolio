export const Projects = () => (
  <section id="projects" className="py-24 border-t border-white/[0.05]">
    <h2 className="text-[10px] font-bold uppercase tracking-[0.8em] text-zinc-600 mb-20 italic">
      03 // Mission Deploys
    </h2>
    <div className="space-y-32">
      {/* Machine Hub */}
      <div className="grid lg:grid-cols-2 gap-12 items-center group">
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-white">Machine Hub</h3>
          <p className="text-zinc-400 text-base font-light leading-relaxed">
            MERN Inventory system with JWT RBAC security and real-time stock
            alerts.
          </p>
          <a
            href="https://github.com/isahil123/Inventory-Management-website"
            target="_blank"
            className="text-[10px] font-black border-b border-white/20 pb-1 hover:border-white transition-all uppercase tracking-widest"
          >
            Source Code
          </a>
        </div>
        <div className="bg-[#0a0a0b] p-8 rounded-3xl border border-white/5 font-mono text-[12px]">
          <p className="text-red-400">
            await <span className="text-blue-400">MachineHub</span>.init({"{"}{" "}
            auth: <span className="text-green-400">'JWT'</span> {"}"})
          </p>
        </div>
      </div>

      {/* Loan Predictor */}
      <div className="grid lg:grid-cols-2 gap-12 items-center group">
        <div className="bg-[#0a0a0b] p-8 rounded-3xl border border-white/5 font-mono text-[12px]">
          <p className="text-red-400">
            def <span className="text-yellow-400">predict</span>(data):{" "}
            <span className="text-zinc-500"># ML Pipeline</span>
          </p>
        </div>
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-white">Loan Predictor</h3>
          <p className="text-zinc-400 text-base font-light leading-relaxed">
            ML engine using Python & Dash to predict loan eligibility with
            TF-IDF processing.
          </p>
          <a
            href="https://github.com/isahil123/loan-predictor-website"
            target="_blank"
            className="text-[10px] font-black border-b border-white/20 pb-1 hover:border-white transition-all uppercase tracking-widest"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  </section>
);
