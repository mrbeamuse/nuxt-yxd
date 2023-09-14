/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        syst: ['syst', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        '21px': '1.3125rem',
        '37px': '2.3125rem'
      },
      aspectRatio: {
        '16/9': '16 / 9',
        '2/1': '2 / 1',
        '3/2': '3 / 2'
      },
      width: {
        '7/10': '70%'
      },
      maxWidth: {
        '500px': '500px'
      },
      height: {
        header: '72px',
        main: 'calc(100vh - 72px)'
      },
      backgroundColor: {
        main: '#FFFAF5',
        'title-main': '#FFE697',
        'footer-main': '#490909',
        timeline: '#EFDBBD'
      },
      backgroundSize: {
        '66%': '66%',
        '98%': '98%'
      },
      colors: {
        main: '#f44c58',
        'title-main': '#FFE697',
        'hover-main': '#f32836',
        'line-main': '#666666',
        777: '#777777',
        second: '#0A0303'
      }
    }
  },
  plugins: []
}
