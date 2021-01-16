import Link from 'next/link';

import { Box } from '@/design-system/components/Box';
import { Text } from '@/design-system/components/Text';

const CustomLink = (props: React.HTMLProps<HTMLAnchorElement>) => {
  const href = props.href!; // TODO: maybe make href required
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

export const MDXComponents = {
  Box,
  Text,
  a: CustomLink,
};
