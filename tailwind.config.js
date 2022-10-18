/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    boxShadow: {
      shadow1: "0 1px 1px rgb(0 0 0 / 10%)",
      shadow2: "0 1px 6px rgb(32 33 36 / 28%)",
    },

    fontFamily: {
      arial: ["Arial,sans-serif"],
    },

    extend: {
      colors: {
        "real-white": "#ffff",
        "primary-white": "#dadce0",
        "secondary-white": "#f8f9fa",
        "tertiary-white": "#dfe1e5",
        "secondary-gray": "#9aa0a6",
        "tertiary-gray": "#3c4043",
        "primary-gray": "#f2f2f2",
        "dark-gray": "#70757a",
        "light-gray": "#d5d7d8",
        "primary-hover": "rgba(223,225,229,0)",
        "blue-bic": "#1a0dab",
      },

      margin: {
        "14/2": "25px",
      },
    },
  },
  plugins: [],
};
