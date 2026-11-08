# AgOpenGPS - Documentation

The documentation for
[AgOpenGPS](https://github.com/AgOpenGPS-Official/AgOpenGPS) and the
[hardware](https://github.com/AgOpenGPS-Official/Boards) that is needed to setup
autosteer for farming equipment.

Link: https://docs.agopengps.com

## Editing

Every page on the site has an **Edit page** link at the bottom that opens the
file on GitHub, so small fixes can be made directly in the browser.

Pages are Markdown files in [`src/content/docs`](src/content/docs). The folder
structure is the URL structure: `src/content/docs/hardware/tablet.md` is served
at `/hardware/tablet/`, and a folder's `index.md` is its section page. Images
live in an `img` folder next to the pages and are linked relatively, e.g.
`![Wiring](./img/wiring.png)`.

Front matter at the top of each page:

```yaml
---
title: Wheel Angle Sensor
description: Optional summary, shown in search results and section listings
sidebar:
  label: WAS # shorter name for the sidebar (optional)
  order: 5 # position in the sidebar, lower comes first
  hidden: true # leave the page out of the sidebar (optional)
childList: true # section pages: list the child pages at the bottom
---
```

Notes, tips and warnings use asides:

```md
:::caution[Warning]
Playing with electronics is risky.
:::
```

If you rename or move a page, add its old URL to
[`redirects.json`](redirects.json) so existing links keep working.

## Building

The site is built with [Astro](https://astro.build/) and
[Starlight](https://starlight.astro.build/). It needs Node.js 22.23.4 or newer.

```sh
npm install
npm run dev     # local preview at http://localhost:4321
npm run build   # production build into dist/
npm run format  # format all files with Prettier
```
