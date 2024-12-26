/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8D0B41',
        secondary: '#D39D55',
        tertiary: '#D6CFB4',
        accent: '#FFF8E6',
      },
    },
  },
  plugins: [daisyui],
};
