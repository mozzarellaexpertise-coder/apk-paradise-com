import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // vitePreprocess is faster and preferred for Svelte 5
  preprocess: vitePreprocess(),

  kit: {
    // adapter-auto is only for zero-config platforms; 
    // adapter-node is correct for Hostinger VPS/Node hosting
    adapter: adapter({
      out: 'build', 
      precompress: true
    })
    // REMOVED: target: '#svelte' (This is deprecated and will cause an error)
  }
};

export default config;