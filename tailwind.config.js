/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js,php}"],
  theme: {
    extend: {
      keyframes: {
        spinEnlarge: {
          '0%': { transform: 'scale(1) rotate(0)' },    
          '20%': { transform: 'scale(1.3) rotate(90deg)' },
          '25%': { transform: 'scale(1.3) rotate(90deg)' },
          '45%': { transform: 'scale(1) rotate(180deg)' },
          '50%': { transform: 'scale(1) rotate(180deg)' },
          '70%': { transform: 'scale(1.3) rotate(270deg)' },
          '75%': { transform: 'scale(1.3) rotate(270deg)' },
          '95%': { transform: 'scale(1) rotate(360eg)' },
          '100%': { transform: 'scale(1) rotate(360deg)' },
        },
      },
      animation: {
        'spin-loader': 'spinEnlarge 2s linear infinite',
      },
      transitionProperty: {
        'left': 'left',
        'width': 'width',
      },
    },
  },
  plugins: [],
}