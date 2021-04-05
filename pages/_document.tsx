import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

import { getCssString } from '@/design-system/stitches.config';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style dangerouslySetInnerHTML={{ __html: getCssString() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
