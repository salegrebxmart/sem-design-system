/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Barlow', 'sans-serif']
    },
    fontWeight: {
      normal: 300,
      medium: 500,
      bold: 700,
    },
  },
  plugins: [],
}