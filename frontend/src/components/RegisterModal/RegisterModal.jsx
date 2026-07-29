import { useState, useEffect } from "react";
import './RegisterModal.css';
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import useForm from "../../hooks/useForm.js";
//! Import useModal - All universal modal functionality ???

// For Profile creation.

//! Recieve useModal hook functions and variables as props from <Laytout />
function RegisterModal({ isOpen, closeModal, handleOffModalClick }) {

    const { values, handleChange, resetForm } = useForm({ username: "", email: "", password: "", confirmPassword: "" });

    // handleSubmit is the only function created in the custom modal itself
    // because the submit logic is different depending on the modal
    function handleSubmit(event) { //! Finish this function
        // In previous project i just prevented default behavior,
        // then called a custom onSignUp function in here and thats it.
        event.preventDefault();
        //! More ????
        resetForm();
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
        {/* Form elements for creating a profile for first time
        / (Username, Email, Password, confirm password)
        /ther
        / The name attribute is for form data submission and state management in React.
        / htmlFor= and id= are what link the label and input together
        / When the form is submitted, the browser packages the data using the name as the key. */}

        <div className="register__form-field">
            <label className="register__label" htmlFor="username">
                Username
            </label>
            <input
                className="register__input"
                type="string"
                id="username"
                name="username"
                value={values.username}
                onChange={handleChange}
                placeholder="Enter username here"
                required
            />
        </div>
        <div className="register__form-field">
            <label className="register__label" htmlFor="email">
                Email
            </label>
            <input
                className="register__input"
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Enter email here"
                required
            />
        </div>
        <div className="register__form-field">
            <label className="register__label" htmlFor="password">
                Password
            </label>
            <input
                className="register__input"
                type="string"
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Enter password here"
                required
            />
        </div>
        <div className="register__form-field">
            <label className="register__label" htmlFor="confirmPassword">
                Confirm Password
            </label>
            <input
                className="register__input"
                type="string"
                id="confirmPassword"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password here"
                required
            />
        </div>
    </ModalWithForm>
    )
}

export default RegisterModal;