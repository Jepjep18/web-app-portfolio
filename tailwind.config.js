/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Add this line
  theme: {
    extend: {
  fontFamily: {
    terminal: ['"Share Tech Mono"', 'monospace'],
  },
  colors: {
    neon: '#39FF14',
  },
  keyframes: {
    flicker: {
      '0%, 100%': { opacity: '1' },
      '50%': { opacity: '0.4' },
    },
  },
  animation: {
    flicker: 'flicker 1s infinite',
  },
},
  },
  plugins: [],
}