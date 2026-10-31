import { getCollection, type CollectionEntry } from 'astro:content';

export type DocsEntry = CollectionEntry<'docs'>;

/** URL path of a docs entry, with trailing slash (`/hardware/faq/`). */
export const pathOf = (entry: DocsEntry) =>
  entry.id === 'index' ? '/' : `/${entry.id}/`;

/** Link target for an entry: its external link if it has one, else its page. */
export const hrefOf = (entry: DocsEntry) =>
  entry.data.externalLink ?? pathOf(entry);

export const labelOf = (entry: DocsEntry) =>
  entry.data.sidebar.label || entry.data.title;

export const orderOf = (entry: DocsEntry | undefined) =>
  entry?.data.sidebar.order ?? Number.MAX_VALUE;

let byPath: Promise<Map<string, DocsEntry>> | undefined;

/** All docs entries keyed by URL path. */
export function getPagesByPath() {
  byPath ??= getCollection('docs').then(
    (entries) => new Map(entries.map((e) => [pathOf(e), e]))
  );
  return byPath;
}

/** Direct children of a section index page, in sidebar order. */
export async function getChildren(parent: DocsEntry) {
  const pages = await getPagesByPath();
  const base = pathOf(parent);
  return [...pages.entries()]
    .filter(([path, entry]) => {
      if (path === base || !path.startsWith(base)) return false;
      const rest = path.slice(base.length, -1);
      return !rest.includes('/') && !entry.data.sidebar.hidden;
    })
    .map(([, entry]) => entry)
    .sort(
      (a, b) => orderOf(a) - orderOf(b) || labelOf(a).localeCompare(labelOf(b))
    );
}
