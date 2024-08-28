import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://skills2profits.onrender.com/api/',  // Your backend server
        changeOrigin: true,
        secure: false,
      },
    },
    port: 5174, // Ensure this matches the port where your Vite dev server is running
  },
})
