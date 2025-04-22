/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    scrollSnapType: {
      'proximity': "proximity"
    },
    extend: {
      keyframes: {
        flicker: {
          '0%': {opacity: '0%'},
          '100%': {opacity: '100%'}
        },
        'skeleton': {
          '0%': {
            backgroundColor: '#222222'
          },
          '100%': {
            backgroundColor: '#121212'
          }
        }
      },
      animation: {
        suspense: 'flicker 1000ms linear infinite',
        skeleton: 'skeleton 1s linear infinite alternate'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}