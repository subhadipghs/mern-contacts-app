const bcrypt = require('bcryptjs');

function isEmpty(...rest) {
	return rest.some(e => !e);
}

async function compare(password, hash) {
	return await bcrypt.compare(password, hash);
}


module.exports.validator = {
	isEmpty: isEmpty,
	compare: compare
};