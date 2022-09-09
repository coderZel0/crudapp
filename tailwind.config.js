/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      screens:{
        sm:"486px",
        md:"746px",
      },
      colors:{
        primary:"rgb(48, 241, 145)",
        bluePrimary:"rgb(41, 78, 245)"
      }
    },
    
  },

  plugins: [],
}
