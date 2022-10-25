import { defineConfig } from 'vite'
import type { ViteConfig } from '@stacksjs/types'
import { examplesPath } from '@stacksjs/path'
import { config as server } from '@stacksjs/server'
import { alias } from '../../../alias'
import { uiEngine } from '.'

export const vueComponentsExampleConfig: ViteConfig = {
  root: examplesPath('vue-components'),

  resolve: {
    alias,
  },

  server,

  plugins: [
    uiEngine(),
  ],
}

export default defineConfig(() => {
  return vueComponentsExampleConfig
})
