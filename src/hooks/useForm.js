import { useState } from 'react'


const useForm = () => {
	const [values, setValues] = useState({});
	const changeHandler = (event) => {
		event.persist();
		setValues(values => ({ ...values, [ event.target.name ] : event.target.value }));
	}
	return [values, changeHandler];
}

export default useForm;