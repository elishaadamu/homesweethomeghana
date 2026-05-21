import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    '../app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'hsh-navy': '#1B3A8F',
        'hsh-navy-dark': '#0F2460',
        'hsh-navy-light': '#2A4FA8',
        'hsh-cyan': '#00B8D4',
        'hsh-cyan-light': '#33C9E0',
        'hsh-orange': '#F97316',
        'hsh-orange-dark': '#EA6C0A',
        'hsh-gold': '#FCD116',
        'hsh-off-white': '#F8FAFF',
        'hsh-light': '#EEF3FF',
        'hsh-muted': '#6B7FA3',
        'hsh-dark-text': '#0D1B4B',
      },
      fontFamily: {
        outfit: ['var(--font-outfit, Outfit, Arial, sans-serif)'],
        inter: ['var(--font-inter, Inter, Arial, sans-serif)'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease both',
        'fade-in': 'fadeIn 0.7s ease both',
        'slide-left': 'slideInLeft 0.7s ease both',
        'float': 'float 4s ease-in-out infinite',
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(252,209,22,0.5)' },
          '50%': { boxShadow: '0 0 0 14px rgba(252,209,22,0)' },
        },
      },
      scrollMargin: {
        20: '80px',
      },
    },
  },
  plugins: [],
};

export default config;
