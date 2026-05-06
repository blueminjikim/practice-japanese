import { defineConfig } from '@apps-in-toss/web-framework/config';

export default defineConfig({
  appName: 'speak-japanese',
  brand: {
    displayName: '니혼진처럼',
    primaryColor: '#1C1C1E',
    icon: 'https://static.toss.im/appsintoss/40295/6471c320-3bfe-4e57-baa7-5a3e281421d3.png',
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
