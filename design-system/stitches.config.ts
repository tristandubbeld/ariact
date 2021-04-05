import { createCss } from '@stitches/react';

export const theme = {
  colors: {
    hiContrast: 'hsl(206,10%,5%)',
    loContrast: 'white',
  },
  fonts: {
    inter: 'Inter, -apple-system, system-ui, sans-serif',
    mono: 'Söhne Mono, menlo, monospace', // TODO: add font I guess
  },
  space: {
    1: '0.5rem',
    2: '1rem',
    3: '1.5rem',
    4: '2rem',
    5: '2.5rem',
    6: '3rem',
    7: '3.5rem',
    8: '4rem',
    9: '4.5rem',
  },
  sizes: {
    1: '0.5rem',
    2: '1rem',
    3: '1.5rem',
    4: '2rem',
    5: '2.5rem',
    6: '3rem',
    7: '3.5rem',
    8: '4rem',
    9: '4.5rem',
  },
  fontSizes: {
    1: '0.725rem',
    2: '1rem',
    3: '1.125rem',
    4: '1.5rem',
    5: '1.725rem',
    6: '2rem',
    7: '2.5rem',
    8: '3rem',
    9: '4rem',
  },
  radii: {
    1: '3px',
    2: '5px',
    3: '7px',
    round: '50%',
    pill: '9999px',
  },
  zIndices: {
    1: '100',
    2: '200',
    3: '300',
    4: '400',
    max: '999',
  },
};

export const darkTheme = {
  hiContrast: 'hsl(206,2%,93%)',
  loContrast: 'hsl(206,8%,8%)',
} as const;

export const utils = {
  // @ts-ignore https://github.com/modulz/stitches/issues/367
  p: config => (
    value: keyof typeof config.theme['space'] | number | (string & {}),
  ) => ({
    paddingTop: value,
    paddingBottom: value,
    paddingLeft: value,
    paddingRight: value,
  }),
  // @ts-ignore https://github.com/modulz/stitches/issues/367
  pt: config => (
    value: keyof typeof config.theme['space'] | number | (string & {}),
  ) => ({
    paddingTop: value,
  }),
  // @ts-ignore https://github.com/modulz/stitches/issues/367
  pr: config => (
    value: keyof typeof config.theme['space'] | number | (string & {}),
  ) => ({
    paddingRight: value,
  }),
  // @ts-ignore https://github.com/modulz/stitches/issues/367
  pb: config => (
    value: keyof typeof config.theme['space'] | number | (string & {}),
  ) => ({
    paddingBottom: value,
  }),
  // @ts-ignore https://github.com/modulz/stitches/issues/367
  pl: config => (
    value: keyof typeof config.theme['space'] | number | (string & {}),
  ) => ({
    paddingLeft: value,
  }),
  // @ts-ignore https://github.com/modulz/stitches/issues/367
  px: config => (
    value: keyof typeof config.theme['space'] | number | (string & {}),
  ) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  // @ts-ignore https://github.com/modulz/stitches/issues/367
  py: config => (
    value: keyof typeof config.theme['space'] | number | (string & {}),
  ) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
  // @ts-ignore https://github.com/modulz/stitches/issues/367,
  m: config => (
    value: keyof typeof config.theme['space'] | number | (string & {}),
  ) => ({
    marginTop: value,
    marginBottom: value,
    marginLeft: value,
    marginRight: value,
  }),
  // @ts-ignore https://github.com/modulz/stitches/issues/367
  mt: config => (
    value: keyof typeof config.theme['space'] | number | (string & {}),
  ) => ({
    marginTop: value,
  }),
  // @ts-ignore https://github.com/modulz/stitches/issues/367
  mr: config => (
    value: keyof typeof config.theme['space'] | number | (string & {}),
  ) => ({
    marginRight: value,
  }),
  // @ts-ignore https://github.com/modulz/stitches/issues/367
  mb: config => (
    value: keyof typeof config.theme['space'] | number | (string & {}),
  ) => ({
    marginBottom: value,
  }),
  // @ts-ignore https://github.com/modulz/stitches/issues/367
  ml: config => (
    value: keyof typeof config.theme['space'] | number | (string & {}),
  ) => ({
    marginLeft: value,
  }),
  // @ts-ignore https://github.com/modulz/stitches/issues/367
  mx: config => (
    value: keyof typeof config.theme['space'] | number | (string & {}),
  ) => ({
    marginLeft: value,
    marginRight: value,
  }),
  // @ts-ignore https://github.com/modulz/stitches/issues/367
  my: config => (
    value: keyof typeof config.theme['space'] | number | (string & {}),
  ) => ({
    marginTop: value,
    marginBottom: value,
  }),
};

const media = {
  bp1: '(min-width: 520px)',
  bp2: '(min-width: 900px)',
  bp3: '(min-width: 1200px)',
  bp4: '(min-width: 1800px)',
  motion: '(prefers-reduced-motion)',
  hover: '(hover: hover)',
  dark: '(prefers-color-scheme: dark)',
  light: '(prefers-color-scheme: light)',
};

const stitchesConfig = createCss({
  theme,
  media,
  // @ts-ignore https://github.com/modulz/stitches/issues/367
  utils,
});

export const { styled, css, getCssString, global } = stitchesConfig;

export const darkThemeClass = stitchesConfig.theme({ colors: darkTheme });
