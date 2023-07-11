/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // oranges
                'orange-lt': '#FED7AA',
                'orange': '#FDBA74',
                // pinks
                'rose-lt': '#FEE2E2',
                'rose': '#FDA4AF',
                // violets
                'violet-lt': '#DDD6FE',
                'violet-md': '#C4B5FD',
                'violet': '#A78BFA',
                'violet-dk': '#2E1065',
                // teals
                'teal-lt': '#CCFBF1',
                'teal': '#99F6E4',
                'teal-dk': '#5EEAD4',
                // grays
                'shdw': '#D4D4D4',
                'gray-lt': '#FAFAFA',
                'gray-md': '#94A3B8',
                'gray': '#334155',
                'gray-dk': '#262626',
                'black': '#171717',
            },
            fontFamily: {
                'sans': ['Sen', 'sans-serif'],
            },
            keyframes: {
                pulse: {
                '0%, 100%': { opacity: '1' },
                '50%': { opacity: '.65' },
                },
            },
            animation: {
                pulse: 'pulse 1.8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
        },
    },
    plugins: [
        require('tailwindcss/plugin')(({ addVariant }) => {
        // for customizing search input 'clear' btn
        addVariant('search-cancel', '&::-webkit-search-cancel-button');
        }),
    ],
}

