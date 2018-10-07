const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data) {
	let errors = {};

	// Checks to see if there is a value and if it's empty it'll convert to a string for validation
	data.title = !isEmpty(data.title) ? data.title : '';
	data.company = !isEmpty(data.company) ? data.company : '';
	data.from = !isEmpty(data.from) ? data.from : '';

	// Check to make sure the title isn't empty
	if (Validator.isEmpty(data.title)) {
		errors.title = `Job title field is required`;
	}

	// Check to make sure the title isn't empty
	if (Validator.isEmpty(data.company)) {
		errors.company = `Company field is required`;
	}

	// Check to make sure the title isn't empty
	if (Validator.isEmpty(data.from)) {
		errors.from = `From date field is required`;
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};
