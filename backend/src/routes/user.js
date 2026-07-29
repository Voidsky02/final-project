/* Connects URL Endpoints to Controllers. Ex: when GET /Signup -> run the createUser function */
import express from 'express';
import { celebrate, Segments } from 'celebrate';
import registerSchema from '../middlewares/validation.js';
import { createUser } from '../controllers/user.js';

const userRouter = express.Router();

/*
Celebrate syntax:

celebrate({ [Segments.BODY]: registrationSchema })

(celebrate can validate different parts of the request like header or whatever so Segments.BODY tells it to check the body of the request)

 */

/*! Test route */
userRouter.post('/signup', celebrate({ [Segments.BODY]: registerSchema }), createUser);

export default userRouter;