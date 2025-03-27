/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      colors: {
        primary: {
          50: '#F0F9FA',
          100: '#D9F2F4',
          200: '#B3E4E9',
          300: '#81D0D8',
          400: '#4DBAC6',
          500: '#2D9DAA',
          600: '#23808B',
          700: '#1B636C',
          800: '#154A52',
          900: '#0E3238',
          950: '#061A1D',
        },
        secondary: {
          50: '#F2F7FB',
          100: '#E4EEF7',
          200: '#C8DDEE',
          300: '#9BBDDA',
          400: '#6E9DC6',
          500: '#477DB2',
          600: '#366395',
          700: '#294E78',
          800: '#1F3A5A',
          900: '#172B44',
          950: '#0E1B2D',
        },
        accent: {
          50: '#F1F9EE',
          100: '#E3F3DD',
          200: '#C5E7BB',
          300: '#A7D998',
          400: '#89CC76',
          500: '#6BB954',
          600: '#519A41',
          700: '#3C7B31',
          800: '#2C5A25',
          900: '#1C391A',
          950: '#0F1F0F',
        },
        navy: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
          950: '#172554',
        },
        // Additional gradients that match our theme
        gradients: {
          'teal-blue': 'linear-gradient(135deg, #4DBAC6 0%, #366395 100%)',
          'navy-teal': 'linear-gradient(135deg, #1E3A8A 0%, #23808B 100%)',
          'teal-light': 'linear-gradient(135deg, #81D0D8 0%, #D9F2F4 100%)',
          'teal-accent': 'linear-gradient(135deg, #23808B 0%, #6BB954 100%)',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay-1': 'float 6s ease-in-out 1s infinite',
        'float-delay-2': 'float 6s ease-in-out 2s infinite',
        'float-delay-3': 'float 6s ease-in-out 3s infinite',
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
    },
  },
  plugins: [],
}; 