"use client";

import { useState } from "react";
import { portfolioData } from "../data/portfolio";

export default function Hero() {
  const [isShattering, setIsShattering] = useState(false);

  const handleTalkClick = () => {
    setIsShattering(true);
    setTimeout(() => {
      setIsShattering(false);
      const contactElem = document.getElementById("contact");
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: "smooth" });
      }
    }, 280);
  };

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden border-b border-slate-800/80 bg-[#070b13]">
      {/* ================= FULL SCREEN CYBER BACKGROUND ================= */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-40 mix-blend-screen"
        style={{
          backgroundImage: "url('/cyber-bg.jpg')",
        }}
        aria-hidden="true"
      />

      {/* Cyber Ambient Lighting Orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00eeff]/12 blur-[160px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#d946ef]/12 blur-[160px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* ================= FULL WEBPAGE HERO CONTENT ================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* ================= FIRST POSITION: THE CODER BOY IMAGE (SCALED FULL SCREEN) ================= */}
          <div className="lg:col-span-6 flex justify-center items-center order-1">
            <div className="relative group w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[500px]">
              {/* Outer Neon Glow Aura */}
              <div
                className="absolute -inset-3 bg-gradient-to-tr from-[#00eeff]/40 via-[#c084fc]/30 to-[#f43f5e]/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                aria-hidden="true"
              />

              {/* Corner Tech Badges */}
              <div className="absolute -top-3 -right-3 z-20 px-3 py-1 rounded-xl bg-[#070b13]/90 border border-[#d946ef] text-[#d946ef] text-xs font-mono shadow-[0_0_15px_rgba(217,70,239,0.5)] flex items-center gap-1.5 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#d946ef] animate-ping" />
                <span>&lt;/&gt; SYSTEMS_ENGINEER</span>
              </div>

              <div className="absolute -bottom-3 -left-3 z-20 px-3 py-1 rounded-xl bg-[#070b13]/90 border border-[#00eeff] text-[#00eeff] text-xs font-mono shadow-[0_0_15px_rgba(0,238,255,0.5)] flex items-center gap-1.5 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#00eeff] animate-pulse" />
                <span>CYBER_WORKSPACE :: READY</span>
              </div>

              {/* Main Photo Card Container */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#00eeff]/60 bg-[#070b13] shadow-[0_0_40px_rgba(0,238,255,0.3),0_20px_40px_rgba(0,0,0,0.85)] group-hover:border-[#00eeff] group-hover:shadow-[0_0_55px_rgba(0,238,255,0.5)] transition-all duration-500">
                <img
                  src="/hero-coder.png"
                  alt="H S Srikrishna - Anime Coder Workspace"
                  className="w-full h-auto object-cover object-top select-none group-hover:scale-105 transition-transform duration-700"
                />

                {/* Cyber Gradient Overlay at the bottom edge */}
                <div
                  className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#070b13] via-[#070b13]/60 to-transparent pointer-events-none"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          {/* ================= SECOND PART: TYPOGRAPHY, BIO, SHATTER BUTTON & SOCIALS ================= */}
          <div className="lg:col-span-6 relative z-10 text-left order-2">
            {/* Signature Template Heading */}
            <div className="mb-4">
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-white leading-none">
                MY NAME
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight my-1 text-white">
                IS{" "}
                <span className="text-[#00eeff] drop-shadow-[0_0_18px_rgba(0,238,255,0.7)]">
                  H
                </span>{" "}
                <span className="text-[#c084fc] drop-shadow-[0_0_18px_rgba(192,132,252,0.7)]">
                  S
                </span>
              </span>
              <span className="block text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none drop-shadow-[0_4px_25px_rgba(0,0,0,0.85)]">
                SRIKRISHNA
                <span className="text-[#00eeff] animate-pulse">...</span>
              </span>
            </div>

            {/* Subtitle / Role (Template Format) */}
            <h2 className="text-base sm:text-lg lg:text-xl font-bold text-slate-200 mb-5 flex items-center gap-2">
              <span className="text-amber-400 text-lg">⚡</span>
              <span>
                CS Student &amp; Full-Stack Web Developer based in{" "}
                <span className="text-[#00eeff] underline decoration-[#00eeff] decoration-2 underline-offset-4 font-bold">
                  India
                </span>
              </span>
            </h2>

            {/* Bio summary paragraph with Template highlighted colors */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mb-7 font-normal">
              CS student who loves building modern{" "}
              <span className="text-[#00eeff] font-medium">
                web apps &amp; high-performance software.
              </span>{" "}
              I specialize in engineering clean, accessible, and high-performance digital applications,
              combining core systems{" "}
              <span className="text-[#f43f5e] font-medium">
                programming
              </span>{" "}
              with{" "}
              <span className="text-[#c084fc] font-medium">
                modern frontend frameworks.
              </span>
            </p>

            {/* Action Buttons & Social Strip */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              {/* "Let's talk with me 👋" Button (With Interactive Glass Crack / Shatter Animation!) */}
              <button
                type="button"
                onClick={handleTalkClick}
                className={`relative inline-flex items-center gap-3 px-7 sm:px-8 py-3.5 rounded-2xl bg-[#090d16] border-2 border-[#00eeff] text-white font-bold text-sm sm:text-base tracking-wide shadow-[0_0_25px_rgba(0,238,255,0.45)] hover:shadow-[0_0_40px_#00eeff] hover:bg-[#00eeff]/10 hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer overflow-visible ${
                  isShattering ? "animate-crack-shake bg-[#00eeff]/20" : ""
                }`}
                title="Click to shatter and open Contact"
              >
                {/* Visual Glass Crack / Shatter Particles Overlay */}
                {isShattering && (
                  <div className="absolute inset-0 pointer-events-none z-30 flex items-center justify-center">
                    <svg
                      className="absolute inset-0 w-full h-full text-white drop-shadow-[0_0_10px_#00eeff]"
                      viewBox="0 0 100 40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M50 20 L20 5 M50 20 L80 8 M50 20 L90 30 M50 20 L60 38 M50 20 L25 35 M50 20 L10 22 M30 12 L40 18 M65 14 L75 22 M35 28 L45 25 M60 26 L70 34" />
                    </svg>
                    <span className="absolute w-2.5 h-2.5 bg-[#00eeff] rounded-sm animate-shard-1 shadow-[0_0_10px_#00eeff]" />
                    <span className="absolute w-2.5 h-2.5 bg-[#d946ef] rounded-sm animate-shard-2 shadow-[0_0_10px_#d946ef]" />
                    <span className="absolute w-3 h-2 bg-white rounded-sm animate-shard-3 shadow-[0_0_10px_#fff]" />
                    <span className="absolute w-2.5 h-2.5 bg-[#00eeff] rounded-sm animate-shard-4 shadow-[0_0_10px_#00eeff]" />
                    <span className="absolute w-2 h-2.5 bg-[#38bdf8] rounded-sm animate-shard-5 shadow-[0_0_10px_#38bdf8]" />
                    <span className="absolute w-2.5 h-2.5 bg-[#ec4899] rounded-sm animate-shard-6 shadow-[0_0_10px_#ec4899]" />
                  </div>
                )}

                <span>Let&apos;s talk with me</span>
                <span className="group-hover:rotate-12 transition-transform text-lg">👋</span>
              </button>

              {/* 3 Circular Social Media Icons (Git, Twitter, LinkedIn) */}
              <div className="flex items-center gap-3">
                {/* GitHub */}
                <a
                  href={portfolioData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border-2 border-[#00eeff] text-[#00eeff] flex items-center justify-center hover:bg-[#00eeff] hover:text-[#070b13] shadow-[0_0_15px_rgba(0,238,255,0.4)] hover:shadow-[0_0_25px_#00eeff] hover:scale-110 active:scale-95 transition-all duration-300"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                </a>

                {/* Twitter / X */}
                <a
                  href={portfolioData.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border-2 border-[#00eeff] text-[#00eeff] flex items-center justify-center hover:bg-[#00eeff] hover:text-[#070b13] shadow-[0_0_15px_rgba(0,238,255,0.4)] hover:shadow-[0_0_25px_#00eeff] hover:scale-110 active:scale-95 transition-all duration-300"
                  aria-label="Twitter Profile"
                  title="Twitter / X Profile"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href={portfolioData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border-2 border-[#00eeff] text-[#00eeff] flex items-center justify-center hover:bg-[#00eeff] hover:text-[#070b13] shadow-[0_0_15px_rgba(0,238,255,0.4)] hover:shadow-[0_0_25px_#00eeff] hover:scale-110 active:scale-95 transition-all duration-300"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
