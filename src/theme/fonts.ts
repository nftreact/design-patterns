import localFont from 'next/font/local';

export const ravi = localFont({
  src: [
    {
      path: '../../public/fonts/woff2/RaviFaNum-Regular.woff2',
      weight: '800',
    },
    {
      path: '../../public/fonts/woff2/RaviFaNum-Medium.woff2',
      weight: '400',
    },
    {
      path: '../../public/fonts/woff2/RaviFaNum-Bold.woff2',
      weight: '700',
    },
    {
      path: '../../public/fonts/woff2/RaviFaNum-ExtraBlack.woff2',
      weight: '950',
    },
  ],
  variable: '--ravi-font',
});
