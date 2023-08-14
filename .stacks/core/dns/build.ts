import { log, runCommand } from '@stacksjs/cli'

const result = runCommand('bun build ./src/index.ts --outdir dist --format esm --external aws-cdk-lib --external constructs --external @stacksjs/config --target bun', {
  cwd: import.meta.dir,
})

if (result.isErr())
  log.error(result.error)
