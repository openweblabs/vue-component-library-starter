import { frameworkPath } from '@stacksjs/path'
import { runCommand } from '@stacksjs/cli'
import { NpmScript } from '@stacksjs/types'

runCommand(NpmScript.BuildComponents, { cwd: frameworkPath(), verbose: true })
