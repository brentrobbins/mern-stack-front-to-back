const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
	let errors = {};

	// Checks to see if there is a value and if it's empty it'll convert to a string for validation
	data.email = !isEmpty(data.email) ? data.email : '';
	data.password = !isEmpty(data.password) ? data.password : '';

	// Check to make sure the email is valid
	if (!Validator.isEmail(data.email)) {
		errors.email = `Email is invalid`;
	}
	// Check to make sure the email isn't empty
	if (Validator.isEmpty(data.email)) {
		errors.email = `Email field is required`;
	}

	// Check to make sure the name is at least 2 to 30 charecters
	if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
		errors.password = `Password must be between 6 and 30 charecters`;
	}
	// Check to make sure the password isn't empty
	if (Validator.isEmpty(data.password)) {
		errors.password = `Password field is required`;
	}
	return {
		errors,
		isValid: isEmpty(errors)
	};
};
