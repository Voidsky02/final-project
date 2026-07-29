import { fetchRandomHero } from '../utils/heroApi.js';

async function returnRandomHero(req, res, next) {
    try {
        const randomHero = await fetchRandomHero();
        return res.status(200).send(randomHero);
    } catch(error) {
        //! need error handling functions - replace later
        console.error(`Failed to return random hero: ${error}`);
    }
};

export { returnRandomHero };