import type { CAC } from 'cac'
// import { component as makeComponent } from '../scripts/make'
import { updateNpmDependencies } from '../scripts/update'

async function updateCommands(artisan: CAC) {
  artisan
    .command('update', 'Updates the dependencies & framework core')
    .option('-d, --dependencies', 'Updates the dependencies')
    .option('-f, --framework', 'Updates the framework core')
    .option('-a, --all', 'Updates the dependencies & framework core')
    .action(async (options: any) => {
      if (options.dependencies || options.all)
        await updateNpmDependencies()

      if (options.framework || options.all)
        // eslint-disable-next-line no-console
        console.log('update the stacks-core dependency')
        // wip
    })
}

export { updateCommands }
