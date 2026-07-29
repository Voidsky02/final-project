import { useState, useEffect } from 'react';
import './Profile.css';
import ModalWithForm from '../ModalWithForm/ModalWithForm.jsx';

// This page will be for when the user is signed in and it will
// display their profile stats

// When not signed in it should display a login form,
// when signed in it should have user info

function Profile() {
    return <>
    <ModalWithForm>
        /* Profile specific form elements will go here */
    </ModalWithForm>
    </>
}

export default Profile;