/* Define functions that run on data when specific requestes and URL's are called */
import User from '../models/user.js';
import bcryptjs from 'bcryptjs'; // Hash password for storage.
import { generateAccessToken } from '../utils/tokenServices.js';

//! Need to align the user fields across my files, they are mismatched everywhere, specifically with the avatar field
async function createUser(req, res, next) { //! I think this was just boilerplate code
    try {
        // Extract new user values from the request. //!MUST ADD AVATAR FIELD
        const { username, avatar, email, password } = req.body; //! When do i compare password to confirmPassword? ALSO need avatar field

        // Check to see if user already exists in the database.
        const alreadyExists = await User.findOne({ email: email });
        if (alreadyExists) {
            return res.status(400).send({ message: "User with this email already exists" })
        }

        // Hash the password in prep for database storing.
        const hash = await bcryptjs.hash(password, 10);
        console.log(username, avatar, email, hash);

        // Add the user to the database (mongoose will respond with a generated _id).
        const newUserDocument = await User.create({
            username: username,
            avatar: avatar,
            email: email,
            password: hash,
        });

        // Convert MongoDB response to regular object & delete password field
        const newUserObject = newUserDocument.toJSON();
        delete newUserObject.password;

        console.log(`This is the newUserObject in createUser (should have an _id field for generateAccessToken to use): ${JSON.stringify(newUserObject)}`)
        //! Create json web token
        const accessToken = generateAccessToken(newUserObject); 
        
        // Successful response.
        return res.status(200).json({
            user: newUserObject,
            accessToken: accessToken
        });
    } catch (error) {
        console.error(error);
    }
}

// Update users profile information.
async function updateUser(req, res, next) {
    console.log(`This is the user object in updateUser:${req.user}`);
    try {
        // Extract values - only username and avatar for now
        const { username, avatar } = req.body;

        //! User the users ID to authorize the change, cause other fields might not be in the request (for example if the user wants to change only the avatar then the username field wont exist and therefore cant be used to search for the user in the DB).
        // See if the user exists in the database, and if so, update info.
        const updatedUserDocument = User.findOneAndUpdate({ _id: req.user._id }, { $Set: { username: username, avatar: avatar }}, { returnDocument: 'after' } );

        // Convert document to JSON object and delete password field.
        const updatedUserObject = updatedUserDocument.toJSON();
        delete updatedUserObject.password;

        //! TODO - DELETE LATER
        console.log(updatedUserObject);

        // Successful response.
        return res.status(200).json({
            user: updatedUserObject
        });
        
    } catch(error) {

    }
}

async function backendLogin(req, res, next) {
    try {
        // #1 Verify form input is valid.
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required.' });
        }

        // #2 Find user in the DB. //!THIS IS WHERE THE FRONT END GETS THE USER INFO FROM - NOT FORM !!!!!
        const userDocument = await User.findOne({ email: email }).select('+password');
        if (!userDocument) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }

        // #4 Verify the passwords match (Never unhash then compare, just use bcryptjsjs.compare() ).
        const isMatch = await bcryptjs.compare(password, userDocument.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' })
        }

        // Transform mongo user document to json object & delete password field.
        const user = userDocument.toJSON();
        delete user.password; //! Will this work? Dont want frontend getting the password.

        // #5 Create token with users mongoose id (actually chose to do whole object just without the password ?).
        const accessToken = generateAccessToken(user);

        //! TEMP
        console.log(`Backend successfully logged in`);

        //! #4 SEND TOKEN TO FRONTEND HOOK - JOB IS DONE.
        //! SEND CLEANED UP USER INFO (NO PASSWORD) TO FRONTEND IN ADDITION TO THE TOKEN !!!
        return res.status(200).json({ user: user, token: accessToken });

    } catch(error) {
        console.error(`This is the user controller: ${error}`); //! Basic for now.
    }
}

//! Something to check if a user already exists in DB - will be used in auth.js?

export { createUser, backendLogin, updateUser };