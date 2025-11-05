/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Catamaran', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif'],
        'tamil': ['Catamaran', 'Noto Sans Tamil', 'sans-serif'],
        mad: ['Hind Madurai', 'sans-serif'],
        rozha: ['"Rozha One"', 'serif'],
        bigshot: ['"Bigshot One"', 'sans-serif'],
        purplePurse: ['"Purple Purse"', 'cursive'],
        playfair: ['"Playfair Display"', 'serif'],
        kumbh: ['"Kumbh Sans"', 'sans-serif'],
        specialElite: ['"Special Elite"', 'cursive'], 
      }, 
    },
  },
  plugins: [],
}
