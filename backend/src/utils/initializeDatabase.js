import { Hero } from '../models/hero';

// Populate database with all heroes from API

async function populateHeroes(heroArray) {
    try {
        const result = await Hero.insertMany(heroArray); // Heroes I gave it will be returned but as mongodb documents
        return result;
    } catch (error) {
        console.error(`Failure to initialize database with heroes: ${error}`);
    }
}

