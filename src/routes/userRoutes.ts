import express, { Request, Response, NextFunction } from 'express';
import userController from '../controllers/userController';

const router = express.Router();

// GET METHODS
router.get('/', userController.getAllUsers);

router.get('/id', userController.getUserById);

router.get('/hello', userController.returnUserHello);

export default router;

