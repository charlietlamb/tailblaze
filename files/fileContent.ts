import { cssContent } from './cssContent'
import { postcssContent } from './postcssContent'
import { tailwindContent } from './tailwindContent'

export const fileContent = [
  {
    path: 'postcss.config.js',
    content: postcssContent,
  },
  {
    path: 'tailwind.config.js',
    content: tailwindContent,
  },
  {
    path: './wwwroot/css/app.css',
    content: cssContent,
  },
]
