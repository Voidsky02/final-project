import { Link } from 'react-router-dom';
import './Header.css';
import logo from "../../../public/stars.svg";

function Header({ isLoggedIn, currentUser, openModal, logout }) { // Changed layout depending on wether user is signed in or not.

    return (
        <header className='header'>
            <Link className="header__link" to="/">
                <img className='header__logo' src={logo} alt='website-logo' />
            </Link>
            <nav className='header__nav'>
                <ul className="header__list">
                    {/* Below is going to conditionally render elements*/}
                    {isLoggedIn ? (
                        <>
                            <li className="header__item">
                                <Link className="header__link" to="/profile">
                                    {/* avatar if it exists, first letter of username if it doesn't */}
                                    {currentUser.avatar ? (<img className='header__avatar' src={currentUser.avatar} alt="users profile picture" />) : (<div className="header__avatar">{currentUser.username[0]}</div>)}
                                </Link>                        
                            </li>
                            <li className="header__item" >
                                <button className='header__button' onClick={() => openModal('edit')}>
                                    Edit
                                </button>
                            </li>
                            <li className="header__item" >
                                <button className='header__button' onClick={logout}>
                                    Sign out
                                </button>
                            </li>
                        </>
                        ) : (
                        <>
                            <li className="header__item" >
                                <button className='header__button' onClick={() => openModal("login")}>
                                    Sign in
                                </button>
                            </li>
                            <li className="header__item" >
                                <button className='header__button' onClick={() => openModal("register")} >
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