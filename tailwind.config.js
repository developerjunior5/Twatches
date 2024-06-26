/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#1E3F20",
        grey: "#616060",
        secondary: "#231f20",
      },
      fontFamily: {
        Rubik: ["Rubik", ...defaultTheme.fontFamily.sans],
        Modern: ["Modern Antiqua", ...defaultTheme.fontFamily.sans],
        Poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
