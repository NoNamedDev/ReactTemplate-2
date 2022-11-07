/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      custom_font_1 : ["Marck Script","cursive"],
      custom_font_2 : ['Libre Baskerville', "serif"],
      custom_font_3 : [ 'Didact Gothic', "sans-serif"]
    }
  },
  plugins: [],
}
