const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}'
   ],
   theme: {
      extend: {
         backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            'np-petra': "url('/assets/petra.png')",
            'selva-amazonica': "url('/assets/selva-amazonica.png')",
            'neuronal-grid': "url('/assets/neuronal-grid.png')",
            'tulipan-amarillo': "url('/assets/tulipan-amarillo.png')",
            'banco-peces': "url('/assets/banco-peces.png')",
            'blue-wall': "url('/assets/blue-wall.png')",
            'yellow-wall': "url('/assets/yellow-wall.png')"
         }
      }
   },
   plugins: []
};
