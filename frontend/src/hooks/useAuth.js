/* Front end authentication logic (Will communicate with backend) - Use in <Layout /> */
import { useState } from 'react';

function useAuth() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return { isLoggedIn }; //! Temporarily not much, just so i can have basic boilerplate of it working
}

export default useAuth;