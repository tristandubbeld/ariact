import { global } from './stitches.config';

export const globalStyles = global({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },
  body: {
    margin: 0,
    backgroundColor: '$loContrast',
    color: '$hiContrast',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    fontFamily: '$inter',
  },
});
