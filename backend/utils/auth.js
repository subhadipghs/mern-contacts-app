const jwt = require('jsonwebtoken');

async function generateToken(payload, expiresIn = '86400s' /** 24 hours */) {
	return await jwt.sign(payload, process.env.JWT_SECRET, {
		expiresIn: expiresIn
	});
}

module.exports = generateToken;