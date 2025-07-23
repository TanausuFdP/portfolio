import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        karla: ["var(--font-karla)"],
        quicksand: ["var(--font-quicksand)"],
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
    keyframes: {
      bounceRight: {
        "0%, 100%": { transform: "translateX(0)" },
        "50%": { transform: "translateX(8px)" },
      },
    },
    animation: {
      bounceRight: "bounceRight 0.6s infinite",
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            background: "#F9F9F9",
          },
        },
        dark: {
          colors: {
            background: "#000000",
          },
        },
      },
    }),
  ],
};

module.exports = config;
