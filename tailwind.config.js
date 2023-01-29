/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
"se":'375px',
"y9":"540px"

      },

      fontFamily:{
        "Manrope" : "manrope",
        "iranyekan":"iranyekan"
      },
      colors:{
        darkTextMain : "#fffff",
        darkTextSecond : "#052D56",
        // datkTextTher : ""
        primaryColor : "#052D56",
        // darksecondaryColor: "#FF4820",
        secondaryColor : "#f5f5f7",
        lightTextMain : "#000000",
        lightTextSecond : "#6e6e73",
        oragneMain:"#FF4820",
darkTextPrimary:"#81AFDD"
      },
  
    },
  },
  plugins: [],
}
