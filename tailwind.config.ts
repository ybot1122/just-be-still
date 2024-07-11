import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        forest: "#495a58",
        text: "#3f4a49",
        transparentBlack: "rgba(0,0,0,0.25)",
      },
      backgroundImage: {
        recipeHeroScrim: "linear-gradient(90deg,rgba(0,0,0,.5) 0,transparent)",
      },
      animation: {
        slideIn: "300ms 1 alternate slidein",
        closePlus: "100ms 1 linear closePlus",
        openPlus: "100ms 1 linear openPlus",
      },
      keyframes: {
        slidein: {
          "0%": { transform: "translateX(50%)" },
          "100%": { transform: "translateX(0px)" },
        },
        closePlus: {
          "0%": { transform: "rotate(90deg)" },
          "100%": { transform: "rotate(0)" },
        },
        openPlus: {
          "0%": { transform: "rotate(0)" },
          "100%": { transform: "rotate(90deg)" },
        },
      },
      screens: {
        tall: { raw: "(min-height: 525px)" },
      },
    },
  },
  plugins: [],
};
export default config;
