import * as redis from 'redis';
import { env } from '../config/env';

const redisClient = redis.createClient({
  socket: { host: env.REDIS_HOST, port: env.REDIS_PORT },
  username: env.REDIS_USER,
  password: env.REDIS_PASS,
});

export default redisClient;
