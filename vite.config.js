import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Default `./` resolves assets from the deployed index.html (works for both
// https://user.github.io/repo/ and https://akhil.krishposa.com/). Override with
// VITE_BASE only if you deploy under a fixed subpath and need absolute URLs.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || './',
})
