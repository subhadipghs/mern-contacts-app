const app = require('express').Router();
const User = require('../../../models/user');
const validator = require('../../../utils/validator').validator;
const validateUser = require('../../../utils/userValidator').validateUser;
const generateToken = require('../../../utils/auth');
/**
 * [ GET ALL USERS ] 
 * @method GET
 * @route /api/v1/users/
 */
app.get('/', async (req, res, next) => {
	try {
		const users = await User.find({}).exec();
		res.status(200).json({ 
			success: true, 
			users: users 
		})
	} catch(err) {
		next(err);
	}
})

/**
 * [ REGISTER A USER ]
 * @method POST
 * @route /api/v1/users/register
 */

app.post('/register', async (req, res, next) => {
	try {

		const { name, email, password } = req.body;
		const { error, message } = validateUser(req.body);
		if (error) {
			res.status(400).json({
				success: false,
				message: message
			})
		}

		let user = await User.findOne({email});
		if (user) {
			return res.status(400).json({
				success: false,
				users: users
			});
		}
		user = new User({ name: name, email: email, password: password });	
		await user.save();
		
		return res.status(200).json({
				success: true, 
				message: 'Registration Successful',
				token: generateToken({ user: user.id })
		});	
	
	} catch(err) { next(err); }

})

/** 
 * [ LOGIN THE USER ]
 * @method POST
 * @route /api/v1/users/login
 */

app.post('/login', async (req, res, next) => {

	const { email, password } = req.body;
	const user = await User.findOne({email}).exec();

	if(!user) {
		return res.status(400).json({
			success: false,
			message: "User not found ‼"
		})
	}

	if (!validator.compare(password, user.password)) {
		return res.status(401).json({
			success: false,
			message: 'Invalid password'
		})
	}

	return res.json({
		success: true,
		message: "Login Successful",
		token: generateToken({ user: user._id })
	})

})


module.exports = app;