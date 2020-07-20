import React from 'react'
import './ActionButton.css'

const ActionButton = ({
	clickHandler, 
	children 
}) => {
	return (
		<React.Fragment>
			<button className="btn" onClick={clickHandler}>
				{children}
			</button>
		</React.Fragment>
	)
}

export default ActionButton