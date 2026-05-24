import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        display: ['Quicksand', 'sans-serif'],
      },
      colors: {
        lavender: {
          50:  '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        soft: {
          lavender: '#e8e0f8',
          lilac: '#d4c5f9',
          mist: '#f0ebff',
          pearl: '#faf9ff',
          violet: '#b8a4e8',
          deep: '#6b46c1',
          ink: '#2d1b6b',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
        'slide-in': 'slideIn 0.5s ease forwards',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition:  '200% 0' },
        }
      },
      boxShadow: {
        'lavender-sm': '0 2px 12px rgba(167,139,250,0.15)',
        'lavender-md': '0 4px 24px rgba(167,139,250,0.25)',
        'lavender-lg': '0 8px 40px rgba(167,139,250,0.35)',
        'lavender-glow': '0 0 30px rgba(167,139,250,0.4)',
      },
      backgroundImage: {
        'lavender-gradient': 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 50%, #ddd6fe 100%)',
        'hero-mesh': 'radial-gradient(ellipse at 20% 50%, #e8e0f8 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #ddd6fe 0%, transparent 50%), radial-gradient(ellipse at 60% 80%, #ede9fe 0%, transparent 50%)',
        'card-shimmer': 'linear-gradient(90deg, transparent, rgba(196,181,253,0.15), transparent)',
      }
    },
  },
  plugins: [],
}
export default config
