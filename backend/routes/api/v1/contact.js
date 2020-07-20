const router = require('express').Router();
const Contact = require('../../../models/contact');
const validatePhone = require('../../../utils/validator').validatePhone;
const ObjectID = require('mongoose').Types.ObjectId;


/**
 * [ Get all the contacts ]
 * 
 * @method GET 
 * @route /api/v1/contacts
 */

router.get('/', async (req, res, next) => {
	try {
		await Contact.find({}).exec()
					.then((contact) => res.json({success: true, contacts: contact }))
					.catch(err => next(err));
		
	} catch(err) {
		next(err);		
	}
})



/** 
 * [ Get the contacts searched for ] 
 * 
 * @method GET
 * @route /api/v1/contacts/:searched
 */

router.get('/:searched', async (req, res, next) => {
	
	try {
		
		const contacts = await Contact.find({
			'$or': [
				{ 'name': new RegExp(req.params.searched, 'i') },
				{ 'phone': new RegExp(req.params.searched, 'i') }
			]
		}).exec();

		res.json({ 
			success: contacts ? true : false, 
			contact: contacts
		});		

	} catch (error) {
		next(error);
	}

});


/**
 * [ Create a contact ]
 * 
 * @method POST
 * @route /api/v1/contacts
 */

router.post('/', async (req, res, next) => {
	try {
		const { name, phone } = req.body;
		if (!name || !phone || !validatePhone(phone)) {
			throw new Error("Invalid Fields");
		}
		const contact = new Contact({name: name, phone: phone});
		await contact.save()
					.then(() => res.json({ success: true, data: contact}))
					.catch(err => next(err));
	} catch(err) {
		console.error(err);
		next(err);
	}
})


/**
 * [ Delete a contact ]
 * 
 * @method DELETE 
 * @route /api/v1/contacts/:id
 */
router.delete('/:id', async (req, res, next) => {
	
	try {
		
		await Contact.findByIdAndDelete({ _id: req.params.id })
				.then(() => res.json({ success: true, message: 'Phone number deleted'}))
				.catch(err => next(err));
				
				
	} catch(error) {
		next(error);
	}

})

/**
 * [ Update a contact ]
 * 
 * @method PUT
 * @route /api/v1/contacts/
 * 
 */

router.put('/:id', async (req, res, next) => {
	try {
		const { name, phone } = req.body;
		const { ID } = req.params.id;

		await Contact.updateOne({ _id: ID }, { name: name, phone: phone })
				.then(contact => res.json({ success: true, message: 'Contact updated' }))
				.catch(e => next(e));
	} catch(e) {
		next(e);
	}
})


module.exports = router;