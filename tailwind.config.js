/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xsm' : '430px',
      'sm': '640px',
      'md': '768px',
      'lg': '1000px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      width: {
        '120': '460px',
        '574': '574px',
        '400': '600px',
        '800': '890px',
        'line': '2000px'
      },
      rotate: {
        'aboutme-line': '48deg',
      },
      colors: {
        'green': '#30FF68',
        'grey': '#171717',
      },
      aspectRatio: {
        'project-img': '3/1'
      },
      
    },
  },
  plugins: [],
}

