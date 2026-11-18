import { Project } from "../data/portfolio";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl bg-slate-900/70 border border-slate-800 p-6 sm:p-7 shadow-lg backdrop-blur-sm hover:border-blue-500/50 hover:bg-slate-900/90 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1.5 transition-all duration-300">
      {/* Top Accent Gradient Bar on Hover */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Card Header: Folder/Code Icon & Links */}
        <div className="flex items-center justify-between mb-5">
          <div className="p-2.5 rounded-xl bg-blue-950/50 border border-blue-500/20 text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all duration-300">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              />
            </svg>
          </div>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors p-1"
                aria-label={`Live demo for ${project.name}`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Project Name */}
        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-3">
          {project.name}
        </h3>

        {/* Project Description */}
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          {project.description}
        </p>
      </div>

      <div>
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6 pt-4 border-t border-slate-800/80">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono font-medium text-cyan-300/90 bg-cyan-950/30 border border-cyan-800/40 px-2.5 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View on GitHub Link button */}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-200 hover:text-white bg-slate-800/90 hover:bg-blue-600 px-4 py-2.5 rounded-xl border border-slate-700/80 hover:border-blue-500 shadow-sm transition-all duration-200 group/btn w-full justify-center"
        >
          {/* GitHub Icon */}
          <svg
            className="w-4 h-4 fill-current transition-transform group-hover/btn:scale-110"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
          </svg>
          <span>View on GitHub</span>
          <svg
            className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
