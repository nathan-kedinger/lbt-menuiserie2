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
        colorSecond: '#9b7a62',
        colorThird: '#b79870',
        colorFourth: 'rgba(255,250,229,0.37)'
      }
    }
  },
  plugins: [forms, colors]
}
