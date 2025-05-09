import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    proxy: {
      '/api': {
        target: 'https://freetestapi.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api/v1/books'),
      },
    },
  },
});
