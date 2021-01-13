import React, { ReactNode } from 'react';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';

import { GlobalStyles } from '@/components/global/GlobalStyles';
import { MDXComponents } from '@/components/MDXComponents';

interface Props {
  children?: ReactNode;
  frontMatter?: any;
}

export const DefaultLayout = ({ children, frontMatter }: Props) => (
  <MDXProvider components={MDXComponents}>
    <Head>
      <title>{frontMatter?.title} - ARIACT</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="preload"
        href="/fonts/inter-var-latin.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
    </Head>

    <GlobalStyles />

    <header>
      <span>header</span>
    </header>

    <h1>{frontMatter?.title}</h1>

    {children}

    <footer>
      <span>Footer</span>
    </footer>
  </MDXProvider>
);
