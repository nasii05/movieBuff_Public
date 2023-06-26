/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'popins': ['Poppins', 'sans-serif'],
        'tilt': ['Tilt Prism', 'cursive']
       }
    },
  },
  plugins: [
    [require("daisyui")],
  ],
  daisyui:{
    themes: ["cupcake", "dark", "cmyk"]
  }
}


// font-family: 'Poppins', sans-serif;

