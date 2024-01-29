/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {

    keyframes: {
      'openMenu' : {
        "0%" : {transform: 'scaleY(0)'},
        "100%" : {transform: 'scaleY(1)'},
        
      },
      'closeMenu' : {
        "100%" : {transform: 'scaleY(1)'},
        "0%" : {transform: 'scaleY(0)'}
      }

    },

    animation: {
      'openMenu' : 'openMenu 0.2s ease-in-out forwards ',
      'closeMenu' : 'closeMenu 0.2s '
    },
    
    extend: {
      
      colors: {
        moderateCyan: "hsl(176, 50%, 47%)",
        darkCyan: "hsl(176, 72%, 28%)",
        black: "hsl(0, 0%, 0%)",
        darkGray: "hsl(0, 0%, 48%)"
      },
      
    },
  },
  plugins: [],
}
