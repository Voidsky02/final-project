// Connect backend fetchRandomHero logic to the frontend here
import { useState, useEffect } from 'react';
import fetchRandomHero from '../api/heroApi';

function useRandomHero() {
    // State Variables
    const [randomHero, setRandomHero] = useState({});
    const [isLoading, setIsLoading] = useState(true); // Best practice to have.
    const [error, setError] = useState(null); // Best practice to have.

    // hook function logic - calls api and sets state variables
    const fetchHero = async () => {
            try {
                setIsLoading(true);
                setError(null);

                const hero = await fetchRandomHero();

                if (hero === null) {
                    throw new Error(`404: Failed to fetch Hero from server`);
                };

                setRandomHero(hero);

            } catch (error) {
                console.error(error);
                setError(error);

            } finally {
                setIsLoading(false);
            }
        };

    // Use on first load
    useEffect(() => {
        // function creation logic is outside useEffect so it can be recalled
        fetchHero();
    }, []);

    // return the variables and manipulation functions in one object
    return { randomHero, isLoading, error, refetch: fetchHero};

}

export default useRandomHero;