import { fetchRandomHero } from '../utils/heroApi.js';

async function returnRandomHero(req, res, next) {
    try {
        const randomHero = await fetchRandomHero();
        //! I received no hero in postman and still got a '200 OK' FIX!!
        //! Postman gives '200 OK' but fetchRandomHero .catch() block activating
        //! probably something to do with the random number generating
        return res.status(200).send(randomHero);
    } catch(error) {
        //! need error handling functions - replace later
        console.error(`Failed to return random hero: ${error}`);
    }
};

export { returnRandomHero };