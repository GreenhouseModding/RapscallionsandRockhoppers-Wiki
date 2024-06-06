import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Rapscallions and Rockhoppers',
    customCss: [
        './src/tailwind.css'
    ],
    social: {
      github: 'https://github.com/withastro/starlight'
    },
    sidebar: [{
      label: 'Guides',
      autogenerate: { directory: 'guides' },
    },{
      label: 'Information',
      autogenerate: {
        directory: 'info'
      }
    }],
    tableOfContents: false,
    pagination: false
  }), tailwind({
    applyBaseStyles: false
  })]
});