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
        metal: {
          black: '#050505',         // Very deep black
          gray: '#121212',          // Dark gray for cards
          red: '#880808',           // Blood red / Crimson accent
          white: '#EAEAEA',         // Off-white for text
          muted: '#666666',         // Muted gray for inactive text
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
            boxShadow: '0 0 5px #880808, 0 0 10px #880808',
          },
          '100%': {
            boxShadow: '0 0 10px #880808, 0 0 15px #880808',
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
