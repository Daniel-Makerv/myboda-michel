import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            colors: {
                boda: {
                    marfil: "#F8F4E3",
                    terracota: "#E2725B",
                    azul_noche: "#2C3E50",
                    blanco_nieve: "#FAFAFA",
                    verde_pino: "#2F4F4F",
                    dorado: "#F7C815",
                }
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans], // Fuente existente
                lovedbytheking: ['"Loved by the King"', 'serif'], // Nueva fuente
            },
        },
    },

    plugins: [forms],
};
