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
          red: "#E50914",
          "red-bright": "#FF1A25",
          "red-dark": "#B20710",
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
  plugins: [require("@tailwindcss/typography")],
};

export default config;
