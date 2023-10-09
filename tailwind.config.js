/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        overlay: "url('./src/assets/bg_1.jpg'), linear-gradient(237deg, #1200ff 0%, rgb(252,9,124) 100%)",
        'overlay-speakers': "url('./src/assets/bg_3.jpg'), linear-gradient(237deg, #1200ff 0%, rgb(252,9,124) 100%)",
        'overlay-footer': "url('./src/assets/bg_4.jpg'), linear-gradient(237deg, #1200ff 0%, rgb(252,9,124) 100%)",
        'overlay-special': "url('./src/assets/bg_2.jpg'), linear-gradient(237deg, #1200ff 0%, rgb(252,9,124) 100%)",

      },
      fontFamily: {
        Roboto: "'Roboto', sans-serif"
      },
      backgroundColor: {
        'custom-blue': "rgb(49,26,121)",
        'custom-red': "rgb(252,9,124)",
      },
      colors: {
        'clr-red': "rgb(252,9,124)",
        'clr-blue': "rgb(49,26,121)"
      }
    },
  },
  plugins: [require("daisyui")],
}

