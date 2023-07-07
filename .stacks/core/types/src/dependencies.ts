/**
 * **Dependencies Manager**
 *
 * This configuration defines all of your dependencies options. Because Stacks is fully-typed,
 * you may hover any of the options below and the definitions will be provided. In case
 * you have any questions, feel free to reach out via Discord or GitHub Discussions.
 */
export interface DependenciesOptions {
  /**
   * **Node.js**
   *
   * @default '^18.16.1'
   * @link https://nodejs.org
   */
  'nodejs.org': string | '^18.16.1'

  /**
   * **NPM**
   *
   * If you are planning on creating local releases (e.g. component libraries, function libraries),
   * you need to have npm installed. If you are not planning on creating local releases, you may
   * disable this dependency by not setting it.
   *
   * @default '^9.7.2'
   * @link https://npmjs.com
   */
  'npmjs.com'?: string | '^9.7.2'

  /**
   * **PNPM**
   *
   * You may disable this dependency if you have pnpm installed globally.
   *
   * @default '^8.6.5'
   * @link https://pnpm.io
   */
  'pnpm.io': string | '^8.6.5'

  /**
   * **SQLite**
   *
   * @default '^3.42.0'
   * @link https://sqlite.org
   */
  'sqlite.org'?: string | '^3.42.0'

  /**
   * **MySQL**
   *
   * @default '^8.0.33'
   * @link https://mysql.org
   */
  'mysql.com'?: string | '^8.0.33'

  /**
   * **MariaDB**
   *
   * @default '^10.6.5'
   * @link https://mariadb.org
   */
  'mariadb.org'?: string | '^10.6.5'

  /**
   * **PostgreSQL**
   *
   * @default '^14.1'
   * @link https://postgresql.org
   */
  'postgresql.org'?: string | '^14.1'

  /**
   * **Redis**
   *
   * @default '^7.0.11'
   * @link https://redis.io
   */
  'redis.io'?: string | '^7.0.11'

  /**
   * **AWS CLI**
   *
   * This dependency is only required if you are making use of the AWS driver
   * (i.e. the Stacks generated cloud may make use of it).
   *
   * @default '^2.12.7'
   * @link https://aws.amazon.com/cli
   */
  'aws.amazon.com/cli'?: string | '^2.12.7'
}
