/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        'md': '20px',
      },
      backdropContrast: {
        '50': '0.5',
      },
      backgroundImage: {
        'white/30': 'linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3))',
      },
    },
  
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["cupcake"],
  },
  
}