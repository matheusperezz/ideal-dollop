import express, { Request, Response, NextFunction } from 'express';

function getAllCars(req: Request, res: Response){
    res.send('Porsche 911');
}

export default {
    getAllCars
}