/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // other theme configurations...
    extend: {
      // other extend configurations...
      scrollbar: ['rounded'],
    },
  },
  plugins: [ require('tailwind-scrollbar-hide')],
}

