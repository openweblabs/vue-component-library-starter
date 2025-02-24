import type { Database } from '@stacksjs/database'
import { sql } from '@stacksjs/database'

export async function up(db: Database<any>) {
  await db.schema
    .createTable('requests')
    .addColumn('id', 'integer', col => col.primaryKey().autoIncrement())
    .addColumn('method', 'text')
    .addColumn('path', 'varchar(255)')
    .addColumn('status_code', 'integer')
    .addColumn('duration_ms', 'integer')
    .addColumn('ip_address', 'varchar(255)')
    .addColumn('memory_usage', 'integer')
    .addColumn('user_agent', 'varchar(255)')
    .addColumn('error_message', 'varchar(255)')
    .addColumn('created_at', 'timestamp', col => col.notNull().defaultTo(sql`CURRENT_TIMESTAMP`))
    .addColumn('updated_at', 'timestamp')
    .addColumn('deleted_at', 'timestamp')
    .execute()
}
