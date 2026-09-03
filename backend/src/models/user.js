/* For User creation and Authentication - Defines what my data looks like and how it interacts with the database*/

import mongoose from 'mongoose';

/* Define the Schema */
const userSchema = mongoose.Schema({
    username: { type: String, required: true }, 
    avatar: { type: String, default: '' }, 
    email: { type: String, required: true, unique: true }, 
    password: { type: String, required: true, select: false } 
});

/* Create the Model from the Schema */
const User = mongoose.model('User', userSchema);

/* Export the model for use */
export default User;