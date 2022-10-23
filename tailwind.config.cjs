/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: { max: "640px" },
      laptop: { max: "1024px" },
      desktop: { max: "1024px" },
    },
    extend: {
      width: {
        25: "6.25rem",
      },
      fontSize: {
        6.4: "1.6rem",
      },
      padding: {
        7.5: "1.875rem",
      },
      margin: {
        12.5: "3.125rem",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translate3d(0, 100%, 0)" },
          "100%": { opacity: 1, transform: "translateZ(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 1s ease-in-out",
      },
      fontFamily: {
        Gothic: ["Gothic"],
      },
    },
  },
  plugins: [require("daisyui")],
};
