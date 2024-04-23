const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#EF5A22",
        "primary-foreground": "#FFFFFF",
        secondary: "#0B434D",
        "secondary-foreground": "#FFFFFF",
      },
      fontFamily: {
        sans: ["Overpass", ...defaultTheme.fontFamily.sans],
        secondary: ["PT Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
