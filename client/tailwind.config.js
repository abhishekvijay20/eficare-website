/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f7f7f7",
        black: "#000",
        darkslategray: "#2c3342",
        white: "#fff",
        gray: "#0f1316",
        skyblue: {
          "100": "#5ec0df",
          "200": "#3eb9df",
        },
        dimgray: "#5b5b5b",
      },
      fontFamily: {
        outfit: "Outfit",
        "averia-libre": "'Averia Libre'",
      },
      borderRadius: {
        mini: "15px",
      },
    },
    fontSize: {
      mini: "15px",
      xl: "20px",
      lg: "18px",
      "6xl": "25px",
      "46xl": "65px",
      "36xl": "55px",
      "2xl": "21px",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
      ex1: {
        raw: "screen and (max-width: 430px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
