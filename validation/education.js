const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateEducationInput(data) {
	let errors = {};

	// Checks to see if there is a value and if it's empty it'll convert to a string for validation
	data.school = !isEmpty(data.school) ? data.school : '';
	data.degree = !isEmpty(data.degree) ? data.degree : '';
	data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : '';
	data.from = !isEmpty(data.from) ? data.from : '';

	// Check to make sure the title isn't empty
	if (Validator.isEmpty(data.school)) {
		errors.school = `School field is required`;
	}

	// Check to make sure the title isn't empty
	if (Validator.isEmpty(data.degree)) {
		degree.company = `Degree field is required`;
	}

	// Check to make sure the title isn't empty
	if (Validator.isEmpty(data.fieldofstudy)) {
		errors.fieldofstudy = `Field of study field is required`;
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
