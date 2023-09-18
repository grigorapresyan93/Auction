/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mardoto: ['Mardoto', 'sans-serif']
      },
      screens: {
        '2xl': '1440px',
        xl: '1024px',
        md: '744px',
        sm: '360px'
      }
    }
  },
  plugins: []
};
