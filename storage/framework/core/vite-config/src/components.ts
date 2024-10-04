import { alias } from '@stacksjs/alias'
import { config as c } from '@stacksjs/config'
import { libraryEntryPath, libsPath, projectPath, publicPath, resourcesPath } from '@stacksjs/path'
import { server } from '@stacksjs/server'
import type { ViteConfig } from '@stacksjs/types'
import { autoImports, components, cssEngine, devtools, inspect, uiEngine } from '@stacksjs/vite-plugin'
import type { ViteBuildOptions } from '.'

export const componentsConfig: ViteConfig = {
  root: libsPath('components/vue'),
  envDir: projectPath(),
  envPrefix: 'FRONTEND_',
  publicDir: publicPath(),
  base: '/libs/',

  assetsInclude: [publicPath('**/*'), resourcesPath('assets/*'), resourcesPath('assets/**/*')],

  server: server({
    type: 'library',
  }),

  resolve: {
    dedupe: ['vue'],
    alias,
  },

  optimizeDeps: {
    exclude: ['vue'],
  },

  plugins: [
    uiEngine(),
    autoImports(),
    cssEngine(),
    inspect(),
    components(),
    devtools(),
    // stacks(),
  ],

  build: vueComponentsBuildOptions(),
}

export function vueComponentsBuildOptions(): ViteBuildOptions {
  return {
    outDir: libsPath('components/vue/dist'),
    emptyOutDir: true,
    lib: {
      entry: libraryEntryPath('vue-components'),
      name: c.library.vueComponents?.name,
      formats: ['es'],
      fileName: (format: string) => {
        if (format === 'es') return 'index.js'

        return 'index.?.js'
      },
    },

    rollupOptions: {
      external: ['vue', '@stacksjs/path'],
      input: libraryEntryPath('vue-components'),
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  }
}

export default componentsConfig
