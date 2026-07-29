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
        // Generates random number between 1 & 731, which are the lowest
        // and highest ID's of the superheros in the API.
        //! This is hardcoded which is probably not good in case API is
        //! altered
        // 
        // ! Gaps in Hero ID's in API - possible fix:
        //! If returned hero is 404 - generate new number and try again
        //! Until successful
        const randomNumber = Math.floor(Math.random() * 731) + 1;


        const apiResponse = await axios.get(`${baseUrl}/id/${randomNumber}.json`)
        const randomHero = apiResponse.data;

        // Throw error if hero data fetched is not whats expected
        if (typeof randomHero !== "object") {
            throw new Error(`Hero returned is not valid data type`);
        }

        //! Testing log - Delete later
        console.log(`RANDOM HERO SELECTED: ${JSON.stringify(randomHero)}`); //! Delete later - testing
        return randomHero;

    } catch (error) {
        console.error(`Failed to fetch random hero: ${error}`);
    }
}

export { fetchAllHeroData, fetchRandomHero };