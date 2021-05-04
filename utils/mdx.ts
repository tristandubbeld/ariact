import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';
import remarkSlug from 'remark-slug';

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

  const { code } = await bundleMDX(content, {
    xdmOptions(_input, options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkSlug];

      return options;
    },
  });

  return {
    code,
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
