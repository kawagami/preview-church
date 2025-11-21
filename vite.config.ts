import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/preview-church/',
  plugins: [
    tailwindcss(),
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        // 讓 SPA 路由刷新時不 404（GitHub Pages 必需）
        main: resolve(__dirname, 'index.html'),
        404: resolve(__dirname, 'index.html'),
      },
    },
  },
});
