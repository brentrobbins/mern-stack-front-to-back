const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
	let errors = {};

	// Checks to see if there is a value and if it's empty it'll convert to a string for validation
	data.text = !isEmpty(data.text) ? data.text : '';

	// Text needs to be between 10 and 30 charecters
	if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
		errors.email = `Text field needs to be between 10 and 30 charecters`;
	}
	// Check to make sure the text isn't empty
	if (Validator.isEmpty(data.text)) {
		errors.email = `Text field is required`;
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};
