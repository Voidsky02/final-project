import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

//! Need cleaning up.
function Header({ isLoggedIn, currentUser, openModal, closeModal, logout }) { // Changed layout depending on wether user is signed in or not.
    // useState variables

    // useEffect

    // jsx aka html

    /*
    Tutorial for what to do next:
    https://www.youtube.com/watch?v=c02YoWR9gSY

    (createBrowserRouter + RouterProvider are modern versions of BrowserRouter)
    */
    return (
        <header className='header'>
            <p className="header__image" >LOGO</p> {/*! Placeholder */}
            <nav className='header__nav'>
                <ul className="header__list">
                    <li className="header__item">
                        <Link className="header__link" to="/">Home</Link>                        
                    </li>
                    <li className="header__item">
                        <Link className="header__link" to="/battle">Battle</Link>
                    </li>
                    {/* Below is going to conditionally render elements*/}
                    {isLoggedIn ? (
                        <>
                            //! Avatar somewhere and when clicked also goes to profile?
                            //! Username should be displayed too
                            <li className="header__item">
                                <Link className="header__link" to="/profile">Profile</Link>                        
                            </li>
                            <li className="header__item" >
                                <button className="" onClick={logout}>
                                    Sign out
                                </button>
                            </li>
                        </>
                        ) : (
                        <>
                            <li className="header__item" >
                                <button className="" onClick={() => openModal("login")}>
                                    Sign in
                                </button>
                            </li>
                            <li className="header__item" >
                                <button className="" onClick={() => openModal("register")} >
                                    Sign up
                                </button>
                            </li>
                        </>
                        )
                    }                                        
                </ul>
            </nav>
        </header>
    )
}

export default Header;