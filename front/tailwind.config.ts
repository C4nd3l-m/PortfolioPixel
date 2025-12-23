import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        kuromi: {
          black: '#0D0D0D',         // Fondo profundo
          purple: '#240046',        // Sombras
          'neon-purple': '#9d4edd', // Acento principal
          pink: '#ff006e',          // Detalles y botones
          white: '#f8f9fa',         // Texto
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        bungee: ['Bungee', 'cursive'],
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': {
            boxShadow: '0 0 5px #ff006e, 0 0 10px #ff006e, 0 0 15px #ff006e',
          },
          '100%': {
            boxShadow: '0 0 10px #ff006e, 0 0 20px #ff006e, 0 0 30px #ff006e, 0 0 40px #9d4edd',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
} satisfies Config;
