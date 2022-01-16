const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Work Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
