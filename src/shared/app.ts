import 'express-async-errors';
import 'reflect-metadata';
import 'dotenv/config';
import '@shared/container'

import express, { Express } from 'express';
import morgan from 'morgan';

export class App {
  server: Express;

  constructor() {
    this.server = express();
    this.middlewares();
  }

  middlewares() {
    this.server.use(morgan('dev'));
  }
}

export default new App().server;
