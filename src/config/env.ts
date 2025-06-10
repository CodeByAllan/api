import { config } from 'dotenv';
import { requireEnv } from '../utils/require-env';
config();

export const env = {
  PORT: (() => {
    const port = parseInt(requireEnv('PORT'), 10);
    if (isNaN(port)) {
      throw new Error('Invalid PORT environment variable');
    }
    return port;
  })(),
  DB_HOST: requireEnv('DB_HOST'),
  DB_PORT: (() => {
    const port = parseInt(requireEnv('DB_PORT'), 10);
    if (isNaN(port)) {
      throw new Error('Invalid DB_PORT environment variable');
    }
    return port;
  })(),
  DB_USER: requireEnv('DB_USER'),
  DB_PASS: requireEnv('DB_PASS'),
  DB_NAME: requireEnv('DB_NAME'),
  DB_SSL: requireEnv('DB_SSL') === 'true',
  JWT_SECRET: requireEnv('JWT_SECRET'),
  REDIS_HOST: requireEnv('REDIS_HOST'),
  REDIS_PORT: (() => {
    const port = parseInt(requireEnv('REDIS_PORT'), 10);
    if (isNaN(port)) {
      throw new Error('Invalid DB_PORT environment variable');
    }
    return port;
  })(),
  REDIS_USER: requireEnv('REDIS_USER'),
  REDIS_PASS: requireEnv('REDIS_PASS'),
};
