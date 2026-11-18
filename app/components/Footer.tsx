import { portfolioData } from "../data/portfolio";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-slate-800/80 bg-[#090d16] py-10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          {/* Copyright text */}
          <div className="text-sm text-slate-400">
            <p className="font-mono">
              &copy; {currentYear}{" "}
              <span className="text-slate-200 font-semibold">{portfolioData.name}</span>
              . All rights reserved.
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Crafted with Next.js, TypeScript &amp; Tailwind CSS.
            </p>
          </div>

          {/* Back to top smooth button */}
          <a
            href="#"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-400 hover:text-blue-400 hover:bg-slate-800/60 border border-slate-800 transition-all hover:scale-105"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
