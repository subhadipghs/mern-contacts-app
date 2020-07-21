module.exports = (err, req, res, next) => {
	const status = res.statusCode !== 200 ? res.statusCode : 500;
	console.error(err);
	res.status(status).json({
		success: false,
		message: process.env.NODE_ENV === 'production' ? "🍯" : err.message
	});
}