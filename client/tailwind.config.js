/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#171717',
        primary: '#70F1D1',
      },
    },
  },
  plugins: [],
}
