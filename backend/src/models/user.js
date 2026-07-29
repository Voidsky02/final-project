/* For User creation and Authentication - Defines what my data looks like and how it interacts with the database*/

import mongoose from 'mongoose';

/* Define the Schema */
const userSchema = mongoose.Schema({
    username: { type: String, required: true }, //! In useForm we have 'username'
    avatar: { type: String, default: '' }, //! This is not included in useForm
    email: { type: String, required: true, unique: true }, /*! Needs to be validated */
    password: { type: String, required: true } /*! Must be hashed */
});

/* Create the Model from the Schema */
const User = mongoose.model('User', userSchema);

/* Export the model for use */
export default User;