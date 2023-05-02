/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      container:{
        center:true
      },
    colors:{
      inputs:"ffffff",
      maincolor:"#e2dfdbB3",
      maincontrast:"#002868B3",
      danger:"#c81e1e",
      warning:"#b38124",
      submit:"#719b1d",
      background:"#14141433"
    }
    },
},
  container:{
    center:true
  },
  plugins: [],
}

