import React from 'react'
import './Modal.css'

const ModalContent = ({
	width,
	height,
	children
}) => {
	return (
		<div 
			className="content" 
			style={{ 
				width: `${width}`, 
				height: `${height}` 
			}}
		>
			{children}
		</div>
	)
}

export default ModalContent