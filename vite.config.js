import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext', // Ensures ES module compatibility
  },
  resolve: {
    alias: {
      '@': '/src', // Adjust this if you use aliases for paths
    },
  },
   // If you deploy to a subfolder, adjust the base path
});
