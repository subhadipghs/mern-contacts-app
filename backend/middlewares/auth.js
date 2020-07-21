const jwt = require('jsonwebtoken');


async function authorize(req, res, next) {
	const token = req.header['X-Auth-Token'];
	if (!token) {
		return res.status(401).json({
			success: false,
			message: "No token found"
		})
	}
	try {
		const decoded = await jwt.verify(token, process.env.JWT_SECRET);
		req.userId = decoded;
		next();
	} catch(err) {
		res.status(400).json({
			success: false,
			message: 'Invalid Token'
		})
	}
}
module.exports.authorize = authorize;

