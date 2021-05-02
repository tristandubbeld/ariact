import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FocusScope } from '@react-aria/focus';

import { styled } from '@/design-system/stitches.config';
import { Box } from '@/design-system/components/Box';
import { Text } from '@/design-system/components/Text';

import { NavigationSection } from '@/utils/getNavigationSections';
import { debounce } from '@/utils/simpleDebounce';
import { Cross1Icon } from '@radix-ui/react-icons';

const Nav = styled('nav', {
  width: '80%',
  WebkitOverflowScrolling: 'touch',
  overflowX: 'hidden',
  px: '$2',
  py: '$4',
  backgroundColor: '$loContrast',
  borderRight: '1px solid $gray300',
  position: 'fixed',
  top: 0,
  bottom: 0,
  right: '100%',
  transition: 'visibility .2s, transform .2s',

  '@bp2': {
    transform: 'translateX(0)',
    transition: 'none',
    px: '$5',
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 'auto',
    width: '320px',
  },
  '@bp3': {
    py: '$5',
  },

  variants: {
    status: {
      open: {
        visibility: 'unset',
        transform: 'translateX(100%)',
      },
      closed: {
        visibility: 'hidden',
        transform: 'translateX(0%)',
      },
    },
  },
});

const LogoText = styled(Text, {
  textTransform: 'uppercase',
});

const LogoLink = styled('a', {
  color: 'inherit',
  textDecoration: 'none',
  fontWeight: 700,
  transition: 'font-weight .2s',

  '&:hover': {
    fontWeight: 900,
  },
});

const NavigationLink = styled('a', {
  color: '$hiContrast',
  textDecoration: 'none',

  '&:hover': {
    textDecoration: 'underline',
  },
});

interface Props {
  navigationState: 'open' | 'closed' | undefined;
  setNavigationState: (status: 'open' | 'closed' | undefined) => void;
  navigationSections?: NavigationSection[];
}

export const Navigation: React.FC<Props> = ({
  navigationState,
  setNavigationState,
  navigationSections,
}) => {
  const router = useRouter();

  useEffect(() => {
    const debouncedResizeHandler = debounce(() => {
      if (window.innerWidth >= 900) {
        setNavigationState(undefined);
      }
    }, 100);

    window.addEventListener('resize', debouncedResizeHandler);

    return () => {
      window.removeEventListener('resize', debouncedResizeHandler);
    };
  }, []);

  useEffect(() => {
    const handleRouteChange = () => setNavigationState(undefined);

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  return (
    <Nav status={navigationState} aria-labelledby="nav-title-id">
      {/* https://github.com/adobe/react-spectrum/issues/1765 */}
      <FocusScope
        contain={navigationState === 'open'}
        autoFocus={navigationState === 'open'}>
        <Box
          css={{
            position: 'absolute',
            right: '$2',
            top: '$3',
            display: 'block',

            '@bp2': {
              display: 'none',
            },
          }}>
          <Box
            as="button"
            aria-label="Close navigation"
            css={{
              backgroundColor: 'transparent',
              // color: '$loContrast',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              padding: '$2',
              ml: '$1',
              fontWeight: 700,
              textTransform: 'uppercase',
            }}
            onClick={() => setNavigationState('closed')}>
            <Cross1Icon />
            <Text css={{ ml: '$1' }}>Close</Text>
          </Box>
        </Box>
        <LogoText as="h2" size="5">
          <Link href="/" passHref>
            <LogoLink id="nav-title-id">Ariact</LogoLink>
          </Link>
        </LogoText>

        <Box css={{ height: '$5' }} />

        {navigationSections?.map(section => {
          const headingId = `${section.title.replace(/ /g, '-')}-heading`;

          return (
            <Box key={section.title} css={{ pb: '$5' }}>
              <Text
                id={headingId}
                as="h3"
                size={3}
                weight={700}
                // TODO: Background component
                // just like https://seek-oss.github.io/braid-design-system/components/BackgroundProvider
                css={{
                  '&::first-letter': {
                    textTransform: 'capitalize',
                  },
                }}>
                {section.title}
              </Text>
              <Box css={{ height: '$3' }} />
              <Box
                as="ul"
                aria-labelledby={headingId}
                css={{ margin: 0, padding: 0 }}>
                {section.pages.map(page => (
                  <Text
                    key={page.title}
                    as="li"
                    weight={500}
                    size={3}
                    // TODO: Stack component
                    css={{ pb: '$2', listStyle: 'none' }}>
                    <Link href={page.slug} passHref>
                      <NavigationLink>{page.title}</NavigationLink>
                    </Link>
                  </Text>
                ))}
              </Box>
            </Box>
          );
        })}
      </FocusScope>
    </Nav>
  );
};
