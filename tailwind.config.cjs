/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#bfefe0",
        secondary: "#3d3d3d",
        tertiary: "#7e8480",
        "green": "#8bd7c2",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "pattern": "url('/src/assets/bg.png')",
        "navPattern": "url('/src/assets/nav-bg.png')",
      },
    },
  },
  plugins: [],
};