module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        lg: '1.0625rem', // Change this value to your desired size
      },
      screens: {
        '3xl': "1920px",
      },
      colors: {
        'lavendar-purple': '#BCC3E7',
        'turtoise-green': '#5DDEFA'
      }
    },
  },
  plugins: [],
}
