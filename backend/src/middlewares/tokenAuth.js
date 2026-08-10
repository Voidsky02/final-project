// For authenticating the token - making sure the token matches the user
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken';

dotenv.config(); // To use .env file variables

function authenticateToken(req, res, next) {
    // Extract token from request header.
    const { authorization } = req.headers;

    //! DELETE LATER
    console.log(`INITIATING AUTHENTICATE TOKEN`);

    // Check to see if token exists & is in proper format.
    if (!authorization || !authorization.startsWith('Bearer ')) {
        return res.status(401).send({ message: "Authorization required."});
    }

    // Extract only the token.
    const token = authorization.replace("Bearer ", "");

    // Verify the token.
    let payload;

    try {
        payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET); // Check to see if the token was signed with the correct secret, if so it returns the decoded payload (which is the new user object in this case).
    } catch(error) {
        return res.status(401).send({ message: 'Authorization required.' }); // Runs if the token was not signed with the correct secret.
    }

    // Make the req.user equal to the tokens payload.
    req.user = payload;

    //! DELETE LATER
    console.log(`TOKEN AUTHENTICATED - MOVING TO NEXT STEP`);

    // Pass the result of this function to the next middleware.
    return next();

}

export default authenticateToken;