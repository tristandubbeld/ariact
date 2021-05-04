import React, { ReactNode, useState } from 'react';
import Head from 'next/head';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

import { styled } from '@/design-system/stitches.config';
import { Box } from '@/design-system/components/Box';
import { Text } from '@/design-system/components/Text';
import { Button } from '@/design-system/components/Button';

import { GlobalStyles } from '@/components/global/GlobalStyles';
import { Navigation } from '@/components/Navigation';

import { NavigationSection } from '@/utils/getNavigationSections';
import { SkipToContent } from '@/components/SkipToContent';

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

const Retain = styled('div', {
  ml: 'auto',
  mr: 'auto',
  px: '$2',
  maxWidth: '715px',

  '@bp2': {
    px: '$5',
  },
});

const MobileMenu = styled('div', {
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
    <>
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

      <SkipToContent />

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
          <Retain>
            <main id="main" aria-hidden={navigationState === 'open'}>
              <Text as="h1" size={8} weight={700}>
                {frontMatter?.title}
              </Text>

              {children}
            </main>
            <Box as="footer">
              <Box css={{ height: '$9' }} />
              <Text>This is the footer</Text>
            </Box>
          </Retain>
        </Container>
      </DefaultBox>
    </>
  );
};
