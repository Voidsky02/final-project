// Helper functions for easy token creation and deconstruction.
import jwt from 'jsonwebtoken'; // Token creation for logging in.

//! Payload must be kept minimal, only use _id from user object
function generateAccessToken(user) {
    // Use users mongoose id and dotenv secret to create authorization token that lasts 7 days.
    const accessToken = jwt.sign({ user: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '7d' }); //! Might need to implement refresh tokens in the future rather than simply hardcoded week long expiration dates.
    return accessToken;
}

//! Verify token function?

export { generateAccessToken };