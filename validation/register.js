const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
	let errors = {};

	// Checks to see if there is a value and if it's empty it'll convert to a string for validation
	data.name = !isEmpty(data.name) ? data.name : '';
	data.email = !isEmpty(data.email) ? data.email : '';
	data.password = !isEmpty(data.password) ? data.password : '';
	data.password2 = !isEmpty(data.password2) ? data.password2 : '';

	// Check to make sure the name is at least 2 to 30 charecters
	if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
		errors.name = `Name must be between 2 and 30 charecters`;
	}
	// Check to make sure the name isn't empty
	if (Validator.isEmpty(data.name)) {
		errors.name = `Name field is required`;
	}
	// Check to make sure the email isn't empty
	if (Validator.isEmpty(data.email)) {
		errors.email = `Email field is required`;
	}
	// Check to make sure the email is valid
	if (!Validator.isEmail(data.email)) {
		errors.email = `Email is invalid`;
	}
	// Check to make sure the password isn't empty
	if (Validator.isEmpty(data.password)) {
		errors.password = `Password field is required`;
	}
	// Check to make sure the name is at least 2 to 30 charecters
	if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
		errors.password = `Password must be between 6 and 30 charecters`;
	}
	// Check to make sure the password2 isn't empty
	if (Validator.isEmpty(data.password2)) {
		errors.password2 = `Password confirm field is required`;
	}
	// Check to make sure the password2 matches the main password
	if (!Validator.equals(data.password, data.password2)) {
		errors.password2 = `Passwords must match`;
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};
