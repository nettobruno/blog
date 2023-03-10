/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: "#3182ce",
              "&:hover": {
                color: "#2c5282",
               },
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
