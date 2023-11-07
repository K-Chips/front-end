/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    '/app/page.tsx',
  ],
  theme: {
    colors: {
      primary: '#FF9900',
      white: '#F9F9F9',
      grey: {
        500: '#BCBABA',
        700: '#2D2D2D',
      },
      black: '#2D2D2D',
      fontBlack: '#343434',
      fontWhite: '#FFF',
    },
  },
  plugins: [],
};
