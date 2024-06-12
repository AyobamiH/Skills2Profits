// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
  
// });


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true, // Ensure client-side routing works
    proxy: {
      '/api': {
        target: 'https://skills2profits.onrender.com',  // Your backend server
        changeOrigin: true,
        secure: false,
      },
    
    },
    port: 5173,
    
  },
  

});



