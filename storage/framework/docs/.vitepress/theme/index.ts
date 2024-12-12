import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import 'uno.css'
import TwoSlashFloatingVue from 'vitepress-plugin-twoslash/client'

import '../../../../../resources/assets/styles/docs/main.css'
import '../../../../../resources/assets/styles/docs/vars.css'
import '../../../../../resources/assets/styles/docs/overrides.css'

export default {
  ...DefaultTheme,

  enhanceApp(ctx: any) {
    ctx.app.use(TwoSlashFloatingVue)
  },

  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
} satisfies Theme
