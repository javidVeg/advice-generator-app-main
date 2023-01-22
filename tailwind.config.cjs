/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Manrope': ['Manrope', 'sans-serif']
    },
    fontSize: {
      "quote": ['28px', {
        fontWeight: '800',
        lineHeight: '2.2rem'
      }],
    },

    extend: {
      colors: {
        'Grayish-Blue': 'hsl(217, 19%, 38%)',
        'Dark-Grayish-Blue': 'hsl(217, 19%, 24%)',
        'Light-Cyan': 'hsl(193, 38%, 86%)',
        'Neon-Green': 'hsl(150, 100%, 66%)',
      },
      // backgroundColor: {
      //   'Grayish-Blue': 'hsl(217, 19%, 38%)',
      //   'Light-Cyan': 'hsl(193, 38%, 86%)',
      //   'Neon-Green': 'hsl(150, 100%, 66%)',
      // }
    },
  },
  plugins: [],
}