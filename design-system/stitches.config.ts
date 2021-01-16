import { createStyled } from '@stitches/react';
export * from '@stitches/react';

export const theme = {
  colors: {
    $hiContrast: 'hsl(206,10%,5%)',
    $loContrast: 'white',
  },
  fonts: {
    $inter: 'Inter, -apple-system, system-ui, sans-serif',
    $mono: 'Söhne Mono, menlo, monospace', // TODO: add font I guess
  },
  space: {
    $1: '0.5rem',
    $2: '1rem',
    $3: '1.5rem',
    $4: '2rem',
    $5: '2.5rem',
    $6: '3rem',
    $7: '3.5rem',
    $8: '4rem',
    $9: '4.5rem',
  },
  sizes: {
    $1: '0.5rem',
    $2: '1rem',
    $3: '1.5rem',
    $4: '2rem',
    $5: '2.5rem',
    $6: '3rem',
    $7: '3.5rem',
    $8: '4rem',
    $9: '4.5rem',
  },
  fontSizes: {
    $1: '0.725rem',
    $2: '1rem',
    $3: '1.125rem',
    $4: '1.5rem',
    $5: '1.725rem',
    $6: '2rem',
    $7: '2.5rem',
    $8: '3rem',
    $9: '4rem',
  },
  radii: {
    $1: '3px',
    $2: '5px',
    $3: '7px',
    $round: '50%',
    $pill: '9999px',
  },
  zIndices: {
    $1: '100',
    $2: '200',
    $3: '300',
    $4: '400',
    $max: '999',
  },
};

export const darkTheme = {
  $hiContrast: 'hsl(206,2%,93%)',
  $loContrast: 'hsl(206,8%,8%)',
} as const;

export const utils = {
  p: (value: any) => ({
    paddingTop: value,
    paddingBottom: value,
    paddingLeft: value,
    paddingRight: value,
  }),
  pt: (value: any) => ({
    paddingTop: value,
  }),
  pr: (value: any) => ({
    paddingRight: value,
  }),
  pb: (value: any) => ({
    paddingBottom: value,
  }),
  pl: (value: any) => ({
    paddingLeft: value,
  }),
  px: (value: any) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: any) => ({
    paddingTop: value,
    paddingBottom: value,
  }),

  m: (value: any) => ({
    marginTop: value,
    marginBottom: value,
    marginLeft: value,
    marginRight: value,
  }),
  mt: (value: any) => ({
    marginTop: value,
  }),
  mr: (value: any) => ({
    marginRight: value,
  }),
  mb: (value: any) => ({
    marginBottom: value,
  }),
  ml: (value: any) => ({
    marginLeft: value,
  }),
  mx: (value: any) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: any) => ({
    marginTop: value,
    marginBottom: value,
  }),
};

const breakpoints = {
  default: (rule: string) => rule,
  bp1: (rule: string) => `@media (min-width: 520px) { ${rule} }`,
  bp2: (rule: string) => `@media (min-width: 900px) { ${rule} }`,
  bp3: (rule: string) => `@media (min-width: 1200px) { ${rule} }`,
  bp4: (rule: string) => `@media (min-width: 1800px) { ${rule} }`,
  motion: (rule: string) => `@media (prefers-reduced-motion) { ${rule} }`,
  hover: (rule: string) => `@media (hover: hover) { ${rule} }`,
  dark: (rule: string) => `@media (prefers-color-scheme: dark) { ${rule} }`,
  light: (rule: string) => `@media (prefers-color-scheme: light) { ${rule} }`,
};

export const { styled, css } = createStyled({
  tokens: theme,
  breakpoints,
  utils,
});

export const darkThemeClass = css.theme({ colors: darkTheme });
