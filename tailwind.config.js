/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Onest: ['Onest', 'sans-serif'],
    },
    extend: {},
  }, 
  plugins: [
    require('flowbite/plugin')
  ],
}