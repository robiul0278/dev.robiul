/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '80%' },
        },
        erase: {
          '0%': { width: '100%' },
          '50%': { width: '0%' },
        },
      },
      animation: {
        typing: 'typing 4s steps(38, end)',
        erase: 'erase 4s steps(30, end)',
      },
    },
  },
  plugins: [],
}