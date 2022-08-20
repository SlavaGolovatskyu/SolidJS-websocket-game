import path from 'path';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [solidPlugin(), tsconfigPaths({
    projects: ['./tsconfig.json'],
  })],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
  resolve: {
    alias: { src: path.resolve('src/') },
  }
});
