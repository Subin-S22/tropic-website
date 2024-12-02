/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "420px",
      },
      colors: {
        primary: "#BA814B",
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
        },
      },
      aspectRatio: {
        auto: "auto",
        square: "1 / 1",
        video: "16 / 9",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
