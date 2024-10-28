/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*html'],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors:{
        'red': 'F76C6C',
        'yellow': 'F8E9A1',
        'darkblue': '24305E',
        'gray-light': '#d3dce6',
      }
    },
  },
  plugins: [],
}

//green
//red x2
//yellow
//warm