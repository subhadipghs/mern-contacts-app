import React from 'react'
import './Loader.css'

const Loader = ({
	color, 
	broad,
	diameter
}) => {
	return (
		<div 
			className="loader" 
			style={{
				border: `${broad}px solid #f2f2f2`,
				borderTop: `${broad}px solid ${color}`,
				width: `${diameter}px`,
				height: `${diameter}px`
			}}
		>
		</div>
	)
}

export default Loader