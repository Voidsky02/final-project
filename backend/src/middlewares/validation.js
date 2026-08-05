/* Joi & Celebrate validation for user password input */
import Joi from 'joi';

/*
Joi = Schema for the data we expect to recieve
Celebrate = Middleware that runs before controller, checks to see if
input matches our Joi schema, if it does it lets it pass to the next step
(the controller), if not it immediatley ends the request with the
appropriate error message
*/

//! Need an avatar field - users model includes it.
const celebrateRegisterSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).trim().required().messages({
        'any.required': 'Username field cannot be left blank',
        'string.min': 'Username must be longer than 3 characters',
        'string.max': 'Username must be shorter than 30 characters',
        'string.alphanum': 'Username must only include letters and numbers',

    }),
    avatar: Joi.string().uri({ scheme: ['http', 'https'] }).trim().allow(null, '').optional(),
    email: Joi.string().email().trim().required().messages({
        'any.required': 'Email field cannot be left blank',
        'string.email': 'Input must be a valid email'
    }),
    password: Joi.string().min(8).pattern(/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/).required().messages({
        'any.required': 'Password field cannot be left blank',
        'string.pattern.base': 'Password must include at least one uppercase & lowercase letter and at least one number',
    }),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({
        'any.required': 'Confirm password field cannot be left blank',
        'any.only': 'Passwords do not match',
    }),
});

export default celebrateRegisterSchema;