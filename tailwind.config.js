/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'gunmetal': '#2C3333',
      'darkslate': '#2E4F4F',
      'seaweed': '#0E8388',
      'columbia': '#CBE4DE',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      
    },
    extend: {
      fontFamily: {
        burtons: "burtons",
        Nyeru: "NyerusTouch-regular",
      },
    },
  },
  plugins: [],
}
