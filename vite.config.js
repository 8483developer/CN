import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    host: true, // Enables listening on all IPs
  },
  plugins: [react()],
});
