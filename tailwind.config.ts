import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // arbitrary name
      colors: {
        bgBlack: '2D2D2D',
        bgGrey700: '7A7A7A',
        bgGrey500: 'BCBABA',
        bgGrey100: 'F9F9F9',
        textBlack: '343434',
        pointYellow: 'FF9900',
      },
      fontSize: {
        h1: '32px',
        h2: '20px',
        p1: '16px',
        p2: '14px',
        p3: '12px',
        p4: '10px',
      },
      fontWeight: {
        bold: '700',
        regular: '400',
      },
    },
  },
  plugins: [],
} satisfies Config;
