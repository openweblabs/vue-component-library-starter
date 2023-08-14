import { log, runCommand } from '@stacksjs/cli'

const result = runCommand('bun build ./src/index.ts --outdir dist --format esm --external vite --external @stacksjs/validation --external @stacksjs/utils --external @stacksjs/env', {
  cwd: import.meta.dir,
})

if (result.isErr())
  log.error(result.error)
