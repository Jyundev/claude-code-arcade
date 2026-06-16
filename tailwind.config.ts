import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        border: 'var(--color-border)',
        neon: {
          pink: 'var(--color-neon-pink)',
          orange: 'var(--color-neon-orange)',
          purple: 'var(--color-neon-purple)',
          yellow: 'var(--color-neon-yellow)',
        },
      },
      fontFamily: {
        arcade: [
          'var(--font-press-start-2p)',
          'var(--font-noto-sans-kr)',
          'cursive',
        ],
        mono: [
          'var(--font-ibm-plex-mono)',
          'var(--font-noto-sans-kr)',
          'monospace',
        ],
      },
      boxShadow: {
        'neon-pink': '0 0 16px var(--color-neon-pink)',
        'neon-orange': '0 0 16px var(--color-neon-orange)',
        'neon-purple': '0 0 16px var(--color-neon-purple)',
        pixel: '4px 4px 0 0 var(--color-border)',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '92%': { opacity: '1' },
          '93%': { opacity: '0.4' },
          '94%': { opacity: '1' },
        },
      },
      animation: {
        blink: 'blink 1.1s steps(1) infinite',
        flicker: 'flicker 4s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
