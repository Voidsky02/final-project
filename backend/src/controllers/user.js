/* Define functions that run on data when specific requestes and URL's are called */
import User from '../models/user.js';

async function createUser(req, res, next) {
    try {
        console.log(`This is the req.body: ${JSON.stringify(req.body)}`);
        res.send(req.body);
    } catch (error) {
        console.error(error);
    }
}

export { createUser };