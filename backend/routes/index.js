const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.json({ message: 'Welcome to our API 🌍' });
})

router.use('/contacts', require('./api/v1/contact'));


module.exports = router;