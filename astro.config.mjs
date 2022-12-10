import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({

    output: 'server',
    markdown: {
        shikiConfig: {
          theme: 'dark-plus',
          langs: ['python'],
        },
      },
    integrations: [react(), mdx()],
});
