import './RegisterModal.css';
import axios from 'axios';
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import useForm from "../../hooks/useForm.js";

// For Profile creation.
function RegisterModal({ isOpen, closeModal, handleOffModalClick, login }) {

    const { values, handleChange, resetForm } = useForm({ username: "", avatar: "", email: "", password: "", confirmPassword: "" }); 

    // handleRegister is the only function created in the custom modal itself
    // because the submit logic is different depending on the modal
    async function handleRegister(event) { 
        try {
            // In previous project i just prevented default behavior,
            // then called a custom onSignUp function in here and thats it.
            event.preventDefault();

            // extract variables from values
            const { username, avatar, email, password, confirmPassword } = values;
            
            // Call createUser through an axios request.
            const response = await axios.post('http://localhost:5000/signup', { username: username, avatar: avatar, email: email, password: password, confirmPassword: confirmPassword });
        
            window.alert(`New User created Successfully! ${response}`);

            // Create object that matches what the login function expects.
            const loginData = { email: email, password: password };

            // Automatically log user in after creation.
            await login(loginData);

            // Clear fields.
            resetForm();

            // Close Modal.
            closeModal();

        } catch (error) {
            console.error(error) 
            window.alert(`Failed to register new user: ${error}`);
        }
    }

    return (
    <ModalWithForm
        title={"Registration Form"}
        name={"register"}
        buttonText={"Submit"}
        isOpen={isOpen}
        closeModal={closeModal}
        handleOffModalClick={handleOffModalClick}
        handleSubmit={handleRegister}
    >

        <div className="register__form-field">
            <label className="register__label" htmlFor="register-username">
                Username
            </label>
            <input
                className="register__input"
                type="text"
                id="register-username"
                name="username"
                value={values.username}
                onChange={handleChange}
                placeholder="Enter username here"
                required
            />
        </div>
        <div className="register__form-field">
            <label className="register__label" htmlFor="register-avatar">
                Avatar
            </label>
            <input
                className="register__input"
                type="url"
                id="register-avatar"
                name="avatar"
                value={values.avatar}
                onChange={handleChange}
                placeholder="Enter image url here"
                required
            />
        </div>
        <div className="register__form-field">
            <label className="register__label" htmlFor="register-email">
                Email
            </label>
            <input
                className="register__input"
                type="email"
                id="register-email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Enter email here"
                required
            />
        </div>
        <div className="register__form-field">
            <label className="register__label" htmlFor="register-password">
                Password
            </label>
            <input
                className="register__input"
                type="password"
                id="register-password"
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Enter password here"
                required
            />
        </div>
        <div className="register__form-field">
            <label className="register__label" htmlFor="register-confirmPassword">
                Confirm Password
            </label>
            <input
                className="register__input"
                type="password"
                id="register-confirmPassword"
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