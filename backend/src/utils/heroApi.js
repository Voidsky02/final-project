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

    // Generates random number between 1 & 731, which are the lowest and
    // highest ID's of the superheros in the API. Although its hardcoded
    // which is probably not good in case API is altered
    const randomNumber = Math.floor(Math.random() * 731) + 1;
}

//! Create function that takes amount of documents inside the mongoose db,
//! so it knows the max number to use, then use Math.random() to generate
//! a number between 1 and max number of heroes then pass that number to 
//! the fetchRandomHero function so it can make the actual api call

export { fetchAllHeroData };