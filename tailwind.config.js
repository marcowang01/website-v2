/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'project-gray': {
          100: '#FBFBFA', // hover bg
          150: '#F9F9F7', // bg
          200: '#EEE', // border
          300: '#999999', // light text
          400: '#555555', // text
        },
        'blue': {
          300: '#a3d1ec', // blue highlight
          400: '#93bcd4', // dark blue highlight
        },
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
