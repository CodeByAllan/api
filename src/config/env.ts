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
};
