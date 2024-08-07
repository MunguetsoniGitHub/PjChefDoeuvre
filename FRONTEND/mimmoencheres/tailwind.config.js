/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // inset: {
      //   '-15': '-75%',
      // }
      width: {
        '450px' : '450px',
        'w-mae3' : '1/3',
      }, 

      colors: {
        'gray-mae' : '#D9D9D9',
        'red-mae' : '#FF0303'
      }, 

      fontFamily: {
        'kaushan': ['"Kaushan Script"', 'cursive'],
      },

    },
  },
  plugins: [],
}

