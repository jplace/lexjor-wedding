/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,njk}"],
  theme: {
    extend: {
      colors: {
        ['lisbon-green']: '#033A15',
        ['texture-gold']: '#D9AD00'
      },
      keyframes: {
        ['pulse-mild']: {
          '50%': { color: '#033A15' } 
        }
      },
      animation: {
        ['pulse-mild']: 'pulse-mild 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }
    },
  },
  plugins: [],
}

