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
        'clr-primary': 'rgb(105,231,255)',
        'clr-secondary': '#f67578',
        'clr-accent': 'rgba(105,231,255,0.4)',
        'clr-bg': '#ffffff',
        'clr-text-100': '#6d597a',
        'clr-text-200': '#050315',
      },
      animation: {
        gradient: 'gradientMove 4s ease infinite',
      },
      keyframes: {
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          'primary': '#ffffff',
          'base-100': '#ffffff',
        },
      },
      {
        dark: {
          'primary': '#000000',
          'base-100': '#000000',
        },
      },
    ],
  },
};
