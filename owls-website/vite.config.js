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
    // Repository name: owlopedia
    base: isProduction ? '/owlopedia/' : '/',
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
