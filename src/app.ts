import express, { Express, Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { Routes } from '@routes/index';
import { getDolarBlue, getMxnPesos } from './controllers';

const app: Express = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'On Line' });
});

// Rutas
app.use(`/api${Routes.dolar_blue}`, getDolarBlue);
app.use(`/api${Routes.mxn_pesos}`, getMxnPesos);

export default app;
