/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          base: '#009056',
          dark: '#05794A',
          light: '#E5F4EE',
        },
        secondary: {
          base: '#FFE16F',
        },
        gray: {
          900: '#282828',
          700: '#5B5B5B',
          300: '#E1E1E1',
          100: '#FAFAFA',
        },
      },
      fontFamily: {
        bolivar: ['Bolivar', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
