/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Dette sørger for at Tailwind tar med filene i src-mappen
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
