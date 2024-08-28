import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '530px',
        md: '870px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        sans: [
          `var(--font-inter-var),${[...defaultTheme.fontFamily.sans]}`,
          { fontFeatureSettings: '"cv11", "ss01"' },
        ],
        roboto: [`var(--font-roboto),${[...defaultTheme.fontFamily.sans]}`],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    borderRadius: {
      none: '0px',
      semi: '8px',
      content: '12px',
      corner: '24px',
      button: '32px',
    },
    colors: {
      transparent: {
        dark: '#FFFFFF00',
        DEFAULT: '#FFFFFF0C',
        light: '#FFFFFF19',
      },
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      primary: {
        dark: '#005047',
        DEFAULT: '#006258',
        light: '#80B1AC',
        disabled: '#006258',
      },
      text: {
        primary: '#FFFFFF',
        secondary: '#ABAFB4',
      },
      dark: {
        DEFAULT: '#080A0B',
        ele1: '#0C0E10',
        ele2: '#111315',
        ele3: '#16181A',
      },
      states: {
        success: {
          DEFAULT: '#27D17F',
          ele1: '#27D17F19',
          ele2: '#27D17F7F',
        },
        error: '#F44336',
        warning: '#FFC107',
      },
    },
  },
  plugins: [],
};
export default config;
