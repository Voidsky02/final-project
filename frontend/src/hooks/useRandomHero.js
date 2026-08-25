// Connect backend fetchRandomHero logic to the frontend here
import { useState, useEffect } from 'react';

function useRandomHero() {
    // State Variables
    const [randomHero, setRandomHero] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // Best practice to have.
    const [error, setError] = useState(null); // Best practice to have.

    // hook function logic - calls api and sets state variables
    const fetchHero = async () => {
            try {
                setIsLoading(true);
                setError(null);
                //! THIS IS THE ONLY PART THAT NEEDS CHANGING,
                //! INSTEAD OF A BACKEND EXPRESS REQUEST I WILL HAVE IT 
                //! CALL THE METHOD IN THE NEW heroApi.js FILE IN THE
                //! FRONTEND api FOLDER...
                const response = await fetch('http://localhost:5000/');
                if (!response.ok) {
                    throw new Error(`${response.status} Failed to fetch Hero from server`)
                };
                const hero = await response.json();
                //! DELETE LATER
                console.log(`BACKEND HERO = ${hero}`);
                if (hero === null) {
                    throw new Error(`${response.status} Failed to fetch Hero from server`)
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
    return { randomHero, isLoading, error, refetch: fetchHero}; //! Need to re-run function if randomHero = 404 - Maybe do this in the component itself

}

export default useRandomHero;