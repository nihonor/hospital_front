/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pr-color': '#4200FF',
        'txt-color':'#404040',
        'sub-color':'#B4B4B4',
        'input-color':'#F8F7F7'
      }
    },
  },
  plugins: [],
}

