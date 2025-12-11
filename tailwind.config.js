/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      screens: {
        lp: "1400px",
      },

      colors: {
        primary: {
          500: "#6A4BFF",
        },

        secondary: "#1A1A1A",
        accent: "#D6C9FF",

        green: "#4CAF50",

        "background-2": "#F5F6FA",
        "background-3": "#FFFFFF",
        "background-4": "#F3F4F6",
        "background-6": "#1E1E1E",
        "background-7": "#121212",
        "background-8": "#0D0D0D",

        "stroke-1": "#EAEAEA",
        "stroke-2": "#E2E2E2",
        "stroke-4": "#CFCFCF",
        "stroke-5": "#363636",
        "stroke-6": "#444",
        "stroke-7": "#2D2D2D",
        "stroke-9": "#000",
      },

      backdropBlur: {
        25: "25px",
      },

      borderRadius: {
        "4xl": "2.5rem",
      },

      boxShadow: {
        7: "0px 8px 24px rgba(0, 0, 0, 0.12)",
      },

      fontFamily: {
        inter: ["Inter Tight", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },

  plugins: [],
};
