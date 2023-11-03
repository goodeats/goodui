import { type Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme.js';
import animatePlugin from 'tailwindcss-animate';
import radixPlugin from 'tailwindcss-radix';
import { extendedTheme } from './src/lib/extended-theme';

export default {
  content: [
    './app/**/*.{ts,tsx,jsx,js}',
    'node_modules/@pppaaattt/goodui/**/*.{ts,tsx,jsx,js}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      ...extendedTheme,
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [animatePlugin, radixPlugin],
} satisfies Config;
