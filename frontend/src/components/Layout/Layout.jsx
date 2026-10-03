// This is the top level component. The wrapper for all other components.
import { Outlet } from 'react-router-dom'; // enables me to persistently render Header and Footer or whatever regardless of current route
import "./Layout.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import RegisterModal from '../RegisterModal/RegisterModal.jsx';
import EditProfileModal from '../EditProfileModal/EditProfileModal.jsx';
import LoginModal from '../LoginModal/LoginModal.jsx';
import useModal from '../../hooks/useModal.js';
import useAuth from '../../hooks/useAuth.js';

function Layout() {
    // For global control of logged in/out users.
    const { isLoggedIn, currentUser, login, logout, updateUser } = useAuth();

    // For global control of active modals.
    const { activeModal, openModal, closeModal, handleOffModalClick } = useModal();

    return (
    <main className="main">
        <Header isLoggedIn={isLoggedIn} currentUser={currentUser} logout={logout} openModal={openModal} closeModal={closeModal} />
        <Outlet context={{isLoggedIn, currentUser}} /> {/* This is what displays the child routes AKA all other components */}
        <Footer />
        
        {/* You put modals at the end so they are rendered last, and therefore rendered on top of all other components naturally. */}
        <RegisterModal
            isOpen={activeModal === "register" ? true : false}
            closeModal={closeModal}
            handleOffModalClick={handleOffModalClick}
            login={login}
        />
        <LoginModal
            isOpen={ activeModal === "login" ? true : false } 
            closeModal={closeModal}
            handleOffModalClick={handleOffModalClick}
            login={login}
        />
        { isLoggedIn && (<EditProfileModal 
            isOpen={ activeModal === "edit" ? true : false }
            closeModal={closeModal}
            handleOffModalClick={handleOffModalClick}
            currentUser={currentUser}
            updateUser={updateUser}
            />)
        }
    </main>
    );
}

export default Layout;