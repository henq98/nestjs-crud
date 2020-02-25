import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import path from 'path'

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  synchronize: process.env.NODE_ENV !== 'production',
  logging: process.env.NODE_ENV === 'development',
  dropSchema: process.env.NODE_ENV === 'test',
  database: process.env.PG_DATABASE,
  host: process.env.PG_HOST,
  port: +process.env.PG_PORT,
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  entities: [path.join(__dirname, '../**/*.entity.{js,ts}')]
}
