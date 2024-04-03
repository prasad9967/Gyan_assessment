/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm: '425px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
   
    extend: {
      fontFamily:{
        inter:  ['Inter','sans-serif']
      },
      colors:{
        'heading': '#1E2022',
        'subtitle': '#989090',
        'logo': '#CF2D2D',
        'bcolor': '#B0BABF'
      }
    },
  },
  plugins: [],
}

