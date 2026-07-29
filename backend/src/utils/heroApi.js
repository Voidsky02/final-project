import axios from 'axios';

/*
Api calls will go here - One call to fetch all heroes and information. 
I will then store them in the db maybe, and do all my creating there.
*/

const baseUrl = 'https://akabab.github.io/superhero-api/api';

// Fetch every hero from api
async function getAllHeroes() {
    try {
        const apiResponse = await axios.get(`${baseUrl}/all.json`)
        console.log(apiResponse); //! DELETE LATER (TESTING)
        
        const heroData = apiResponse.data; // extract actual data

        // Add _id field for indexing in MongoDB - Match hero ID
        const heroList = heroData.map((hero) => ({...hero, _id: hero.id}));
        return heroList;

    } catch (error) {
        console.error(`Failure to fetch all heroes: ${error}`);
        return []; //! maybe should be more extreme
    }
}

export { getAllHeroes };