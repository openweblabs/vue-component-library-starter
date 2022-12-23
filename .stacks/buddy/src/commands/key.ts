import type { CLI, KeyOptions } from '@stacksjs/types'
import { intro, log, outro } from '@stacksjs/cli'
import { Action } from '@stacksjs/types'
import { runAction } from '@stacksjs/actions'

async function key(buddy: CLI) {
  const descriptions = {
    command: 'Generate & set the application key.',
    debug: 'Enable debug mode',
  }

  buddy
    .command('key:generate', descriptions.command)
    .option('--debug', descriptions.debug, { default: false })
    .action(async (options: KeyOptions) => {
      const startTime = intro('buddy key:generate')
      const result = await runAction(Action.KeyGenerate, options)

      if (result.isErr()) {
        log.error('Failed to set random application key.', result.error)
        process.exit()
      }

      outro('Set random application key.', { startTime })
    })
}

export { key }
