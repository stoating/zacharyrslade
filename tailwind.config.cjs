/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'circle': "url('/img/home/circle.png')",
        'image' : "url('/img/home/image.png')",
      },
      backgroundSize: {
        '12vmin': '12vmin',
        '10vmin': '10vmin',
        '110vmax': '110vmax',
      }
    },
  },
  plugins: [],
};
