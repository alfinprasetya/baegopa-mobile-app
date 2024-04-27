/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}",
  ],
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
    },
  },
  plugins: [],
};
