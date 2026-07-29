import express from 'express';
import { heroRouter } from './hero.js';
import userRouter from "./user.js";

// All encompassing router - for use in server.js
const router = express.Router();

router.use('/', heroRouter);
router.use('/', userRouter);

export { router };