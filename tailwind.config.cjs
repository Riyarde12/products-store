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
        'main-display': 'calc(100vh - 100px)',
      },
      boxShadow: {
        'b-s-helper': '0px 2px 0px 0px',
      },
      padding: {
        'padding-l-r-7.6': '7.6%',
      },
      flexGrow: {
        '2': '2',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
