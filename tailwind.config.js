/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        accent: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        platinum: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'slide-in-left': 'slideInLeft 1s ease-out',
        'slide-in-right': 'slideInRight 1s ease-out',
        'pulse': 'pulse 3s infinite',
        'float': 'float 4s infinite',
        'glow': 'glow 3s infinite',
        'shimmer': 'shimmer 4s infinite',
        'color-shift': 'colorShift 12s infinite',
        'ombre-shift': 'ombreShift 2s infinite',
        'demo-card-hover': 'demoCardHover 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        'demo-image-zoom': 'demoImageZoom 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        'button-press': 'buttonPress 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        'gentle-glow': 'gentleGlow 3s ease-in-out infinite',
        'subtle-pulse': 'subtlePulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(59, 130, 246, 0.6), 0 0 40px rgba(113, 113, 122, 0.4)',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-200% center',
          },
          '100%': {
            backgroundPosition: '200% center',
          },
        },
        colorShift: {
          '0%': {
            filter: 'hue-rotate(0deg)',
          },
          '50%': {
            filter: 'hue-rotate(10deg)',
          },
          '100%': {
            filter: 'hue-rotate(0deg)',
          },
        },
        ombreShift: {
          '0%': {
            filter: 'brightness(1) contrast(1) saturate(1)',
          },
          '25%': {
            filter: 'brightness(1.1) contrast(1.05) saturate(1.1)',
          },
          '50%': {
            filter: 'brightness(1.2) contrast(1.1) saturate(1.2)',
          },
          '75%': {
            filter: 'brightness(1.1) contrast(1.05) saturate(1.1)',
          },
          '100%': {
            filter: 'brightness(1) contrast(1) saturate(1)',
          },
        },
        demoCardHover: {
          '0%': {
            transform: 'translateY(0) scale(1)',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
          },
          '100%': {
            transform: 'translateY(-4px) scale(1.02)',
            boxShadow: '0 8px 25px rgba(59, 130, 246, 0.25), 0 4px 12px rgba(29, 78, 216, 0.15)',
          },
        },
        demoImageZoom: {
          '0%': {
            transform: 'scale(1)',
            boxShadow: '0 4px 15px rgba(59, 130, 246, 0.1)',
          },
          '100%': {
            transform: 'scale(1.05)',
            boxShadow: '0 20px 60px rgba(59, 130, 246, 0.2), 0 8px 25px rgba(29, 78, 216, 0.15)',
          },
        },
        buttonPress: {
          '0%': {
            transform: 'translateY(0) scale(1)',
          },
          '50%': {
            transform: 'translateY(1px) scale(0.98)',
          },
          '100%': {
            transform: 'translateY(0) scale(1)',
          },
        },
        gentleGlow: {
          '0%': {
            boxShadow: '0 4px 15px rgba(59, 130, 246, 0.1)',
          },
          '50%': {
            boxShadow: '0 8px 25px rgba(59, 130, 246, 0.2), 0 4px 15px rgba(29, 78, 216, 0.1)',
          },
          '100%': {
            boxShadow: '0 4px 15px rgba(59, 130, 246, 0.1)',
          },
        },
        subtlePulse: {
          '0%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.01)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}