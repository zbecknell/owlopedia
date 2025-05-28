import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const isProduction = mode === 'production'
  
  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    // Configure base path for GitHub Pages
    // Change 'AgileTraining' to your actual repository name
    base: isProduction ? '/AgileTraining/' : '/',
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: !isProduction,
      minify: isProduction
    },
    // Ensure proper handling of client-side routing
    preview: {
      port: 4173,
      strictPort: true
    },
    server: {
      port: 5173,
      strictPort: true
    }
  }
})
