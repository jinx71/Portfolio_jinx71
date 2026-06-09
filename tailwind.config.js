/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B1626',
        'ink-soft': '#16263B',
        paper: '#F5F8FA',
        line: '#D7E0E8',
        'line-dark': '#23364E',
        brand: '#1A6FA3',
        'brand-deep': '#114B73',
        amber: '#D9912C',
        validated: '#1F8A5D',
        body: '#1C2A3A',
        muted: '#5A6B7E',
        'muted-dark': '#8DA2B8',
      },
      fontFamily: {
        display: ['Archivo', 'sans-serif'],
        sans: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        page: '72rem',
      },
    },
  },
  plugins: [],
};
