// Modal for user logging in.
import './LoginModal.css';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import useForm from '../../hooks/useForm';

function LoginModal({ isOpen, closeModal, handleOffModalClick, login }) {
    const { values, handleChange, resetForm } = useForm({ email: "", password: ""  });

    async function handleLogin(e) {
        try {
            //! Add is loading state ??
            // Prevent refresh on submit.
            e.preventDefault();

            // Call the custom hooks login function (which calls the backend login func as well).
            await login(values); // Since in scope of values have it use it directly, since i ran into an issue of how to pass the form values to the function when using a reusable boilerplate form component.

            // Clear input fields on successfull login.
            resetForm();

            // Close the modal.
            closeModal();

            //! TEMP.
            console.log('Successfully Logged In.')

        } catch(error) {
            console.error(error); //! Add more later.

            //! TEMP
            console.log('Login Failed.')
        }
    }

    return (
        <ModalWithForm
            title={"Login Form"}
            name={"login"}
            buttonText={"Submit"}
            // Below were recieved as props from parent -> <Layout> 
            isOpen={isOpen}
            closeModal={closeModal}
            handleOffModalClick={handleOffModalClick}
            // Below is created inside this component
            handleSubmit={handleLogin}
        >
            {/* Form fields, labels & inputs. */}
            <div className='login__form-field'>
                <label className='login__label' htmlFor="email" >
                    Email
                </label>
                <input
                    className='login__input'
                    type="string"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder='Enter email here.'
                    required
                />
            </div>
            <div className='login__form-field'>
                <label className='login__label' htmlFor="password">
                    Password
                </label>
                <input
                    className='login__input'
                    type="string"
                    id="password"
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