import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel/serverless';


// https://astro.build/config
export default defineConfig({
    output: 'server',
    adapter: vercel(),
    markdown: {
        shikiConfig: {
          theme: 'dark-plus',
          langs: ['python'],
        },
      },
    integrations: [react(), mdx()],
});
