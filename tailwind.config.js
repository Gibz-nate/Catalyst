/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        hex: 'polygon(4% 0, 100% 0, 100% 59%, 96% 100%, 0 100%, 0 39%)',
      },
      boxShadow: {
        glow: '0 0 15px 5px rgba(75,0,130,0.7)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // Add this plugin
    require('tailwind-clip-path'),
  ],
}


