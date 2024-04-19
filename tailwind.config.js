const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: "#DB5F19",
        "primary-foreground": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
