import { DataSource } from 'typeorm';
import { env } from '../config/env';
import path from 'path';

export const PostgresDataSource: DataSource = new DataSource({
  type: 'postgres',
  host: env.DB_HOST,
  port: env.DB_PORT,
  username: env.DB_USER,
  password: env.DB_PASS,
  database: env.DB_NAME,
  entities: [path.join(__dirname, '/../entities/*.entity.{js,ts}')],
  ssl: env.DB_SSL,
});
