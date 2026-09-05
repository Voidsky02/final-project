import axios from 'axios';

const baseUrl = 'https://akabab.github.io/superhero-api/api';

// Fetch every hero from api
async function fetchAllHeroData() {
    try {
        const apiResponse = await axios.get(`${baseUrl}/all.json`)
        
        const heroData = apiResponse.data; // extract actual data

        return heroData;

    } catch (error) {
        console.error(`Failure to fetch all heroes: ${error}`);
        return []; 
    }
}

export { fetchAllHeroData };