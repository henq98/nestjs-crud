import path from 'path'
import dotenv from 'dotenv'

const envFilePath = {
  development: '.env',
  test: '.env.test',
  production: '.env.prod'
}

dotenv.config({
  path: path.resolve(process.cwd(), envFilePath[process.env.NODE_ENV]) || '.env'
})

import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(process.env.PORT, '0.0.0.0')
}
bootstrap()
