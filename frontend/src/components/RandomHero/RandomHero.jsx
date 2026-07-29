import { useState, useEffect } from 'react';
import './RandomHero.css';
import useRandomHero from '../../hooks/useRandomHero.js';

function RandomHero() {
    // extract variables from useRandomHero custom hook
    const { randomHero, refetch, isLoading, error } = useRandomHero();

    // useEffect (what to do on first render)

    // return the react component (html basically)

    //! this returns if component isloading
    if (isLoading) {
        return (
            <div loading-container>
                <h2>Fetching Hero...</h2>
                //! Add spinner
            </div>
        );
    }
    //! this returns if component has an error
    if (error) {
        return (
            <div className="error-container">
                <h2>Error fetching hero...</h2>
                <button onClick={refetch}>Try Again</button>
            </div>
        );
    }
    //! this returns is everything worked
    return (
        <div className="random-hero__container">
            
        </div>
    );
}

export default RandomHero;