const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	contacts: [{
			type: mongoose.Schema.Types.ObjectId, 
			ref: 'Contact'
	}]
})

UserSchema.pre('save', async function(next) {

	try {
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(this.password, salt);
		this.password = hashedPassword;

	} catch(err) { next(err); }

})



module.exports = mongoose.model('User', UserSchema);