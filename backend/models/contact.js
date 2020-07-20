const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
		unique: true
	}
})


/**
 * Query Helper 
 * 
 * @param {string} param
 */
ContactSchema.query.findBy = function (param, value) {
	return this.where({ param: new RegExp(value, 'i')});
}




module.exports = mongoose.model('Contact', ContactSchema);