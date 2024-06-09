import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './features/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        blccu: {
          white: 'rgb(var(--blccu-white) / <alpha-value>)',
          neutral: {
            200: 'rgb(var(--blccu-neutral-200) / <alpha-value>)',
            400: 'rgb(var(--blccu-neutral-400) / <alpha-value>)',
            600: 'rgb(var(--blccu-neutral-600) / <alpha-value>)',
            800: 'rgb(var(--blccu-neutral-800) / <alpha-value>)',
          },
          black: 'rgb(var(--blccu-black) / <alpha-value>)',
          red: 'rgb(var(--blccu-red) / <alpha-value>)',
          input: 'rgb(var(--blccu-input) / <alpha-value>)',
          ring: 'rgb(var(--blccu-ring) / <alpha-value>)',
          background: 'rgb(var(--blccu-background) / <alpha-value>)',
          foreground: 'rgb(var(--blccu-foreground) / <alpha-value>)',
          kakao: {
            background: 'rgb(var(--blccu-kakao-background) / <alpha-value>)',
            foreground: 'rgb(var(--blccu-kakao-foreground) / <alpha-value>)',
          },
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundPatterns: {
        checkerboard:
          'linear-gradient(to bottom, transparent 19px, #f2f2f2 19px) 0 0 / 100vw 20px repeat-y, linear-gradient(to right, transparent 19px, #f2f2f2 19px) 0 0 / 20px 100vh repeat-x white;',
      },
      fontSize: {
        '2xs': '0.625rem' /* 10px */,
        'lg-2': '1rem' /* 16px */,
      },
      fontFamily: {
        'noto-sans-kr': ['var(--font-noto-sans-kr)'],
      },
      screens: {
        'over-blccu-screen-width': '448px',
      },
      boxShadow: {
        'blccu-top': '-8px -8px 20px 0 rgba(0, 0, 0, 0.04)',
        'blccu-bottom': '4px 4px 20px 0 rgba(0, 0, 0, 0.04)',
        'blccu-secondary': '2px 2px 20px 5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
