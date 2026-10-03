/* Front end authentication logic (Will communicate with backend) - Use in <Layout />
For app wide knowledge of if/who is logged in AND =>
For storing and removing user tokens from browsers local storage. */
import { useState } from 'react';
import axios from 'axios';

function useAuth() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState({});

    async function login(loginFormInput) {
        try {
            // Extract email and password from form input data.
            const { email, password } = loginFormInput;

            // Call backend login function and receive token & user data if successful - extract them from response object.
            const response = await axios.post('http://localhost:5000/login', { email: email, password: password });
            const { user, token } = response.data;

            // Store basic user info in browsers local storage.
            localStorage.setItem('user', JSON.stringify(user));

            // Store access token in browsers local storage.
            localStorage.setItem('token', token);

            // Update isLoggedIn and currentUser.
            setIsLoggedIn(true);

            setCurrentUser(user);

        } catch(error) {
            console.error(`This is useAuth: ${error}`);
            window.alert(`Failed to login: ${error}`);
        }
    }

    async function logout() {
        // Clear user and token from local storage.
        localStorage.clear();

        // Clear isLoggedIn.
        setIsLoggedIn(false);

        // Clear currentUser.
        setCurrentUser(null); 
    }

    async function updateUser(newUser) {
        // Update currentUser variable with new info.
        setCurrentUser(newUser);

        // Update the user info in local storage.
        localStorage.setItem('user', JSON.stringify(newUser));

        window.alert('Successfully updated profile.')
    } 

    return {
        login,
        logout,
        isLoggedIn,
        currentUser,
        updateUser
    }; 
}

export default useAuth;