/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      mobile: '0px',
      desktop: '1440px'
    },
    fontFamily: {
      bellefair: ['Bellefair'],
      barlowCondensed: ['Barlow Condensed']
    },
    extend: { babyBlue: '#D0D6F9', twinBlack: '#0B0D17' }
  },
  plugins: []
}
