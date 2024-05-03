/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor :{
        'primary' :'rgb(18, 12, 188)',
        'secondary' :'#2b2d77'
      }
    },
    
    fontFamily :{
      'center-font' : 'Sriracha'
    }
  },
  plugins: [],
}

