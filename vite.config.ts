import { defineConfig } from 'vite';
import suidPlugin from '@suid/vite-plugin';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [suidPlugin(), solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
