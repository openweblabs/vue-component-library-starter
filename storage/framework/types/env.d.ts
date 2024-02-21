// This file is auto-generated by Stacks. Do not edit this file manually.
// If you want to change the environment variables, please edit the .env file.
//
// For more information, please visit: https://stacksjs.org/docs

declare module 'bun' {
  namespace env {
    const APP_NAME: string
    const APP_ENV: 'local' | 'dev' | 'stage' | 'prod'
    const APP_KEY: string
    const PORT: number
    const APP_MAINTENANCE: boolean
    const APP_URL: string
    const API_PREFIX: string
    const DOCS_PREFIX: string
    const DEBUG: boolean
    const DB_CONNECTION: 'mysql' | 'sqlite' | 'postgres' | 'planetscale'
    const DB_HOST: string
    const DB_PORT: number
    const DB_DATABASE: string
    const DB_USERNAME: string
    const DB_PASSWORD: string
    const AWS_ACCOUNT_ID: string
    const AWS_ACCESS_KEY_ID: string
    const AWS_SECRET_ACCESS_KEY: string
    const AWS_DEFAULT_REGION: string
    const AWS_DEFAULT_PASSWORD: string
    const MAIL_MAILER: 'smtp' | 'mailgun' | 'ses' | 'postmark' | 'sendmail' | 'log'
    const MAIL_HOST: string
    const MAIL_PORT: number
    const MAIL_USERNAME: string
    const MAIL_PASSWORD: string
    const MAIL_ENCRYPTION: string
    const MAIL_FROM_NAME: string
    const MAIL_FROM_ADDRESS: string
    const SEARCH_ENGINE_DRIVER: 'meilisearch' | 'algolia' | 'typesense'
    const MEILISEARCH_HOST: string
    const MEILISEARCH_KEY: string
    const FRONTEND_APP_ENV: 'development' | 'staging' | 'production'
    const FRONTEND_APP_URL: string
  }
}
