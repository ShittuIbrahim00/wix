/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['"Josefin Sans"', 'sans-serif'],
        merienda: ['"Merienda"', 'cursive'],
        montserrat: ['"Montserrat"', 'sans-serif'],
        opensans: ['"Open Sans"', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
