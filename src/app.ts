import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFoundHandler from './app/middlewares/notFoundHandler';
import router from './app/routes';
const app: Application = express();

//parser
app.use(express.json()); // json parser
app.use(cors());

//application routes
app.use('/api/v1/', router);

//middlewares
app.use(globalErrorHandler);
app.use(notFoundHandler);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
