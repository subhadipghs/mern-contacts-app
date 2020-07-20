import React from 'react'
import './CircleButton.css'

const CircleButton = ({
	innerText,
	onClick
}) => {
	return (
		<button className="sticky__button" onClick={onClick} >
			{ innerText }
		</button>
	)
}

export default CircleButton