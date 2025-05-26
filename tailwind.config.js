/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '480px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1600px',
    },
    extend: {
      borderColor: {
        customGrey: '#131212',
        customGreen: '#7d8d7b',
      },

      colors: {
        primary: {
          DEFAULT: '#2C6466', // main primary color
        },
        secondary: '#212D44',
      },
    },
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')],
  corePlugins: {
    preflight: false,
  },
};
