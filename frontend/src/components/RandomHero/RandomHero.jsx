import { useState, useEffect } from 'react';
import './RandomHero.css';
import useRandomHero from '../../hooks/useRandomHero.js';

function RandomHero() {
    // extract variables from useRandomHero custom hook
    const { randomHero, refetch, isLoading, error } = useRandomHero();
    {console.log(`This is the randomHero object for displaying: ${JSON.stringify(randomHero)}`)}
    
    // Extract relevant fields from randomHero object for easier use
    // if (randomHero) {
    //     const {name, appearance, biography, images } = randomHero;
    // }

    // useEffect (what to do on first render)

    // return the react component (html basically)

    //! this returns if component isloading
    if (isLoading) {
        return (
            <div className="loading-container">
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
        <div className="hero__container">
            {/* randomHero, refetch, isLoading, error */}
            <h1 className="hero__name">{randomHero.name}</h1>
            <div className="hero__stats">
                <h2>Stats</h2>
                <ul className="stats__list">
                    {Object.entries(randomHero.powerstats).map(([key, value]) => {
                        return <li key={key} className="stats__list_item">{`${key}: ${value}`}</li>
                    })}
                </ul>
            </div>
            <div className="hero__biography">
                <h2 className="biography__title">Biography</h2>
                <ul className="biography__list">
                    {Object.entries(randomHero.biography).map(([key, value]) => {
                        return <li key={key} className="biography__list_item">{`${key}: ${value}`}</li>
                    })}
                </ul>
            </div>
            <div className="hero__appearance">
                <h2 className="appearance__title">Appearance</h2>
                <ul className="appearance__list">
                    {Object.entries(randomHero.appearance).map(([key, value]) => {
                        return <li key={key} className="appearance__list_item">{`${key}: ${value}`}</li>
                    })}
                </ul>
            </div>     
            <img className="hero__image" src={randomHero.images.lg} />
        </div>
    );
}

export default RandomHero;