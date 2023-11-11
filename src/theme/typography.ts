export const typography = {
  fontFamily: ['var(--ravi-font)', 'helvetica neue', 'sans-serif'].join(','),
  h1: {
    fontSize: '20px',
    fontWeight: 800,
    lineHeight: '48px',
    '@media (min-width:1024px)': {
      fontSize: '30px',
      lineHeight: '40px',
    },
  },
};
