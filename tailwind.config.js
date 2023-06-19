/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes:{
        wavey:{
          "0%, 100%":{
            transform: "scaleY(0.5)"
          },
          "50%":{
            transform: "scaleY(1.5)"
          }
        },
      },
      animation:{
        wavey: "wavey 1s linear infinite"
      },
    },
  },
  plugins: [ require('@fortawesome/fontawesome-free')],
}
