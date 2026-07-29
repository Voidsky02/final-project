// Connect backend fetchRandomHero logic to the frontend here
import { useState, useEffect } from 'react';

function useRandomHero() {
    // State Variables
    const [randomHero, setRandomHero] = useState({});
    const [isLoading, setIsLoading] = useState(true); // Best practice to have.
    const [error, setError] = useState(null); // Best practice to have.

    // useEffect to call api and set state variables
    useEffect(() => {

        fetch('/api')
        .then((res) => {
            // make sure status code in the 200's
            if (!res.ok) {
                throw new Error(`Could not find random hero: ${res.status} - ${res.statusText}`);
            }
            return res;
        })
            .then((res) => res.json())
            .then((hero) => {
                setRandomHero(hero);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setError(error);
                setIsLoading(false);
            });

    }, []);

    // return the variables and manipulation functions in one object
    return { randomHero, isLoading, error}; //! Need to re-run function if randomHero = 404 - Maybe do this in the component itself

}

export default useRandomHero;