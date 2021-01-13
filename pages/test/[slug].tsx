import hydrate from 'next-mdx-remote/hydrate';

import { getFiles, getFileBySlug } from '@/utils/mdx';
import { DefaultLayout } from '@/layouts/DefaultLayout';
import { MDXComponents } from '@/components/MDXComponents';
import { GetStaticPaths, GetStaticProps } from 'next';

interface FrontMatter {
  title: string;
}

interface PageProps {
  mdxSource: any;
  frontMatter: FrontMatter;
}

export default function Test({ mdxSource, frontMatter }: PageProps) {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  return <DefaultLayout frontMatter={frontMatter}>{content}</DefaultLayout>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles('test');

  return {
    paths: posts.map(p => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getFileBySlug('test', params?.slug as string);

  return { props: post };
};
