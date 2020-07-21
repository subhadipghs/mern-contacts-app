const Joi = require('@hapi/joi');


module.exports.validateUser = (payload) => {
const userValidationSchema = {
		name: Joi.string()
				.alphanum()
				.min(6)
				.required(),
		email: Joi.string()
				.min(6)
				.required() 
				.email(),
		password: Joi.string()
	 			.min(6)
	 			.required()
	};

	return Joi.validate(data, userValidationSchema);
}