import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "kdh-deep-black": "#05060A",
        "kdh-charcoal": "#12131A",
        "kdh-neon-purple": "#A259FF",
        "kdh-electric-blue": "#3A86FF",
        "kdh-bloody-red": "#EF233C",
        "kdh-metallic-silver": "#ADB5BD",
        "kdh-ember": "#FF6D00",
      },
      fontFamily: {
        sans: ["Inter", "Pretendard", "sans-serif"],
        display: ["Space Grotesk", "Orbitron", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 35px rgba(162, 89, 255, 0.35)",
        banner: "0 15px 60px rgba(58, 134, 255, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
