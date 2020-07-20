const mongoose = require('mongoose');
require('dotenv').config();


module.exports = async (uri = '') => { 
	try {
		await mongoose.connect(process.env.MONGO_URI || uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
		console.info("MongoDB Connected 🥂")
	} catch(err) {
		console.error(err);
	}
}

