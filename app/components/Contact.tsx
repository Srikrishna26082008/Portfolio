"use client";

import { useState } from "react";
import { portfolioData } from "../data/portfolio";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isShattering, setIsShattering] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsShattering(true);
    setTimeout(() => {
      setIsShattering(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 280);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative scroll-mt-20">
      {/* Background Glow */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00eeff]/10 blur-[150px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center sm:text-left mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#00eeff] uppercase tracking-widest mb-2">
            <span className="h-px w-6 bg-[#00eeff]" />
            <span>05. Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contact <span className="text-[#00eeff]">Me</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
            Have a project in mind, an opportunity, or just want to collaborate? Send a message or connect directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details & Social Links Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#090d16]/90 border border-slate-800 shadow-[0_0_30px_rgba(0,0,0,0.8)] backdrop-blur-md">
              <h3 className="text-xl font-semibold text-white mb-4">
                Contact Information
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                I am actively seeking software engineering opportunities and open-source collaborations. Feel free to shoot me an email directly or reach out via social platforms.
              </p>

              {/* Email Card with Copy Action */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 mb-6">
                <span className="block text-xs font-mono text-[#00eeff] uppercase mb-1">
                  Email Address
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${portfolioData.email}`}
                    className="text-sm sm:text-base font-mono text-cyan-300 hover:text-white truncate transition-colors"
                  >
                    {portfolioData.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="px-3 py-1.5 rounded-xl text-xs font-mono font-bold text-[#00eeff] bg-[#00eeff]/10 hover:bg-[#00eeff] hover:text-[#070b13] border border-[#00eeff]/40 transition-all cursor-pointer"
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <span className="block text-xs font-mono text-slate-400 uppercase mb-3">
                  Find Me Online
                </span>
                <div className="flex items-center gap-3">
                  {/* GitHub */}
                  <a
                    href={portfolioData.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border-2 border-[#00eeff] text-[#00eeff] flex items-center justify-center hover:bg-[#00eeff] hover:text-[#070b13] shadow-[0_0_12px_rgba(0,238,255,0.4)] transition-all"
                    title="GitHub"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={portfolioData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border-2 border-[#00eeff] text-[#00eeff] flex items-center justify-center hover:bg-[#00eeff] hover:text-[#070b13] shadow-[0_0_12px_rgba(0,238,255,0.4)] transition-all"
                    title="LinkedIn"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </a>

                  {/* Twitter / X */}
                  <a
                    href={portfolioData.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border-2 border-[#00eeff] text-[#00eeff] flex items-center justify-center hover:bg-[#00eeff] hover:text-[#070b13] shadow-[0_0_12px_rgba(0,238,255,0.4)] transition-all"
                    title="Twitter / X"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#090d16]/90 border border-slate-800 shadow-[0_0_30px_rgba(0,0,0,0.8)] backdrop-blur-md">
              <h3 className="text-xl font-semibold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-sm text-slate-400 mb-6">
                Fill out the form below and I&apos;ll get back to you promptly.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-sm flex items-center gap-3 animate-in fade-in duration-300">
                  <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00eeff] focus:ring-1 focus:ring-[#00eeff] transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00eeff] focus:ring-1 focus:ring-[#00eeff] transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Srikrishna, let's talk about..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00eeff] focus:ring-1 focus:ring-[#00eeff] transition-all resize-none"
                  />
                </div>

                {/* Send Button with Shatter Crack Effect */}
                <button
                  type="submit"
                  className={`relative w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm font-bold text-[#070b13] bg-[#00eeff] hover:bg-cyan-300 rounded-2xl shadow-[0_0_25px_#00eeff] hover:shadow-[0_0_40px_#00eeff] hover:scale-[1.01] active:scale-[0.98] transition-all duration-200 cursor-pointer overflow-visible ${
                    isShattering ? "animate-crack-shake bg-white text-black" : ""
                  }`}
                >
                  {isShattering && (
                    <div className="absolute inset-0 pointer-events-none z-30 flex items-center justify-center">
                      <svg
                        className="absolute inset-0 w-full h-full text-[#070b13]"
                        viewBox="0 0 100 40"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M50 20 L20 5 M50 20 L80 8 M50 20 L90 30 M50 20 L60 38 M50 20 L25 35 M50 20 L10 22" />
                      </svg>
                      <span className="absolute w-2.5 h-2.5 bg-white rounded-sm animate-shard-1" />
                      <span className="absolute w-2.5 h-2.5 bg-[#d946ef] rounded-sm animate-shard-2" />
                      <span className="absolute w-3 h-2 bg-[#00eeff] rounded-sm animate-shard-3" />
                      <span className="absolute w-2.5 h-2.5 bg-white rounded-sm animate-shard-4" />
                      <span className="absolute w-2 h-2.5 bg-[#38bdf8] rounded-sm animate-shard-5" />
                      <span className="absolute w-2.5 h-2.5 bg-[#ec4899] rounded-sm animate-shard-6" />
                    </div>
                  )}
                  <span>Send Message</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
