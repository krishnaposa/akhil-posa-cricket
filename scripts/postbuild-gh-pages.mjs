import { copyFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(fileURLToPath(new URL('..', import.meta.url)))
const dist = join(root, 'dist')
const index = join(dist, 'index.html')
const notFound = join(dist, '404.html')

if (existsSync(index)) {
  copyFileSync(index, notFound)
  console.log('Copied index.html -> 404.html for GitHub Pages SPA refresh support.')
}
