import React from 'react'

const fetchReducer = (state, action) => {
	switch(action.type) {
		case 'Loading':
			return {
				...state,
				loading
			}
	}
}

const initialState = {
	loading: true,
	response: [],
	error: ''
}


const useFetch = (URI, options) => {
	const [state, dispatch] = React.useReducer(fetchReducer, initialState);
	
}
