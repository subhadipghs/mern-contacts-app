import React from 'react'
import Searchbar from '../Searchbar/Searchbar'
import logo from '../../logo.svg'
import './Navbar.css'

const Navbar = ({title}) => {
	return (
		<nav className="w-full flex flex-row content-end jusitify-around bg-white-600 border-gray-500 px-4 py-3">
		  <div className="w-1/6 flex items-center content-between">
		    <div className="text-2xl px-4 tracking-tight" style={{fontFamily: "Gilroy", fontWeight: 'bold'}}>{title}</div>
		  </div>
		  <div className="w-1/2 ml-3">
		  	<Searchbar placeholder="Search " />
		  </div>
		</nav>

	)
}

export default Navbar