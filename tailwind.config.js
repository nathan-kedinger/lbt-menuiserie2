import form from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  options: {
    whitelistPatterns: [/^col-span-/, /^row-span-/]
  },
  theme: {
    extend: {}
  },
  plugins: ['@tailwindcss/forms']
}
