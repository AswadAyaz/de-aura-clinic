/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5C1A33',
          50: '#FBF0F3',
          100: '#F3D9E1',
          200: '#E3AEC0',
          300: '#D3839F',
          400: '#93395C',
          500: '#5C1A33',
          600: '#4A1529',
          700: '#38101F',
          800: '#260B15',
          900: '#14050A',
        },
        secondary: {
          DEFAULT: '#A98A6A',
          50: '#FBF8F4',
          100: '#F3EBDF',
          200: '#E4D2B8',
          300: '#D5B991',
          400: '#C29F72',
          500: '#A98A6A',
          600: '#8C6F52',
          700: '#6E563F',
          800: '#4F3D2D',
          900: '#31251C',
        },
        accent: {
          DEFAULT: '#C9A85E',
          50: '#FAF6EB',
          100: '#F3E7C8',
          200: '#E7D19C',
          300: '#DBBB70',
          400: '#D2AC61',
          500: '#C9A85E',
          600: '#AD8C45',
          700: '#8C7038',
          800: '#6B542A',
          900: '#49391C',
        },
        surface: '#FAF9F7',
        card: '#FFFFFF',
        ink: '#2B2420',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        utility: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 8px rgba(92, 26, 51, 0.07)',
        card: '0 8px 30px rgba(92, 26, 51, 0.08)',
        lift: '0 20px 45px rgba(92, 26, 51, 0.15)',
        glow: '0 0 0 1px rgba(92,26,51,0.06), 0 12px 40px rgba(201, 168, 94, 0.28)',
      },
      borderRadius: {
        xl2: '1.25rem',
        xl3: '1.75rem',
      },
      keyframes: {
        floatY: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        smileDraw: {
          '0%': { strokeDashoffset: '340' },
          '100%': { strokeDashoffset: '0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.06)', opacity: '0.85' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        floatY: 'floatY 6s ease-in-out infinite',
        smileDraw: 'smileDraw 1.8s ease forwards',
        fadeUp: 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        pulseSoft: 'pulseSoft 2.4s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        spinSlow: 'spinSlow 12s linear infinite',
      },
    },
  },
  plugins: [],
}
