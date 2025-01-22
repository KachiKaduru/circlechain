/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        dark: "#010010",
        green: "#73FDAA",
        gradient:
          "linear-gradient(270deg, rgba(115, 253, 170, 0.89) 0%, rgba(196, 196, 196, 0) 100%);",
      },
    },
  },
  plugins: [],
};
