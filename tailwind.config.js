/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./public/**/*.{html, js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        xs: "480px",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      colors: {
        primary: "#70A43C",
        secondary: "#FEBD00",
        background: "#F8FBF5",
        dark: "#2C3722",
        "dark-500": "#404040",
        "dark-250": "#808080",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-gradient": (angle) => ({
            "background-image": `linear-gradient(${angle}, var(--tw-gradient-stops))`,
          }),
        },
        {
          values: Object.assign(theme("bgGradientDeg", {}), {
            45: "45deg",
          }),
        }
      );
    }),
  ],
};
