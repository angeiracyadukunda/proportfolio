// tailwind.config.js
module.exports = {
  darkMode: 'class', // Enable dark mode support
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBackground: '#f0f4f8',
        darkBackground: '#1a1a1a',
        accent: '#ff5a5f',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
