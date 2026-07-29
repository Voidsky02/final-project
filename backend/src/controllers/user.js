/* Define functions that run on data when specific requestes and URL's are called */
import dontenv from 'dotenv';
import User from '../models/user.js';
import bcrypt from 'bcrypt'; // Hash password for storage.
import jwt from 'jsonwebtoken'; // Token creation for logging in.

dontenv.config(); // This allows us to extract values from our .env file ?

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

        // Add the user to the database.
        const newUserDocument = await User.create({
            username: username,
            email: email,
            password: hash,
        });

        // Convert MongoDB response to regular object & delete password field
        const newUserObject = newUserDocument.toJSON();
        delete newUserObject.password;

        //! Create json web token
        const accessToken = jwt.sign(newUserObject, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '7d' }); //! Might need to implement refresh tokens in the future rather than simply hardcoded week long expiration dates.
        
        // Successfull response.
        return res.status(200).json({
            user: newUserObject,
            accessToken: accessToken
        });
    } catch (error) {
        console.error(error);
    }
}

//! Something to check if a user already exists in DB - will be used in auth.js?

export { createUser };