/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {   backgroundImage: {
        'custom-gradient-1': 'linear-gradient(101.61deg, #083F9B 0%, #7F56D9 93.39%)',
        'custom-gradient-2': 'linear-gradient(-101.61deg, #083F9B 0%, #7F56D9 93.39%)',
        'custom-gradient-3': 'linear-gradient(256.52deg, rgba(4, 1, 108, 0.8) 0.69%, rgba(74, 22, 189, 0.8) 100%)',
        'custom-gradient-4': 'linear-gradient(265.4deg, #477AE3 10.58%, rgba(147, 27, 189, 0.85) 98%)',
        'custom-gradient-5':'linear-gradient(0deg, #DBEDFF 0%, rgba(219, 237, 255, 0) 100%)',
      },
    },
    fontFamily: {
      righteous: ['Righteous', 'sans-serif'],
      saira:['Saira','sans-serif'],
      inter:['Inter','sans-serif'],
      rowdies:['Rowdies','sans-serif'],
    },
    plugins: [],
  }
  }