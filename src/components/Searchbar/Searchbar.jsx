import React from 'react'
import useForm from '../../hooks/useForm'

const Searchbar = ({
	placeholder
}) => {

	const [search, setSearch] = useForm();

	const searchContacts = (e) => {
		e.preventDefault();
		console.dir(search)
	};

	return (
		<form onSubmit={e => searchContacts(e)}>
			<input 
				className="bg-gray-200 rounded focus:outline-none focus:bg-white px-4 py-3 placeholder-gray-700 focus:shadow-md" 
				style={{
					width: '100%'
				}}
				name="search" 
				value={search.search || ""}
				placeholder={placeholder}
				onChange={setSearch}
			/>
		</form>	
	)
}

export default Searchbar;