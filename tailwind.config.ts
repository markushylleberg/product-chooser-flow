import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        'navigation-height': 'var(--navigation-height)',
      },
      zIndex: {
        'hero-overlay': '1',
        navigation: '50',
      },
      colors: {
        'clever-green': '#003732',
        'clever-green-tint': '#F2F5F5',
        'clever-green-tint-80': '#335F5B',
      },
    },
    fontFamily: {
      sans: 'var(--font-sans)',
    },
  },
  plugins: [],
}
export default config
