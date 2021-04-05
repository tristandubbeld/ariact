import React, { ReactNode, useState } from 'react';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

import { styled } from '@/design-system/stitches.config';
import { Box } from '@/design-system/components/Box';
import { Text } from '@/design-system/components/Text';
import { Button } from '@/design-system/components/Button';

import { GlobalStyles } from '@/components/global/GlobalStyles';
import { MDXComponents } from '@/components/MDXComponents';
import { Navigation } from '@/components/Navigation';

import { NavigationSection } from '@/utils/getNavigationSections';

interface Props {
  children?: ReactNode;
  frontMatter?: any;
  navigationSections?: NavigationSection[];
}

const DefaultBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '@bp2': {
    flexDirection: 'row',
  },
});

const Container = styled('div', {
  py: '$4',

  '@bp2': {
    width: '100%',
    pl: '320px',
    pr: 0,
  },
  '@bp3': {
    px: '320px',
    py: '$6',
  },
});

const MainContent = styled('main', {
  ml: 'auto',
  mr: 'auto',
  px: '$2',
  maxWidth: '715px',

  '@bp2': {
    px: '$5',
  },
});

const MobileMenu = styled(Box, {
  display: 'block',
  padding: '$2',

  '@bp2': {
    display: 'none',
  },
});

export const DefaultLayout = ({
  children,
  frontMatter,
  navigationSections,
}: Props) => {
  const [navigationState, setNavigationState] = useState<
    'open' | 'closed' | undefined
  >(undefined);

  return (
    <MDXProvider components={MDXComponents}>
      <Head>
        <title>{frontMatter?.title} - Ariact</title>
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

      <DefaultBox>
        <Navigation
          navigationState={navigationState}
          setNavigationState={setNavigationState}
          navigationSections={navigationSections}
        />

        <MobileMenu>
          <Button
            aria-label="Open navigation"
            onClick={() => {
              setNavigationState('open');
            }}>
            <HamburgerMenuIcon />
            <Text css={{ ml: '$1' }}>Menu</Text>
          </Button>
        </MobileMenu>

        <Container>
          <MainContent aria-hidden={navigationState === 'open'}>
            <Text as="h1" size={8} weight={700}>
              {frontMatter?.title}
            </Text>

            {children}

            <Box as="footer">
              <Box css={{ height: '$9' }} />
              <Text>This is the footer</Text>
            </Box>
          </MainContent>
        </Container>
      </DefaultBox>
    </MDXProvider>
  );
};
