import { copyFile, mkdir } from 'node:fs/promises'
import { join } from 'node:path'

const distDir = 'dist'
const entry = join(distDir, 'index.html')
const locales = ['en', 'fr', 'de', 'nl', 'pt', 'it']
const pages = ['privacy', 'terms', 'delete-account']

const routes = [
  ...locales.map((locale) => [locale]),
  ...locales.flatMap((locale) => pages.map((page) => [locale, page])),
]

await Promise.all(
  routes.map(async (segments) => {
    const routeDir = join(distDir, ...segments)
    await mkdir(routeDir, { recursive: true })
    await copyFile(entry, join(routeDir, 'index.html'))
  }),
)

await copyFile(entry, join(distDir, '404.html'))
