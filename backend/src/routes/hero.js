import express from 'express';
import { returnRandomHero } from '../controllers/hero.js';

const heroRouter = express.Router();

// Random Hero of the Day route
heroRouter.get("/", returnRandomHero);

export { heroRouter };