import { defineConfig } from '@apps-in-toss/web-framework/config';

export default defineConfig({
  appName: 'speak-japanese',
  brand: {
    displayName: '니혼진처럼',
    primaryColor: '#1C1C1E',
    icon: './public/light.PNG',
  },
  web: {
    host: 'localhost',
    port: 5173,
    commands: {
      dev: 'vite dev',
      build: 'vite build',
    },
  },
  permissions: [],
  outdir: 'dist',
});
