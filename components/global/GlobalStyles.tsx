import Head from 'next/head';

export function GlobalStyles() {
  return (
    <Head>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @font-face {
              font-family: 'Inter';
              font-style: normal;
              font-weight: 100 900;
              font-display: optional;
              src: url(/fonts/inter-var-latin.woff2) format('woff2');
              unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
                U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
                U+FEFF, U+FFFD;
            }

            *,
            *::before,
            *::after {
              box-sizing: border-box;
            }

            body {
              margin: 0;
              background-color: var(--colors-loContrast);
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              line-height: 1;
              font-family: var(--fonts-inter);
            }
          `,
        }}
      />
    </Head>
  );
}
