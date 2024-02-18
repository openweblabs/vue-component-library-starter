import { useCompiler } from 'vue-email'
import { SES } from '@aws-sdk/client-ses'
import type { Message, SendEmailParams } from './types'

export class Email {
  private client: SES

  constructor(private message: Message) {
    this.client = new SES({ region: 'us-east-1' })
    this.message = message
  }

  public async send() {
    try {
      log.info('Sending email...')

      const template = await useCompiler(this.message.template)
      const params: SendEmailParams = {
        Source: this.message.from?.address || '',

        Destination: {
          ToAddresses: [this.message.to],
        },

        Message: {
          Body: {
            Html: {
              Charset: 'UTF-8',
              Data: template,
            },
          },

          Subject: {
            Charset: 'UTF-8',
            Data: this.message.subject,
          },
        },
      }

      await this.client.sendEmail(params)

      const returnMsg = await this.message.handle()

      await this.onSuccess()

      return returnMsg
    }
    catch (error) {
      return this.onError(error as Error)
    }
  }

  public async onError(error: Error) {
    log.error(error)
    return await this.message.onError(error)
  }

  public onSuccess() {
    try {
      this.message.onSuccess()
    }
    catch (error) {
      return this.onError(error)
    }
  }
}

export type { Message }

export const email = (options: Message) => new Email(options)
export default Email
