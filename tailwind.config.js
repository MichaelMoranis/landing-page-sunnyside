/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-backgroundimage': "url('@assets/header.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
    },
  },
  plugins: [],
}
}