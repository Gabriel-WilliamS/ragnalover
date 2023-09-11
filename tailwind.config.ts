import type { Config } from 'tailwindcss';

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
        'background-home': 'url("/img/background-home.jpg")',
        'map-traning': 'url("/img/maps/traning.png")',
      },
      backgroundSize: {
        line: '100% 10%',
      },
      keyframes: {
        death: {
          from: {
            transform: 'rotate(0deg) translateY(0px)',
            opacity: '1',
            'pointer-events': 'none',
          },
          to: {
            transform: 'rotate(20deg) translateY(-200px)',
            opacity: '0',
            filter: 'blur(30px)',
            'pointer-events': 'auto',
          },
        },
      },
      animation: {
        death: 'death 0.4s ease-in-out',
      },
      cursor: {
        pointer: 'url(/img/cursor/pointer.webp), pointer',
        attack: 'url(/img/cursor/attack.webp), pointer',
      },
    },
  },
  plugins: [require('tailwindcss-bg-patterns')],
};
export default config;
