import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neos: {
          black: "#0A0A0A",
          red: "#C41E3A",
          "red-bright": "#E53935",
          "red-dark": "#8B1A1A",
          gray: "#9CA3AF",
          "gray-dark": "#1A1A1A",
        },
      },
      fontFamily: {
        heading: ["var(--font-bebas-neue)", "sans-serif"],
        body: ["var(--font-noto-sans-jp)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
