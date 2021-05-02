import { styled } from '../stitches.config';

export const Button = styled('button', {
  // Reset
  border: 'none',

  display: 'flex',
  alignItems: 'center',
  padding: '$2',
  textTransform: 'uppercase',
  backgroundColor: '$hiContrast',
  color: '$loContrast',
  fontWeight: 700,
  fontSize: '$2',
  borderRadius: '$1',

  variants: {
    variant: {
      outline: {
        backgroundColor: 'transparent',
        boxShadow: 'inset 0 0 0 1px $colors$hiContrast',
        color: '$hiContrast',
      },
    },
  },
});
