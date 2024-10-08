/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        primary: '#FBAD30',
        secondary: 'rgba(0, 0, 0, 0.6)',
        black: '#000000',
        shade: '#121111',
        fade: '#fafafa'
      }
    },
  },
  plugins: [],
}

