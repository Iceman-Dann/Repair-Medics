import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A0D14",
        secondary: "#111420",
        card: "#161B2E",
        accent: "#F97316",
        "accent-glow": "rgba(249, 115, 22, 0.2)",
        "text-primary": "#F8FAFC",
        "text-secondary": "#94A3B8",
        border: "rgba(255,255,255,0.06)",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.03em",
        widest: "0.15em",
      },
      animation: {
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "float-slow": "float 8s ease-in-out 1s infinite",
        "scroll-left": "scrollLeft 40s linear infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "count-up": "countUp 2s ease-out forwards",
        "bounce-slow": "bounceSlow 2s ease-in-out infinite",
        "draw-line": "drawLine 2s ease-out forwards",
        "gradient-shift": "gradientShift 15s ease infinite",
        "marquee": "marquee 30s linear infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(249,115,22,0.3), 0 0 60px rgba(249,115,22,0.1)" },
          "50%": { boxShadow: "0 0 30px rgba(249,115,22,0.5), 0 0 80px rgba(249,115,22,0.2)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
        },
        drawLine: {
          "0%": { height: "0%" },
          "100%": { height: "100%" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundSize: {
        "200%": "200% 200%",
      },
    },
  },
  plugins: [],
};
export default config;
