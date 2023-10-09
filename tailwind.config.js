/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'greyText': '#e5eaf5',
      'pinkText': '#e16bab',
      'blueText': '#73c0e7',
      'cardBG': '#1e293b'
    },
    extend: {
      screens: { xxs: '375px', xs: '425px', bigScreen: '1440px'},
    },
  },
  plugins: [],
}
