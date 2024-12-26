import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext', // Ensures ES module compatibility
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
