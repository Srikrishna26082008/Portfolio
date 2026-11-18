import { portfolioData } from "../data/portfolio";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 relative scroll-mt-20">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 right-10 w-96 h-96 bg-[#00eeff]/10 blur-[130px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center sm:text-left mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#00eeff] uppercase tracking-widest mb-2">
            <span className="h-px w-6 bg-[#00eeff]" />
            <span>02. Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About My <span className="text-[#00eeff]">Projects</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
            A selection of software and web applications I&apos;ve engineered, showcasing full-stack capabilities, clean UI, and real-world utility.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {portfolioData.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GitHub profile link callout */}
        <div className="mt-14 text-center">
          <a
            href={portfolioData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-slate-300 hover:text-white bg-slate-900/60 border border-slate-800 hover:border-[#00eeff]/60 hover:bg-slate-800 transition-all duration-200 hover:scale-105 shadow-sm"
          >
            <span>See more repositories on GitHub</span>
            <svg
              className="w-4 h-4 text-[#00eeff]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
