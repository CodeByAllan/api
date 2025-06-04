import { config } from 'dotenv';
config();

export const env = {
  PORT: (() => {
    const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
    if (isNaN(port)) {
      throw new Error('Invalid PORT environment variable');
    }
    return port;
  })(),
};
