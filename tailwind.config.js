/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#008080',
        'main-dark': '#012222',
        'main-light': '#3ee4e4',
        'main-light-extra': '#91e8e8',
        'support': '#ffb700',
        'support-light': '#f8df9f',
        'dark': '#111',
        'light': '#eeffff',
        'grey-dark': '#333',
        'grey-medium': '#999',
        'grey-light': '#ccc',
        'grey-light-extra': '#eee',
      }
    },
  },
  plugins: [],
}

