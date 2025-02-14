import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/DSG-Website/',
  resolve: {
    extensions: [".js", ".jsx"], // Ensure Vite resolves JSX files
  },
  server: {
    mimeTypes: {
      "jsx": "application/javascript" // Ensures proper MIME type
    }
  }
})
