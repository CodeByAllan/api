import express, { Application } from 'express';

const app: Application = express();
const PORT: Number = 3000;
app.use(express.json());

app.get('/health', (_req, res) => {
  res.send({ status: 'OK' });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
