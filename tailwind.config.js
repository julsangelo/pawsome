/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["Pacifico"],
        nunito: ["Nunito"],
      },
      colors: {
        darkbrown: "#d4a373",
        brown: "#faedcd",
        lightbrown: "#fefae0",
      },
    },
  },
  plugins: [],
};
