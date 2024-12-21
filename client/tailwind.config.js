/** @type {import('tailwindcss').Config} */

export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "rgb(11, 18, 21)",
        paleyellow: "rgb(255, 243, 191)",
        mint: "rgb(97, 219, 204)",
        minthover: "rgb(82, 186, 173)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        default: ["Roboto Mono", "monospace"],
      },
    },
  },
  // corePlugins: {
  //   preflight: false,
  // },
  plugins: [],
};
