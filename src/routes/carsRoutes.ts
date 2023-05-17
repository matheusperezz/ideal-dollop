import express, { Request, Response, NextFunction } from 'express';
import carController from '../controllers/carController';

const router = express.Router();

router.get('/', carController.getAllCars);

export default router;