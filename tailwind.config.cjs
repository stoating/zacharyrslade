/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'circle': "url('/images/home/circle.png')",
        'image' : "url('/images/home/image.webp')",
      },
      backgroundSize: {
        '12vmin': '12vmin',
        '9vmin': '9vmin',
        '110vmax': '110vmax',
      }
    },
  },
  plugins: [],
};
