/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mordren: ['Alkatra', 'cursive'],
        Alkatra: ['Alkatra','cursive'],
        style: ['Dancing Script', 'cursive']
      },
      screens: {
        "1000px": "1050px",
        "1100px": "1110px",
        "800px": "800px",
        "1300px": "1300px",
        "400px":"400px"
      },
    },
    colors:{
      black: "#121315",
      ash: "#777b84",
      braun: "#a39070",
      grray: "#c3c4c6",
      off_white: "#e5dfd3",
      white: "#f9fafb"
    }
  },
  plugins: [],
}

