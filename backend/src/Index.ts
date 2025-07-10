import express from 'express';
import UserRoutes from './routes/UserRoutes';
import { AppDataSource } from './config/data-source';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/user', UserRoutes);

AppDataSource.initialize()
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Database connection error', err));

app.listen(process.env.APP_URL, () =>
  console.log(`Listening to port ${process.env.APP_URL}`)
);
