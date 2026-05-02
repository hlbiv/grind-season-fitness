/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gsf: {
          black: '#0f0f0f',
          dark: '#1a1a1a',
          orange: '#E8521A',
          'orange-light': '#FF6B35',
          offwhite: '#F5F5F5',
          gray: '#9CA3AF',
        },
      },
      fontFamily: {
        heading: ['Oswald', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
