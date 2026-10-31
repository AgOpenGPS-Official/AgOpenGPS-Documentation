// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';
import redirects from './redirects.json' with { type: 'json' };

// Old URLs that only differ from their new URL by letter case would collide on
// case-insensitive file systems; the 404 page redirects those instead.
const pageRedirects = Object.fromEntries(
  Object.entries(redirects).filter(
    ([from, to]) => from.toLowerCase() !== to.toLowerCase()
  )
);

export default defineConfig({
  site: 'https://docs.agopengps.com',
  redirects: pageRedirects,
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
            href: '/favicons/apple-touch-icon.png',
          },
        },
        {
          tag: 'link',
          attrs: { rel: 'manifest', href: '/favicons/site.webmanifest' },
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
