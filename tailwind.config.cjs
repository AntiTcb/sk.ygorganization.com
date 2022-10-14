const lineClamp = require('@tailwindcss/line-clamp');
const forms = require('@tailwindcss/forms');
const typography = require('@tailwindcss/typography');
const skeleton = require('@brainandbones/skeleton/tailwind/theme.cjs');

const config = {
    content: [
        './src/**/*.{html,js,svelte,ts}',
        './node_modules/@brainandbones/skeleton/**/*.{html,js,svelte,ts}'
    ],

    theme: {
        extend: {
            aspectRatio: {
                'yugioh-card' : '3 / 4'
            }
        }
    },

    plugins: [forms, lineClamp, typography, skeleton]
};

module.exports = config;
