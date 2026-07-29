import { useState, useEffect } from "react";
import './RegisterModal.css';
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
//! Import useForm - All universal form functionality ???
//! Import useModal - All universal modal functionality ???

// For Profile creation.

//! Recieve useModal hook functions and variables as props from <Laytout />
function RegisterModal({ isOpen, closeModal, handleOffModalClick }) {

    // handleSubmit is the only function created in the custom modal itself
    // because the submit logic is different depending on the modal
    function handleSubmit(event) {
        // In previous project i just prevented default behavior,
        // then called a custom onSignUp function in here and thats it.
        event.preventDefault();
    }

    return (
    <ModalWithForm
        title={"Registration Form"}
        name={"register"}
        buttonText={"Submit"}
        //! Below are recieved as props
        isOpen={isOpen}
        closeModal={closeModal}
        handleOffModalClick={handleOffModalClick}
        //! Below is created inside this component
        handleSubmit={""}
    >
        // * Form elements for creating a profile for first time
        // * (Username, Email, Password, confirm password)
        // *
        // * htmlFor= and id= are what link the label and input together
        // * The name attribute is for form data submission and state management in React.
        // * When the form is submitted, the browser packages the data using the name as the key.
        <label htmlFor="username">Username</label>
        <input type="string" id="username" name="username" value={} onChange={} ></input>
    </ModalWithForm>
    )
}

export default RegisterModal;