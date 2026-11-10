/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        eira: {
          // Nordic Deep Dark (pitch Arctic night, deep granite slate)
          black: "#06080C",
          dark: "#0D1117",
          card: "#121720",
          "card-hover": "#19212D",

          // Cool Nordic Metals & Accents (Platinum, Arctic Silver, Glacial Ice)
          platinum: "#94A3B8",
          silver: "#CBD5E1",
          ice: "#E2E8F0",
          frost: "#F1F5F9",
          
          // Re-mapped gold to cool platinum/slate to eliminate warm yellow brass
          gold: "#94A3B8",
          "gold-light": "#E2E8F0",
          "gold-muted": "#64748B",

          // Crisp Cool Editorial Canvas (replacing warm sand/alabaster/ecru)
          canvas: "#F8F9FA",
          surface: "#FFFFFF",
          panel: "#F1F4F8",
          subtle: "#E9EEF4",
          zinc: "#DDE3EA",
          
          // Backward-compatible aliases mapped to cool palette
          sand: "#F1F4F8",
          alabaster: "#F8F9FA",
          ecru: "#DDE3EA",

          // High-contrast slate typography
          muted: "#64748B",
          faint: "#94A3B8",

          // Razor-sharp cool hairline borders
          border: "rgba(15, 23, 42, 0.08)",
          "border-subtle": "rgba(15, 23, 42, 0.04)",
          "border-dark": "rgba(255, 255, 255, 0.08)",
          "border-dark-hover": "rgba(255, 255, 255, 0.18)",
        },
      },
      fontFamily: {
        serif: ["'Instrument Serif'", "Georgia", "serif"],
        sans: ["'Plus Jakarta Sans'", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      letterSpacing: {
        delicate: ".22em",
        wideest: ".32em",
      },
    },
  },
  plugins: [],
};
