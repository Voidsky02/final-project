// Modal for updating users profile information (basic).
import './EditProfileModal.css';
import axios from 'axios';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import useForm from '../../hooks/useForm';

function EditProfileModal({ currentUser, updateUser, isOpen, closeModal, handleOffModalClick }) {
    // Boilerplate Form functionality from custom hook.
    const { values, handleChange, resetValues } = useForm({ username: currentUser.username, avatar: currentUser.avatar }); //! These will be prefilled values?? i know the modal spawns with prefilled data, but what do i pass to useForm here??

    async function handleEditSubmit(e) {
        try {
            // prevent page refresh.
            e.preventDefault();
            
            //! DELETE LATER
            console.log('EDIT SUBMIT BUTTON PRESSED');

            // Pull token from local storage and put in variable.
            const token = localStorage.getItem('token');
            

            // Call the updateUser backend controller.
            //! MUST SEND _ID SO IT CAN VERIFY THE USER
            const response = await axios.patch('http://localhost:5000/users/me', { username: values.username, avatar: values.avatar }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const updatedUser = response.data;
            
            // Call the front end useAuth updateUser to update currentUser and refresh token in local storage IF NEEDED
            updateUser(updatedUser);

            //! I don't need to reset form cause the data comes prefilled?
            closeModal();
            console.log(`ENTIRE REQUEST FINISHED`);
        } catch(error) {
            console.error(error);
        }
    }

    return (
        <ModalWithForm
            title={'Edit user profile'}
            name={'edit'}
            buttonText={'Submit'}
            isOpen={isOpen}
            closeModal={closeModal}
            handleOffModalClick={handleOffModalClick}
            handleSubmit={handleEditSubmit}
        >
            <div className='edit__form-field'>
                <label className='edit__label' htmlFor='username'>
                    Username
                </label>
                <input
                    className='edit__input'
                    type='string'
                    id='username'
                    name='username'
                    value={values.username}
                    onChange={handleChange}
                    placeholder='Enter username here.'
                    required
                />
            </div>
            <div className='edit__form-field'>
                <label className='edit__label' htmlFor='avatar'>
                    Avatar
                </label>
                <input
                    className='edit__input'
                    type='url'
                    id='avatar'
                    name='avatar'
                    value={values.avatar}
                    onChange={handleChange}
                    placeholder='Enter avatar url here.'
                    required
                />
            </div>
        </ModalWithForm>
    )
}

export default EditProfileModal;