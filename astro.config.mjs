// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';
import redirects from './redirects.json' with { type: 'json' };
import { satteri } from '@astrojs/markdown-satteri';
import baseLinks from './src/lib/satteri-base-links.mjs';

// Where the site is served. CI sets these from the GitHub Pages settings, so
// forks without a custom domain work under https://<user>.github.io/<repo>/
const site = process.env.SITE_ORIGIN || 'https://docs.agopengps.com';
const base = process.env.SITE_BASE_PATH || '/';
const withBase = (path) => base.replace(/\/$/, '') + path;

// Old URLs that only differ from their new URL by letter case would collide on
// case-insensitive file systems; the 404 page redirects those instead.
// Astro serves redirect sources under `base`, but not their destinations.
const pageRedirects = Object.fromEntries(
  Object.entries(redirects)
    .filter(([from, to]) => from.toLowerCase() !== to.toLowerCase())
    .map(([from, to]) => [from, withBase(to)])
);

export default defineConfig({
  site,
  base,
  redirects: pageRedirects,
  markdown: {
    processor: satteri({ hastPlugins: [baseLinks(base)] }),
  },
  integrations: [
    starlight({
      title: 'AgOpenGPS Docs',
      description:
        'Documentation for AgOpenGPS, the open-source autosteer and implement control system, and the hardware to build it.',
      logo: { src: './src/assets/logo.svg' },
      favicon: '/favicons/favicon.ico',
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: withBase('/favicons/apple-touch-icon.png'),
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'manifest',
            href: withBase('/favicons/site.webmanifest'),
          },
        },
      ],
      social: [
        {
          icon: 'discourse',
          label: 'Discourse',
          href: 'https://discourse.agopengps.com',
        },
        {
          icon: 'telegram',
          label: 'Telegram',
          href: 'https://t.me/agopengpsinternational',
        },
        {
          icon: 'youtube',
          label: 'YouTube',
          href: 'https://www.youtube.com/@AgOpenGPS',
        },
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/AgOpenGPS-Official/AgOpenGPS',
        },
      ],
      editLink: {
        baseUrl:
          'https://github.com/AgOpenGPS-Official/AgOpenGPS-Documentation/edit/main/',
      },
      lastUpdated: true,
      disable404Route: true,
      sidebar: [
        { label: 'Getting started', link: '/getting-started/' },
        {
          label: 'Hardware',
          items: [{ autogenerate: { directory: 'hardware', collapsed: true } }],
        },
        {
          label: 'Software',
          items: [{ autogenerate: { directory: 'software', collapsed: true } }],
        },
      ],
      routeMiddleware: './src/routeData.ts',
      components: {
        MarkdownContent: './src/components/MarkdownContent.astro',
        SocialIcons: './src/components/SocialIcons.astro',
      },
      customCss: [
        '@fontsource-variable/source-sans-3',
        '@fontsource/barlow-semi-condensed/600.css',
        '@fontsource/barlow-semi-condensed/700.css',
        './src/styles/theme.css',
      ],
      plugins: [starlightImageZoom()],
    }),
  ],
});
