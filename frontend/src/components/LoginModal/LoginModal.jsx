// Modal for user logging in.
import './LoginModal.css';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import useForm from '../../hooks/useForm';

function LoginModal({ isOpen, closeModal, handleOffModalClick, login }) {
    const { values, handleChange, resetForm } = useForm({ email: "", password: ""  });

    async function handleLogin(e) {
        try {
            // Prevent refresh on submit.
            e.preventDefault();

            // Call the custom hooks login function (which calls the backend login func as well).
            await login(values); // Since in scope of values have it use it directly, since i ran into an issue of how to pass the form values to the function when using a reusable boilerplate form component.

            // Clear input fields on successful login.
            resetForm();

            // Close the modal.
            closeModal();

        } catch(error) {
            console.error(`This is the login modal: ${error}`); 
            window.alert(`Login failed: ${error}`); 
        }
    }

    return (
        <ModalWithForm
            title={"Login Form"}
            name={"login"}
            buttonText={"Submit"}
            isOpen={isOpen}
            closeModal={closeModal}
            handleOffModalClick={handleOffModalClick}
            // Below is created inside this component
            handleSubmit={handleLogin}
        >
            {/* Form fields, labels & inputs. */}
            <div className='login__form-field'>
                <label className='login__label' htmlFor="login-email" >
                    Email
                </label>
                <input
                    className='login__input'
                    type="email"
                    id="login-email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder='Enter email here.'
                    required
                />
            </div>
            <div className='login__form-field'>
                <label className='login__label' htmlFor="login-password">
                    Password
                </label>
                <input
                    className='login__input'
                    type="password"
                    id="login-password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    placeholder='Enter password here.'
                    required
                />
            </div>
        </ModalWithForm>
    )
}

export default LoginModal;