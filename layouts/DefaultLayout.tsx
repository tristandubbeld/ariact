import React, { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { MDXProvider } from '@mdx-js/react';

import { styled } from '@/design-system/stitches.config';
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
  borderBottom: '1px solid',
  borderColor: '$gray500',
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
    borderRight: '1px solid',
    borderBottom: '0',
  },

  bp3: {
    py: '$5',
  },
});

const Container = styled('div', {
  py: '$7',
  bp2: {
    width: '100%',
    pl: '320px',
    pr: 0,
  },
  bp3: {
    px: '320px',
    py: '$8',
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
  fontSize: '$8',
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

const Box = styled('div', {});
const Text = styled('span', {});

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
        <Box css={{ pb: '$5' }}>
          <Link href="/" passHref>
            <LogoLink>Ariact</LogoLink>
          </Link>
        </Box>
        {navigationSections
          ? navigationSections.map(section => (
              <Box key={section.title} css={{ pb: '$5' }}>
                <Text
                  as="p"
                  css={{ fontWeight: 700, fontSize: '$6', mb: '$5' }}>
                  {section.title}
                </Text>
                {section.pages.map(page => (
                  <Text
                    key={page.title}
                    as="div"
                    css={{ fontWeight: 500, pb: '$3', fontSize: '$5' }}>
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
          <h1>{frontMatter?.title}</h1>

          {children}

          <footer>
            <span>Footer</span>
          </footer>
        </MainContent>
      </Container>
    </DefaultBox>
  </MDXProvider>
);
