const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.json({ message: 'Welcome to our API 🌍' });
})

router.use('/contacts', require('./api/v1/contact'));
router.use('/users', require('./api/v1/user'));

module.exports = router;