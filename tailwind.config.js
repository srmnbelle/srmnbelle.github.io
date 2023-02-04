/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{html,js}'],
  theme: {
    screens: {
      sm:'480px',
      md: '789px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        gold: 'hsl(24, 59%, 49%)',
        lightgold: 'hsl(29, 68%, 70%)',
        darkgray: 'hsl(0, 0%, 30%)',
        lightgray: 'hsl(0, 0%, 90%)',
        skyblue: 'hsl(205, 64%, 70%)',
        babyblue:  'hsl(197, 70%, 79%)',
        blue: 'hsl(205, 73%, 47%)',
      }
    },
  },
  plugins: [],
}
