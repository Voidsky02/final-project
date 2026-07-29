// This is the top level component. The wrapper for all other components.
import { Outlet } from 'react-router-dom'; // enables me to persistently render Header and Footer or whatever regardless of current route
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import RegisterModal from '../RegisterModal/RegisterModal.jsx';
import LoginModal from '../LoginModal/LoginModal.jsx';
import useModal from '../../hooks/useModal.js';
import useAuth from '../../hooks/useAuth.js';

function Layout() {
    // For global control of logged in/out users.
    const { isLoggedIn, currentUser, login, logout } = useAuth();

    // For global control of active modals.
    const { activeModal, openModal, closeModal, handleOffModalClick } = useModal();

    //! activeModal just keeps track of which modal is open, it gets passed
    //! down to the individual modals so they know whether to appear. OpemModal
    //! Stays higher up because the elements in charge of opening the modals
    //! live outside the modals aka in something like the header with a 
    //! 'register' button for example opening the registration modal.
    //! ALSO closeModal and handleOffModalClick get passed to individual modals
    //! too because the elements controlling its closure live inside of the 
    //! modal itself (like the close button or the overlay).

    return (
    <>
        <Header isLoggedIn={isLoggedIn} currentUser={currentUser} logout={logout} openModal={openModal} closeModal={closeModal} />
        <Outlet /> {/* This is what displays the child routes AKA all other components */}
        <Footer />
        
        {/* You put modals at the end so they are rendered last, and therefore rendered on top of all other components naturally. */}
        <RegisterModal
            isOpen={activeModal === "register" ? true : false}
            closeModal={closeModal}
            handleOffModalClick={handleOffModalClick}
        />
        <LoginModal
            isOpen={ activeModal === "login" ? true : false } 
            closeModal={closeModal}
            handleOffModalClick={handleOffModalClick}
            login={login}
        />
    </>
    );
}

export default Layout;