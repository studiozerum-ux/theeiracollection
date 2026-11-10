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
          black: "#090D12",
          dark: "#10151E",
          card: "#151C27",
          gold: "#C4A47C",
          "gold-light": "#DFC3A0",
          muted: "#8F97A3",
          border: "#E8E7E3",
          "border-dark": "rgba(255, 255, 255, 0.08)",
          sand: "#F9F9F8",
          subtle: "#F4F3F0",
        },
      },
      fontFamily: {
        serif: ["'Instrument Serif'", "Georgia", "serif"],
        sans: ["'Plus Jakarta Sans'", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      letterSpacing: {
        widest: ".25em",
      },
    },
  },
  plugins: [],
};
