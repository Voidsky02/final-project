/* Connects URL Endpoints to Controllers. Ex: when GET /Signup -> run the createUser function */
import express from 'express';
import { createUser } from '../controllers/user.js';

const userRouter = express.Router();

/*! Test route */
userRouter.post('/signup', createUser);

export default userRouter;