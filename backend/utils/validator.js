/** Validate phone number
 *
 * @return true if number it's number
 */
function validatePhone(phone) {
	return /^\d{10}$/.test(phone);
}



module.exports = {
	validatePhone: validatePhone,
};