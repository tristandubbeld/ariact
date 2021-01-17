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

/**
 * TODO: In the future we could determine the order of the data folders by renaming
 * them to e.g. 0-about-this-project and 1-perceivable. To fix this we will need glob
 * (https://www.npmjs.com/package/glob) for wildcards to keep urls clean (so no
 * numbers show up). We'd need to implement this for getFiles(folder) in [slug].tsx
 *  */
export const sectionOrder = ['about-this-project', 'perceivable', 'operable'];

export async function getNavigationSections() {
  const folders = await getDataFolders();
  const sections = [];

  for (const folder of folders) {
    const section = await getAllFilesFrontMatter<GlobalFrontMatter>(folder);
    const pages = frontMatterToPages(section, folder);

    sections.push({
      title: folder.replace(/-/g, ' '),
      pages,
    });
  }

  sections.sort((a, b) => {
    // Check if the order for this folder matters
    if (sectionOrder.includes(a.title)) {
      // Order the array according to the sorting order
      return sectionOrder.indexOf(a.title) - sectionOrder.indexOf(b.title);
    }

    // Leave the folder where it is, it will be sorted alphabetically at
    // behind all the other sections
    return 0;
  });

  return [...sections];
}

export type NavigationSection = ReturnTypeAsync<
  typeof getNavigationSections
>[number];
