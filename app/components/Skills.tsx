import { portfolioData } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center sm:text-left mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#00eeff] uppercase tracking-widest mb-2">
            <span className="h-px w-6 bg-[#00eeff]" />
            <span>03. Technical Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Core <span className="text-[#00eeff]">Skills</span> &amp; Technologies
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
            Modern programming languages, web libraries, and tools I use to design and deploy software solutions.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {portfolioData.skillsCategories.map((cat, idx) => (
            <div
              key={cat.category}
              className="p-6 sm:p-7 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-[#00eeff]/50 shadow-xl backdrop-blur-sm transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,238,255,0.1)]"
            >
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-800">
                <span className="text-xs font-mono text-[#00eeff] font-bold">
                  0{idx + 1}.
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-[#00eeff] transition-colors">
                  {cat.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-slate-200 bg-slate-800/80 border border-slate-700/80 hover:border-[#00eeff] hover:text-[#00eeff] hover:bg-[#00eeff]/10 hover:scale-105 active:scale-95 transition-all duration-200 cursor-default select-none"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00eeff] mr-2 shadow-[0_0_6px_#00eeff]" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
