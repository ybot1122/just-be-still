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
    },
  },
  plugins: [],
};
export default config;
