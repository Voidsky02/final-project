import axios from 'axios';

/*
Api calls will go here - One call to fetch all heroes and information. 
I will then store them in the db maybe, and do all my creating there.
*/

const baseUrl = 'https://akabab.github.io/superhero-api/api';

// Fetch every hero from api
async function fetchAllHeroData() {
    try {
        const apiResponse = await axios.get(`${baseUrl}/all.json`)
        
        const heroData = apiResponse.data; // extract actual data

        return heroData;

    } catch (error) {
        console.error(`Failure to fetch all heroes: ${error}`);
        return []; //! maybe should be more extreme
    }
}

// Fetch random hero from API
async function fetchRandomHero() {
    try {
        const apiResponse = await axios.get(`${baseUrl}/all.json`)
        const allHeroesData = apiResponse.data; // extract actual data

        const randomNumber = Math.floor(Math.random() * allHeroesData.length);

        const randomHero = allHeroesData[randomNumber];

        // Throw error if hero data fetched is not whats expected
        if (typeof randomHero !== "object") {
            throw new Error(`Hero returned is not valid data type`);
        }

        return randomHero;

    } catch (error) {
        console.error(`Failed to fetch random hero: ${error}`);
    }
}

export { fetchAllHeroData, fetchRandomHero };