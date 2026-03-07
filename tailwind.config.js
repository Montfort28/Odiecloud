/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#f5fbff',
        surface: '#ffffff',
        'surface-2': '#eef7fd',
        text: '#0f172a',
        'text-light': '#28435f',
        muted: '#587089',
        line: '#d8e8f4',
        blue: {
          700: '#0c7fc7',
          800: '#086aa5',
          900: '#044f7d',
          soft: '#dff2fe',
        },
        cyan: {
          400: '#53b9f8',
        },
        teal: '#14b8a6',
        navy: '#0b2239',
      },

      borderRadius: {
        '4xl': '2rem',
      },

      boxShadow: {
        custom: '0 18px 48px rgba(10, 54, 88, 0.08)',
        glow: '0 0 20px rgba(12, 127, 199, 0.15)',
        'glow-lg': '0 0 40px rgba(12, 127, 199, 0.25)',
      },

      maxWidth: {
        container: '1280px',
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },

      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'bounce-in': 'bounceIn 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'scale-in': 'scaleIn 0.5s ease-out',
        'gradient-shift': 'gradientShift 3s ease infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'border-glow': 'borderGlow 3s ease-in-out infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(12, 127, 199, 0.15)' },
          '50%': { boxShadow: '0 0 40px rgba(12, 127, 199, 0.3)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 10px rgba(83, 185, 248, 0.2)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 25px rgba(83, 185, 248, 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        borderGlow: {
          '0%, 100%': { borderColor: 'rgba(12, 127, 199, 0.3)' },
          '50%': { borderColor: 'rgba(83, 185, 248, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}