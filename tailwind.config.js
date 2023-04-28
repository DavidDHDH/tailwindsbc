/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    
    extend: {
      colors: {
        brand: {
          light:"#6E9FFB",
          DEFAULT:"#164398",
        }
      }
    },
  },
  plugins: [],
}