import { Request, Response } from 'express';

function getAllUsers(req: Request, res: Response){
    res.send('All users listed here');
}

function getUser(req: Request, res: Response){
    res.send('Getting user by id?');
}

function getUserById(req: Request, res: Response){
    const userId = req.params.id;
}

function createUser(req: Request, res: Response){
    const userData = req.body;
}

function returnUserHello(req: Request, res: Response){
    res.send("Um belo ola");
}

export default {
    getAllUsers,
    getUser,
    getUserById,
    createUser,
    returnUserHello
};