/* Joi & Celebrate validation for user password input */

const registerSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).trim().required().messages({
        'any.required': 'Username field cannot be left blank',
        'string.min': 'Username must be longer than 3 characters',
        'string.max': 'Username must be shorter than 30 characters',
        'string.alphanum': 'Username must only include letters and numbers',

    }),
    email: Joi.string().email().trim().required().messages({
        'any.required': 'Email field cannot be left blank',
        'string.email': 'Input must be a valid email'
    }),
    password: Joi.string().min(8).pattern(/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/).required().messages({
        'any.required': 'Password field cannot be left blank',
        'string.pattern.base': 'Password must include at least one uppercase & lowercase letter and at least one number'
    }),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({
        'any.required': 'Confirm password field cannot be left blank',
        'any.only': 'Passwords do not match',
    }),
});