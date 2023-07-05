/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'violet': '#C4B5FD',
        // 'violet-lt': '#F5F3FF',
        'teal': '#CCFBF1',
        'teal-dk': '#99F6E4',
        'yellow-lt': '#FFFBEB',
        'rose': '#FDA4AF',
        'slate': '#1E293B',
        'slate-lt': '#F8FAFC',
        'gray': '#E5E7EB',
      },
      fontFamily: {
        'sans': ['Sen', 'sans-serif'],
      } 
    },
  },
  plugins: [],
}

