// Authentication
const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
// Load User model
const User = require('../../models/Users');

// @route GET api/auth/test
// @desc Test auth route
// @access Public
router.get('/test', (req, res) => res.json({ msg: `Auth Works` }));

// @route   GET api/auth/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {
	User.findOne({ email: req.body.email })
		.then((user) => {
			if (user) {
				return res.status(400).json({ email: 'Email already exists' });
			} else {
				const avatar = gravatar.url(req.body.email, {
					s: '200', // Size
					r: 'pg', // Rating
					d: 'mm' // Default
				});

				const newUser = new User({
					name: req.body.name,
					email: req.body.email,
					avatar,
					password: req.body.password
				});

				bcrypt.genSalt(10, (err, salt) => {
					bcrypt.hash(newUser.password, salt, (err, hash) => {
						if (err) throw err;
						newUser.password = hash;
						newUser.save().then((user) => res.json(user)).catch((err) => console.log(err));
					});
				});
			}
		})
		.catch((res) => console.log(res));
});

module.exports = router;
