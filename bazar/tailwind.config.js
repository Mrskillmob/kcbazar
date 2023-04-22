module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        'main':'60px 1fr 60px'
      }
    },
    colors: {
      'navbar': '#202224',
      'dark-primary': '#1a1c1e'
    }
  },
  plugins: [],
}