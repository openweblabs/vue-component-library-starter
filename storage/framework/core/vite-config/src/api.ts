import { ports } from '@stacksjs/config'
import { path as p } from '@stacksjs/path'
import type { ViteConfig } from '@stacksjs/types'

export const apiConfig: ViteConfig = {
  base: '/api/',

  root: p.frameworkPath('api'),
  publicDir: p.publicPath(),
  envDir: p.projectPath(),

  server: {
    port: ports.backend,
    proxy: {
      '/': `http://127.0.0.1:${ports.api}`,
    },
  },
}

export default apiConfig
