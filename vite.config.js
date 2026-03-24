import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub project pages use VITE_BASE=/your-repo-name/ (trailing slash).
// For a custom domain at the site root, use VITE_BASE=/ (default).
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE ?? '/',
})
