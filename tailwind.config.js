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
          tara: {
            'yellow' : "#F5C32C",
            'orange' : "#FCA61F",
            'black' : "#242D49",
            'gray' : "#788097",
            'blueCard' : "#DDF8FE",
            'purple': "#D2EEFF",
            'orangeCard': "#fca61f",
            'bgblack': "#011b3d",
          },
        },
      },
  },
  plugins: [],
}