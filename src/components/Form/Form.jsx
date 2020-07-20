import React from 'react'
import useForm from '../../hooks/useForm'
import './Form.css'
import contacts from '../../assets/contacts.svg'

function Form() {

	const [values, setValues] = useForm();

	const submitForm = (event) => {
		event.preventDefault();
		console.log(values);
	}

	return (
		<form className="contact__form" onSubmit={(evt) => submitForm(evt)}>
			<div className="center"><img src={contacts} alt="contacts" style={{ width: '50%', height: '100%', textAlign: 'center' }}/></div>
			<label htmlFor="Name">
				Name
			</label>
			<input 
				className="input__type"
				name="name"
				value={values.name || ""}
				placeholder="Enter Name..."
				onChange={setValues}
			/>
			<label htmlFor="Contact">
				Contact
			</label>
			<input
				className="input__type"
				name="contact"
				placeholder="Enter the contact number..."
				value={values.contact || ""}
				onChange={setValues}
			/>
			<input type="submit" name="submit" value="Submit" />
		</form>
	)
}

export default Form