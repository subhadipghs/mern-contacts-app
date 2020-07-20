module.exports = (err, req, res, next) => {
	const status = res.statusCode !== 200 ? res.statusCode : 500;
	res.status(status);
	console.error(err);
	res.json({
		success: false,
		message: process.env.NODE_ENV === 'production' ? "🍯" : err.message
	});
}