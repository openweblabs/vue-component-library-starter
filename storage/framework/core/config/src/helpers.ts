import { createLocalTunnel } from '@stacksjs/tunnel'
import type {
  AppConfig,
  CacheConfig,
  CdnConfig,
  ChatConfig,
  CliConfig,
  DatabaseConfig,
  DependenciesConfig,
  DnsConfig,
  EmailConfig,
  Events,
  GitConfig,
  HashingConfig,
  JobConfig,
  LibraryConfig,
  Model,
  NotificationConfig,
  PaymentConfig,
  QueueConfig,
  SearchEngineConfig,
  SecurityConfig,
  ServicesConfig,
  StacksConfig,
  StorageConfig,
  UiConfig,
} from '@stacksjs/types'
import { config } from '.'

export type LocalUrlType =
  | 'frontend'
  | 'backend'
  | 'api'
  | 'admin'
  | 'library'
  | 'email'
  | 'docs'
  | 'inspect'
  | 'desktop'

export async function localUrl({
  domain = config.app.url || 'stacks',
  type = 'frontend' as LocalUrlType,
  localhost = false,
  https = undefined as boolean | undefined,
  network = undefined as boolean | undefined,
}: {
  domain?: string
  type?: LocalUrlType
  network?: boolean
  localhost?: boolean
  https?: boolean
} = {}): Promise<string> {
  // Ensure url starts with http:// or https://
  // if (!url.startsWith('http://') && !url.startsWith('https://'))
  //   url = 'https://' + url
  let url

  switch (type) {
    case 'frontend':
      if (network) return await createLocalTunnel(config.ports?.frontend || 3000)

      if (localhost) return `http://localhost:${config.ports?.frontend}`

      url = domain.replace(/\.[^\.]+$/, '.localhost')

      if (https) return `https://${url}`

      return url
    case 'backend':
      if (network) return await createLocalTunnel(config.ports?.backend || 3001)

      if (localhost) return `http://localhost:${config.ports?.backend}`

      url = domain.replace(/\.[^\.]+$/, '.localhost/api/')

      if (https) return `https://${url}`

      return url
    case 'api':
      if (network) return await createLocalTunnel(config.ports?.backend || 3001)

      if (localhost) return `http://localhost:${config.ports?.backend}`

      url = domain.replace(/\.[^\.]+$/, '.localhost/api/')

      if (https) return `https://${url}`

      return url
    case 'admin':
      if (network) return await createLocalTunnel(config.ports?.admin || 3002)

      if (localhost) return `http://localhost:${config.ports?.admin}`

      url = domain.replace(/\.[^\.]+$/, '.localhost/admin/')

      if (https) return `https://${url}`

      return url
    case 'library':
      if (network) return await createLocalTunnel(config.ports?.library || 3003)

      if (localhost) return `http://localhost:${config.ports?.library}`

      url = domain.replace(/\.[^\.]+$/, '.localhost/libs/')

      if (https) return `https://${url}`

      return url
    case 'email':
      if (network) return await createLocalTunnel(config.ports?.email || 3005)

      if (localhost) return `http://localhost:${config.ports?.email}`

      url = domain.replace(/\.[^\.]+$/, '.localhost/email/')

      if (https) return `https://${url}`

      return url
    case 'desktop':
      if (network) return await createLocalTunnel(config.ports?.desktop || 3004)

      if (localhost) return `http://localhost:${config.ports?.email}`

      url = domain.replace(/\.[^\.]+$/, '.localhost/email/')

      if (https) return `https://${url}`

      return url
    case 'docs':
      if (network) return await createLocalTunnel(config.ports?.desktop || 3006)

      if (localhost) return `http://localhost:${config.ports?.docs}`

      url = domain.replace(/\.[^\.]+$/, '.localhost/docs/')

      if (https) return `https://${url}`

      return url
    case 'inspect':
      if (network) return await createLocalTunnel(config.ports?.desktop || 3007)

      if (localhost) return `http://localhost:${config.ports?.inspect}`

      url = domain.replace(/\.[^\.]+$/, '.localhost/__inspect/')

      if (https) return `https://${url}`

      return url
    default:
      if (localhost) return `http://localhost:${config.ports?.frontend}`

      url = domain.replace(/\.[^\.]+$/, '.localhost')

      if (https) return `https://${url}`

      return url
  }
}

export function defineStacksConfig(config: StacksConfig): StacksConfig {
  return config
}

export function defineApp(config: AppConfig): AppConfig {
  return config
}

export function defineCache(config: CacheConfig): CacheConfig {
  return config
}

export function defineCdn(config: CdnConfig): CdnConfig {
  return config
}

export function defineChat(config: ChatConfig): ChatConfig {
  return config
}

export function defineCli(config: CliConfig): CliConfig {
  return config
}

export function defineJob(config: JobConfig): JobConfig {
  return config
}

export function defineCronJob(config: JobConfig): JobConfig {
  return config
}

export function defineDatabase(config: DatabaseConfig): DatabaseConfig {
  return config
}

export function defineDependencies(config: DependenciesConfig): DependenciesConfig {
  return config
}

export function defineDns(config: DnsConfig): DnsConfig {
  return config
}

export function defineEmailConfig(config: EmailConfig): EmailConfig {
  return config
}

export function defineEmail(config: EmailConfig): EmailConfig {
  return config
}

export function defineGit(config: GitConfig): GitConfig {
  return config
}

export function defineHashing(config: HashingConfig): HashingConfig {
  return config
}

export function defineLibrary(config: LibraryConfig): LibraryConfig {
  return config
}

export function defineNotification(config: NotificationConfig): NotificationConfig {
  return config
}

export function definePayment(config: PaymentConfig): PaymentConfig {
  return config
}

export function defineQueue(config: QueueConfig): QueueConfig {
  return config
}

export function defineSearchEngine(config: SearchEngineConfig): SearchEngineConfig {
  return config
}

export function defineSecurity(config: SecurityConfig): SecurityConfig {
  return config
}

export function defineServices(config: ServicesConfig): ServicesConfig {
  return config
}

export function defineSms(config: any): any {
  return config
}

export function defineStorage(config: StorageConfig): StorageConfig {
  return config
}

export function defineUi(config: UiConfig): UiConfig {
  return config
}

export function defineModel(config: Model): Model {
  return config
}

export function defineEvents(config: Events): Events {
  return config
}
