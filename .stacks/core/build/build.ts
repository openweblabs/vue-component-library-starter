import { log, runCommand } from '@stacksjs/cli'

const result = runCommand('bun build ./src/index.ts --external bun --external @stacksjs/vite --outdir dist --format esm', {
  cwd: import.meta.dir,
})

if (result.isErr())
  log.error(result.error)
