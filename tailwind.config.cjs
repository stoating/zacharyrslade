/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'image-circle': "url('/images/circle.png')",
        'image-sunset' : "url('/images/image.webp')",
      },
      backgroundSize: {
        '12vmin': '12vmin',
        '9vmin': '9vmin',
        '110vmax': '110vmax',
      },
    },
  },
  plugins: [],
};
