"use client";

import { useState } from "react";
import { portfolioData } from "../data/portfolio";

export default function HackathonsCertificates() {
  const [selectedHackIdx, setSelectedHackIdx] = useState(0);
  const [selectedCertIdx, setSelectedCertIdx] = useState(0);
  const [activeTab, setActiveTab] = useState<"hack" | "cert">("hack");

  return (
    <section
      id="hackathons-certificates"
      className="py-20 sm:py-28 relative scroll-mt-20 border-b border-slate-800/80"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#00eeff]/10 blur-[150px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#d946ef]/10 blur-[150px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#00eeff] uppercase tracking-widest mb-2.5">
            <span className="h-px w-8 bg-[#00eeff]" />
            <span>04. Credentials &amp; Competitions</span>
            <span className="h-px w-8 bg-[#00eeff]" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Hackathons &amp; <span className="text-[#00eeff]">Certificates</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
            Distinctions and credentials from Google Summer of Code, NVIDIA, and Meta.
          </p>
        </div>

        {/* ================= 2 SQUARE BOXES BESIDE EACH OTHER ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {/* ================= SQUARE BOX 1 (LEFT): HACKATHONS ================= */}
          <div className="relative group rounded-3xl p-6 sm:p-8 bg-[#090d16]/95 backdrop-blur-xl border-2 border-[#00eeff]/60 hover:border-[#00eeff] shadow-[0_0_30px_rgba(0,238,255,0.2),0_15px_35px_rgba(0,0,0,0.8)] hover:shadow-[0_0_45px_rgba(0,238,255,0.4)] transition-all duration-300 flex flex-col justify-between aspect-square">
            {/* Ambient Corner Accents */}
            <div className="absolute top-3 right-3 text-[10px] font-mono text-[#00eeff] px-2 py-0.5 rounded border border-[#00eeff]/40 bg-[#00eeff]/10">
              BOX 01 :: AWARDS
            </div>

            {/* Header inside Square Box */}
            <div>
              <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                <span className="text-3xl">🏆</span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Featured <span className="text-[#00eeff]">Hackathons</span>
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    Global Competitions &amp; Open Source
                  </p>
                </div>
              </div>

              {/* Selector Tabs for items inside square */}
              <div className="flex gap-2 mt-4">
                {portfolioData.hackathons.map((hack, idx) => (
                  <button
                    key={hack.id}
                    type="button"
                    onClick={() => setSelectedHackIdx(idx)}
                    className={`flex-1 py-1.5 px-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                      selectedHackIdx === idx
                        ? "bg-[#00eeff] text-[#070b13] shadow-[0_0_12px_#00eeff]"
                        : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-[#00eeff]/40"
                    }`}
                  >
                    0{idx + 1}. {hack.event.split(" ")[0]}
                  </button>
                ))}
              </div>

              {/* Displayed Hackathon Details */}
              <div className="mt-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800/90 min-h-[160px] flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                      <span>{portfolioData.hackathons[selectedHackIdx].icon}</span>
                      <span>{portfolioData.hackathons[selectedHackIdx].title}</span>
                    </h4>
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-[#00eeff]/15 text-[#00eeff] border border-[#00eeff]/40 flex-shrink-0">
                      {portfolioData.hackathons[selectedHackIdx].result}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                    {portfolioData.hackathons[selectedHackIdx].description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800">
                  {portfolioData.hackathons[selectedHackIdx].tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Status strip */}
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="text-[#00eeff]">★ Verified Contributor</span>
              <span>Year {portfolioData.hackathons[selectedHackIdx].year}</span>
            </div>
          </div>

          {/* ================= SQUARE BOX 2 (RIGHT): CERTIFICATES ================= */}
          <div className="relative group rounded-3xl p-6 sm:p-8 bg-[#090d16]/95 backdrop-blur-xl border-2 border-[#d946ef]/60 hover:border-[#d946ef] shadow-[0_0_30px_rgba(217,70,239,0.2),0_15px_35px_rgba(0,0,0,0.8)] hover:shadow-[0_0_45px_rgba(217,70,239,0.4)] transition-all duration-300 flex flex-col justify-between aspect-square">
            {/* Ambient Corner Accents */}
            <div className="absolute top-3 right-3 text-[10px] font-mono text-[#d946ef] px-2 py-0.5 rounded border border-[#d946ef]/40 bg-[#d946ef]/10">
              BOX 02 :: CREDENTIALS
            </div>

            {/* Header inside Square Box */}
            <div>
              <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                <span className="text-3xl">📜</span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Verified <span className="text-[#d946ef]">Certificates</span>
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    Official Issuer Verification
                  </p>
                </div>
              </div>

              {/* Selector Tabs for items inside square */}
              <div className="flex gap-2 mt-4">
                {portfolioData.certificates.map((cert, idx) => (
                  <button
                    key={cert.id}
                    type="button"
                    onClick={() => setSelectedCertIdx(idx)}
                    className={`flex-1 py-1.5 px-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                      selectedCertIdx === idx
                        ? "bg-[#d946ef] text-white shadow-[0_0_12px_#d946ef]"
                        : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-[#d946ef]/40"
                    }`}
                  >
                    0{idx + 1}. {cert.issuer.split(" ")[0]}
                  </button>
                ))}
              </div>

              {/* Displayed Certificate Details */}
              <div className="mt-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800/90 min-h-[160px] flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-white">
                        {portfolioData.certificates[selectedCertIdx].title}
                      </h4>
                      <p className="text-xs text-[#d946ef] font-mono mt-0.5">
                        {portfolioData.certificates[selectedCertIdx].issuer} • {portfolioData.certificates[selectedCertIdx].issueDate}
                      </p>
                    </div>

                    <a
                      href={portfolioData.certificates[selectedCertIdx].verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded-lg bg-[#d946ef]/15 text-[#d946ef] border border-[#d946ef]/40 hover:bg-[#d946ef] hover:text-white text-xs font-bold transition-all flex items-center gap-1 flex-shrink-0"
                    >
                      <span>Verify</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                    Validated specialisation with verified competence in core architecture, engineering frameworks, and systems computing.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800">
                  {portfolioData.certificates[selectedCertIdx].tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-purple-300 border border-purple-900/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Status strip */}
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="text-[#d946ef]">✓ {portfolioData.certificates[selectedCertIdx].badge}</span>
              <span className="text-emerald-400">STATUS :: ACTIVE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
