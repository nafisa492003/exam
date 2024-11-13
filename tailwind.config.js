/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth : {
        container :"1320px",
        },
        fontFamily: {
          'raleway': ['"Raleway"', "sans-serif"],
          'oxanium': ['"Oxanium"', "sans-serif"],
        },
        colors: {
          'bg_colour': '#fff7e7',
          'orange': '#F95C19',
          'light_orange' : '#FFEDC9',
          'dark_orange' : '#FFAF0F',
          'gray_light':'#7B7A8B',
          'gray_drak':'#464558',
        },
        backgroundImage: {
          'video-pattern': "url('./src/assets/video.jpg')",
        },
    },
  },
  plugins: [],
}

