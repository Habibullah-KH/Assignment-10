import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'clr-primary': '#2ECC71',
      'clr-secondary': '#FFC107',
      'clr-accent': '#2ECC71',
      'clr-bg': '#f9fdf2',
      'clr-text-100': '#6d597a',
      'clr-text-200': '#050315',
      },
    },
  },
  plugins: [
    daisyui,
  ],
}

