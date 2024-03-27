/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '375px',
        md: '768px',
        lg: '976px',
        xlg: '1150px',
        xl: '1440px',
      },
      colors: {
        primary: '#3E68FF',
        secondary: '#FFEB3B',
        pink: '#5479FA',
        black: '#000000',
        white: '#FBFBFB',
        light: '#777777',
        lightGrey: '#F3F1FF',
        darkGrey: '#F0EDFF',
        grey: '#EEEDED',
        success: '#14A44D',
        info: '#54B4D3',
        warning: '#E4A11B',
        error: '#FF3333',
        fontBlack: '#000000',
        fontGrey: '#797C7F',
      },
      fontFamily: {
        nunito: ['Nunito'],
        rubik: ['Rubik'],
        quicksand: ['Quicksand'],
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(primary|secondary|white|light|lightGrey|darkGrey|grey|success|warning|error|info)/,
    },
  ],
};
