/* Connects URL Endpoints to Controllers. Ex: when GET /Signup -> run the createUser function */
import express from 'express';
import { celebrate } from 'celebrate';
import celebrateRegisterSchema from '../middlewares/validation.js';
import { createUser } from '../controllers/user.js';
import authenticateToken from '../middlewares/tokenAuth.js';

const userRouter = express.Router();

/*
Celebrate syntax:

celebrate({ [Segments.BODY]: registrationSchema })

(celebrate can validate different parts of the request like header or whatever so Segments.BODY tells it to check the body of the request)

 */

/*! Test route */ //! Do I do celebrate, then auth, then createUser?
userRouter.post('/signup', celebrate({ body: celebrateRegisterSchema }, { abortEarly: false }), createUser);

//! I will add authenticateToken middlware to login request but not singUp, as signUp will not validate a token, only create one when a new user is created, so they are automatically signed in.

export default userRouter;