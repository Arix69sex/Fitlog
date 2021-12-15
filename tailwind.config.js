module.exports = {
  purge: {
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1F448B',
        'accent-blue': '#063185',
        'dark-blue': '#16294F',
        'highlight-blue': '#094BCC',
        'deep-blue': '#002264',

        'primary-grey': '#313131'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
