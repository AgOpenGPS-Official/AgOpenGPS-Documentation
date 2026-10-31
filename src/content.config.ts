import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        // Append a card list of this section's direct child pages
        childList: z.boolean().optional(),
        // Sidebar and child lists link to this URL instead of the page itself
        externalLink: z.url().optional(),
      }),
    }),
  }),
};
