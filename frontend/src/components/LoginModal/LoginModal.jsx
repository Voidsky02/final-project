// Modal for user logging in.
import './LoginModal.css';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import useForm from '../../hooks/useForm';

function LoginModal({ isOpen, closeModal, handleOffModalClick }) {
    const { values, handleChange, resetForm } = useForm({ email: "", password: ""  });

    async function handleLogin(e) {
        try {
            //! What else is needed and does this need to be async ?
            e.preventDefault();
            resetForm();
        } catch(error) {
            console.error(error); //! Add more later.
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