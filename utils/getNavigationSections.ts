import { getAllFilesFrontMatter, getDataFolders } from './mdx';
import { ReturnTypeAsync } from './types/ReturnTypeAsync';

interface GlobalFrontMatter {
  title: string;
  navigationOrder: number;
}

// The [number] below is the array index and makes sure the type
// is a value from the array, instead of an array. We need it to
// extend the Matter with GlobalFrontMatter.
type MatterType = ReturnTypeAsync<typeof getAllFilesFrontMatter>[number] &
  GlobalFrontMatter;

function frontMatterToPages(matter: MatterType[], route: string) {
  return matter
    .sort((a, b) => a.navigationOrder - b.navigationOrder)
    .map(page => {
      const { title, slug } = page;

      return {
        title,
        slug: `/${route}/${slug}`,
      };
    });
}

export async function getNavigationSections() {
  const folders = await getDataFolders();
  // TODO: order sections according to maybe folder name or something
  // because now operable comes before perceivable
  const sections = [];

  for (const folder of folders) {
    const section = await getAllFilesFrontMatter<GlobalFrontMatter>(folder);
    const pages = frontMatterToPages(section, folder);

    sections.push({
      // TODO: fix section title
      // title: 'About this project',
      // title: 'Perceivable',
      // title: 'Operable',
      title: folder,
      pages,
    });
  }

  return [...sections];
}

export type NavigationSection = ReturnTypeAsync<
  typeof getNavigationSections
>[number];
