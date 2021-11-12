module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        card: '#EEEEEE',
        border: '#2B2B33'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
