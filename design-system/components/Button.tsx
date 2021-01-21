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
});
