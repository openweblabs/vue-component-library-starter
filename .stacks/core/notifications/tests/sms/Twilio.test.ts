import { describe, expect, it } from 'vitest'
import { sms } from '@stacksjs/notifications'
import { notification } from '@stacksjs/config'

describe('Twilio Test', () => {
  it('should send sms', async () => {
    const notif = sms.twilio
    const test = await notif.send({
      content: 'Test SMS from Stacks',
      to: notification.sms.twilio.to,
      from: notification.sms.twilio.from,
    })

    expect(test).toBeDefined()
  })

  it('should send sms using useNotification', async () => {
    const notification = useNotification('sms').twilio
    const test = await notif.send({
      content: 'Test SMS from Stacks',
      to: notification.sms.twilio.to,
      from: notification.sms.twilio.from,
    })

    expect(test).toBeDefined()
  })

  it('should not send sms if receiver is empty', async () => {
    const notif = sms.twilio
    const test = await notif.send({
      content: 'Test SMS from Stacks',
      to: '',
      from: notification.sms.twilio.from,
    })

    expect(test.error).toThrowError(Error)
  })
})
