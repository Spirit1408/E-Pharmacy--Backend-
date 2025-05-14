import express from 'express';
import cors from 'cors';
import { env } from './utils/env.js';
import cookieParser from 'cookie-parser';
import mainRouter from './routers/index.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';

const PORT = Number(env('PORT', 3000));

export const startServer = () => {
  const app = express();

  app.use(express.json());

  app.use(
    cors({
      origin: [
        'http://localhost:5173',
        'http://127.0.0.1:5173',
        'http://localhost:5174',
        'http://127.0.0.1:5174',
      ],
      credentials: true,
      methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: [
        'Content-Type',
        'Authorization',
        'Origin',
        'Accept',
        'Set-Cookie',
      ],
      optionsSuccessStatus: 200,
    }),
  );

  app.use(cookieParser());

  app.use('/api', mainRouter);

  app.use(notFoundHandler);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log('Server is running...');
  });
};
