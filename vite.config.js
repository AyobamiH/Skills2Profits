// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/api': {
//         target: ['http://localhost:4545','https://skills2profits.onrender.com'],  // Your backend server
//         changeOrigin: true,
//         secure: false,
//       },
//     },
//     port: 5174, // Ensure this matches the port where your Vite dev server is running
//   },
// })
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://skills2profits.onrender.com',  // Your backend server URL
        changeOrigin: true,
        secure: false,
      },
    },
    // port: 5174, // This is only for local development
  },
});
