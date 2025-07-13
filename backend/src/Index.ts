import express from 'express';
import UserRoutes from './routes/UserRoutes';
import { AppDataSource } from './config/data-source';
import cors from 'cors';
import GeminiRoutes from '../src/routes/GeminiRoute';
import RecipeRoutes from '../src/routes/RecipeRoute';

declare module 'express' {
  interface Request {
    id?: string;
  }
}

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5173', // your frontend URL
    credentials: true,
  })
);

app.use('/api/v1/user', UserRoutes);
app.use('/api/v1', GeminiRoutes);
app.use('/api/v1', RecipeRoutes);

AppDataSource.initialize()
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Database connection error', err));

app.listen(process.env.APP_URL, () =>
  console.log(`Listening to port ${process.env.APP_URL}`)
);
