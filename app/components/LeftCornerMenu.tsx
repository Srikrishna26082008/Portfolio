"use client";

import { useState, useEffect } from "react";
import { portfolioData } from "../data/portfolio";

export default function LeftCornerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<"works" | "help" | null>(null);
  const [copied, setCopied] = useState(false);

  // Close popup menu when user presses Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setActiveModal(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    setActiveModal(null);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ================= FIXED LEFT CORNER BUTTON & DROPDOWN ================= */}
      <div className="fixed bottom-6 left-6 z-40 select-none">
        {/* Floating Options Popup (opens above the button) */}
        {isOpen && (
          <div className="mb-3 w-72 sm:w-80 rounded-2xl bg-[#141b26]/95 backdrop-blur-xl border border-[#00eeff]/50 shadow-[0_15px_45px_rgba(0,0,0,0.8),0_0_25px_rgba(0,238,255,0.25)] p-4 text-white animate-in fade-in slide-in-from-bottom-4 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#00eeff] shadow-[0_0_8px_#00eeff] animate-pulse" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00eeff]">
                  Quick Navigator
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800/80 transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Options List */}
            <div className="space-y-1.5">
              {/* 1. "About my works" Option */}
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  setActiveModal("works");
                }}
                className="w-full text-left flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/60 hover:bg-[#00eeff]/15 border border-slate-800/80 hover:border-[#00eeff]/60 group transition-all"
              >
                <div className="p-2 rounded-lg bg-slate-800 text-[#00eeff] group-hover:scale-110 shadow-sm transition-transform">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white group-hover:text-[#00eeff] transition-colors">
                    About my works
                  </p>
                  <p className="text-xs text-slate-400">
                    Project showcase, tech stacks &amp; links
                  </p>
                </div>
              </button>

              {/* 2. "Help" Option */}
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  setActiveModal("help");
                }}
                className="w-full text-left flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/60 hover:bg-[#00eeff]/15 border border-slate-800/80 hover:border-[#00eeff]/60 group transition-all"
              >
                <div className="p-2 rounded-lg bg-slate-800 text-[#00eeff] group-hover:scale-110 shadow-sm transition-transform">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white group-hover:text-[#00eeff] transition-colors">
                    Help &amp; Support
                  </p>
                  <p className="text-xs text-slate-400">
                    Navigation tips, hiring FAQ &amp; guide
                  </p>
                </div>
              </button>

              {/* 3. Direct Section Smooth Scrolls */}
              <div className="pt-2 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => scrollToSection("about")}
                  className="px-2.5 py-2 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-[#00eeff] text-center font-medium transition-colors"
                >
                  About Me
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className="px-2.5 py-2 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-[#00eeff] text-center font-medium transition-colors"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Trigger Button at Left Corner */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2 px-4 py-3 rounded-full font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(0,238,255,0.7)] hover:shadow-[0_0_30px_#00eeff] hover:scale-105 active:scale-95 transition-all duration-300 ${
            isOpen
              ? "bg-[#111827] text-[#00eeff] border-2 border-[#00eeff]"
              : "bg-[#00eeff] text-[#0b0f19]"
          }`}
          aria-expanded={isOpen}
          aria-label="Toggle options menu"
        >
          {isOpen ? (
            // Close (X) icon when open
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span>Close</span>
            </>
          ) : (
            // Menu / Sparkle icon when closed
            <>
              <svg className="w-5 h-5 animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <span className="font-mono">Explore</span>
              <span className="flex h-2 w-2 rounded-full bg-slate-900 animate-ping" />
            </>
          )}
        </button>
      </div>

      {/* ================= MODAL 1: "ABOUT MY WORKS" ================= */}
      {activeModal === "works" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-[#111722] border-2 border-[#00eeff]/50 shadow-[0_0_40px_rgba(0,238,255,0.25)] p-6 sm:p-8 text-white">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close dialog"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Title */}
            <div className="mb-6">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#00eeff]">
                Portfolio Showcase
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                About My <span className="text-[#00eeff]">Works</span>
              </h3>
              <p className="text-sm text-slate-300 mt-2">
                Here is a quick overview of the applications engineered by{" "}
                <span className="text-white font-semibold">{portfolioData.name}</span>.
                Each project solves a concrete developer problem or provides full-stack functionality:
              </p>
            </div>

            {/* Project Overviews */}
            <div className="space-y-4 mb-6">
              {portfolioData.projects.map((proj, idx) => (
                <div
                  key={proj.id}
                  className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-[#00eeff]/50 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h4 className="font-bold text-white text-base flex items-center gap-2">
                      <span className="text-xs font-mono text-[#00eeff]">0{idx + 1}.</span>
                      <span>{proj.name}</span>
                    </h4>
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#00eeff] hover:underline flex items-center gap-1"
                    >
                      <span>GitHub</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 mb-3">{proj.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.techStack.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-800">
              <button
                type="button"
                onClick={() => scrollToSection("projects")}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#00eeff] text-[#111827] font-bold text-xs tracking-wider uppercase hover:shadow-[0_0_20px_#00eeff] transition-all"
              >
                Scroll to Full Projects Section
              </button>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white text-xs font-medium transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL 2: "HELP & SUPPORT" ================= */}
      {activeModal === "help" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl max-h-[85vh] overflow-y-auto rounded-2xl bg-[#111722] border-2 border-[#00eeff]/50 shadow-[0_0_40px_rgba(0,238,255,0.25)] p-6 sm:p-8 text-white">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close dialog"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Title */}
            <div className="mb-6">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#00eeff]">
                Navigation &amp; FAQ
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                How Can I <span className="text-[#00eeff]">Help</span> You?
              </h3>
              <p className="text-sm text-slate-300 mt-2">
                Quick guide on exploring this portfolio, getting in touch, and hiring info:
              </p>
            </div>

            {/* Help Content Cards */}
            <div className="space-y-4 mb-6 text-sm text-slate-300">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <h4 className="font-bold text-white mb-1 flex items-center gap-2">
                  <span className="text-[#00eeff]">📍</span> How do I navigate the site?
                </h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  Use the sticky top navbar or the quick options in this menu to jump directly to{" "}
                  <strong className="text-white">About Me</strong>,{" "}
                  <strong className="text-white">Projects</strong>, or{" "}
                  <strong className="text-white">Contact</strong>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <h4 className="font-bold text-white mb-1 flex items-center gap-2">
                  <span className="text-[#00eeff]">💼</span> Are you open for internships &amp; work?
                </h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  Yes! {portfolioData.name} is actively open for software engineering internships, web development projects, and open-source collaborations.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <h4 className="font-bold text-white mb-1 flex items-center gap-2">
                  <span className="text-[#00eeff]">📬</span> Direct Contact &amp; Email
                </h4>
                <div className="mt-2 flex items-center justify-between gap-2 p-2.5 rounded-lg bg-slate-800/80 border border-slate-700">
                  <span className="text-xs font-mono text-[#00eeff] truncate">
                    {portfolioData.email}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="px-3 py-1 rounded bg-[#00eeff] text-[#111827] text-xs font-bold hover:shadow-[0_0_10px_#00eeff] transition-all flex-shrink-0"
                  >
                    {copied ? "Copied!" : "Copy Email"}
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-800">
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#00eeff] text-[#111827] font-bold text-xs tracking-wider uppercase hover:shadow-[0_0_20px_#00eeff] transition-all"
              >
                Go to Contact Form
              </button>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white text-xs font-medium transition-colors"
              >
                Close Guide
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
