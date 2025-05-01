import { initMongoDB } from './db/initMongoDB.js';
import { startServer } from './server';

const boostrap = async () => {
  await initMongoDB();
  startServer();
};

boostrap();
