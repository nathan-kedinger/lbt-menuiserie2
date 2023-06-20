import forms from '@tailwindcss/forms'
import colors from 'tailwindcss/colors'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,vue,js,ts,jsx,tsx}'],
  options: {},
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#FFFFFF',
        dark: '#050505',
        colorMain: '#553420',
        colorSecond: '#5f4128',
        colorThird: '#9b7a62',
        colorFourth: '#b79870',
        colorFifth: 'rgba(255,239,188,0.4)'
      }
    }
  },
  plugins: [forms, colors]
}
