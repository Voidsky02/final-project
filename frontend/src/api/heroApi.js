// Frontend API logic
const baseUrl = 'https://akabab.github.io/superhero-api/api';

// Fetch random hero from API
async function fetchRandomHero() {
    try {
        const apiResponse = await fetch(`${baseUrl}/all.json`);
        
        const allHeroesData = await apiResponse.json();

        if (allHeroesData === null || allHeroesData === undefined) {
            throw new Error(`404`);
        }

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

export default fetchRandomHero;