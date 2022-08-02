module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
        animation: {
          'tara': 'bounce 5s linear infinite',
        },
        colors: {
          "tara" : {
            0 : "#630944",
            1 : "#ffe2ab",
          }
        },
      },
  },
  plugins: [],
}