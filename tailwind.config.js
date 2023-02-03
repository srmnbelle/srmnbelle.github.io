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
        darkpurple: 'hsl(294, 84%, 7%)',
        mardigras: 'hsl(308, 66%, 33%)',
        cerise: 'hsl(345, 67%, 55%)',
        cameopink: 'hsl(332, 63%, 84%)',
        artichoke: 'hsl(92, 16%, 54%)',
        gold: 'hsl(24, 59%, 49%)',
        lightgold: 'hsl(29, 68%, 70%)',
        darkgray: 'hsl(0, 0%, 30%)',
        lightgray: 'hsl(0, 0%, 90%)',
      }
    },
  },
  plugins: [],
}
