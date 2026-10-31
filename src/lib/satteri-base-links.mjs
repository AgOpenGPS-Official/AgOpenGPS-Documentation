/**
 * Sätteri hast plugin: prefix root-relative links (`/hardware/...`) in Markdown
 * and MDX with the site's base path, so the docs also work when served from a
 * sub-path such as a fork's GitHub Pages site (`user.github.io/<repo>/`).
 */
export default function baseLinks(base) {
  const prefix = base.replace(/\/$/, '');
  if (!prefix) return null;

  return {
    name: 'base-links',
    element: {
      filter: ['a'],
      visit(node, ctx) {
        const href = node.properties?.href;
        if (typeof href === 'string' && /^\/(?!\/)/.test(href)) {
          ctx.setProperty(node, 'href', prefix + href);
        }
      },
    },
  };
}
