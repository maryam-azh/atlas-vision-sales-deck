/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Manrope', 'sans-serif'],
        'mono': ['IBM Plex Mono', 'monospace'],
      },
      colors: {
        // Sophisticated pastel palette inspired by designer aesthetics
  'primary-pink': '#D4F1D4',
        'primary-blue': '#C2E3FF',
        'primary-green': '#D4F4DD',
        'primary-peach': '#FFE5D9',
        'primary-lavender': '#E8D6FF',

        // Accent colors
        'accent-coral': '#FF6B6B',
        'accent-teal': '#4ECDC4',
        'accent-gold': '#FFD93D',

        // Legacy (for gradients)
  'accent-pink': '#D4F1D4',
        'accent-blue': '#C2E3FF',
        'accent-yellow': '#FFE5D9',
        'accent-orange': '#FF6B6B',
      },
    },
  },
  plugins: [],
}
