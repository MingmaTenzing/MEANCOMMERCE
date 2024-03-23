/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        ciliconorange: "#FA8232",
        ciliconPriceBlue: "#2DA5F3",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
