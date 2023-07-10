/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'violet-lt': '#DDD6FE',
        'violet': '#C4B5FD',
        'violet-dk': '#2E1065',
        // 'violet-lt': '#F5F3FF',
        'teal-lt': '#CCFBF1',
        'teal': '#99F6E4',
        'teal-xdk': '#5EEAD4',
        'pink': '#FEE2E2',
        'rose': '#FDA4AF',
        // 'gray': '#E5E7EB',
        'gray-lt': '#FAFAFA',
        'gray-dk': '#262626',
        'black': '#171717',
      },
      fontFamily: {
        'sans': ['Sen', 'sans-serif'],
      } 
    },
  },
  plugins: [],
}

