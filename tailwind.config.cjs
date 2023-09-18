const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        leafs: {
          blue: '#00488e',
        },
        white: '#ffffff',
      },
      fontFamily: {
        sans: ['Open-Sans', ...defaultTheme.fontFamily.sans],
      },
      lineHeight: {
        md: '4rem',
        xl: '6rem',
      },
    },
    backgroundImage: {
      scale: 'url(./src/images/time-scale.svg)',
    },
  },
  plugins: [],
}
