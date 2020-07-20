import React from 'react'
import axios from 'axios'
import Table from '../Table/Table'
import Loader from '../Loader/Loader'
import CircleButton from '../CircleButton/CircleButton'
import Modal from '../Modal/Modal'
import './Contact.css'
import Form from '../Form/Form'


const contactReducer = (state, action) => {
	switch(action.type) {
		case 'Loading':
			return {
				...state,
				laoding: true
			};
		case 'Success':
			return {
				...state,
				loading: false,
				data: action.payload,
			};
		case 'Failure':
			return {
				...state,
				error: action.payload,
				loading: false,
			};
		case 'Open Modal': 
			return {
				...state,
				modal: true
			};
		case 'Close Modal':
			return {
				...state,
				modal: false
			};
		default:
			return state;
	}
}

const initialState = {
	loading: true,
	data: [],
	modal: false,
	error: ''
}


const Contact = (props) => {
	const [state, dispatch] = React.useReducer(contactReducer, initialState);
	const { loading, data, modal, error } = state;
	const tableHeaders = ["Name", "Contact", "Actions"];
	
	React.useEffect(() => {
		axios.get('http://localhost:8080/api/v1/contacts')
			.then(res => {
				dispatch({ type: 'Success', payload: res.data.contacts })
			})
			.catch(err => dispatch({ type: 'Failure', payload: err }));
	}, [])


	return ( 
		loading ? (
			<Loader color="#282c34" broad="3" diameter="30"/> 
		)	:	(
			data.length > 0 && ( 
				<React.Fragment>
					<div className="flex">
						<Table headers={tableHeaders} dataset={data}/>
					</div>
					<CircleButton innerText="Add" onClick={() => dispatch({ type: 'Open Modal' })}/>
					<Modal visible={modal} close={() => dispatch({ type: 'Close Modal' })}>
						<Modal.Content width="50vw" height="50vh"> 
							<Form />
						</Modal.Content>
					</Modal>
				</React.Fragment>
			)
		)
	)
}

export default Contact;