/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    boxShadow: {
      real: "0 1px 6px rgb(32 33 36 / 28%)",
      real1: "0 1px 1px rgb(0 0 0 / 10%)",
    },

    fontFamily: {
      "open-sans": "open-sans",
    },
    extend: {
      colors: {
        "primary-hover": "rgba(223,225,229,0)",
      },
    },
  },
  plugins: [],
};
