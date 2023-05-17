import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import userRoutes from './routes/userRoutes';
import carRoutes from './routes/carsRoutes';

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(helmet());
app.use(express.json());
// SETTING ROUTES
app.use('/user', userRoutes);
app.use('/cars', carRoutes);

// TRACKIN ERROR
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send(error.message);
});

export default app;