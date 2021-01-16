import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import renderToString from 'next-mdx-remote/render-to-string';
import mdxPrism from 'mdx-prism';

import { MDXComponents } from '@/components/MDXComponents';

const root = process.cwd();

export async function getDataFolders() {
  return fs.readdirSync(path.join(root, 'data'));
}

export async function getFiles(type: string) {
  return fs.readdirSync(path.join(root, 'data', type));
}

export async function getFileBySlug(type: string, slug: string) {
  const source = slug
    ? fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(root, 'data', `${type}.mdx`), 'utf8');

  const { data, content } = matter(source);

  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [
        require('remark-autolink-headings'),
        require('remark-slug'),
        // require('remark-code-titles'),
      ],
      rehypePlugins: [mdxPrism],
    },
  });

  return {
    mdxSource,
    frontMatter: {
      slug: slug || null,
      ...data,
    },
  };
}

interface PageFrontMatter {
  slug: string;
}

export async function getAllFilesFrontMatter<T>(
  type: string,
): Promise<Array<T & PageFrontMatter>> {
  const files = fs.readdirSync(path.join(root, 'data', type));

  return files.map(fileSlug => {
    const source = fs.readFileSync(
      path.join(root, 'data', type, fileSlug),
      'utf8',
    );

    const { data } = matter(source);

    return {
      ...(data as T),
      slug: fileSlug.replace('.mdx', ''),
    };
  });
}
