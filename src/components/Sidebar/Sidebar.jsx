import React from 'react'


const Sidebar = (props) => {
	return (
		<div className="h-screen w-64 p-5 border-gray-400 shadow-md">
			<ul className="">
				<li><button className="rounded-full bg-blue-700 px-5 py-3 w-full text-md shadow-md text-white hover:bg-blue-800">Create Contact</button></li>
			</ul> 
		</div>
	)
}

export default Sidebar;