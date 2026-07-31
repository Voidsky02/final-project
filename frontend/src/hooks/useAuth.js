/* Front end authentication logic (Will communicate with backend) - Use in <Layout /> */
// For app wide knowledge of if/who is logged in AND =>
// For storing and removing user tokens from browsers local storage.
import { useState } from 'react';
import axios from 'axios';

function useAuth() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    async function login(loginFormInput) {
        try {
            // Extract email and password from form input data.
            //! FROM DATA WOULD NOT CONTAIN THE ID FIELD
            const { email, password } = loginFormInput;

            // Call backend login function and receive token & user data if successful - extract them from response object.
            //! AXIOS WRAPS RESPONSE - DATA IS FOUND IN response.data
            const response = await axios.post('http://localhost:5000/login', { email: email, password: password });
            const { user, token } = response.data;

            // Store basic user info in browsers local storage.
            localStorage.setItem('user', JSON.stringify(user)); //! Just the ID ??

            // Store access token in browsers local storage.
            localStorage.setItem('token', token);

            // Update isLoggedIn and currentUser.
            setIsLoggedIn(true);

            setCurrentUser(user); //! Do I want this to be the name or the ID ?

            //! TEMP
            console.log(`Frontend successfully logged in`);

        } catch(error) {
            console.error(`This is useAuth: ${error}`); //! Basic for now.
        }
    }

    async function logout() {
        // Clear user and token from local storage.
        localStorage.clear();

        // Clear isLoggedIn.
        setIsLoggedIn(false);

        // Clear currentUser.
        setCurrentUser(null); //! String or null ?

        //! TEMP
        console.log(`Successfully logged out`);
    }

    async function updateUser(newUser) {
        // Update currentUser variable with new info.
        setCurrentUser(newUser);

        // Update the user info in local storage.
        localStorage.setItem('user', JSON.stringify(newUser));
    } 

    return {
        login,
        logout,
        isLoggedIn,
        currentUser,
        updateUser
    }; //! Do i need more or just expose these two functions ?
}

export default useAuth;