import axios from 'axios';

/*
Api calls will go here - One call to fetch all heroes and information. 
I will then store them in the db maybe, and do all my creating there.
*/

const baseUrl = 'https://akabab.github.io/superhero-api/api';

// Fetch every hero from api
async function getAllHeroes() {
    try {
        const heroList = await axios.get(`${baseUrl}/all.json`, {})
        // DELETE LATER
        console.log(heroList);
        // DELETE LATER
        return heroList;
    } catch (error) {
        console.error(`Failure to fetch all heroes: ${error}`);
        // maybe should be more extreme
        return null;
    }
}

// Create database entries for each hero (trim the excess info) *runs 1 time*
async function createHeroDatabase() {}

export { getAllHeroes };