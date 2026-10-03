/* Connects URL Endpoints to Controllers. Ex: when GET /Signup -> run the createUser function */
import express from 'express';
import { celebrate } from 'celebrate';
import celebrateRegisterSchema from '../middlewares/validation.js';
import { createUser, backendLogin, updateUser } from '../controllers/user.js';
import authenticateToken from '../middlewares/tokenAuth.js';

const userRouter = express.Router();

userRouter.post('/signup', celebrate({ body: celebrateRegisterSchema }, { abortEarly: false }), createUser);
userRouter.post('/login', backendLogin); 
userRouter.patch('/users/me', authenticateToken, updateUser);

export default userRouter;