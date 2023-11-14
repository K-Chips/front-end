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
    fontSize: {
      '3xs': '8px',
      '2xs': '10px',
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '28px',
      '4xl': '32px',
    },
  },
  plugins: [],
};
