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
          700: '#555555', // text
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
