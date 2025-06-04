export type HealthStatus = {
  status: 'OK' | 'ERROR';
  database: 'UP' | 'DOWN';
  message?: string;
};
