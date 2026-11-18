import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "H S Srikrishna | CS Student & Full-Stack Developer",
  description:
    "Portfolio of H S Srikrishna - CS Student & Full-Stack Web Developer. Engineering clean, accessible, and high-performance digital applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#070b13] text-slate-100 antialiased selection:bg-[#00eeff]/30 selection:text-[#00eeff]">
        {/* ================= WHOLE WEBPAGE 2ND IMAGE CYBERPUNK BACKGROUND ================= */}
        <div
          className="fixed inset-0 pointer-events-none -z-50 bg-cover bg-center bg-fixed opacity-40 mix-blend-screen"
          style={{
            backgroundImage: "url('/cyber-bg.jpg')",
          }}
          aria-hidden="true"
        />

        {/* Ambient deep dark gradient vignette for readable content contrast */}
        <div
          className="fixed inset-0 pointer-events-none -z-40 bg-gradient-to-b from-[#070b13]/85 via-[#070b13]/60 to-[#070b13]/90"
          aria-hidden="true"
        />

        <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
