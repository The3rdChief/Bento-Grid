/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: "DM Sans",
      },
      colors: {
        p500: "hsl(256, 67%, 59%)",
        p100: "hsl(254, 88%, 90%)",
        y500: "hsl(39, 100%, 71%)",
        y100: "hsl(31, 66%, 93%)",
      },
    },
  },
  plugins: [],
};
