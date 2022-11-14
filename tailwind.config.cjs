/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'image-circle': "url('/images/circle.png')",
        'image-sunset' : "url('/images/image.webp')",
        'image-sky' : "url('/images/sky.webp')",
      },
      backgroundSize: {
        '12vmin': '12vmin',
        '9vmin': '9vmin',
        '110vmax': '110vmax',
      },
      backgroundColor: {
        'aeb3bc' : '#aeb3bc',
      },
    },
  },
  plugins: [],
}
