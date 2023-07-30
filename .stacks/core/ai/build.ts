import { log, runCommand } from '@stacksjs/cli'

const command: string = 'bun build ./src/index.ts --outdir dist --format esm'
const result = await runCommand(command, import.meta.dir)

if (result.isErr())
  log.error(result.error)
