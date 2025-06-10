import 'reflect-metadata';
import app from './app';
import { env } from './config/env';

import { PostgresDataSource } from './database/database';
import redisClient from './database/redis';

async function bootstrap() {
  try {
    await PostgresDataSource.initialize();
    console.log('Database connection established successfully');
  } catch (error) {
    console.error('Error during initialization Database:', error);
    process.exit(1);
  }
  try {
    await redisClient.connect();
    console.log('Redis connected successfully');
  } catch (error) {
    console.error('Error during initialization Redis:', error);
    process.exit(1);
  }
  try {
    app.listen(env.PORT, () => {
      console.log(`Server is running on ${env.PORT}`);
    });
  } catch (error) {
    console.error('Error during initialization Server:', error);
    process.exit(1);
  }
}

bootstrap();
