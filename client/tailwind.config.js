/** @type {import('tailwindcss').Config} */

export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        obsidian: "rgb(11, 18, 21)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        default: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
