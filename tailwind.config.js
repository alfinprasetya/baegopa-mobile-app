/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#027C49",
          100: "#224C34",
          200: "#0E1C16",
        },
        suface: {
          DEFAULT: "#FDFDFD",
          100: "#D8D8D8",
          200: "#A6A6A6",
          300: "#737373",
        },
        accent: {
          DEFAULT: "#FACB05",
        },
      },
      fontFamily: {
        RoboRegular: ["Roboto-Regular", "sans-serif"],
        RoboThin: ["Roboto-Thin", "sans-serif"],
        RoboLight: ["Roboto-Light", "sans-serif"],
        RoboMedium: ["Roboto-Medium", "sans-serif"],
        RoboBold: ["Roboto-Bold", "sans-serif"],
        RoboBlack: ["Roboto-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
