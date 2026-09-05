import express from 'express';
import userRouter from "./user.js";

// All encompassing router - for use in server.js
const router = express.Router();

router.use('/', userRouter);

export { router };