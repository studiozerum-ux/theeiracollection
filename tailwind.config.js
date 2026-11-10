/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        eira: {
          black: "#0A0D11",
          dark: "#12161D",
          card: "#161B24",
          gold: "#C5A57D",
          "gold-light": "#DFCBB0",
          "gold-muted": "#8E7554",
          muted: "#7A828E",
          faint: "#A5ACB8",
          border: "rgba(20, 24, 33, 0.08)",
          "border-subtle": "rgba(20, 24, 33, 0.04)",
          "border-dark": "rgba(255, 255, 255, 0.07)",
          alabaster: "#FCFCFA",
          sand: "#F7F5F0",
          subtle: "#F2EFE8",
          ecru: "#ECE8DF",
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
