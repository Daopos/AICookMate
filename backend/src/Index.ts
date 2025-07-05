require('dotenv').config();

import express from 'express';
import UserRoutes from './routes/UserRoutes';
import { AppDataSource } from './config/data-source';

const app = express();

app.use(express.json());

app.use('/api/v1/user', UserRoutes);

AppDataSource.initialize()
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Database connection error', err));

app.listen(process.env.APP_URL, () =>
  console.log(`Listening to port ${process.env.APP_URL}`)
);
