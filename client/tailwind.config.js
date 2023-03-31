/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'logoBlack' : "url('../client/public/assets/images/2.png')",
        'logoWhite' : "url('../client/public/assets/images/1.png')"
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary':'#080808',
        'secondary':'#111111',
        'terceary':'#111827',
        'cuarto':'#cbd5e0',
        'quinto':'#DC2626',
        'sexto': '#030708',
        'septimo':'#FF0000',
        'octavo':'#999999'
      }),
      textColor:{
        'terceary':'#111827',
        'cuarto':'#cbd5e0',
        'quinto':'#DC2626',
        'septimo':'#FF0000',
        'octavo':'#999999'
      },
      fontFamily:{
        Quicksand:['Quicksand', 'sans-serif']
      }
    },
  },
  plugins: [],
}
