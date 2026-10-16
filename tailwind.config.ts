import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"]
      },
      colors: {
        ink: "#111111",
        paper: "#f7f7f5",
        accent: "#b8ff2c"
      },
      boxShadow: {
        soft: "0 20px 70px rgba(0,0,0,.08)"
      }
    }
  },
  plugins: []
};

export default config;