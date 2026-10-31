/**
 * Sätteri hast plugin: prefix root-relative links (`/hardware/...`) and image
 * sources (`/diagrams/...`) in Markdown and MDX with the site's base path, so
 * the docs also work when served from a sub-path such as a fork's GitHub Pages
 * site (`user.github.io/<repo>/`).
 */
export default function baseLinks(base) {
  const prefix = base.replace(/\/$/, '');
  if (!prefix) return null;

  return {
    name: 'base-links',
    element: {
      filter: ['a', 'img'],
      visit(node, ctx) {
        const attr = node.tagName === 'img' ? 'src' : 'href';
        const url = node.properties?.[attr];
        if (typeof url === 'string' && /^\/(?!\/)/.test(url)) {
          ctx.setProperty(node, attr, prefix + url);
        }
      },
    },
  };
}
