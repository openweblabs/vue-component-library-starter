import Prompts from 'prompts'
import { ExitCode } from './cli/exit-code'
import { runNpmScript } from './run-npm-script'
import { NpmScript } from './types/cli'

const { prompts } = Prompts

export async function startBuildProcess(options: any) {
  if (options.components || options === 'components') {
    // eslint-disable-next-line no-console
    console.log('Building your component library for production use & npm/CDN distribution...')
    await runNpmScript(NpmScript.BuildComponents)

    // eslint-disable-next-line no-console
    console.log('Building your web component library for production use & npm/CDN distribution...')
    await runNpmScript(NpmScript.BuildElements)
  }

  else if (options.webComponents || options.elements || options === 'web-components' || options === 'elements') {
    // eslint-disable-next-line no-console
    console.log('Building your web component library for production use & npm/CDN distribution...')
    await runNpmScript(NpmScript.BuildElements)
  }

  // else if (options.functions) {
  //   // eslint-disable-next-line no-console
  //   console.log('Building your function library for production use...')
  //   await runNpmScript(NpmScript.BuildFunctions)
  // }

  // else if (options.pages) {
  //   // eslint-disable-next-line no-console
  //   console.log('Building your pages for production use...')
  //   await runNpmScript(NpmScript.BuildPages)
  // }

  // else if (options.docs) {
  //   // eslint-disable-next-line no-console
  //   console.log('Starting development server for components...')
  //   await runNpmScript(NpmScript.BuildDocs)
  // }

  else {
    const answer = await prompts.select({
      type: 'select',
      name: 'build',
      message: 'Which stack are you trying to build for production use?',
      choices: [
        { title: 'Components', value: 'components' },
        { title: 'Functions', value: 'functions' },
        { title: 'Pages', value: 'pages' },
        { title: 'Docs', value: 'docs' },
      ],
      initial: 0,
    })

    // @ts-expect-error the answer object type expects to return a void type but it returns a string
    if (answer === 'components') {
      // eslint-disable-next-line no-console
      console.log('Building your Stacks component library for production use...')
      await runNpmScript(NpmScript.BuildComponents)
    }

    // @ts-expect-error the answer object type expects to return a void type but it returns a string
    else if (answer === 'functions') {
      // eslint-disable-next-line no-console
      console.log('Building your Stacks function library for production use...')
      await runNpmScript(NpmScript.DevFunctions)
    }

    // else if (answer === 2) {
    //   // eslint-disable-next-line no-console
    //   console.log('Building your pages for production use...')
    //   await runNpmScript(NpmScript.DevPages)
    // }

    // else if (answer === 3) {
    //   // eslint-disable-next-line no-console
    //   console.log('Building your documentation for production use...')
    //   await runNpmScript(NpmScript.DevDocs)
    // }

    else { process.exit(ExitCode.InvalidArgument) }
  }
}
