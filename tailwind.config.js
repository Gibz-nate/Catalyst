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
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // Add this plugin
    require('tailwind-clip-path'),
  ],
}


