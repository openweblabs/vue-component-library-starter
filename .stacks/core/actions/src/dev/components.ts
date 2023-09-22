import { runCommand } from '@stacksjs/cli'
import { frameworkPath, vitePath } from '@stacksjs/path'

// import { parseOptions, runCommand } from '@stacksjs/cli'
// import type { DeployOptions } from '@stacksjs/types'

// console.log('running dev components')

// const options: DeployOptions = parseOptions()

await runCommand(`bunx --bun vite --config ${vitePath('src/vue-components.ts')}`, {
  // ...options,
  cwd: frameworkPath(),
})
