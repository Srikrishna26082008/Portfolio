import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: "#00eeff",
          blue: "#00a2ff",
        },
        tech: {
          dark: "#0b0f19",
          card: "#1f242d",
          border: "#2a3240",
          accent: "#00eeff",
        },
      },
      boxShadow: {
        "neon-cyan": "0 0 20px rgba(0, 238, 255, 0.6)",
        "neon-cyan-lg": "0 0 35px rgba(0, 238, 255, 0.8)",
      },
    },
  },
  plugins: [],
};

export default config;
