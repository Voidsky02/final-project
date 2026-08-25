import { fetchRandomHero } from '../utils/heroApi.js';

async function returnRandomHero(req, res, next) {
    try {
        let heroFound = true;
        const error404 = new Error(`404 - Hero not found`); //! Add errors file later

        const randomHero = await fetchRandomHero();
        //! Hero ID's are not strict 1 - 731, some numbers are skipped
        //! So have to add safeguard in case of 404
        if (randomHero === undefined) {
            heroFound = false; // 404 safeguard
        }
        // This probably still sends 200's when errors other then 404 are sent
        return heroFound ? res.status(200).send(randomHero) : res.status(404).send(error404); //! When fetching this, need to re-run function if 404 is received
    } catch(error) {
        //! need error handling functions - replace later
        console.error(`Failed to return random hero: ${error}`);
        return res.status(404).send(error);
    }
};

export { returnRandomHero };