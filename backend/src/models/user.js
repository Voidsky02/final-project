/* For User creation and Authentication - Defines what my data looks like and how it interacts with the database*/

import mongoose from 'mongoose';

/* Define the Schema */
const userSchema = mongoose.Schema({
    username: { type: String, required: true }, //! In useForm we have 'username'
    avatar: { type: String, default: '' }, //! This is not included in useForm
    email: { type: String, required: true, unique: true }, /*! Needs to be validated */
    password: { type: String, required: true, select: false } /*! Must be hashed ALSO select: false leaves the password behind when retrieving the document (for security) can still be retrieved with .select('+password') when doing something like User.findOne() => User.findOne().select('+password'); */
});

/* Create the Model from the Schema */
const User = mongoose.model('User', userSchema);

/* Export the model for use */
export default User;