/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Using Inter as a modern sans-serif
      },
      colors: {
        primary: '#9E7FFF', // Vibrant purple
        secondary: '#38bdf8', // Bright blue
        accent: '#f472b6', // Lively pink
        background: '#171717', // Dark charcoal
        surface: '#262626', // Slightly lighter dark for cards/sections
        text: '#FFFFFF', // White
        textSecondary: '#A3A3A3', // Light gray
        border: '#2F2F2F', // Dark gray
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
      },
      boxShadow: {
        'glow-sm': '0 0 8px rgba(158, 127, 255, 0.4)',
        'glow-md': '0 0 16px rgba(158, 127, 255, 0.6)',
        'glow-lg': '0 0 24px rgba(158, 127, 255, 0.8)',
      },
    },
  },
  plugins: [],
}
