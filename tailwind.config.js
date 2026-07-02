module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        net: {
          50: '#edfffe',
          100: '#d0feff',
          200: '#a7fbff',
          300: '#6af5ff',
          400: '#00e5ff',
          500: '#00bfd4',
          600: '#009db8',
          700: '#007e96',
          800: '#006579',
          900: '#005465',
          950: '#003544',
        },
        navy: {
          900: '#0a0f1a',
          800: '#0f172a',
          700: '#1a2332',
          600: '#243044',
        },
        snow: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
        },
      },
    },
  },
  plugins: [],
};
