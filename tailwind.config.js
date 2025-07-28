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
      keyframes: {
        bounceRight: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(8px)" },
        },
        floatFirst: {
          "0%": { transform: "translateY(0) rotate(0deg)" },
          "10%": { transform: "translateY(-4px) rotate(2deg)" },
          "20%": { transform: "translateY(-8px) rotate(4deg)" },
          "30%": { transform: "translateY(-12px) rotate(2deg)" },
          "40%": { transform: "translateY(-16px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(-2deg)" },
          "60%": { transform: "translateY(-8px) rotate(-4deg)" },
          "70%": { transform: "translateY(-4px) rotate(-6deg)" },
          "80%": { transform: "translateY(0) rotate(-4deg)" },
          "90%": { transform: "translateY(4px) rotate(-2deg)" },
          "100%": { transform: "translateY(0) rotate(0deg)" },
        },
        floatSecond: {
          "0%": { transform: "translateY(0) rotate(0deg)" },
          "10%": { transform: "translateY(-3px) rotate(-3deg)" },
          "20%": { transform: "translateY(-6px) rotate(-6deg)" },
          "30%": { transform: "translateY(-3px) rotate(-9deg)" },
          "40%": { transform: "translateY(0px) rotate(-12deg)" },
          "50%": { transform: "translateY(3px) rotate(-9deg)" },
          "60%": { transform: "translateY(6px) rotate(-6deg)" },
          "70%": { transform: "translateY(9px) rotate(-3deg)" },
          "80%": { transform: "translateY(6px) rotate(0deg)" },
          "90%": { transform: "translateY(3px) rotate(3deg)" },
          "100%": { transform: "translateY(0) rotate(0deg)" },
        },
        floatThird: {
          "0%": { transform: "translateY(0) rotate(0deg)" },
          "10%": { transform: "translateY(5px) rotate(4deg)" },
          "20%": { transform: "translateY(10px) rotate(8deg)" },
          "30%": { transform: "translateY(15px) rotate(12deg)" },
          "40%": { transform: "translateY(10px) rotate(16deg)" },
          "50%": { transform: "translateY(5px) rotate(12deg)" },
          "60%": { transform: "translateY(0px) rotate(8deg)" },
          "70%": { transform: "translateY(-5px) rotate(4deg)" },
          "80%": { transform: "translateY(-10px) rotate(0deg)" },
          "90%": { transform: "translateY(-5px) rotate(-4deg)" },
          "100%": { transform: "translateY(0) rotate(0deg)" },
        },
      },
      animation: {
        bounceRight: "bounceRight 0.6s infinite",
        floatFirst: "floatFirst 4s linear infinite",
        floatSecond: "floatSecond 13s linear infinite",
        floatThird: "floatThird 7s linear infinite",
        floatFourth: "floatFirst 3s linear infinite",
        floatFifth: "floatSecond 5s linear infinite",
        floatSixth: "floatThird 11s linear infinite",
      },
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
