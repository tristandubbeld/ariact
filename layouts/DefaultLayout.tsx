import React, { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { MDXProvider } from '@mdx-js/react';

import { styled } from '@/design-system/stitches.config';
import { Box } from '@/design-system/components/Box';
import { Text } from '@/design-system/components/Text';
import { GlobalStyles } from '@/components/global/GlobalStyles';
import { MDXComponents } from '@/components/MDXComponents';
import { NavigationSection } from '@/utils/getNavigationSections';

interface Props {
  children?: ReactNode;
  frontMatter?: any;
  navigationSections?: NavigationSection[];
}

const DefaultBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  bp2: {
    flexDirection: 'row',
  },
});

const Navigation = styled('nav', {
  width: '100%',
  WebkitOverflowScrolling: 'touch',
  overflowX: 'hidden',
  px: '$2',
  py: '$4',
  backgroundColor: '$hiContrast',
  color: '$loContrast',

  bp2: {
    px: '$5',
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    width: '320px',
  },

  bp3: {
    py: '$5',
  },
});

const Container = styled('div', {
  py: '$4',
  bp2: {
    width: '100%',
    pl: '320px',
    pr: 0,
  },
  bp3: {
    px: '320px',
    py: '$6',
  },
});

const MainContent = styled('main', {
  ml: 'auto',
  mr: 'auto',
  px: '$2',
  maxWidth: '715px',

  bp2: {
    px: '$5',
  },
});

const LogoLink = styled('a', {
  color: '$loContrast',
  textDecoration: 'none',
  textTransform: 'uppercase',
  fontSize: '$5',
  fontWeight: 700,
  transition: 'font-weight .2s',

  '&:hover': {
    fontWeight: 900,
  },
});

const NavigationLink = styled('a', {
  color: '$loContrast',
  textDecoration: 'none',

  '&:hover': {
    textDecoration: 'underline',
  },
});

export const DefaultLayout = ({
  children,
  frontMatter,
  navigationSections,
}: Props) => (
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
      <Navigation>
        <Link href="/" passHref>
          <LogoLink>Ariact</LogoLink>
        </Link>
        <Box css={{ height: '$5' }} />
        {navigationSections
          ? navigationSections.map(section => (
              <Box key={section.title} css={{ pb: '$5' }}>
                <Text
                  as="p"
                  size="3"
                  weight={700}
                  // TODO: Background component
                  // just like https://seek-oss.github.io/braid-design-system/components/BackgroundProvider
                  css={{ color: '$loContrast', textTransform: 'capitalize' }}>
                  {section.title}
                </Text>
                <Box css={{ height: '$3' }} />
                {section.pages.map(page => (
                  <Text
                    key={page.title}
                    as="div"
                    weight={500}
                    size="3"
                    // TODO: Stack component
                    css={{ pb: '$2' }}>
                    <Link href={page.slug} passHref>
                      <NavigationLink>{page.title}</NavigationLink>
                    </Link>
                  </Text>
                ))}
              </Box>
            ))
          : null}
      </Navigation>

      <Container>
        <MainContent>
          <Text as="h1" size="8" weight={700}>
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
