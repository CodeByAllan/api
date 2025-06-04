import 'reflect-metadata';
import app from './app';
import { env } from './config/env';

import { PostgresDataSource } from './database/database';
PostgresDataSource.initialize()
  .then(() => {
    console.log('Database connection established successfully');
    app.listen(env.PORT, () => {
      console.log(`Server is running on ${env.PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error during database initialization', err);
    process.exit(1);
  });
