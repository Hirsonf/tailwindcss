/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
    darkMode:'class',
  theme: {
    extend: {
      fontfamily : {
        'acme' : 'Acme',
        'Noto Sans Hanunoo' :'Noto Sans Hanunoo',
        'matemasie':'Matemasie',
        'costum':['Nerko One', 'cursive']
      },
      colors : {
        wpu :'#bada55',
      }
    },
  },
  plugins: [],
}

