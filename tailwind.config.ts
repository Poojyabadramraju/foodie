import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F27704",
        base :"rgba(156 ,163 ,175, 0.5)",
        glasscolor: "rgba(255, 255, 255, 0.1)", // Light glassy color
        backdrop: "rgba(0, 0, 0, 0.4)", // Dark backdrop color
        secondary: "rgba(156 ,163 ,175, 0.5)",
        glasscolor:"#373A43"
      },
    },
  },
  plugins: [],
};
export default config;
