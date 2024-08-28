import { Roboto } from 'next/font/google';
import localFont from 'next/font/local';

export const roboto = Roboto({
  style: 'normal',
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const interVar = localFont({
  src: './inter/InterVariable.woff2',
  style: 'normal',
  weight: '100 900',
  display: 'swap',
  variable: '--font-inter-var',
});
