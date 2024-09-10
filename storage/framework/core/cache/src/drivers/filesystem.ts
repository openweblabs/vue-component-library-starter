import { BentoCache, bentostore } from 'bentocache'
import { fileDriver } from 'bentocache/drivers/file'
import type { CacheDriver } from './type'

const client = new BentoCache({
  default: 'redis',
  stores: {
    redis: bentostore().useL2Layer(
      fileDriver({
        directory: './cache',
        pruneInterval: '1h',
      }),
    ),
  },
})

export const fileSystem: CacheDriver = {
  async set(key: string, value: string, ttl?: number): Promise<void> {
    await client.set({
      key,
      value,
      gracePeriod: { enabled: true, duration: '5m' },
    })
  },
  async setForever(key: string, value: string, ttl?: number): Promise<void> {
    await client.setForever({
      key,
      value,
      gracePeriod: { enabled: true, duration: '5m' },
    })
  },
  async get(key: string): Promise<string | undefined | null> {
    const items = await client.get<string>(key)

    return items
  },
  async getOrSet(key: string, value: string): Promise<string | undefined | null> {
    const items = await client.getOrSet(key, () => value)

    return items
  },
  async del(key: string): Promise<void> {
    await client.delete({ key })
  },
  async deleteMany(keys: string[]): Promise<void> {
    await client.deleteMany({ keys })
  },
  async remove(key: string): Promise<void> {
    await client.delete({ key })
  },
  async has(key: string): Promise<boolean> {
    return await client.has({ key })
  },
  async missing(key: string): Promise<boolean> {
    return await client.has({ key })
  },
  async deleteAll(): Promise<void> {
    await client.clear()
  },
  async clear(): Promise<void> {
    await client.clear()
  },
  async disconnect(): Promise<void> {
    await client.disconnect()
  },
  client,
}
