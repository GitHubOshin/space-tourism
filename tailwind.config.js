/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      mobile: '0px',
      tablet: '768px',
      desktop: '1440px'
    },
    fontFamily: {
      bellefair: ['Bellefair'],
      barlowCondensed: ['Barlow Condensed'],
      barlow: ['Barlow']
    },
    extend: { colors: { babyBlue: '#D0D6F9', twinBlack: '#0B0D17' } }
  },
  plugins: []
}
