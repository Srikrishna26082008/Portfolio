"use client";

import { useState, useEffect, useRef } from "react";
import { portfolioData } from "../data/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShattering, setIsShattering] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Handle Shatter / Crack effect on button press then toggle drawer
  const handleExploreClick = () => {
    if (isOpen) {
      setIsOpen(false);
      return;
    }

    // Trigger shatter/crack animation
    setIsShattering(true);

    // After crack/shatter burst (~280ms), open the drawer dropping down
    setTimeout(() => {
      setIsOpen(true);
      setIsShattering(false);
    }, 280);
  };

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    {
      id: "about",
      label: "About Me",
      description: "Background, CS journey & systems focus",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      id: "projects",
      label: "About My Projects",
      description: "DevFlow, AI Matcher & PulseChat",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      id: "hackathons-certificates",
      label: "Hackathons and Certificates",
      description: "GSoC Finalist, NVIDIA 1st & Verified Badges",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      id: "skills",
      label: "Skills",
      description: "Frontend, Backend & Systems Toolkit",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: "contact",
      label: "Contact Me",
      description: "Direct email, socials & message form",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#070b13]/90 border-b border-slate-800/80 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* ================= TOP LEFT CORNER: EXPLORE BUTTON (SYMBOL ONLY WITH SHATTER EFFECT) ================= */}
            <div className="relative" ref={menuRef}>
              <button
                type="button"
                onClick={handleExploreClick}
                className={`relative group p-3 rounded-2xl border transition-all duration-300 overflow-visible cursor-pointer ${
                  isShattering ? "animate-crack-shake border-[#00eeff] bg-[#00eeff]/20" : ""
                } ${
                  isOpen
                    ? "bg-[#162232] border-[#00eeff] text-[#00eeff] shadow-[0_0_20px_rgba(0,238,255,0.6)]"
                    : "bg-[#0c121e]/90 hover:bg-[#141d2c] border-slate-700/80 hover:border-[#00eeff] text-slate-200 hover:text-[#00eeff] shadow-[0_0_15px_rgba(0,238,255,0.2)]"
                }`}
                aria-expanded={isOpen}
                aria-label="Navigation Menu Symbol"
                title="Open Navigation"
              >
                {/* Visual Glass Shatter / Crack Overlay on Click */}
                {isShattering && (
                  <div className="absolute inset-0 pointer-events-none z-30 flex items-center justify-center">
                    {/* Glowing Crack Fracture SVG */}
                    <svg
                      className="absolute inset-0 w-full h-full text-[#00eeff] drop-shadow-[0_0_8px_#00eeff]"
                      viewBox="0 0 40 40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M20 20 L5 8 M20 20 L35 6 M20 20 L38 28 M20 20 L24 38 M20 20 L7 34 M20 20 L2 22 M8 15 L14 18 M28 12 L34 19 M12 28 L18 25 M26 27 L32 34" />
                    </svg>
                    {/* Exploding Shard Particles */}
                    <span className="absolute w-2 h-2 bg-[#00eeff] rounded-sm animate-shard-1 shadow-[0_0_8px_#00eeff]" />
                    <span className="absolute w-2 h-2 bg-[#d946ef] rounded-sm animate-shard-2 shadow-[0_0_8px_#d946ef]" />
                    <span className="absolute w-2.5 h-1.5 bg-white rounded-sm animate-shard-3 shadow-[0_0_8px_#fff]" />
                    <span className="absolute w-2 h-2 bg-[#00eeff] rounded-sm animate-shard-4 shadow-[0_0_8px_#00eeff]" />
                    <span className="absolute w-1.5 h-2 bg-[#38bdf8] rounded-sm animate-shard-5 shadow-[0_0_8px_#38bdf8]" />
                    <span className="absolute w-2 h-2 bg-[#ec4899] rounded-sm animate-shard-6 shadow-[0_0_8px_#ec4899]" />
                  </div>
                )}

                {/* ONLY SYMBOL (No Name "Explore") */}
                <div className="flex items-center gap-1.5">
                  <span className="flex flex-col justify-center gap-1 w-5 h-4">
                    <span
                      className={`h-0.5 rounded-full bg-current transition-all duration-300 ${
                        isOpen ? "rotate-45 translate-y-1.5 w-5 bg-[#00eeff]" : "w-5"
                      }`}
                    />
                    <span
                      className={`h-0.5 rounded-full bg-current transition-all duration-300 ${
                        isOpen ? "opacity-0 w-5" : "w-3.5 group-hover:w-5"
                      }`}
                    />
                    <span
                      className={`h-0.5 rounded-full bg-current transition-all duration-300 ${
                        isOpen ? "-rotate-45 -translate-y-1.5 w-5 bg-[#00eeff]" : "w-4 group-hover:w-5"
                      }`}
                    />
                  </span>
                  <span className="flex h-2 w-2 rounded-full bg-[#00eeff] shadow-[0_0_8px_#00eeff] group-hover:animate-ping" />
                </div>
              </button>

              {/* ================= LEFT PART DRAWER: DROPS TILL DOWN (FULL HEIGHT SIDEBAR) ================= */}
              {isOpen && (
                <div
                  className="fixed top-0 bottom-0 left-0 w-80 sm:w-96 bg-[#070b13]/98 backdrop-blur-2xl border-r-2 border-[#00eeff]/50 shadow-[20px_0_60px_rgba(0,0,0,0.9),0_0_35px_rgba(0,238,255,0.25)] z-50 flex flex-col justify-between p-5 text-white animate-in slide-in-from-left duration-300"
                  style={{
                    backgroundImage: "radial-gradient(ellipse at top left, rgba(0,238,255,0.15), transparent 70%)",
                  }}
                >
                  {/* Drawer Header */}
                  <div>
                    <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-3 w-3 rounded-full bg-[#00eeff] shadow-[0_0_10px_#00eeff] animate-pulse" />
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00eeff]">
                          Navigation Menu
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="p-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-[#00eeff]/50 transition-colors"
                        aria-label="Close navigation"
                        title="Close (Esc)"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    {/* Navigation Items (Separate Glowing Bars) */}
                    <div className="space-y-2.5">
                      {navItems.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => handleNavClick(item.id)}
                          className="w-full text-left flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/80 hover:bg-[#00eeff]/15 border border-slate-800 hover:border-[#00eeff]/70 group hover:shadow-[0_0_20px_rgba(0,238,255,0.25)] hover:translate-x-1.5 transition-all duration-200 cursor-pointer"
                        >
                          <div className="p-2.5 rounded-lg bg-slate-800/90 text-[#00eeff] group-hover:bg-[#00eeff] group-hover:text-[#070b13] group-hover:scale-110 shadow-sm transition-all duration-200 flex-shrink-0">
                            {item.icon}
                          </div>

                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-white group-hover:text-[#00eeff] transition-colors truncate">
                              {item.label}
                            </p>
                            <p className="text-xs text-slate-400 truncate">
                              {item.description}
                            </p>
                          </div>

                          <svg
                            className="w-4 h-4 text-slate-500 group-hover:text-[#00eeff] group-hover:translate-x-1 transition-all flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* BOTTOM OF EXPLORE: Bottom Title Removed as Requested! */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500 font-mono">
                    <span className="text-[#00eeff]">ONLINE :: SYSTEM ACTIVE</span>
                    <span>ESC to close</span>
                  </div>
                </div>
              )}
            </div>

            {/* ================= RIGHT CORNER: SMALL PROFILE SYMBOL PICTURE ================= */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Optional Name branding */}
              <a
                href="#"
                className="hidden sm:flex items-center space-x-2 text-base font-bold tracking-tight text-white hover:text-[#00eeff] transition-colors"
              >
                <span className="bg-gradient-to-r from-white via-slate-100 to-[#00eeff] bg-clip-text text-transparent">
                  {portfolioData.name}
                </span>
                <span className="text-[#00eeff] font-mono text-xs">.dev</span>
              </a>

              {/* Small Profile Symbol Picture at Right Corner */}
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="relative group block p-0.5 rounded-full bg-gradient-to-tr from-[#00eeff] via-[#c084fc] to-[#f43f5e] shadow-[0_0_15px_rgba(0,238,255,0.5)] hover:shadow-[0_0_25px_#00eeff] hover:scale-110 active:scale-95 transition-all duration-300"
                title={`${portfolioData.name} - View Profile`}
                aria-label="Profile Avatar"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden bg-[#070b13] border border-slate-800">
                  <img
                    src="/profile-avatar.png"
                    alt={portfolioData.name}
                    className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-300"
                  />
                </div>
                {/* Small Online Neon Pulse Dot */}
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#00eeff] border-2 border-[#070b13] shadow-[0_0_8px_#00eeff] animate-pulse" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop overlay when menu is open: clicking aside closes it */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
