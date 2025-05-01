import express from 'express';
import cors from 'cors';
import { env } from './utils/env.js';

const PORT = Number(env('PORT', 3000));

export const startServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.listen(PORT, () => {
    console.log('Server is running...');
  });
};
