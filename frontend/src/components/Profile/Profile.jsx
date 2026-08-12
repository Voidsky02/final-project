import { useState, useEffect } from 'react';
import './Profile.css';
import ModalWithForm from '../ModalWithForm/ModalWithForm.jsx';
import { useOutletContext } from 'react-router-dom';

// This page will be for when the user is signed in and it will
// display their profile stats

function Profile() {
    // Extract currentUser from the OutletContext (passed in <Layout>).
    const {isLoggedIn, currentUser} = useOutletContext();

    return (<>
    {isLoggedIn ? 
    (
        <>
            <h2 className="profile__title" >Profile Information</h2>
            <div className="profile__container" >
                <div className="profile__element" >
                    <h3 className="profile__label" >Username:</h3>
                    <p className="user__username" >{currentUser.username}</p>
                </div>
                <div className="profile__element" >
                    <h3 className="profile__label" >Avatar:</h3>
                    <img className="user__avatar" src={currentUser.avatar} alt='user profile picture' />
                </div>
            </div>
        </>
    )
    :
    <></>
}
    </>)
}

export default Profile;