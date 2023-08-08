import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from "@astrojs/mdx";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind(), preact({ compat: true })],
  trailingSlash: 'never',
  build: {
    format: "file"
  },
});