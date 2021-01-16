import hydrate from 'next-mdx-remote/hydrate';

import { getFiles, getFileBySlug, getDataFolders } from '@/utils/mdx';
import { DefaultLayout } from '@/layouts/DefaultLayout';
import { MDXComponents } from '@/components/MDXComponents';
import { GetStaticPaths, GetStaticProps } from 'next';
import {
  getNavigationSections,
  NavigationSection,
} from '@/utils/getNavigationSections';

interface FrontMatter {
  title: string;
}

interface PageProps {
  mdxSource: any;
  frontMatter: FrontMatter;
  navigationSections: NavigationSection[];
}

export default function Test({
  mdxSource,
  frontMatter,
  navigationSections,
}: PageProps) {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  return (
    <DefaultLayout
      frontMatter={frontMatter}
      navigationSections={navigationSections}>
      {content}
    </DefaultLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const folders = await getDataFolders();
  const pages: { slug: string; folder: string }[] = [];

  for (const folder of folders) {
    const files = await getFiles(folder);

    files.forEach(file => {
      pages.push({
        slug: file.replace(/\.mdx/, ''),
        folder: folder,
      });
    });
  }

  return {
    paths: pages.map(page => ({
      params: page,
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const folder = params?.folder as string;
  const slug = params?.slug as string;

  const page = await getFileBySlug(folder, slug);
  const navigationSections = await getNavigationSections();

  return {
    props: {
      ...page,
      navigationSections,
    },
  };
};
