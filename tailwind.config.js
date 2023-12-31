/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            gridTemsplateColumns: {
                sidebar: '300px auto', //for sidebar layout
                'sidebar-collapsed': '64px auto', //for collapsed sidebar layout
            },
            transitionProperty: {
                height: 'height',
                width: 'width',
            },
        },
    },
    plugins: [],
};
