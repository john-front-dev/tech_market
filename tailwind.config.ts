import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./entities/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#3DD3CA",
        gren: "#00AF66",
        black: "#222222",
        blue: "#3E75A8",
        alabaster: {
          100: "#73787D",
          200: "#ECF0F3",
          300: "#dcD0F3",
        },
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1128px",
    },
  },
  plugins: [
    // function ({ addUtilities }) {
    //   const newUtilities = {
    //     ".no-scrollbar::-webkit-scrollbar": {
    //       display: "none",
    //     },
    //     ".no-scrollbar": {
    //       "-ms-overflow-style": "none",
    //       "scrollbar-width": "none",
    //     },
    //   };
    //   addUtilities(newUtilities);
    // },
  ],
};
export default config;
