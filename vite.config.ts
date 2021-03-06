import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteAliases } from 'vite-aliases';
import EnvironmentPlugin from 'vite-plugin-environment';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    EnvironmentPlugin(['UNSPLASH_API']),
    ViteAliases({
      dir: 'src',
      prefix: '@',
      deep: true,
      depth: 1,
      createLog: false,
      logPath: 'src/logs',
      createGlobalAlias: true,
      adjustDuplicates: false,
      useAbsolute: false,
      useIndexes: false,
      useConfig: false,
      useTypescript: true,
      root: process.cwd(),
    }),
  ],
});
