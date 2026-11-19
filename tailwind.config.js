/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f8f5f1',
          100: '#f1ebe5',
          200: '#e7d8cd',
          300: '#d9bfae',
          400: '#c79f8a',
          500: '#a8766a',
          600: '#87504c',
          700: '#6b2f33',
          800: '#561c24',
          900: '#45121a',
          950: '#2c0b10',
        },
        ink: { DEFAULT: '#2c0b10', soft: '#561c24', mute: '#8a7470' },
        blush: { light: '#f4e6dd', DEFAULT: '#e2c1ae', dark: '#a8766a' },
        champagne: { DEFAULT: '#C6A15B', light: '#EEDFBF', dark: '#9A7433' },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        script: ['"Pinyon Script"', 'cursive'],
      },
    },
  },
  plugins: [],
}
