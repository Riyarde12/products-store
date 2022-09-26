/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'screen-10': '10vh',
        'main-screen-75': '75vh'
      },
      boxShadow: {
        'b-s-helper': '0px 2px 0px 0px'
      },
      padding: {
        'padding-l-r-7.6': '7.6%'
      }

    },
  },
  plugins: [],
};
