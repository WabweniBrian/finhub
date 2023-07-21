/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "600px",
      md: "900px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        poppins: "poppins",
        questrial: "Questrial",
      },
      colors: {
        primary: "#ef4444",
        secondary: "#4EC579",
        tertiary: "#FF6370",
        secondaryYellow: "#F4CC0A",
        secondaryBlue: "#2984FF",
        "main-bg": "#f5f5f9",
      },
      gridTemplateColumns: {
        "16-auto": "250px calc(100% - 250px)",
        "minmax-uto-200": "repeat(auto-fit, minmax(200px, 1fr))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".text-muted": {
          opacity: 0.8,
        },
        ".transition-a": {
          transition: "all 0.3s ease-in-out",
        },
        ".input-shadow": {
          boxShadow: "0 0 0 1000px #f5f5f9 inset !important",
        },
        ".inputAutofillColor": {
          "-webkit-text-fill-color": "#ccc",
        },
        ".flex-center-center": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        ".flex-center-between": {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        },
        ".flex-align-center": {
          display: "flex",
          alignItems: "center",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
