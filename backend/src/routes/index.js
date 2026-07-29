import express from 'express';
import { heroRouter } from './hero.js';

// All encompassing router - for use in server.js
const router = express.Router();

router.use('/', heroRouter);

export { router };