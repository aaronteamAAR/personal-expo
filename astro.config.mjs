import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    markdown: {
        shikiConfig: {
          theme: 'dark-plus',
        },
      },
    integrations: [react(), mdx()],
});
