// Helper functions for easy token creation and deconstruction.
import jwt from 'jsonwebtoken'; // Token creation for logging in.

function generateAccessToken(user) {
    // Use users mongoose id and dotenv secret to create authorization token that lasts 7 days.
    const accessToken = jwt.sign({ user: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '7d' });
    return accessToken;
}

export { generateAccessToken };