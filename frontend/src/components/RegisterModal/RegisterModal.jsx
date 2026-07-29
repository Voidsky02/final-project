import { useState, useEffect } from "react";
import './RegisterModal.css';
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
//! Import useForm - All universal form functionality
//! Import useModal - All universal modal functionality

// For Profile creation.

function RegisterModal({
    closeModal, //! Pull from useModal custom hook ?
    handleOffModalClick, //! Pull from useModal custom hook ?
    isOpen, //! Pull from useModal custom hook ?
}) {

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
        //! Below still need to be created
        closeModal={""}
        handleOffModalClick={""}
        isOpen={""}
        handleSubmit={""}
    >
        // * Form elements for creating a profile for first time
        // * (Username, Email, Password, confirm password)
    </ModalWithForm>
    )
}

export default RegisterModal;