"use client";

import { useState } from "react";
import { portfolioData } from "../data/portfolio";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isShattering, setIsShattering] = useState(false);

  const handleReadMoreClick = () => {
    setIsShattering(true);
    setTimeout(() => {
      setIsShattering(false);
      setIsExpanded((prev) => !prev);
    }, 280);
  };

  return (
    <section
      id="about"
      className="relative bg-[#070b13]/85 backdrop-blur-md py-20 sm:py-28 overflow-hidden scroll-mt-20 border-b border-slate-800/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* ================= LEFT: GLOWING CYAN HEXAGON PORTRAIT (MATCHING TEMPLATE CHARACTER) ================= */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative group w-80 h-96 sm:w-96 sm:h-[430px] lg:w-[420px] lg:h-[470px] flex items-center justify-center">
              {/* Soft cyan blur glow */}
              <div
                className="absolute inset-0 bg-[#00eeff]/20 blur-3xl rounded-full scale-90 group-hover:scale-105 group-hover:bg-[#00eeff]/35 transition-all duration-500 pointer-events-none"
                aria-hidden="true"
              />

              {/* Hexagon Container */}
              <div
                className="relative w-72 h-80 sm:w-80 sm:h-92 p-1.5 rounded-3xl bg-gradient-to-tr from-[#00eeff] via-[#c084fc] to-[#f43f5e] shadow-[0_0_35px_rgba(0,238,255,0.45)] group-hover:shadow-[0_0_55px_#00eeff] transition-all duration-500 overflow-hidden"
                style={{
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              >
                <div
                  className="w-full h-full bg-[#070b13] flex items-center justify-center overflow-hidden"
                  style={{
                    clipPath: "polygon(50% 2%, 98% 26%, 98% 74%, 50% 98%, 2% 74%, 2% 26%)",
                  }}
                >
                  <img
                    src="/profile-avatar.png"
                    alt={portfolioData.name}
                    className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT: ABOUT ME TEXT & SHATTER BUTTON ================= */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#00eeff] uppercase tracking-widest mb-2.5">
              <span className="h-px w-6 bg-[#00eeff]" />
              <span>01. Profile &amp; Bio</span>
            </div>

            {/* Line 1: About Me */}
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-2">
              About <span className="text-[#00eeff] drop-shadow-[0_0_15px_rgba(0,238,255,0.7)]">Me</span>
            </h2>

            {/* Line 2: Frontend & Systems Developer */}
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              CS Student &amp; Full-Stack Developer!
            </h3>

            {/* Line 3: Continuous Clean Paragraph Block */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
              I am a passionate Computer Science student dedicated to creating clean, interactive, and high-performance web applications. With strong expertise in modern JavaScript frameworks, responsive UI engineering, and algorithmic problem-solving, I focus on building digital experiences that combine pixel-perfect visual design with robust, reliable software architecture.
            </p>

            {/* Expandable details when user clicks "Read More" */}
            {isExpanded && (
              <div className="mb-6 p-5 rounded-2xl bg-[#0c121e]/90 border border-[#00eeff]/40 text-slate-200 text-sm space-y-2.5 animate-in fade-in slide-in-from-top-2 duration-300 max-w-xl shadow-[0_0_20px_rgba(0,238,255,0.15)]">
                <p>
                  <strong className="text-[#00eeff] font-mono">🎓 Education &amp; Academics: </strong>
                  Pursuing Computer Science Engineering with coursework centered around Data Structures, Algorithms, Full-Stack Architecture, and Systems Programming.
                </p>
                <p>
                  <strong className="text-[#c084fc] font-mono">⚡ Core Technologies: </strong>
                  React, Next.js, TypeScript, Tailwind CSS, Python, C/C++, Node.js, and SQL.
                </p>
              </div>
            )}

            {/* Line 4: Shatter / Crack Button for Read More */}
            <div>
              <button
                type="button"
                onClick={handleReadMoreClick}
                className={`relative inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#00eeff] text-[#070b13] font-bold text-sm tracking-wide shadow-[0_0_25px_#00eeff] hover:shadow-[0_0_40px_#00eeff] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer overflow-visible ${
                  isShattering ? "animate-crack-shake bg-white text-black" : ""
                }`}
                title="Click to shatter and toggle bio details"
              >
                {/* Crack / Shard Overlay */}
                {isShattering && (
                  <div className="absolute inset-0 pointer-events-none z-30 flex items-center justify-center">
                    <svg
                      className="absolute inset-0 w-full h-full text-[#070b13]"
                      viewBox="0 0 80 40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M40 20 L15 5 M40 20 L65 8 M40 20 L75 30 M40 20 L50 38 M40 20 L20 35 M40 20 L8 22" />
                    </svg>
                    <span className="absolute w-2 h-2 bg-white rounded-sm animate-shard-1" />
                    <span className="absolute w-2 h-2 bg-[#d946ef] rounded-sm animate-shard-2" />
                    <span className="absolute w-2.5 h-1.5 bg-[#00eeff] rounded-sm animate-shard-3" />
                    <span className="absolute w-2 h-2 bg-white rounded-sm animate-shard-4" />
                    <span className="absolute w-1.5 h-2 bg-[#38bdf8] rounded-sm animate-shard-5" />
                    <span className="absolute w-2 h-2 bg-[#ec4899] rounded-sm animate-shard-6" />
                  </div>
                )}
                <span>{isExpanded ? "Show Less" : "Read More"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
