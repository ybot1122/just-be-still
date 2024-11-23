import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/@ybot1122/toby-ui/dist/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        forest: "#495a58",
        forestDark: "#33403e",
        text: "#3f4a49",
        transparentBlack: "rgba(0,0,0,0.25)",
      },
      backgroundImage: {
        recipeHeroScrim: "linear-gradient(90deg,rgba(0,0,0,.5) 0,transparent)",
      },
      animation: {
        slideIn: "300ms 1 alternate slidein",
      },
      keyframes: {
        slidein: {
          "0%": { transform: "translateX(50%)" },
          "100%": { transform: "translateX(0px)" },
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
