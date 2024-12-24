const { tab } = require('@testing-library/user-event/dist/tab');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        tab: { max: "768px" },
        mob: { max: "576px" },
      },
      colors: {
        'bgwhite': '#ffffff',
        'bgtomato': '#e45f36',
        'black': '#000000',
        'textblack': '#333333',
        'textgray': '#666666',
        'textwhite': '#ffffff',
        'searchbg': '#ffab41',
        'headerpage':'#00172A',
        'icon-color':'#155E75' 
      },
      fontFamily: {
        nunito: ['"Nunito Sans"', "sans-serif"],
        inter: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
}