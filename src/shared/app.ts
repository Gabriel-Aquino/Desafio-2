import 'express-async-errors';
import 'reflect-metadata';
import 'dotenv/config';

import express, { Express, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { errors } from 'celebrate';
import helmet from 'helmet';
import morgan from 'morgan';
import AppError from './errors/app-error';
import route from './infra/http/routes';

export class App {
  server: Express;

  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(helmet());
    this.server.use(express.json());
    this.server.use(morgan('dev'));
  }

  routes() {
    this.server.use(route);
    this.server.use(errors());
  }

  exceptionHandler() {
    this.server.use(
      (err: Error, request: Request, response: Response, _: NextFunction) => {
        if (err instanceof AppError) {
          return response.status(err.statusCode).json(err.throwError());
        }
        console.error(err);
        return response.status(500).json({
          status: 'error',
          message: 'Internal server error',
        });
      },
    );
  }
}

export default new App().server;
