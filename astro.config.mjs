import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import cloudflare from '@astrojs/cloudflare';


// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare({ mode: "directory" }),
    markdown: {
        shikiConfig: {
          theme: 'dark-plus',
          langs: ['python'],
        },
      },
    integrations: [react(), mdx()],
});
