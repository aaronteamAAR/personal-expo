import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
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
    integrations: [react(), mdx(), tailwind({
      plugins: [require("daisyui")],
    })],
});
