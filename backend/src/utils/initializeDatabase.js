import { Hero } from '../models/hero.js';
import { getAllHeroData } from './heroApi.js';

// Populate database with all heroes from API
async function createHeroEntries(heroArray) {
    try {
        const result = await Hero.insertMany(heroArray); // Heroes I gave it will be returned but as mongodb documents
        return result;
    } catch (error) {
        console.error(`Failed to create hero entries: ${error}`);
    }
}

// Count amount of heroes in DB to see if it needs populating
async function doHeroesExist() { // return true or false
    const amountOfHeroes = await Hero.countDocuments();
    return amountOfHeroes > 0; // true if yes, false otherwise
};

async function initializeDatabase() {
    try {
        const isDatabasePopulated  = await doHeroesExist();
        if (isDatabasePopulated) {
            // If already populated, exit the function
            console.log('✅ Initialization Finished: Database already initialized');
            return;
        } else {
            // If entries don't exist, gather data then create entries in db
            const heroData = await getAllHeroData();
            const createdHeroDocuments =  await createHeroEntries(heroData);
            console.log('✅ Initialization Finished: Hero entries created')
            return createdHeroDocuments;
        }
    } catch (error) {
        console.error(error);
    }
}

export { initializeDatabase };