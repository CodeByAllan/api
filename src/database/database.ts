import { DataSource } from 'typeorm';
import { env } from '../config/env';

export const PostgresDataSource: DataSource = new DataSource({
  type: 'postgres',
  host: env.DB_HOST,
  port: env.DB_PORT,
  username: env.DB_USER,
  password: env.DB_PASS,
  database: env.DB_NAME,
  entities: [],
  ssl: env.DB_SSL,
});
