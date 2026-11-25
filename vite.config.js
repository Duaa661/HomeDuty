import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Forward API calls to your Express backend during development
    proxy: { '/api': 'http://localhost:5000' },
  },
});
