/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Blue World ── */
        "blue-void": "#050811",
        "blue-grid": "#0B1E38",
        "blue-frame": "#162E54",
        "blue-electric": "#0066FF",
        "blue-data": "#00E5FF",
        "blue-chrome": "#8FA3C7",
        "blue-glass": "#D4E4FC",

        /* ── Orange World ── */
        "orange-asphalt": "#0D0C0B",
        "orange-concrete": "#1F1B18",
        "orange-iron": "#3D332D",
        "orange-molten": "#FF5500",
        "orange-spark": "#FF8800",
        "orange-stencil": "#F5EBE1",

        /* ── Neutral / Intersection ── */
        "center-void": "#090A0E",
        "fissure-core": "#FFF6EE",
      },
      fontFamily: {
        display: ["var(--font-body)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        /* fluid type scale for display headlines */
        "display-hero": ["clamp(3.5rem, 8vw, 10rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem, 5vw, 6rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.75rem, 3.5vw, 3.5rem)", { lineHeight: "1.0", letterSpacing: "-0.015em" }],
        "display-sm": ["clamp(1.25rem, 2vw, 2rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
      },
      spacing: {
        "section": "clamp(6rem, 15vh, 12rem)",
      },
      backgroundImage: {
        "blue-gradient": "radial-gradient(ellipse at 30% 50%, rgba(0,102,255,0.12) 0%, transparent 70%)",
        "orange-gradient": "radial-gradient(ellipse at 70% 50%, rgba(255,85,0,0.12) 0%, transparent 70%)",
      },
      keyframes: {
        "fissure-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "grain": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -10%)" },
          "20%": { transform: "translate(-15%, 5%)" },
          "30%": { transform: "translate(7%, -25%)" },
          "40%": { transform: "translate(-5%, 25%)" },
          "50%": { transform: "translate(-15%, 10%)" },
          "60%": { transform: "translate(15%, 0%)" },
          "70%": { transform: "translate(0%, 15%)" },
          "80%": { transform: "translate(3%, 35%)" },
          "90%": { transform: "translate(-10%, 10%)" },
        },
      },
      animation: {
        "fissure-glow": "fissure-glow 3s ease-in-out infinite",
        "grain": "grain 8s steps(10) infinite",
      },
    },
  },
  plugins: [],
};
