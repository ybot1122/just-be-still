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
        forestDark: "rgba(51,64,62,1)",
        text: "#3f4a49",
        transparentBlack: "rgba(0,0,0,0.25)",
      },
      backgroundImage: {
        nav: "linear-gradient(180deg,rgba(51,64,62,1), rgba(51,64,62,.7) 80%,transparent)",
        recipeHeroScrim: "linear-gradient(90deg,rgba(0,0,0,.5) 0,transparent)",
      },
      screens: {
        tall: { raw: "(min-height: 525px)" },
      },
    },
  },
  plugins: [],
};
export default config;
