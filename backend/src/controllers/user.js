/* Define functions that run on data when specific requestes and URL's are called */
import User from '../models/user.js';
import bcrypt from 'bcrypt'; // Hash password for storage.
import { generateAccessToken } from '../utils/tokenServices.js';

//! Need to align the user fields across my files, they are mismatched everywhere, specifically with the avatar field
async function createUser(req, res, next) { //! I think this was just boilerplate code
    try {
        // Extract new user values from the request.
        const { username, email, password } = req.body; //! When do i compare password to confirmPassword? ALSO need avatar field

        // Check to see if user already exists in the database.
        const alreadyExists = await User.findOne({ email: email });
        if (alreadyExists) {
            return res.status(400).send({ message: "User with this email already exists" })
        }

        // Hash the password in prep for database storing.
        const hash = await bcrypt.hash(password, 10);
        console.log(username, email, hash);

        // Add the user to the database (mongoose will respond with a generated _id).
        const newUserDocument = await User.create({
            username: username,
            email: email,
            password: hash,
        });

        // Convert MongoDB response to regular object & delete password field
        const newUserObject = newUserDocument.toJSON();
        delete newUserObject.password;

        //! Create json web token
        const accessToken = generateAccessToken(newUserObject._id); 
        
        // Successfull response.
        return res.status(200).json({
            user: newUserObject,
            accessToken: accessToken
        });
    } catch (error) {
        console.error(error);
    }
}

//! I can create functions inside the user schema itself, should i create
//! one for generating tokens? would that be easier?

async function backendLogin(req, res, next) {
    try {
        // #1 Verify form input is valid.
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required.' });
        }

        // #2 Find user in the DB. //!THIS IS WHERE THE FRONT END GETS THE USER INFO FROM - NOT FORM !!!!!
        const user = await User.findOne({ email: email }).select('+password');
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }

        // #4 Verify the passwords match (Never unhash then compare, just use bcrypt.compare() ).
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' })
        }

        // #5 Create token with users mongoose id.
        const accessToken = generateAccessToken(user._id);

        //! #4 SEND TOKEN TO FRONTEND HOOK - JOB IS DONE.
        //! SEND CLEANED UP USER INFO (NO PASSWORD) TO FRONTEND IN ADDITION TO THE TOKEN !!!
        return res.status(200).json({ token: accessToken });

    } catch(error) {
        console.error(error); //! Basic for now.
    }
}

//! Something to check if a user already exists in DB - will be used in auth.js?

export { createUser, backendLogin };